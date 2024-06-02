import mongoose, { Schema } from "mongoose";
import  jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt'
const userSchema = new Schema({
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
    }
}, {timestamps: true});

UserSchema.pre("save", async function (next){
    if(!this.isModified('password')) return next();
 
    this.password = bcrypt.hash(this.password, 10)
    next()
 })
 
 UserSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password , this.password)
 }
const User = mongoose.model('User', userSchema);

export default User;