import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

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

// tweet route
import tweetRouter from "./routes/tweet.route.js";
app.use("/api/v1/tweet", tweetRouter);

export { app };
