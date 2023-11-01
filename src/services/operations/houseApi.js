import { toast } from "react-hot-toast"
import {houseEndpoints } from "../apis"
import { apiConnector } from "../apiconnector"

const { GET_ALL_HOUSE_API,SAVE_CHOICES_API,GET_SAVED_HOUSE_API,LOCK_CHOICES_API } =houseEndpoints

export async function getAllHouse() {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      console.log("BEFORE Calling BACKEND API FOR ENROLLED COURSES");
      const response = await apiConnector(
        "GET",
        GET_ALL_HOUSE_API,
      
       
      )
      console.log("AFTER Calling BACKEND API FOR ENROLLED COURSES");
      // console.log(
      //   "GET_USER_ENROLLED_COURSES_API API RESPONSE............",
      //   response
      // )
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data.data
      console.log(result)
    } catch (error) {
      console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
      toast.error("Could Not Get Enrolled Courses")
    }
    toast.dismiss(toastId)
    return result
  }

  export async function savechoice(token ,selecthouse,navigate) {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("POST", SAVE_CHOICES_API, selecthouse, {
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE SUB-SECTION API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Update Lecture")
      }
      toast.success("Lecture Updated")
      result = response?.data?.data
    } catch (error) {
      console.log("UPDATE SUB-SECTION API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }
  export async function getsevedhouse(token) {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      console.log("BEFORE Calling BACKEND API FOR ENROLLED COURSES");
      const response = await apiConnector(
        "GET",
        GET_SAVED_HOUSE_API,
        null,
        {
          Authorization: `Bearer ${token}`,
        }
       
      )
      console.log("respose",response)
      console.log("AFTER Calling BACKEND API FOR ENROLLED COURSES");
      // console.log(
      //   "GET_USER_ENROLLED_COURSES_API API RESPONSE............",
      //   response
      // )
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data.data
      console.log("ye hai hmare,",result)
    } catch (error) {
      console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
      toast.error("Could Not Get Enrolled Courses")
    }
    toast.dismiss(toastId)
    return result
  }
  export async function lockchoice(token) {
    const toastId = toast.loading("Loading...")
    let result="";
    console.log(token)
    try {
      console.log("yes")
      const response = await apiConnector("POST", LOCK_CHOICES_API,null,
      {
        
        Authorization: `Bearer ${token}`,
        
      }
      )
      console.log("yes")

      console.log("UPDATE SUB-SECTION API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Update Lecture")
      }
      toast.success("Lecture Updated")
      result = response?.data?.data
    } catch (error) {
      console.log("UPDATE SUB-SECTION API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }