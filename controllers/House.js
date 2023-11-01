const House =require("../models/House");
const Choice =require("../models/Choice");
const mongoose = require("mongoose")
exports.addhouse=async (req,res)=>{
try{

const{category,housename}=req.body;//red zone
console.log(category);
console.log(housename);
const house= await House.findOne({category:category,housename:housename})

if(house){
    return res.status(200).json({
            success:true,
            message:"House already exist",
        })
    }
    const housedetail=await House.create({
        
        category:category,
        housename:housename,
       
    });
    
    return res.status(200).json({
        success:true,
        housedetail,
        message:"House Added successfully",  
     });
}

catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:" cannot add house. please try again",   })
}



}
exports.getAllHouse= async (req, res) => {
    try {
     
      const HouseDetails = await House.find({
       
      })
    
      if (!HouseDetails) {
        return res.status(400).json({
          success: false,
          message: "do not find house details"
        })
      }
      return res.status(200).json({
        success: true,
        data: HouseDetails,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};
exports.savechoices= async (req, res) => {
   try {
    const userId = req.user.id
    const choice=req.body
    const uid = new mongoose.Types.ObjectId(userId)
    console.log(uid)
    var choices=[]
    const ifuser= await Choice.findOne({
     userRef:uid
    })
    console.log(ifuser)
    if(ifuser&&!ifuser.locked){
    choices= await Choice.findByIdAndUpdate(
      {
        _id: ifuser._id,
      },
        {
          
            choice:choice,
          
        },
        { new: true }
      )
      console.log(choices)
    }
    else{
    console.log("hiiiiiiiii")
    choices = await Choice.create({
   userRef:userId,
   choice
    })
    // console.log(choices)
  }
    // const HouseDetails = await House.find({
     
    // })
  
    // if (!HouseDetails) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "do not find house details"
    //   })
    // }
console.log("hiiiiiiiiiiiiiiiiiiiiiiiiii")
    return res.status(200).json({
      success: true,
      data: true ,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
};
exports.getsevedhouse= async (req, res) => {
  try {
    const userId = req.user.id
    const uid = new mongoose.Types.ObjectId(userId)
    var data=[];
    const ifuser= await Choice.findOne({
      userRef:uid
     })
console.log("hii beo")
  console.log(ifuser)
    if (ifuser==null) {
      console.log("ye hai null")
      return res.status(200).json({
        success: true,
        message: "do not find house details",
        data:data
      })
    }
    return res.status(200).json({
      success: true,
      data: ifuser,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
};
exports.lockhouses= async (req, res) => {
  try {
    console.log("yes")

    const userId = req.user.id
    console.log("yes")
    const uid = new mongoose.Types.ObjectId(userId)
    console.log("yes")
   
    const ifuser= await Choice.findOne({
      userRef:uid
     })

    const result= await Choice.findByIdAndUpdate(
      {
        _id: ifuser._id,
      },
        {
          
          locked:true
          
        },
        { new: true }
      )
    if (!ifuser) {
      return res.status(400).json({
        success: true,
        message: "do not find house details",
        data:result.locked
      })
    }
    return res.status(200).json({
      success: true,
      data: ifuser,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
};
