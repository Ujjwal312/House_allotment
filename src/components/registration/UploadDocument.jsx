import { useEffect, useRef, useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import { updateDisplayPicture } from "../../services/operations/SettingsAPI"
import {setStep } from "../../slices/courseSlice"

import { setimage } from "../../slices/authSlice"

export default function UploadDocument({setisupload1,setisupload2,setisupload3}) {
  const { token } = useSelector((state) => state.auth)
  const { image} = useSelector((state) => state.auth)

  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)

  const [loading3, setLoading3] = useState(false)

  const [isselect1, setisselect1] = useState(false)
  const [isselect2, setisselect2] = useState(false)

  const [isselect3, setisselect3] = useState(false)


  const [imageFile1, setImageFile1] = useState(null)
  const [imageFile2, setImageFile2] = useState(null)

  const [imageFile3, setImageFile3] = useState(null)

  const [previewSource1, setPreviewSource1] = useState(null)
  const [previewSource2, setPreviewSource2] = useState(null)
  const [previewSource3, setPreviewSource3] = useState(null)

  const fileInputRef1 = useRef(null)
  const fileInputRef2 = useRef(null)
  const fileInputRef3 = useRef(null)



  const handleClick1 = () => {
    fileInputRef1.current.click()
  }
  const handleClick2 = () => {
    fileInputRef2.current.click()
  }
  const handleClick3 = () => {
    fileInputRef3.current.click()
  }
  const handleFileChange1= (e) => {
 
    setisselect1(true);
    const file1 = e.target.files[0]
    // console.log(file)
    if (file1) {
      setImageFile1(file1)
      
      previewFile1(file1)
    }
  }
  const handleFileChange2= (e) => {
 
    setisselect2(true);
    const file2 = e.target.files[0]
    // console.log(file)
    if (file2) {
      setImageFile2(file2)
      previewFile2(file2)
    }
  }
  const handleFileChange3= (e) => {
 
    setisselect3(true);
    const file3 = e.target.files[0]
    // console.log(file)
    if (file3) {
      setImageFile3(file3)
      previewFile3(file3)
    }
  }
  const previewFile1 = (file1) => {
    const reader = new FileReader()
    reader.readAsDataURL(file1)
    reader.onloadend = () => {
      setPreviewSource1(reader.result)
    }
  }
  const previewFile2 = (file2) => {
    const reader = new FileReader()
    reader.readAsDataURL(file2)
    reader.onloadend = () => {
      setPreviewSource2(reader.result)
    }
  }
  const previewFile3 = (file3) => {
    const reader = new FileReader()
    reader.readAsDataURL(file3)
    reader.onloadend = () => {
      setPreviewSource3(reader.result)
    }
  }
  const  handleFileUpload1 = async() => {
    try {
      console.log("uploading...")
      setLoading1(true)
      setisupload1(false)

      const formData = new FormData()
      formData.append("displayPicture", imageFile1)
      // console.log("formdata", formData)
  const image1="image1";
      dispatch(updateDisplayPicture(image1, formData)).then(() => {
        setLoading1(false)
        setisupload1(true)
        
      })

  
      
 
    


    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  
  }
  const handleFileUpload2 = () => {
    try {
      console.log("uploading...")
      setLoading2(true)
      setisupload2(false)
      const formData = new FormData()
      formData.append("displayPicture", imageFile2)
      // console.log("formdata", formData)
      const image2="image2";
      dispatch(updateDisplayPicture(image2,formData)).then(() => {
        setLoading2(false)
        setisupload2(true)

      })
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  const handleFileUpload3= () => {
    try {
      console.log("uploading...")
      setLoading3(true)
      setisupload3(false)
      const formData = new FormData()
      formData.append("displayPicture", imageFile3)
      // console.log("formdata", formData)
      const image3="image3";
      dispatch(updateDisplayPicture(image3,formData)).then(() => {
        setLoading3(false)
        setisupload3(true)

      })
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  const onsubmit = (e) => {
    e.preventDefault()
   
  }
const y=null;
  const goBack = () => {
    //  y = localStorage.getItem("image1");
     const formData = new FormData()
     formData.append("image1", localStorage.getItem("image1"))
     formData.append("image2", localStorage.getItem("image2"))
     formData.append("image3", localStorage.getItem("image3"))
     dispatch(setimage(localStorage.getItem("image1")));
     console.log(formData);
    // var x = localStorage.getItem("image2");
    // console.log(x);
    // var x = localStorage.getItem("image3");
    // console.log(x);
    dispatch(setStep(1))
 
  }

  return (
  
    
    <form onSubmit={onsubmit}>
      <div className="flex  flex-col  justify-between   text-richblack-5 space-y-8 rounded-md border-[1px]  bg-richblack-25 p-5 w-full ">
        <div className="flex items-center gap-x-[200px]">
          {isselect1&&
          <img
            src={previewSource1 || `${image}`}
          
            className="aspect-square w-[150px]  bg-black  object-cover"
          />
}
{!isselect1&&
   <img
   src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
 
   className="aspect-square w-[150px] p-2 object-cover"
 />

}

<div>
  <div className="text-richblack-800">Document Formet: Jpeg/jpg</div>
  <div className="text-richblack-800">Min Size: 50KB</div>
  <div className="text-richblack-800">Max Size: 100KB</div>
</div>

          <div className="space-y-2">
            <div className="text-richblack-900 mb-5 ">Photograph (passport size)<sup className="text-pink-200">*</sup></div>
            <div className="flex flex-row  gap-4">
              <input
              required
                type="file"
                ref={fileInputRef1}
                onChange={handleFileChange1}
                className="hidden"
                accept="image/png, image/jpeg"
              />
              <button
              type="button"
                onClick={handleClick1}
                disabled={loading1}
                className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
              >
                Select
              </button>
              <button
              type="button"
                onClick={handleFileUpload1}
                disabled={loading1}
                className="cursor-pointer rounded-md bg-yellow-300 py-2 px-4 font-semibold text-richblack-50"
              >
{!loading1&&

               <div> Upload</div>
}
{loading1&&

<div>Uploading...</div>
}

              </button>
              {/* <button type="button">
              <IconBtn
                text={loading1 ? "Uploading..." : "Upload"}
                onclick={handleFileUpload1}
              >
                {!loading1 && (
                  <FiUpload className="text-lg text-richblack-900" />
                )}
              </IconBtn>
              </button> */}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-[200px]">
          {isselect2&&
          <img
            src={previewSource2 || image?.image1}
          
            className="aspect-square w-[150px]  bg-black  object-cover"
          />
}
{!isselect2&&
   <img
   src="https://icons.veryicon.com/png/o/file-type/document-type-icon/file-upload-1.png"
 
   className="aspect-square bg-richblack-50 w-[150px]  object-cover"
 />

}
<div>
  <div className="text-richblack-800">Document Formet: Jpeg/jpg</div>
  <div className="text-richblack-800">Min Size: 50KB</div>
  <div className="text-richblack-800">Max Size: 100KB</div>
</div>
          <div className="space-y-2">
            <div className="text-richblack-900 mb-5 ">Date of Joining proof<sup className="text-pink-200">*</sup></div>
            <div className="flex flex-row  gap-4">
              <input
              required
                type="file"
                ref={fileInputRef2}
                onChange={handleFileChange2}
                className="hidden"
                accept="image/png, image/jpeg"
              />
              <button
              type="button"
                onClick={handleClick2}
                disabled={loading2}
                className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
              >
                Select
              </button>
              <button
              type="button"
                onClick={handleFileUpload2}
                disabled={loading2}
                className="cursor-pointer rounded-md bg-yellow-300 py-2  px-4 font-semibold text-richblack-50"
              >
                {!loading2&&

<div> Upload</div>
}
{loading2&&

<div>Uploading...</div>
}
              </button>
              {/* <button type="button">
              <IconBtn
                text={loading2 ? "Uploading..." : "Upload"}
              
                onclick={handleFileUpload2}
              >
                
                {!loading2 && (
                  <FiUpload className="text-lg text-richblack-900" />
                )}
              </IconBtn>
              </button> */}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-[200px]">
          {isselect3&&
          <img
            src={previewSource3 || user?.image}
          
            className="aspect-square w-[150px]  bg-black  object-cover"
          />
}
{!isselect3&&
   <img
   src="https://icons.veryicon.com/png/o/file-type/document-type-icon/file-upload-1.png"
 
   className="aspect-square bg-richblack-50 w-[150px]  object-cover"
 />

}
<div>
  <div className="text-richblack-800">Document Formet: Jpeg/jpg</div>
  <div className="text-richblack-800">Min Size: 50KB</div>
  <div className="text-richblack-800">Max Size: 100KB</div>
</div>
          <div className="space-y-2">
            <div className="text-richblack-900 mb-5 ">Pay Scale proof<sup className="text-pink-200">*</sup></div>
            <div className="flex flex-row  gap-4">
              <input
              required
                type="file"
                
                ref={fileInputRef3}
                onChange={handleFileChange3}
                className="hidden"
                accept="image/png, image/jpeg"
              />
              <button
              type="button"
                onClick={handleClick3}
                disabled={loading3}
                className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
              >
                Select
              </button>
              <button
              type="button"
                onClick={handleFileUpload3}
                disabled={loading3}
                className="cursor-pointer rounded-md bg-yellow-300 py-2 px-4 font-semibold text-richblack-50"
              >
               {!loading3&&

<div> Upload</div>
}
{loading3&&

<div>Uploading...</div>
}
              </button>
              {/* <button type="button">
              <IconBtn
                text={loading3 ? "Uploading..." : "Upload"}
                onclick={handleFileUpload3}
              >
                {!loading3 && (
                  <FiUpload className="text-lg text-richblack-900" />
                )}
              </IconBtn>
              </button> */}
            </div>
          </div>
        </div>
    
      </div>
      </form>

  )
                }