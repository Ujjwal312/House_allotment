import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getsevedhouse} from "../../../services/operations/houseApi"
import { getAllHouse} from "../../../services/operations/houseApi"
import { formattedDate } from "../../../utils/dateFormatter";
import IconBtn from "../../common/IconBtn";
import { useEffect, useState } from "react";

export default function MyProfile() {
  const { token} = useSelector((state) => state.auth);
const [all,setall]=useState([])
const [save,setasave]=useState([])
const[sevedhousecount,setsevedhousecount]=useState(0);

  const navigate = useNavigate();
  const Getallhouse=async()=>{
  try {
   const response = await getAllHouse(null);
console.log(response)
   setall(response);
  
 } catch (error) { 
   console.log("Could not fetch enrolled courses.")
 }
}
const Savehouse=async()=>{
    try {
  console.log("yes ji")

     const response = await getsevedhouse(token);
  // console.log("response hai",response.length)
  console.log("yes",save)
     setasave(response);
  console.log("yes")

     let c=0;
   
     for(let i=0;i<response.choice.length;i++){
        c+=response.choice[i].housename.length;
 
     }
  console.log("yes")

     console.log("it is c",c);

     setsevedhousecount(c);
    
   } catch (error) { 
     console.log("Could not fetch enrolled courses.")
   }
  }
  useEffect(()=>{
    Getallhouse();
    Savehouse();
  },[])
  return (
    <div className=" sppiner  flex flex-col gap-5">
    
      <div className="flex justify-between">
        <h1 className="text-[17px] font-bold text-richblack-900">
          Employee Name : Ujjwal Kumar Thakur
        </h1>
        <h1 className="text-[17px] font-bold text-richblack-900">
          Application Number : 2133445656
        </h1>
        </div>
        <div className="flex flex-col gap-3 bg-richblack-5 p-3  shadow-black shadow-md">
        <div className=" border-b-[1px] ">
          <span className="text-blue-900 font-bold">Current Choice Filling & Locking Status</span>
        </div>
        <div className=" w-[100%] flex justify-between">
       
          <div className="flex w-[24%]  h-[130px] bg-caribbeangreen-100  shadow-caribbeangreen-100 shadow-lg rounded-lg ">
            <div className="  text-richblack-50 mx-auto  items-center  justify-center  rounded-lg flex flex-col">
              <span  > Total Available Choices</span>
              <span className="text-center">{all?.length}</span>
            </div>
          </div>
          <div className=" flex w-[24%] h-[130px] bg-blue-200  shadow-blue-200 shadow-lg rounded-lg">
            <div className="   text-richblack-50 items-center mx-auto  justify-center  rounded-lg flex flex-col">
              <span>Saved Choices</span>
              {(save.length==0)&&
              <span className="text-center">{save?.length}</span>
}
{(save.length!=0)&&
              <span className="text-center">{sevedhousecount}</span>
}
            </div>
          </div>
          <div className="flex w-[24%] h-[130px] bg-pink-400  shadow-pink-400 shadow-lg rounded-lg">
            <div className="  text-richblack-50 items-center text-center m-auto  justify-center  rounded-lg  flex flex-col">
         <div>
              <div className="text-center">Unsaved Choices</div>
              {(save.length!=0)&&
              <div className="text-center">{all?.length-(sevedhousecount)}</div>
              }
                  {(save.length==0)&&
              <div className="text-center">{all?.length}</div>
              }
              </div>
            </div>
          </div>
          <div className=" flex w-[24%] h-[130px] shadow-blue-25 shadow-lg bg-blue-25 rounded-lg">
            <div className=" text-richblack-50 mx-auto  justify-center  rounded-lg  flex flex-col">
              
              <span >Choice Locking Status</span>
              {!save.locked&&
              <span className="text-center">Unlocked</span>

              }
                 {save.locked&&
              <span className="text-center">locked</span>

              }
              
            </div>
            </div>
          </div>
        </div>
        <div className=" bg-richblack-5 p-4  shadow-black shadow-sm">
        <div className="text-richblack-600"><span className="text-blue-900 font-bold">Important Advice : </span>you are advised to fill up only those choices which you would indeed like to 
        accept and join if offered mindful choice filling will help you to avoid any unnecessary hassle of 
        withdrawing from counselling this will also help the system to reduce seat vacencies</div>


        </div>
      
    </div>
  );
}