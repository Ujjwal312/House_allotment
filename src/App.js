import "./App.css";
import {Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import Pdf from "./components/registration/pdf/Pdf"

import Signup from "./components/registration"
import LoginForm from "./components/core/Auth/LoginForm"
import UploadDocument from "./components/registration/UploadDocument"
import ForgotPassword from "./pages/ForgotPassword";

import VerifyEmail from "./pages/VerifyEmail";
import VerifyUser from "./pages/VerifyUser";
import ChoiceFilling from  "./components/core/Dashboard/ChoiceFilling"
 import Choiceavailable from  "./components/core/Dashboard/Choiceavailable"


 import UserDashboard from "./components/core/Dashboard/UserDashboard"
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Profile from "./components/core/Dashboard/Profile"
import Error from "./pages/Error"
// import Settings from "./components/core/Dashboard/Settings";
import { useDispatch, useSelector } from "react-redux";


import { ACCOUNT_TYPE } from "./utils/constants";


import Choicelocking from "./components/core/Dashboard/Choicelocking";
function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.profile)


  return (
   <div className="w-screen max-h-screen h-screen  bg-richblack-50 flex flex-col font-inter">
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>} /> 
       <Route
          path="new-registration"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
    <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup/>
            </OpenRoute>
          }
        />
         <Route
          path="login"
          element={
            <OpenRoute>
              <LoginForm/>
            </OpenRoute>
          }
        />
        
        <Route path="signup/upload-document" element={<UploadDocument/>} />
{/* <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        /> */}
           <Route
          path="signup/successful"
          element={
            <OpenRoute>
              <Pdf/>
            </OpenRoute>
          }
        />

    <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />  

      <Route
          path="verify-mobno"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />  
    <Route
          path="verify-user"
          element={
            <OpenRoute>
              <VerifyUser/>
            </OpenRoute>
          }
        /> 

  

 


    <Route 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path="dashboard/my-profile" element={<Profile/>} />
      <Route path="dashboard/choice-available" element={<Choiceavailable/>} />
      <Route path="dashboard/choice-filling" element={<ChoiceFilling/>} />
      <Route path="dashboard/choice-locking" element={<Choicelocking/>} />
      <Route path="dashboard/home" element={<UserDashboard/>} />
      {/* <Route path="dashboard/choice-locking-pdf" element={<Settings/>} /> */}
      

      {
        user?.accountType === "Employee" && (
          <>
     
          </>
        )
      }

      {
        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
  
          
          </>
        )
      } 


    </Route>

    

    <Route path="*" element={<Error />} />


    </Routes>

   </div>
  );
}

export default App;
