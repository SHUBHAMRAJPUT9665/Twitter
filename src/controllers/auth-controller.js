import UserService from "../services/user-service.js";
const userService = new UserService();

import  nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "shubhamrajput9665@gmail.com",
    pass: "vjhb uctw dmih kczy",
  },
});

const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });


    var mailOptions = {
      from: 'youremail@gmail.com',
      to: response.email,
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    console.log(response);

    res.status(201).json({
      success: true,
      message: "Successfully created a user",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error while signup",
      data: {},
      err: error,
    });
  }
};
const login = async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);
    if(!user){
      return res.status(401).json({
        message:"no user found please signup"
      })
    }
    if (!user.comparePassword(req.body.password)) {
      return res.status(401).json({
        message: "incorrect password",
        success: false,
      });
    }
    const token = user.genJWT();

    return res.status(200).json({
      message: "successfully login",
      data: token,
      err: {},
    });
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      message: "something went went wrong while login",
      data: {},
      err: error.message,
    });
  }
};
export { signup, login };
