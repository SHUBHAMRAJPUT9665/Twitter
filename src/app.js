const express = require('express')
import cors from 'cors'
import cors from require('cors')
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


  export {app}