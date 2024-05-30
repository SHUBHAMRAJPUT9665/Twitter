import dotenv from "dotenv";
import connectDB from "./db/index.js";
import LikeService from "./services/like-service.js";
import TweetRespository from "./repository/tweet-repository.js";
import UserRespository from "./repository/user-repository.js";
import { app } from "./app.js";
dotenv.config({ path: "./.env" });

connectDB()
  .then(async () => {
    app.listen(process.env.PORT || 5000, async () => {
      console.log(`Server is running at port: ${process.env.PORT || 5000}`);
    });

    // user repo

const userRepo = new UserRespository()
const tweetRepo = new TweetRespository();

const tweets =  await  tweetRepo.getAll(0,10);


const user = await userRepo.create({
  name:"Shubham123456911",
  email:"sshusham10a2e02e33d453e6es11901@gmail.com",
  password:"shubham"
})


const likeService = new LikeService();

await likeService.toggleLike(tweets[0].id , 'Tweet' , user.id)

    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGODB db connection failed!!", err);
  });
