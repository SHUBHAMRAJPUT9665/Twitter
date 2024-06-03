import { Router } from "express";
import { createTweet, getTweet } from "../controllers/tweet.controller.js";
import { toggleLike } from "../controllers/like.controller.js";
import { createComment } from "../controllers/comment-controller.js";
import { login, signup } from "../controllers/auth-controller.js";

// middleaware 
import { authenticate } from "../middleware/authentication.js";


const router = Router();

// route for creating tweet
router.route("/create-tweet").post(authent,createTweet);

// like toggle
router.route('/likes/toggle').post(authenticate,toggleLike)

// comments route
router.route("/comments").post(createComment);

// get tweet with comments
router.route("/tweets/:id").get(getTweet);

// user signup
router.route("/signup").post(signup);

// login route 


router.route('/login').post(login)
export default router;
