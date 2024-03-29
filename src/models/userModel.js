import  mongoose, { model }  from "mongoose";
import { type } from "os";

const userSchema= mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true

    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken: string,
    forgotPasswordTokenExpiry: string,
    verifyToken: string,
    verifyTokenExpiry: string
})

const User = mongoose.models.users || mongoose.models("users",userSchema);
export default User;