import React, { useEffect } from "react";
import { getsevedhouse } from "../../../services/operations/houseApi";
import {lockchoice} from "../../../services/operations/houseApi"
import { useSelector } from "react-redux";
import { useState } from "react";
import {ImDownload3} from"react-icons/im"
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
export default function Choicelocking(){
  const conponentPDF= useRef();
    const { token } = useSelector((state) => state.auth);
    console.log(token)
    const [selecthouse,setselecthouse]=useState([]);
    const[result,setresult]=useState([]);
const [status,setstatus]=useState(false);


 const getSevedHouse = async()=>{

const res= await getsevedhouse(token);
console.log(res)
setselecthouse(res.choice);
setresult(res);
 }
 const LockChoices = async()=>{
try{
    const result= await lockchoice(token);
    console.log(result)
    setstatus(result);

}
catch(error){
    console.log(error)

}
  
     }
useEffect(()=>{
getSevedHouse();
},[])

const generatePDF= useReactToPrint({
  content: ()=>conponentPDF.current,
  documentTitle:"Userdata",
  
});

    return(
   <>
     
        {status?
             (
            // <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
            //   <div className="text-richblack-800">YOU WON</div>
            // </div>
            <React.Fragment>
            <div className="container  bg-white w-full">
                <div className="">
                    <div className=" relative ">
              <div className=" mt-10 font-semibold absolute z-50  flex-col w-full mx-auto  justify-center items-center  text-blue-500">
                <div className="w-full flex justify-center">Your Choices is Locked 

                </div>
                <div >
                <button className="btn  mx-auto w-full btn-success" onClick={ generatePDF}>
                 
                 <div className=" p-1 rounded-sm  text-blue-5 flex justify-center   mx-auto">Download Final List
                 <div className="ml-1 mt-[3px] ">

<ImDownload3/>
</div>
                 </div> 

                  </button>  
                  </div> 
              </div>
          
                   <div ref={conponentPDF} className="mx-auto h-full  absolute z--1  w-full" >
                   <div className=" mt-4 text-center">
                    <div className="font-bold">PU-Awas</div>
                    <div className="font-bold">PANJAB UNIVERSITY, CHANDIGARH</div>
                    <div className="font-extralight">Final Choices List</div>
                   </div>
                   <div className="my-1  ml-3 mr-3  h-full  text-richblack-5">
          {/* Headings */}
          <div className="flex rounded-t-lg mt-5  w-full  h-[13] p-2 bg-richblack-500 ">
 
            <div className=" w-[20%] m-auto h-[13] ">Choice No.</div>
            <div className="w-[25%]  h-[13] m-auto ">House Category</div>
            <div className="w-[20%]  m-auto h-[13] ">House No.</div>
  


          </div>
          {/* Course Names */}
          {selecthouse?.map((category, i, arr) => (
                  category?.housename?.map((houses, j, arr) => (
            <div
              className={`flex w-full  items-center border-[1px] p-2 border-collapse border-richblack-700 ${
                i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
              }`}
              key={i}
            >
         <div className="w-[20%] m-auto px-5 items-center   text-richblack-700">{j+1}</div>
         <div className="w-[25%] m-auto  text-richblack-700">{category?.category}</div>
         <div className="w-[20%] m-auto   text-richblack-700">{ houses?.hno }</div>


         
          
            </div>
          ))))}

        </div>
                
                  
      
                 
                   
                    </div>
                    <div className="  w-full h-screen absolute bg-white  mx-auto  z-10 item-center mt- justify-center  mb-auto">
                    <button className="btn  mx-auto w-full mt-5   btn-success" onClick={ generatePDF}>
                 
                     <div className=" p-1 rounded-sm  text-blue-5 flex justify-center   mx-auto">
                     <div className="ml-1 mt-[3px] ">

  </div>
                     </div> 

                      </button>                       
                    </div> 
                </div>
            </div> 
            </div>          
        </React.Fragment>
     
             ) :(
<div>
    
<div className="my-1   h-[350px] overflow-y-scroll text-richblack-5">
          {/* Headings */}
          <div className="flex rounded-t-lg  w-full h-[13] p-2 bg-richblack-500 ">
 
            <div className=" w-[20%] m-auto h-[13] ">Choice No.</div>
            <div className="w-[25%]  h-[13] m-auto ">House Category</div>
            <div className="w-[20%]  m-auto h-[13] ">House No.</div>
  


          </div>
          {/* Course Names */}
          {selecthouse?.map((category, i, arr) => (
                  category?.housename?.map((houses, j, arr) => (
            <div
              className={`flex w-full items-center border-[1px] p-2 border-collapse border-richblack-700 ${
                i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
              }`}
              key={i}
            >
         <div className="w-[20%] m-auto px-5 items-center   text-richblack-700">{j+1}</div>
         <div className="w-[25%] m-auto  text-richblack-700">{category?.category}</div>
         <div className="w-[20%] m-auto   text-richblack-700">{ houses?.hno }</div>


         
          
            </div>
          ))))}

        </div>
        {!result?.locked&&
        <div className=" flex justify-center w-full mt-5  mx-auto "><button onClick={()=>LockChoices()} className="w-[120px]  text-white  rounded-sm text-[15px] bg-red-900">Lock Choices</button></div>
        }
        {result?.locked&&
        <div className=" flex justify-center w-full mt-5 text-red-900 mx-auto ">Choices Locked</div>

        }
</div>
          ) }
          </>
    );
}