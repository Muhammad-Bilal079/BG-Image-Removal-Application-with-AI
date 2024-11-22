import { json } from "express";
import { Webhook } from "svix"
import userModel from "../models/userModel.js";

// Api controller function to manage clerk user with database
//http://localhost:4000/api/user/webhook

const clerkWebhook = async (req, res) =>{
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        await whook.verify(json.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });
        const {data ,type} = req.body;

        switch (type) {
            case "user.created":{

                const userData = {
                    clerkId : data.id,
                    email : data.email_addresses[0].email_address,
                    photo : data.image_url,
                    firstName : data.first_name,
                    lastName : data.last_name
                }
                await userModel.create(userData);
                res.json({sucess:true})

                break;
            }
            case "user.deleted":{
                await userModel.findOneAndDelete({clerkId : data.id});
                res.json({sucess:true})

                break;
            }
            case "user.updated":{
                const userData = {
                    email : data.email_addresses[0].email_address,
                    photo : data.image_url,
                    firstName : data.first_name,
                    lastName : data.last_name
                }

                await userModel.findOneAndUpdate({clerkId : data.id},userData);
                res.json({sucess:true})

                break;
            }   
            default:
                break;
        }

    } catch (error) {
        console.log(error.message);
        res.json({sucess:false,message: error.message})
        
        
    }
    
}


export {clerkWebhook}