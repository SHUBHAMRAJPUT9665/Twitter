import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { registerUser } from '../controllers/user.controller.js';

const router = Router();
router.route("/register").get(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    }
  ]),
  registerUser
);

export default router