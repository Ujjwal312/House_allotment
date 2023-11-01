import { toast } from "react-hot-toast"

import { setLoading, setToken, setloginData } from "../../slices/authSlice"
import { resetCart } from "../../slices/cartSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"
import { useSelector } from "react-redux"


const {
  SENDOTP_API,
  SENDLOGINOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
  VERIFY_OTP,
} = endpoints

export function sendOtp(contactNumber, navigate) {
  return async (dispatch) => {
  
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        contactNumber,
        checkUserPresent: true,
      })
      console.log("SENDOTP API RESPONSE............", response)

      console.log(response.data.success)

      // if (!response.data.success) {
      //   throw new Error(response.data.message)
      // }
if(response.data.message=="User already exist"){
  dispatch(setLoading(false))
  return toast.error("User already exist")
}
      toast.success("OTP Sent Successfully")
      if(navigate){
      navigate("/verify-mobno")
      }
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not Send OTP")
    }
    dispatch(setLoading(false))
   
  }
}
export function sendOtp2(contactNumber,password, navigate) {
  return async (dispatch) => {
  
    dispatch(setLoading(true))
    try {
      console.log(contactNumber)
      const response = await apiConnector("POST", SENDLOGINOTP_API, {
        contactNumber,
        checkUserPresent: true,
      })
      console.log("SENDOTP API RESPONSE............", response)

      console.log(response.data.success)

      // if (!response.data.success) {
      //   throw new Error(response.data.message)
      // }
      console.log(password)
      console.log(response.data.data)
if(response.data.message=="User not exist"||response.data.data!=password){
  dispatch(setLoading(false))
  return toast.error("Invaild Details")
}
      toast.success("OTP Sent Successfully")
      if(navigate){
      navigate("/verify-user")
      }
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not Send OTP")
    }
    dispatch(setLoading(false))
   
  }
}
export function verifyotp(contactNumber,otp,navigate) {
  return async (dispatch) => {
  
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", VERIFY_OTP, {
        contactNumber,
        otp,
      })
      // console.log("SENDOTP API RESPONSE............", response)

      // console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("verify Successfully")
      
      navigate("/signup")
      
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not verify OTP")
    }
    dispatch(setLoading(false))
   
  }
}
export function verifyotp2(contactNumber,password,otp,navigate) {
  return async (dispatch) => {
  
    dispatch(setLoading(true))
    try {
      console.log(contactNumber)
      const response = await apiConnector("POST", VERIFY_OTP, {
        contactNumber,
        otp,
      })
      // console.log("SENDOTP API RESPONSE............", response)

      // console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("verify Successfully")
      // dispatch(login(contactNumber,loginData.password, navigate))
      dispatch(setLoading(false))
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          contactNumber,
          password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
        const userImage = response.data?.user?.image
          ? response.data.user.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
        dispatch(setUser({ ...response.data.user, image: userImage }))
        
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
     
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
      
   
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not verify OTP")
    }
    dispatch(setLoading(false))
  }
}

export function signUp(
data,

  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
   
    


    try {
      const response = await apiConnector("POST", SIGNUP_API,data,{
        "Content-Type": "multipart/form-data",
      } )

      
      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
       navigate("/signup/successful")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signu ailed")
      
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function login(mobno,password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        mobno,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Login Successful")
      dispatch(setToken(response.data.token))
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
      dispatch(setUser({ ...response.data.user, image: userImage }))
      
      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify(response.data.user))
      navigate("/dashboard/home")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}



export function getPasswordResetToken(email , setEmailSent) {
  return async(dispatch) => {
    dispatch(setLoading(true));
    try{
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {email,})

      console.log("RESET PASSWORD TOKEN RESPONSE....", response);

      if(!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Reset Email Sent");
      setEmailSent(true);
    }
    catch(error) {
      console.log("RESET PASSWORD TOKEN Error", error);
      toast.error("Failed to send email for resetting password");
    }
    dispatch(setLoading(false));
  }
}

export function resetPassword(password, confirmPassword, token) {
  return async(dispatch) => {
    dispatch(setLoading(true));
    try{
      const response = await apiConnector("POST", RESETPASSWORD_API, {password, confirmPassword, token});

      console.log("RESET Password RESPONSE ... ", response);


      if(!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Password has been reset successfully");
    }
    catch(error) {
      console.log("RESET PASSWORD TOKEN Error", error);
      toast.error("Unable to reset password");
    }
    dispatch(setLoading(false));
  }
}