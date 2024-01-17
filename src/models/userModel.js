import  mongoose, { model }  from "mongoose";
import { type } from "os";

const userSchema= mongoose.Schema({
    username:{
        type: string,
        required: true,
        unique:true

    },
    email:{
        type: string,
        required: true,
        unique:true
    },
    password:{
        type: string,
        required: true,
    },
    isVerified:{
        type: boolean,
        default: false
    },
    isAdmin:{
        type: boolean,
        default: false
    },
    forgotPasswordToken: string,
    forgotPasswordTokenExpiry: string,
    verifyToken: string,
    verifyTokenExpiry: string
})

const User = mongoose.models.users || mongoose.models("users",userSchema);
export default User;