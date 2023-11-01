
// import { useState } from "react"
// import { toast } from "react-hot-toast"
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { Navigate } from "react-router-dom"
// import { setStep, setCourse} from '../../slices/courseSlice';
 import { setSignupData } from "../../slices/authSlice"
// import { useSelector } from "react-redux"
// import { useEffect } from "react"


// function SignupForm() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   var {signupData} = useSelector((state)=>state.auth);
//   const { step } = useSelector((state) => state.course)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     phoneno: "",
//     email: "",

//   })

//   useEffect(() => {
//     if(signupData){
//      phoneno=signupData.phoneno
//   }
//   }, [])
//   var [state, setstate] = useState("")
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   var { firstName, phoneno, email,} = formData

//   // Handle input fields, when some value changes
//   var handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   // Handle Form Submission
//   var handleOnSubmit = (e) => {
//     e.preventDefault()

//     var signupData = {
//       ...formData,

//     }

//     // Setting signup data to state
//     // To be used after otp verification
//     dispatch(setSignupData(signupData))
//     console.log(signupData);
//     // Send OTP to user for verification
//     // dispatch(sendOtp(formData.email, navigate))

//     // Reset
//     // setFormData({
//     //   firstName: "",
//     //   phoneno: "",
//     //   email: "",
 
//     // })
//     dispatch(setStep(2))
  
//   }

  

//   return (
//     <div>

//       {/* Form */}
//       <form onSubmit={handleOnSubmit} className="flex mx-auto bg-richblack-5 p-5 w-11/12 flex-col gap-y-4">
       
//           <label>
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
//               Full Name <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="firstName"
              
//               value={state}
//               onChange={(e)=>{setstate(e.target.value)}}
              
              
//               placeholder="Enter first name"
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="w-full rounded-[0.5rem] bg-richblack-25 p-[12px] text-richblack-900"
//             />
//           </label>
//           <label>
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
//               Phone No <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               onChangeCapture={handleOnChange}
//               type="text"
//               name="phoneno"
//               value={signupData.phoneno}
//               onChange={handleOnChange}
//               placeholder="Enter phone no"
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="w-full rounded-[0.5rem] bg-richblack-25 p-[12px] text-richblack-900"
//             />
//           </label>
    
//         <label className="w-full">
//           <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
//             Email Address 
//           </p>
//           <input
//           required
//           onChangeCapture={handleOnChange}
//             type="text"
//             name="email"
//             onChange={handleOnChange}
//             value={signupData?.email}
//             placeholder="Enter email address"
//             style={{
//               boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//             }}
//             className="w-full rounded-[0.5rem] bg-richblack-25 p-[12px] text-richblack-900"
//           />
//         </label>
     
//         <button
//           type="submit"
          
//           className="mt-6 rounded-[8px] w-[10%] flex ml-auto bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//         >
//           <div className="mx-auto">
//           Next
//           </div>
//         </button>
//       </form>
//     </div>
//   )
// }

// export default SignupForm
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
// import {
//   addCourseDetails,
//   editCourseDetails,
//   fetchCourseCategories,
// } from "../../../../../services/operations/courseDetailsAPI"
import { setCourse, setStep } from "../../slices/courseSlice"
//  import { COURSE_STATUS } from "../../../../../utils/constants"
import IconBtn from "../../components/common/IconBtn"
import UploadDocument from "./UploadDocument"
import { Navigate, redirect } from "react-router"
import { signUp } from "../../services/operations/authAPI"

// import Upload from "../Upload"
// import ChipInput from "./ChipInput"
// import RequirementsField from "./RequirementsField"
const Department=[
  {
    id: 1,
    name: "University Institute of Engineering And Technology",
  },
  {
    id: 2,
    name: "Department of Law",
  },
  {
    id: 3,
    name: "Department of Science",
  },
  {
    id: 1,
    name: "University Institute of Engineering And Technology",
  },
  {
    id: 2,
    name: "Department of Law",
  },
  {
    id: 3,
    name: "Department of Science",
  },
  {
    id: 1,
    name: "University Institute of Engineering And Technology",
  },
  {
    id: 2,
    name: "Department of Law",
  },
  {
    id: 3,
    name: "Department of Science",
  },
  {
    id: 1,
    name: "University Institute of Engineering And Technology",
  },
  {
    id: 2,
    name: "Department of Law",
  },
  {
    id: 3,
    name: "Department of Science",
  },
  {
    id: 1,
    name: "University Institute of Engineering And Technology",
  },
  {
    id: 2,
    name: "Department of Law",
  },
  {
    id: 3,
    name: "Department of Science",
  },
  {
    id: 1,
    name: "University Institute of Engineering And Technology",
  },
  {
    id: 2,
    name: "Department of Law",
  },
  {
    id: 3,
    name: "Department of Science",
  },
  {
    id: 1,
    name: "University Institute of Engineering And Technology",
  },
  {
    id: 2,
    name: "Department of Law",
  },
  {
    id: 3,
    name: "Department of Science",
  },
  {
    id: 1,
    name: "University Institute of Engineering And Technology",
  },
  {
    id: 2,
    name: "Department of Law",
  },
  {
    id: 3,
    name: "Department of Science",
  },

]
const Role=[
  {
    id: 1,
    name: "Professor",
  },
  {
    id: 2,
    name: "Director",
  },
  {
    id: 3,
    name: "Mali",
  },
  {
    id: 3,
    name: "Cleaner",
  },
  {
    id: 1,
    name: "Professor",
  },
  {
    id: 2,
    name: "Director",
  },
  {
    id: 3,
    name: "Mali",
  },
  {
    id: 3,
    name: "Cleaner",
  },
  {
    id: 1,
    name: "Professor",
  },
  {
    id: 2,
    name: "Director",
  },
  {
    id: 3,
    name: "Mali",
  },
  {
    id: 3,
    name: "Cleaner",
  },
  {
    id: 1,
    name: "Professor",
  },
  {
    id: 2,
    name: "Director",
  },
  {
    id: 3,
    name: "Mali",
  },
  {
    id: 3,
    name: "Cleaner",
  },
]
const Category=[
  {
    id: 1,
    name: "A-type",
  },
  {
    id: 2,
    name: "B-type",
  },
  {
    id: 3,
    name: "C-type",
  },
  {
    id: 4,
    name: "E-type",
  },
  {
    id: 5,
    name: "F-type",
  },
  {
    id: 6,
    name: "T-type",
  },
  {
    id: 7,
    name: "TII-type",
  },
  {
    id: 8,
    name: "TI-type",
  },

  {
    id: 5,
    name: "F-type",
  },
  {
    id: 6,
    name: "T-type",
  },
  {
    id: 7,
    name: "TII-type",
  },
  {
    id: 8,
    name: "TI-type",
  },
  {
    id: 5,
    name: "F-type",
  },
  {
    id: 6,
    name: "T-type",
  },
  {
    id: 7,
    name: "TII-type",
  },
  {
    id: 8,
    name: "TI-type",
  },
]
export default function CourseInformationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { mobno } = useSelector((state) => state.auth)
  const { course, editCourse } = useSelector((state) => state.course)
  const [loading, setLoading] = useState(false)
  const [isupload1,setisupload1]=useState(false);
  const [isupload2,setisupload2]=useState(false);

  const [isupload3,setisupload3]=useState(false);
  const [checked, setChecked] = useState([]);
  const [courseCategories, setCourseCategories] = useState([])
  const{signupData} = useSelector((state)=>state.auth);
  useEffect(() => {
    // const getCategories = async () => {
    //   setLoading(true)
    //   const categories = await fetchCourseCategories()
    //   if (categories.length > 0) {
    //     // console.log("categories", categories)
    //     setCourseCategories(categories)
    //   }
    //   setLoading(false)
    // }
    // if form is in edit mode
    console.log("ye hai",signupData);
    if (signupData) {
      // console.log("data populated", editCourse)
      setValue("fullName", signupData.fullName);
      console.log(signupData.fullName);
      setValue("dateOfBirth", signupData.dateOfBirth)
      setValue("email", signupData.email)
      setValue("CAddress", signupData.CAddress)
      setValue("PAddress", signupData.PAddress)
      setValue("department", signupData.department)
      setValue("role", signupData.role)
      setValue("dateOfJoining",signupData.dateOfJoining)
      setValue("pfno",signupData.pfno)

      setValue("payScale",signupData.payScale)

      setValue("currentHouse",signupData.currentHouse)
    }
    // getCategories()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isFormUpdated = () => {
    const currentValues = getValues()
    // console.log("changes after editing form values:", currentValues)
    if (
      currentValues.fullName !== signupData.fullName ||
      currentValues.dateOfBirth !== signupData.dateOfBirth ||
      currentValues.email !== signupData.email ||
      currentValues.CAddress !== signupData.CAddress ||
      currentValues.PAddress !== signupData.PAddress||
      currentValues.department!== signupData.department||
      currentValues.role!==
      signupData.role ||
      currentValues.dateOfJoining!== signupData.dateOfJoining || 
       currentValues.pfno!== signupData.pfno|| 
       currentValues.payScale!== signupData.payScale|| 
       currentValues.currentHouse!== signupData.currentHouse
    ) {
      return true
    }
    return false
  }

  //   handle next button click
  const onSubmit = async (data) => {
if(checked.length==0){
  toast.error("choose atleast one category");
  return;
}

    if(!isupload1||!isupload2||!isupload3){
      return toast.error("kya hai ye kqu hai ye")
    }
    // console.log(data)
    // toast.success("kya hai ye kqu hai ye")
console.log("khiu",data);
    dispatch(setSignupData(data));
    console.log("hugbuj",signupData)
    if (editCourse) {
      // const currentValues = getValues()
      // console.log("changes after editing form values:", currentValues)
      // console.log("now course:", course)
      // console.log("Has Form Changed:", isFormUpdated())
      if (isFormUpdated()) {
        const currentValues = getValues()
        const formData = new FormData()
        // console.log(data)
    
        if (currentValues.fullName !== signupData.fullName) {
          formData.append("fullName", data.fullName)
        }
        if (currentValues.dateOfBirth !== signupData.dateOfBirth) {
          formData.append("dateOfBirth", data.dateOfBirth)
        }
        if (currentValues.email !== signupData.email) {
          formData.append("email", data.email)
        }  
         if (currentValues.CAddress !== signupData.CAddress) {
          formData.append("CAddress", data.CAddress)
        } 
          if (currentValues.PAddress !== signupData.PAddress) {
          formData.append("PAddress", data.PAddress)
        }  
         if (currentValues.department!== signupData.department) {
          formData.append("department", data.department)
        } 
          if (currentValues.role !== signupData.role) {
          formData.append("role", data.role)
        }  
         if (currentValues.dateOfJoining !== signupData.dateOfJoining) {
          formData.append("dateOfJoining", data.dateOfJoining)
        }  
        
      if (currentValues.pfno !== signupData.pfno) {
          formData.append("pfno", data.pfno)
        } 
          if (currentValues.payScale !== signupData.payScale) {
          formData.append("payScale", data.payScale)
        }
        if (currentValues.currentHouse !== signupData.currentHouse) {
          formData.append("currentHouse", data.currentHouse)
        }

        // console.log("Edit Form data: ", formData)
        setLoading(true)
        // const result = await editCourseDetails(formData, token)
        setLoading(false)
        // if (result) {
        //   dispatch(setStep(2))
        //   dispatch(setCourse(result))
        // }
      } else {
        toast.error("No changes made to the form")
      }
      return
    }

    const formData = new FormData()
    formData.append("fullName", data.fullName)
    formData.append("dateOfBirth", data.dateOfBirth)
    formData.append("email", data.email)
    formData.append("contactNumber",mobno)

    formData.append("CAddress", data.CAddress)
    formData.append("PAddress", data.PAddress)
    formData.append("department", data.department)
    formData.append("role", data.role)
    formData.append("dateOfJoining", data.dateOfJoining)
    formData.append("pfno", data.pfno)
    formData.append("payScale", data.payScale)
    formData.append("currentHouse", data.currentHouse)
    formData.append("category", checked)
    const a=localStorage.getItem("image2");
    const b=localStorage.getItem("image1");

    const c=localStorage.getItem("image3");


    formData.append("DOJProofUrl",a);
     formData.append("imageUrl", b)
     formData.append("payScaleProofUrl", c)

  

console.log("lknk",formData);


    // formData.append("status", COURSE_STATUS.DRAFT)
    // formData.append("instructions", JSON.stringify(data.courseRequirements))
    // formData.append("thumbnailImage", data.courseImage)

    setLoading(true)
     const result = await dispatch(signUp(formData,navigate)).then({

    });
    if (result) {
      //   dispatch(setCourse(result))
      dispatch(setStep(2))
    }
    setLoading(false)
  }
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    console.log(updatedList);
  };

  return (
    <div>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-md border-[1px] mx-auto bg-richblack-5 p-5 w-11/12  border-richblack-700"
    >
      {/* Course Title */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-900" htmlFor="fullName">
          Full Name<sup className="text-pink-200">*</sup>
        </label>
        <input
          id="fullName"
          placeholder="Enter full Name"
          {...register("fullName", { required: true })}
          className="form-style text-richblack-900 bg-richblack-25 w-full"
        />
        {errors.fullName && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Name is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-900" htmlFor="fullName">
          Contact Number<sup className="text-pink-200">*</sup>
        </label>
        <input
          id="contactNumber"
          value={mobno}
          
          {...register("contactNumber", { required: true })}
          className="form-style text-richblack-900 bg-richblack-25 w-full"
        />
   
      </div>
      
            <div className="flex flex-col space-y-2 ">
              <label htmlFor="dateOfBirth" className=" lable-style   text-richblack-900 ">
                Date of Birth <sup className="text-pink-200">*</sup>
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
              
                className="form-style  text-richblack-900 bg-richblack-25 "
                {...register("dateOfBirth", {
                  required: {
                    value: true,
                    message: "Please enter your Date of Birth.",
                  },
                  max: {
                    value: new Date().toISOString().split("T")[0],
                    message: "Date of Birth cannot be in the future.",
                  },
                })}
              
              />
              {errors.dateOfBirth && (
                <span className="-mt-1 text-[12px] text-pink-200">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>
     
      {/* Course Short Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-900" htmlFor="email">
          Email Address
        </label>
        <input
        type="email"
          id="email"
          placeholder="Enter Email(optional)"
          {...register("email", { })}
          className="form-style resize-x-none  text-richblack-900  bg-richblack-25  w-full"
        />
        {/* {errors.courseShortDesc && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Course Description is required
          </span>
        )} */}
      </div>
      {/* Course Price */}
      {/* <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-900" htmlFor="coursePrice">
          Course Price <sup className="text-pink-200">*</sup>
        </label>
        <div className="relative">
          <input
            id="coursePrice"
            placeholder="Enter Course Price"
            {...register("coursePrice", {
              required: true,
              valueAsNumber: true,
              pattern: {
                value: /^(0|[1-9]\d*)(\.\d+)?$/,
              },
            })}
            className="form-style w-full  bg-richblack-25 !pl-12"
          />
          <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
        </div>
        {errors.coursePrice && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Course Price is required
          </span>
        )}
      </div> */}
      {/* Course Category */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-900" htmlFor="department">
          Department<sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("department", { required:true })}
          defaultValue=""
          id="department"
          className="form-style te text-richblack-800 bg-richblack-25 w-full"
        >
          <option value=""  disabled>
            <div className="text-richblack-800">

            Choose a Department
            </div>
          </option>
          {!loading &&
            Department?.map((category, indx) => (
              <option key={indx} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {errors.department && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Choose a department is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-900" htmlFor="role">
          Role<sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("role", { required:true })}
          defaultValue=""
          id="role"
          className="form-style te text-richblack-800 bg-richblack-25 w-full"
        >
          <option value=""  disabled>
            <div className="text-richblack-800">

            Choose a Role
            </div>
          </option>
          {!loading &&
            Role?.map((category, indx) => (
              <option key={indx} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {errors.role && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Choose a role is required
          </span>
        )}
      </div>


      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-900" htmlFor="CAddress">
          Current Address <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="CAddress"
          placeholder="Fill your current address"
          {...register("CAddress", { required: true })}
          className="form-style resize-x-none text-richblack-900  bg-richblack-25 min-h-[10px] w-full"
        />
        {errors.CAddress && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Current Address is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-900" htmlFor="PAddress">
        Permanent Address <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="PAddress"
          placeholder="Fill your permanent address"
          {...register("PAddress", { required: true })}
          className="form-style resize-x-none text-richblack-900  bg-richblack-25 min-h-[10px] w-full"
        />
        {errors.PAddress && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
          Permanent Address is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2 ">
              <label htmlFor="dateOfJoining" className=" lable-style   text-richblack-900 ">
                Date of Joining <sup className="text-pink-200">*</sup>
              </label>
              <input
                type="date"
                name="dateOfJoining"
                id="dateOfJoining"
                className="form-style  text-richblack-900 bg-richblack-25 "
                {...register("dateOfJoining", {
                  required: {
                    value: true,
                    message: "Please enter your Date of Joining.",
                  },
                  max: {
                    value: new Date().toISOString().split("T")[0],
                    message: "Date of Joining cannot be in the future.",
                  },
                })}
              
              />
              {errors.dateOfJoining && (
                <span className="-mt-1 text-[12px] text-pink-200">
                  {errors.dateOfJoining.message}
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-900" htmlFor="pfno">
          PF NO.<sup className="text-pink-200">*</sup>
        </label>
        <input
        type="number"
          id="pfno"
          placeholder="Enter PF Number"
          {...register("pfno", { required: true })}
          className="form-style text-richblack-900 bg-richblack-25 w-full"
        />
        {errors.pfno && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
           vailid pf no is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-900" htmlFor="payScale">
          Pay Scale<sup className="text-pink-200">*</sup>
        </label>
        <input
        type="number"
          id="payScale"
          placeholder="Enter Pay Scale"
          {...register("payScale", { required: true })}
          className="form-style text-richblack-900 bg-richblack-25 w-full"
        />
        {errors.payScale && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            vailid pay scale is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-900" htmlFor="category">
        Category<sup className="text-pink-200">*</sup>
        </label>
        
        <div className="grid-cols-5 checkList">
    <div className="title grid-cols-5 text-sm">Choose valid Categories in which you want to apply</div>
    <div className="  grid gap-4   grid-cols-5 mt-4  list-container">
      {Category.map((item, index) => (
         <div className="" key={index}>
          <input className="" value={item.name} type="checkbox" onChange={handleCheck} />
           <span>{item.name}</span>
         </div>
      ))}
    </div>
  </div>
{/* 
             {!loading &&
              Category?.map((category, indx) => (
                
                // <input key={indx} type="radio" value={category?.name}>
                //   {category?.name}
                // </input>
                <input  key={indx} type="checkbox"   value={category.name}>{category.name}</input>
                // <label key={indx} for={category.id}> {category.name}</label>
              ))}  */}
        {/* // <input
        // type="radio"
        //   id="category"
        //   key={i}
        // value={name}
        //   {...register("category", { required: true })}
        //   className="form-style text-richblack-900 bg-richblack-25 w-full"
        // /> */}
        
       
    
   

      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-900" htmlFor="currentHouse">
          Current House NO.& Address  <sup className="text-pink-200">*</sup>
        </label>
        <input
           id="currentHouse"
          placeholder="Enter House NO. And Address "
          {...register("currentHouse", { required: true })}
          className="form-style text-richblack-900 bg-richblack-25 w-full"
        />
        {errors.currentHouse && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
         Current House NO.& Address is required
          </span>
        )}
      </div>
      
      <div className="w-full">
        <div className="text-richblack-700 mb-3">Upload Details<sup className="text-pink-200">*</sup>
        </div>
      <UploadDocument setisupload1={setisupload1} setisupload2={setisupload2} setisupload3={setisupload3}/>
      </div>

      <div className="">
         
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                
                className="form-style  text-richblack-900 bg-richblack-25 "
          {...register("checkbox", { required: true })}
           
              
              />
               <label htmlFor="checkbox" className="form-check-label ml-2 text-blue-600">
               I hereby declare that the above mentioned details are true to the best of my belief & knowledge, if anything found wrong/false, my registration can be cancelled 
            </label>
              {errors.checkbox && (
                <span className="-mt-1 text-[12px] text-pink-200">
                 please select term and conditons
                </span>
              )}
            </div>

      <div className="flex justify-center gap-x-2">
        {editCourse && (
          <button
            onClick={() => dispatch(setStep(2))}
            disabled={loading}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
          >
            Continue Wihout Saving
          </button>
        )}
        <IconBtn
          disabled={loading}
          text={!editCourse ? "Submit" : "Save Changes"}
          
        >
         
        </IconBtn>
      </div>
    </form>
    
</div>
  )
}