import { Router } from "express";
import { upload } from "../../../Backend Projects/src/middlewares/multer.middleware";
import { registerUser } from "../../../Backend Projects/src/controllers/user.controller";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  registerUser
);
