import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import tweetRouter from "./routes/tweet.route.js";
import passport from "passport";
import { passportAuth } from "./config/jwt-middleware.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGN,
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.json());

app.use(express.static("public"));
app.use(cookieParser());
app.use(passport.initialize());
passportAuth(passport);

app.use("/api/v1", tweetRouter);
app.get('/',(req,res) =>{
  res.status(200).json({
    "message": "Welcome! Here are the available routes:",
    "routes": {
      "Create Tweet": "https://twitter-mge0.onrender.com/api/v1/create-tweet",
      "Toggle Like": "https://twitter-mge0.onrender.com/api/v1/likes/toggle",
      "Create Comment": "https://twitter-mge0.onrender.com/api/v1/comments",
      "Get Tweet with Comments": "https://twitter-mge0.onrender.com/api/v1/tweets/:id",
      "Get All Tweets": "https://twitter-mge0.onrender.com/api/v1/all/tweet",
      "Sign up": "https://twitter-mge0.onrender.com/api/v1/signup",
      "Login": "https://twitter-mge0.onrender.com/api/v1/login"
    }
  });
})

export { app };
