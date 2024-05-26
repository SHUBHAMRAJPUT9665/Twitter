import express from 'express'
import cors from  'cors'
import cookieParser from 'cookie-parser'


const app = express();

app.use(
    cors({
      origin: process.env.CORS_ORIGN,
      credentials: true,
    })
  );
  app.use(express.urlencoded({ extended: true, limit: "20kb" }));
  app.use(express.static("public"));
  app.use(cookieParser())

  // user route
  import userRouter from './routes/user.route.js'
  app.use('/user',userRouter)


  export {app}