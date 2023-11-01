import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import {  sendOtp } from "../services/operations/authAPI"
import { setphno } from "../slices/authSlice"

function ForgotPassword() {
  const navigate=useNavigate();
  const [mobno1, setmobno] = useState("")
  const [otpSent, setotpSent] = useState(false)
  const dispatch = useDispatch()
  const { loading, } = useSelector((state) => state.auth)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(setphno(mobno1));
    dispatch(sendOtp(mobno1, navigate));
    // navigate("/verify-mobno")
  }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] bg-gradient-to-l from-richblue-500 to-richblue-600 place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="w-[400px]  bg-richblack-5 shadow-2xl p-4 lg:p-8">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-blue-500">
            {!otpSent ? "Verification" : "Check message`"}
          </h1>
          {/* <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
            {!otpSent
              ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to ${mobno}`}
          </p> */}
          <form onSubmit={handleOnSubmit}>
            {!otpSent && (
              <label className="w-full">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
                  Enter Phone NO:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="number"
                  name="mobno"
                  value={mobno1}
                  onChange={(e) => setmobno(e.target.value)}
                  placeholder="Enter registerd mob no"
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
          <div className="mt-6 flex items-center justify-between">
            <Link to="/">
              <p className="flex items-center gap-x-2 text-blue-500">
                <BiArrowBack /> Back To Home
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ForgotPassword