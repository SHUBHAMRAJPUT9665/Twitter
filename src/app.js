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

export { app };
