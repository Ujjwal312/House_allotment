const mongoose=require("mongoose");
const fast2sms=require('fast-two-sms');
const mailSender = require("../utils/mailsander");
var nodemailer = require('nodemailer');
const otpTemplate = require("../mail/templates/emailVerificationTemplate");
const OtpSchema=new mongoose.Schema({

    contactNumber:{
        type:Number,
        required:true,
    },
    otp:{
        type:String,
        required:true,
   
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:1000,
    
    },

})

// async function sendVerificationEmail(email,otp){
//     try{
// const mailResponse=await mailSender(email,"Verification Email from StudyNotion",otp);
// console.log("Email send Successfully",mailResponse);
//     }
//     catch(error){
//         console.log("error occured while sending mails:",error);
// throw error;
//     }
// }
// OtpSchema.pre("save",async function(next){
//     await sendVerificationEmail(this.email,this.otp);
//     next();
// });

//Define a function to send emails
// async function sendVerificationEmail(email, otp) {
// 	// Create a transporter to send emails

// 	// Define the email options

// 	// Send the email
// 	try {
// 		const mailResponse = await mailSender({
//             from:"code-help",
// 			to:email,
// 			subject:"Verification Email",
// 			html:otpTemplate(otp),
//         }
// 		);
// 		console.log("Email sent successfully: ", mailResponse.response);
// 	} catch (error) {
// 		console.log("Error occurred while sending email: ", error);
// 		throw error;
// 	}
// }

// // Define a post-save hook to send email after the document has been saved
// OtpSchema.pre("save", async function (next) {
// 	console.log("New document saved to database");

// 	// Only send an email when a new document is created
// 	if (this.isNew) {
// 		await sendVerificationEmail(this.email, this.otp);
// 	}
// 	next();
// });
OtpSchema.post("save",async function(doc){
    try{
        // let transporter=nodemailer.createTransport({
        //     host:process.env.MAIL_HOST,
        //     auth:{
        //         user:process.env.MAIL_USER,
        //         pass:process.env.MAIL_PASS,
        //     },
    
        // });
        // let info=await transporter.sendMail({
        //  from:`codehelp--by babbar`,
        //  to:doc.email,
        //  subject:"Verification Email",
        //  html:otpTemplate(doc.otp),
    
        // })
        var sid = "ACaf6df28dee9dbb8516e57327f7ab8922";
var auth_token = "cf07ec3389bc34206147dd1d06fc06f7"

var twilio = require("twilio")(sid, auth_token);

twilio.messages
  .create({
    from: "+14705706116",
    to: "+918092202602",
    body: `hello this is your otp ${doc.otp}`,
  })
  .then(function(res) {console.log("message has sent!")})
  .catch(function(err)  {
    console.log(err);
  });

  

}
    catch(error){
    console.error(error);
    }
    })


const OTP=mongoose.model("OTP",OtpSchema);

module.exports=OTP;