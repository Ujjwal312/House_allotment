const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true,
    },

    contactNumber:{
    type:Number,
   
    },
    dateOfBirth:{
        type:String,
        required:true,
    },
    email: {
        type: String,
       
        
    },
    category:[
{
     type:String
},  
    
],
    accountType:{
        type:String,
        enum:["Admin", "Employee"],
       
    },
    CAddress:{
        type:String,
        required:true,
    },
    PAddress:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    dateOfJoining:{
        type:String,
        required:true,
    },
    pfno:{
        type:Number,
        required:true,
    },
    payScale:{
        type:Number,
        required:true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    approved: {
        type: Boolean,
        default: true,
    },
    request: 
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Request",
			},
		
eligibleHouse:[{

 type: mongoose.Schema.Types.ObjectId,
 ref: "House",

},
],
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    
    DOJProofUrl:
   { type: String },
   DOJProofApproved: { type: Boolean },
   
    imageUrl: 
     { type: String },
     imageApproved: { type: Boolean },
      
      payScaleProofUrl:
        { type: String },
        payScaleProofApproved: { type: Boolean },
          
    status: {
    type: String,
    enum: ['Approved', 'Pending', 'Rejected'],
    default: 'Pending'
    },
    
    currentHouse: { 
        type: String,
        default:null,
    },
    allocatedHouse: { 
        type: String,
        default:null,
     },
   

    createdAt: { type: Date, default: Date.now() }
  

});
module.exports=mongoose.model("User",userSchema);