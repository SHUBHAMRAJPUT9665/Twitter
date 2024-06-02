import { Router } from "express";
import { createTweet, getTweet } from "../controllers/tweet.controller.js";
import { toggleLike } from "../controllers/like.controller.js";

import { createComment } from "../controllers/comment-controller.js";
import { login, signup } from "../controllers/auth-controller.js";
const router = Router();

// route for creating tweet
router.route("/create-tweet").post(createTweet);

// like toggle
router.post("/likes/toggle", toggleLike);

// comments route
router.route("/comments").post(createComment);

// get tweet with comments
router.route("/tweets/:id").get(getTweet);

// user signup
router.route("/signup").post(signup);

// login route 


router.route('/login').post(login)
export default router;
