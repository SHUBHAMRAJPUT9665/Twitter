import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, async () => {
      console.log(`Server is running at port: ${process.env.PORT || 5000}`);
    });
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGODB db connection failed!!", err);
  });
