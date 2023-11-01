import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formattedDate } from "../../../utils/dateFormatter";
import IconBtn from "../../common/IconBtn";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
    
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
              <span className="text-center">511</span>
            </div>
          </div>
          <div className=" flex w-[24%] h-[130px] bg-blue-200  shadow-blue-200 shadow-lg rounded-lg">
            <div className="   text-richblack-50 items-center mx-auto  justify-center  rounded-lg flex flex-col">
              <span>Filled Choices</span>
              <span className="text-center">0</span>
            </div>
          </div>
          <div className="flex w-[24%] h-[130px] bg-pink-400  shadow-pink-400 shadow-lg rounded-lg">
            <div className="  text-richblack-50 items-center text-center m-auto  justify-center  rounded-lg  flex flex-col">
         <div>
              <div className="text-center">Unfilled Choices</div>
              <div className="text-center">511</div>
              </div>
            </div>
          </div>
          <div className=" flex w-[24%] h-[130px] shadow-blue-25 shadow-lg bg-blue-25 rounded-lg">
            <div className=" text-richblack-50 mx-auto  justify-center  rounded-lg  flex flex-col">
              
              <span >Choice Locking Status</span>
              <span className="text-center">Unlocked</span>
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
