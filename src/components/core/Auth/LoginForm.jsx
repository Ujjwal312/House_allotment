
import { login } from "../../../services/operations/authAPI"
import { setloginData } from "../../../slices/authSlice"



import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { getPasswordResetToken, sendOtp2 } from "../../../services/operations/authAPI"
import { setphno } from "../../../slices/authSlice"

function Login() {
  const navigate=useNavigate();
const [formData,setFormData]=useState({
mobno:"",
password:"",
});
   const { mobno, password } = formData
   const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
      }
  const [otpSent, setotpSent] = useState(false)
  const dispatch = useDispatch()
  const { loading, } = useSelector((state) => state.auth)

  const handleOnSubmit = (e) => {
    e.preventDefault()
         dispatch(setloginData(formData));
          
    dispatch(sendOtp2(mobno,password, navigate));
    // navigate("/verify-mobno")
  }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] bg-gradient-to-l from-richblue-500 to-richblue-600 place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="w-[400px]  bg-richblack-5 shadow-2xl p-4 lg:p-8">
          <h1 className="text-[1.875rem] font-semibold mb-5 leading-[2.375rem] text-blue-500">
            {!otpSent ? "Login" : "Check message`"}
          </h1>
      
          <form onSubmit={handleOnSubmit}>
            {!otpSent && (
              <label className="w-full">
                <p className="mb-3 text-[0.875rem] leading-[1.375rem] text-richblack-900">
                  Enter Login ID:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="number"
                  name="mobno"
                  value={mobno}
                  onChange={handleOnChange}
                  placeholder="Enter Login id"
                  className="form-style mb-3 w-full"
                />
              </label>
            )}
                    {!otpSent && (
              <label className="w-full">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
                  Password:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter password"
                  className="form-style w-full"
                />
              </label>
            )}
            <button
              type="submit"
              className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
            >
              {!otpSent ? "Sumbit" : "Resend Email"}
            </button>
          </form>
 
        </div>
      )}
    </div>
  )
}

export default Login