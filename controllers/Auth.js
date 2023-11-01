const User =require("../models/User");
const OTP=require("../models/Otp");
const fast2sms=require('fast-two-sms');
const otpGenretor=require("otp-generator");
const bcrypt=require("bcrypt");
require("dotenv").config();
const jwt =require("jsonwebtoken");
const Profile = require("../models/Profile");
const mailSender = require("../utils/mailsander");
 const otpTemplate =require("../mail/templates/emailVerificationTemplate");
 const {uploadImageToCloudinary}=require("../utils/imageUploader");

//send otp
exports.sendotp=async (req,res)=>{
    try{
        //fetch email from request ki body
    
        const {contactNumber}=req.body;
        //check if user already exist
        const checkUserPresent=await User.findOne({contactNumber});



        //if user present then return res
        if(checkUserPresent){










            return res.status(200).json({
                success:true,
                data:password,
                message:"User already exist",
            })
        }
        //generate otp
        var otp=otpGenretor.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,

        });
        console.log("OTP generated",otp);
         const result=await OTP.findOne({otp:otp});
         while(result){
            otp=otpGenretor(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
         const result=await OTP.findOne({otp:otp});
         }
    
         const otpPayload={contactNumber,otp};
         //create entry in db
         const otpBody=await OTP.create(otpPayload);

             
         console.log(otpBody);

         res.status(200).json({
            success:true,
            message:'OTP Sent Successfully',
            otp,
         })
      
        }
    catch(error){
console.log(error);
return res.status(500).json({
success:false,
message:error.message,
})

}
    
}
exports.sendloginotp=async (req,res)=>{
    try{
        //fetch email from request ki body
        var password="";
        const {contactNumber}=req.body;
        //check if user already exist
        const checkUserPresent=await User.findOne({contactNumber});

   
        if(!checkUserPresent){
            
            return res.status(200).json({
                success:true,
                data:password,
                message:"User not exist",
            })
        }
        if(checkUserPresent){
            password=checkUserPresent.dateOfBirth;
                    }
console.log(checkUserPresent.dateOfBirth);
        console.log(checkUserPresent)
        //if user present then return res
     
        //generate otp
        var otp=otpGenretor.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,

        });
        console.log("OTP generated",otp);
         const result=await OTP.findOne({otp:otp});
         while(result){
            otp=otpGenretor(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
         const result=await OTP.findOne({otp:otp});
         }
    
         const otpPayload={contactNumber,otp};
         //create entry in db
         const otpBody=await OTP.create(otpPayload);

             
         console.log(otpBody);

         res.status(200).json({
            success:true,
            data:password,
            message:'OTP Sent Successfully',
            otp,
         })
      
        }
    catch(error){
console.log(error);
return res.status(500).json({
success:false,
message:error.message,
})

}
    
}
exports.verifyotp=async (req,res)=>{
    try{
        const{contactNumber,
            otp,
        }=req.body;
        //validate krlo
        if(!otp){
            return res.status(403).json({
                success:false,
                message:"All field are required",
            })
        }
        //find most reacent otp
        const recentotp=await OTP.find({contactNumber}).sort({createdAt:-1}).limit(1);
        console.log(recentotp);
        if(recentotp.length==0){
            return res.status(400).json({
                success:false,
                message:'OTP not found',
            })
        }
        else if(otp!==recentotp[0].otp){
            return res.status(400).json({
                success:false,
                message:'Invalid OTP',
            });
        }

        return res.status(200).json({
            success:true,
           
            message:"Otp matched",  
         });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"User cannot be register. please try again",   })
    }
    }
//sign up
exports.signup=async (req,res)=>{
try{
    const{
        fullName,
        dateOfBirth,
        email,
        CAddress,
        PAddress,
        department,
        role,
        dateOfJoining,
        pfno,
        payScale,
        contactNumber,
        currentHouse,
        imageUrl,
        payScaleProofUrl,
        DOJProofUrl,
       category
     
    }=req.body;
    //validate krlo
  
    if(! dateOfBirth
    ||!department||!role||!dateOfJoining||!pfno||!payScale||!category){
        return res.status(403).json({
            success:false,
            message:"All field are required",
        })
    }

    // const exittingUser=await User.findOne({contactNumber});
    // if(exittingUser){
     
    //     return res.status(400).json({
    //         success:false,
    //         message:"User already exist",
    //     });
    
    // }
    //find most reacent otp
    // const recentotp=await OTP.find({email}).sort({createdAt:-1}).limit(1);
    // console.log(recentotp);
    // if(recentotp.length==0){
    //     return res.status(400).json({
    //         success:false,
    //         message:'OTP not found',
    //     })
    // }
    // else if(otp!==recentotp[0].otp){
    //     return res.status(400).json({
    //         success:false,
    //         message:'Invalid OTP',
    //     });
    // }
    // //hash password
    // const hashedpass=await bcrypt.hash(password,10);

    const user=await User.create({
        fullName,
        email,
        dateOfBirth,
        CAddress,
        PAddress,
        department,
        role,
        dateOfJoining,
        pfno,
        payScale,
        currentHouse,
        imageUrl,
        payScaleProofUrl,
        DOJProofUrl,
        contactNumber,
        category
       
    });
    return res.status(200).json({
        success:true,
        user,
        message:"User is registered successfully",  
     });
}
catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"User cannot be registrered. please try again",   })
}
}
//login 
exports.login=async (req,res)=>{
    try{
//get data from req boby
const {contactNumber,password}=req.body;
if(!contactNumber||!password){
    return res.status(403).json({
        success:false,
        message:'All field are required ,please try again',
    });
}

const dateOfBirth=password;
//if user not exist
const user=await User.findOne({contactNumber})
 
if(!user){
    return res.status(401).json({
        success:false,
        message:'User is not registred please signup first',
    });
}
//generate jwt ,after pass match
if(user.dateOfBirth==dateOfBirth){




    const payload={
        mobno:user.contactNumber,
        id:user._id,
        accountType:user.accountType,
    }
    const token =jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:"2h",
    });
    user.token=token;
    
    //create cookie and send response
    const option ={
        expires:new Date(Date.now()+3*24*60*60*1000),
        httpOnly:true,
    }
    res.cookie("token",token,option).status(200).json({
        success:true,
        token,
        user,
        message:'Loggedin successfully',
    })
}
else{
    return res.status(401).json({
        success:false,
        message:'password is incorrect',
    });
}
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login failure. please try again",   })
    }
};
   //changepassword pending
   exports.changePassword = async (req, res) => {
	try {
		// Get user data from req.user
		const userDetails = await User.findById(req.user.id);

		// Get old password, new password, and confirm new password from req.body
		const { oldPassword, newPassword, confirmNewPassword } = req.body;

		// Validate old password
		const isPasswordMatch = await bcrypt.compare(
			oldPassword,
			userDetails.password
		);
		if (!isPasswordMatch) {
			// If old password does not match, return a 401 (Unauthorized) error
			return res
				.status(401)
				.json({ success: false, message: "The password is incorrect" });
		}

		// Match new password and confirm new password
		if (newPassword !== confirmNewPassword) {
			// If new password and confirm new password do not match, return a 400 (Bad Request) error
			return res.status(400).json({
				success: false,
				message: "The password and confirm password does not match",
			});
		}

		// Update password
		const encryptedPassword = await bcrypt.hash(newPassword, 10);
		const updatedUserDetails = await User.findByIdAndUpdate(
			req.user.id,
			{ password: encryptedPassword },
			{ new: true }
		);

		// Send notification email
		try {
			const emailResponse = await mailSender(
				updatedUserDetails.email,
				passwordUpdated(
					updatedUserDetails.email,
					`Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
				)
			);
			console.log("Email sent successfully:", emailResponse.response);
		} catch (error) {
			// If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
			console.error("Error occurred while sending email:", error);
			return res.status(500).json({
				success: false,
				message: "Error occurred while sending email",
				error: error.message,
			});
		}

		// Return success response
		return res
			.status(200)
			.json({ success: true, message: "Password updated successfully" });
	} catch (error) {
		// If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
		console.error("Error occurred while updating password:", error);
		return res.status(500).json({
			success: false,
			message: "Error occurred while updating password",
			error: error.message,
		});
	}
};
exports.uploadDetails= async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image)
    //   const updatedProfile = await User.findByIdAndUpdate(
    //     { _id: userId },
    //     { image: image.secure_url },
    //     { new: true }
    //   ).populate("additionalDetail");
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data:  image.secure_url,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};