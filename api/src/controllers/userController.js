import { Webhook } from "svix";
import userModel from "../models/userModel.js";

// Webhook handler
const clerkWebhooks = async (req, res) => {
  try {
    // Verify webhook
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"]
    });

    const { data, type } = req.body;
    const userData = {
      clerkId: data.id,
      email: data.email_addresses[0].email_address,
      photo: data.image_url,
      firstName: data.first_name,
      lastName: data.last_name
    };


console.log(req.body , 'sdsds');


    // Handle events based on type
    switch (type) {
      case "user.created":
        await userModel.create(userData);
        return res.json({ success: true });

      case "user.deleted":
        await userModel.findOneAndDelete({ clerkId: data.id });
        return res.json({ success: true });

      case "user.updated":
        await userModel.findOneAndUpdate({ clerkId: data.id }, userData, { new: true });
        return res.json({ success: true });

      default:
        return res.status(400).json({ success: false, message: "Invalid event type" });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const userCredits = async (req, res) => {
  try {
    const { clerkId } = req.body;
    const userData = await userModel.findOne({ clerkId  });
    return res.json({ success: true, credits: userData.creditBalance });

  } 
  catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};




export { clerkWebhooks , userCredits};
