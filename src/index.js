import connectDB from '../../Backend Projects/src/db/index.js';
import dotenv from 'dotenv'
import { app } from '../../Backend Projects/src/app.js';

dotenv.config({
    path: "./.env",
  });
  
  connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGODB db connection failed!!", err);
  });