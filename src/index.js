import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import { TweetService } from "./services/tweet-service.js";
dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, async () => {
      console.log(`Server is running at port: ${process.env.PORT || 5000}`);

      const service = new TweetService()
      const tweet = await service.create({content:   "kaise #first #tweet #backendDevelopement"})
    });
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGODB db connection failed!!", err);
  });
