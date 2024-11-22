import express from "express";
import { clerkWebhook } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/webhook", clerkWebhook);

export default userRoute;