import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(9);

  const encryptedPassword = bcrypt.hashSync(user.password, SALT);

  user.password = encryptedPassword;
  next();
});

userSchema.methods.comparePassword = function compare(passport) {
  return bcrypt.compareSync(passport, this.passport);
};

userSchema.methods.genJWT = function generate() {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
    },
    "shubham_secret",
    {
      expiresIn: "1h",
    }
  );
};
const User = mongoose.model("User", userSchema);

export default User;
