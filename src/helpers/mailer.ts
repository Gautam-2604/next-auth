import nodemailer from 'nodemailer'
import User from '@/models/userModel'
import bcryptjs from 'bcryptjs'

export const sendEmail = async({email, emailType, userId}:any)=>{
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(),10)
        if(emailType==="VERIFY"){
            await User.findByIdAndUpdate(userId,{
                verifyToken:hashedToken, verifyTokenExpiry:Date.now()+360000}
            )
        }else if(emailType==="RESET"){
            await User.findByIdAndUpdate(userId,{
                forgotPasswordToken:hashedToken, forgotPasswordTokenExpiry:Date.now()+360000}
            )
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "2959c4af2dc43c",
              pass: "94314f7871577a"
            }
          });

          const mailOptions = {
            from:'gaurisariaa@gmail.com',
            to:email,
            subject: emailType==="VERIFY"?"Verify Your Email":"Reset your password"
          }

          const mailResponse = await transport.sendEmail(mailOptions)
          return mailResponse
    
 } catch (error:any) {
        throw new Error(error.message)
    }
}