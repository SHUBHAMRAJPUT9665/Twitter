import { Router } from "express";
import { createTweet, getTweet,allTweet } from "../controllers/tweet.controller.js";
import { toggleLike } from "../controllers/like.controller.js";
import { createComment } from "../controllers/comment-controller.js";
import { login, signup } from "../controllers/auth-controller.js";

// middleaware
import { authenticate } from "../middleware/authentication.js";
import { upload } from "../middleware/multer.middleware.js.js";

const router = Router();

// route for creating tweet
router.route("/create-tweet").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    }
  ]),
  createTweet
);

// like toggle
router.route("/likes/toggle").post(authenticate, toggleLike);

// comments route
router.route("/comments").post(createComment);

// get tweet with comments
router.route("/tweets/:id").get(getTweet);
router.route('/all/tweet').get(allTweet);

// user signup
router.route("/signup").post(signup);

// login route

router.route("/login").post(login);
export default router;
