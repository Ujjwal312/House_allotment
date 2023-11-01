
// import {useState} from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// function Pdf() {

//   const [loader, setLoader] = useState(false);

//   const downloadPDF = () =>{
//     const capture = document.querySelector('.actual-receipt');
//     setLoader(true);
//     html2canvas(capture).then((canvas)=>{
//       const imgData = canvas.toDataURL('img/jpg');
//       const doc = new jsPDF('p', 'mm', 'a4');

//       const componentWidth = doc.internal.pageSize.getWidth();
//       const componentHeight = doc.internal.pageSize.getHeight();
//       doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
//       setLoader(false);
//       doc.save('receipt.pdf');
//     })
//   }

//   return (
//     <div className="wrapper">

//       <div className="receipt-box">

//           {/* actual receipt */}
//           <div className="actual-receipt">

//             {/* organization logo */}
//             <div className="receipt-organization-logo">
//               <img alt="logo" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
//             </div>

//             {/* organization name */}
//             <h5>JS SOLUTIONS</h5>

//             {/* street address and unit number */}
//             <h6>
//               ABC Street
//               {' '}
//               123
//             </h6>

//             {/* city province postal code */}
//             <h6>
//               Karachi
//               {' '}
//               Sindh
//               {' '}
//               75050
//             </h6>

//             {/* email-phone-and-website */}
//             <div className="phone-and-website">
//               <p>
//                 <a href={`mailto:anwarhamza919@gmail.com`}>
//                   anwarhamza919@gmail.com
//                 </a>
//               </p>
//               <p>01234567890</p>
                  
//               <p>
//                 <a
//                   href="https://www.youtube.com/@jsSolutions"
//                   target="blank"
//                 >
//                   https://www.youtube.com/@jsSolutions
//                 </a>
//               </p>
                  
//             </div>

//             <div className="colored-row first">
//               <span>Payment Method</span>
//               <span>Card Number</span>
//             </div>

//             <div className="data-row">
//               <span className="font-weight">CREDIT</span>
//               <span>************4444</span>
//             </div>

//             <div className="colored-row">
//               <span>Campaign</span>
//               <span>Amount</span>
//             </div>

//             <div className="data-row">
//               <span className="font-weight">Dollar a Day for Sadaqa</span>
//               <span>
//                 $
//                 {' '}
//                 50
//               </span>
//             </div>

//             <div className="colored-row">
//               <span>Transaction Details - Donations</span>
//               <span />
//             </div>

//             <div className="data-row border-bottom">
//               <span>
//                 <span className="font-weight">
//                   MID
//                   :
//                 </span>
//                 {' '}
//                 1234567
//               </span>
//               <span>
//                 <span className="font-weight">
//                   Sequence
//                   {' '}
//                   #:
//                 </span>
//                 {' '}
//                 SSSSSSSS
//               </span>
//             </div>

//             <div className="data-row border-bottom">
//               <span>
//                 <span className="font-weight">
//                   Invoice
//                   {' '}
//                   #:
//                 </span>
//                 {' '}
//                 AX1234ZVB5671234
//               </span>
//               <span>
//                 <span className="font-weight">
//                   Created
//                   :
//                 </span>
//                 {' '}
//                 2023-02-14 02:21:37
//               </span>
//             </div>
//             <div className="data-row border-bottom">
//               <span>
//                 <span className="font-weight">
//                   Authentication
//                   {' '}
//                   #:
//                 </span>
//                 {' '}
//                 TEST
//               </span>
//               <span>
//                 <span className="font-weight">
//                   Batch
//                   {' '}
//                   #:
//                 </span>
//                 {' '}
//                 1234
//               </span>
//             </div>
//             <div className="data-row border-bottom">
//               <span className="font-weight">
//                 Transaction:
//                 {' '}
//                 APPROVED - 00
//               </span>
//               <span />
//             </div>
//             <div className="colored-row">
//               <span>Thank You For Your Generous Donation</span>
//               <span />
//             </div>

//           </div>
//           {/* end of actual receipt */}

//           {/* receipt action */}
//           <div className="receipt-actions-div">
//             <div className="actions-right">
//               <button
//                 className="receipt-modal-download-button"
//                 onClick={downloadPDF}
//                 disabled={!(loader===false)}
//               >
//                 {loader?(
//                   <span>Downloading</span>
//                 ):(
//                   <span>Download</span>
//                 )}

//               </button> 
//             </div>
//           </div>

//       </div>

//     </div>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import {ImDownload3} from"react-icons/im"
function Pdf()
{
  const a=JSON.parse(localStorage.getItem("image1"))

  console.log(a);
  const b="https://res.cloudinary.com/dapqxtuzq/image/upload/v1692824050/house_allotment/khharjjrdmi0skttctbr.jpg";
  console.log(b)
  const conponentPDF= useRef();
  const [userData, setUserdata]= useState([]);
  const{signupData} = useSelector((state)=>state.auth);
  console.log("pji",signupData);

    // useEffect( ()=>{
    //     const registerUserdata= async()=>{
    //      axios.get("http://localhost:7000/api/registeruserdata")  
    //      .then(res=>setUserdata(res.data) )
    //      .catch(error=>console.log(error)); 

    //     }
    //     registerUserdata();
    // },[]);

    const generatePDF= useReactToPrint({
        content: ()=>conponentPDF.current,
        documentTitle:"Userdata",
        
    });
    return(
        <React.Fragment>
            <div className="container w-screen">
                <div className="row w-screen">
                    <div className="col-md-12 relative w-screen">
              <div className=" mt-6 font-semibold flex w-screen justify-center items-center mx-auto text-blue-500">
                Login id and password will be send on your Mobile Number After verification of all the details.
              </div>
                      
                    
                   <div ref={conponentPDF} className="mx-auto  absolute z--1  w-full" >
                   <div className=" mt-4 text-center">
                    <div className="font-bold">PU-Awas</div>
                    <div className="font-bold">PANJAB UNIVERSITY, CHANDIGARH</div>
                    <div className="font-extralight">Membership Application Form</div>
                   </div>
                    <div className="w-full flex flex-row-reverse">
                   <div className="w-[150px] flex  mt-10 mr-16 ml-auto bg-black h-[150px]"><img  src={a}className="aspect-square object-cover" alt="" /></div>
                 
                   <div className=" mt-12 ml-6 ">
                   <div className=" flex gap-8">
                          <div>Application NO:</div>
                          <div className="font-semibold">234567890</div>
                        </div>
                    <div className="flex  mt-4 gap-8 ">
                   
                        <div className="flex  gap-8">
                          <div>Full Name :</div>
                          <div  className="font-semibold">{signupData?.fullName}</div>
                        </div>

                      
                        </div>
                        <div className="flex  mt-4 gap-8">
                        <div className="flex gap-8">
                          <div>Date Of Birth:</div>
                          <div  className="font-semibold">{signupData?.dateOfBirth}</div>
                        </div>
                        <div className="flex gap-8">
                          <div>Email :</div>
                          <div  className="font-semibold">{signupData?.email}</div>
                        </div>
                        </div>

                        </div>
                    </div>
                        <div className="text-center">Contact Details</div>
                        <div className="flex ml-6  mt-4 gap-8">
                        <div className="flex gap-8">
                          <div >Current Address:</div>
                          <div  className="font-semibold"> {signupData?.CAddress}</div>
                        </div>
                        <div className="flex gap-8">
                          <div>Permanent Address :</div>
                          <div  className="font-semibold"> {signupData?.PAddress}</div>
                        </div>
                        </div>
                        <div className="flex  ml-6 mt-4 gap-8">
                        <div className="flex gap-8">
                          <div>Mobile No:</div>
                          <div  className="font-semibold">{signupData?.contactNumber}</div>
                        </div>
                        <div className="flex gap-8">
                          <div></div>
                          <div  className="font-semibold"></div>
                        </div>
                        </div>
                        <div className=" mt-6 text-center">Other Details</div>
                        <div className="flex ml-6  mt-4 gap-8">
                        <div className="flex gap-8">
                          <div>Department:</div>
                          <div  className="font-semibold">{signupData?.department}</div>
                        </div>
                        <div className="flex gap-8">
                          <div>Role :</div>
                          <div  className="font-semibold">{signupData?.role}</div>
                        </div>
                        </div>
                        <div className="flex ml-6 mt-4 gap-8">
                        <div className="flex  gap-8">
                          <div>Date Of Joining:</div>
                          <div  className="font-semibold">{signupData?.dateOfJoining}</div>
                        </div>
                        <div className="flex gap-8">
                          <div>PF Number :</div>
                          <div  className="font-semibold">{signupData?.pfno}</div>
                        </div>
                        </div>
                        <div className="flex  ml-6 mt-4 gap-8">
                        <div className="flex gap-8">
                          <div>Pay Scale:</div>
                          <div  className="font-semibold">{signupData?.payScale}</div>
                        </div>
                        <div className="flex gap-8">
                          <div>Current House NO.& Address :</div>
                          <div  className="font-semibold">{signupData?.currentHouse}</div>
                        </div>
                        </div>
                    </div>
                    <div className="  w-full h-screen absolute bg-white  mx-auto  z-10 item-center mt- justify-center  mb-auto">
                    <button className="btn  mx-auto w-full mt-5   btn-success" onClick={ generatePDF}>
                 
                     <div className=" p-1 rounded-sm  text-blue-5 flex justify-center   mx-auto">Download Registration form
                     <div className="ml-1 mt-[3px] ">

<ImDownload3/>
  </div>
                     </div> 

                      </button>                       
                    </div> 
                    </div>
                </div>
            </div>           
        </React.Fragment>
    );
}


export default Pdf;