const jwt =require("jsonwebtoken");
require("dotenv").config();
const User= require("../models/User");
//auth
exports.auth=async(req,res,next)=>{
    try{
        //extract token
        console.log("yes",req.header("Authorization").replace("Bearer ",""))
        const token =req.cookies.token||req.body.token||req.header("Authorization").replace("Bearer ","");
        console.log("yes")

        //if token missing 
        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token is missing',
            });
        }
        //verify the token
        try{
            const decode =await jwt.verify(token,process.env.JWT_SECRET);
            console.log("hiii",decode);
            
            req.user=decode;

        }
        catch(err){
            return res.status(401).json({
                success:false,
                message:'Token is invalid',
            });
        }
        next();

    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'something went wrong while validating the token ',
        });
    }
}
//isstudent
exports.isEmployee=async(req,res,next)=>{
    try{
if(!req.user.mobno){
    return res.status(401).json({
        success:false,
        message:'This is a protected route for student only',
    });
}
next();
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login failure. please try again",   })
    
    }
}

// //isAdmin
// exports.isAdmin=async(req,res,next)=>{
//     try{
// if(req.user.accounttype!=="Admin"){
//     return res.status(401).json({
//         success:false,
//         message:'This is a protected route for Admin only',
//     });
// }
// next();
//     }
//     catch(error){
//         console.log(error);
//         return res.status(500).json({
//             success:false,
//             message:"Login failure. please try again",  
//          })
    
//     }
// }