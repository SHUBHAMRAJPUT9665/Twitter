import { Router } from "express";
import { createTweet } from "../controllers/tweet.controller.js";

const router = Router();

// route for creating tweet
router.route("/create-tweet").post(createTweet);

export default router;
