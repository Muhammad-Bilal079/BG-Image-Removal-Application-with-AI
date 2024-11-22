import express from "express";
import { clerkWebhooks } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/webhooks", clerkWebhooks);

export default userRoute;