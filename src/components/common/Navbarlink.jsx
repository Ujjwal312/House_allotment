import React, { useEffect } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, matchPath } from 'react-router-dom'
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart,AiFillHome,AiFillCaretDown} from "react-icons/ai"
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiconnector'

import { useState } from 'react'
import {IoIosArrowDropdownCircle} from "react-icons/io"

export const subLinks= [
    {
      title: "Check vacant Houses",
      path: "/vacant-houses",
    },

    {
      title: "Check Eligibility",
      path: "/Check-eligibility",
    },
    {
      title: "Check Application Status",
      path: "/application-status",
    },
  ];



const Navbarlink = () => {
    console.log("Printing base url: ",process.env.REACT_APP_BASE_URL);
    const {token} = useSelector( (state) => state.auth );
    const {user} = useSelector( (state) => state.profile );
    const {totalItems} = useSelector( (state) => state.cart )
    const location = useLocation();

    const [ssubLinks, setSsubLinks]  = useState([]);




    useEffect( () => {
        console.log("PRINTING TOKEN", token);
    
    },[] )



    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

  return (
    <div>
     <div className='w-full h-[5px] bg-red-900 '></div>
    
    
    <div className='flex h-11 items-center justify-center border-b-[1px]  bg-blue-600 border-b-richblack-700'>
      <div className='flex w-[100%] h-[100%]  gap-6 max-w-maxContent items-center  justify-start'>
        {/* Image */}

      <Link className={`${ matchRoute("/") ? "bg-yellow-200" : "text-richblack-25"} h-[100%] p-[10px] flex  ml-7 justify-center gap-1 `}to="/">
        
        <div  className={` h-[100%]  flex  mx-auto items-center justify-center gap-1 `}>
            <div className='mb-[3px]'>
      <AiFillHome/>
      </div>
      <div className="">Home</div>
      </div>

      </Link>

      {/* Nav Links */}
      <nav className='h-[100%] '>
        <ul className='flex h-[100%]  gap-x-6 text-richblack-25'>
        {
            NavbarLinks.map( (link, index) => (
                 <li className='h-[100%] ' key={index}>
                    {
                        link.title === "Importent Links" ? (
                            <div className='relative flex items-center justify-center pt-[10px] gap-2 group'>
                                <div className=''>{link.title}</div>
                                <AiFillCaretDown/>

                                <div className='invisible absolute left-[100%]
                                    translate-x-[-50%] translate-y-[35%]
                                 top-[0%]
                                flex flex-col rounded-m bg-blue-600 z-10 text-richblack-900
                                opacity-0 transition-all duration-200 group-hover:visible
                                group-hover:opacity-100 lg:w-[300px]'>

                               

                                 {
                                    subLinks.length ? (
                                            subLinks.map( (subLink, index) => (
                                                <Link className='h-[100%]' to={`${subLink?.path}`} key={index}>
                                                    <div className={`${ matchRoute(subLink?.path) ? "bg-yellow-200 text-black" : "text-richblack-25"}  flex p-[10px]   gap-1 h-[100%] `}>{subLink.title}</div>
                                                </Link>
                                            ) )
                                    ) : (<div></div>)
                                } 

                                </div>


                            </div>

                        ) : (
                            <Link to={link?.path}>
                                <div className={`${ matchRoute(link?.path) ? "bg-yellow-200 text-black" : "text-richblack-25"}  flex p-[10px]  mx-auto items-center justify-center gap-1 h-[100%] `}>
                                    {link.title}
                                </div>
                                
                            </Link>
                        )
                    }
                </li>
             ) )
        }

        </ul>
      </nav>


        {/* Login/SignUp/Dashboard */}
        <div className='flex gap-x-4 items-center'>

       
            {
               
                    <Link to="/login">
                        <button  className={`${ matchRoute("/login") ? "bg-yellow-200 text-black" : "text-richblack-25"}  flex p-[10px]  mx-auto items-center justify-center gap-1 h-[100%] `}>
                            Login
                        </button>
                    </Link>
                
            }
               {
                
                    <Link to="/admin-login">
                        <button  className={`${ matchRoute("/admin-login") ? "bg-yellow-200 text-black" : "text-richblack-25"}  flex p-[10px]  mx-auto items-center justify-center gap-1 h-[100%] `}>
                            Admin-Login
                        </button>
                    </Link>
                
            }
            {
               
                    <Link to="/new-registration">
                        <button   className={`${ matchRoute("/new-registration") ? "bg-yellow-200 text-black" : "text-richblack-25"}  flex p-[10px]  mx-auto items-center justify-center gap-1 h-[100%] `}>
                            New Registration
                        </button>
                    </Link>
                
            }
            {
                token !== null && <ProfileDropDown />
            }
            
        </div>


      </div>
    </div>
  
    </div>
  )
}

export default Navbarlink