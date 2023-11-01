import { FaCheck } from "react-icons/fa"
import { useSelector } from "react-redux"
import Registration from "./Registration"
import  UploadDocument from "./UploadDocument"
import Pdf from "../registration/pdf/Pdf"
// import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
// import CourseInformationForm from "./CourseInformation/CourseInformationForm"
// import PublishCourse from "./PublishCourse"

export default function RenderSteps() {
  const { step } = useSelector((state) => state.course)

  const steps = [
    {
      id: 1,
      title: "Registration Form",
    },
    {
      id: 2,
      title: "Upload Documents",
    },
    {
      id: 3,
      title: "Confirmation",
    },
  ]

  return (
    <>
      <div className="relative mt-10 flex justify-center">
        {steps.map((item) => (
          <>
            <div
              className="flex flex-col  items-center "
              key={item.id}
            >
              <button
                className={`grid cursor-default  aspect-square w-[34px] place-items-center m rounded-full border-[1px] ${
                  step === item.id
                    ? "border-richblack-700 bg-blue-300 text-richblack-900"
                    : "border-richblack-700 bg-richblack-5 text-richblack-300"
                } ${step > item.id && "bg-caribbeangreen-500 text-yellow-50"}} `}
              >
                {step > item.id ? (
                  <FaCheck className="font-bold text-richblack-900" />
                ) : (
                  item.id
                )}
              </button>
              
            </div>
            {item.id !== steps.length && (
              <>
                <div
                  className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
                  step > item.id  ? "border-caribbeangreen-600" : "border-richblack-500"
                } `}
                ></div>
              </>
            )}
          </>
        ))}
      </div>

      <div className="relative mb-16 flex w-[955px] mx-auto select-none justify-between ">
        {steps.map((item) => (
          <>
            <div
              className="flex min-w-[130px] flex-col items-center gap-y-2"
              key={item.id}
            >
              
              <p
                className={`text-sm ${
                  step >= item.id ? "text-richblack-500" : "text-richblack-500"
                }`}
              >
                {item.title}
              </p>
            </div>
            
            
          </>
        ))}
      </div>
      
      {/* Render specific component based on current step */}
       {step === 1 && <Registration/>}
       {step === 2 && <Pdf/>} 
    {/* //   {step === 3 && <PublishCourse />}  */}
    </>
  )
}