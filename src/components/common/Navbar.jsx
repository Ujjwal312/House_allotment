import React, { useEffect } from 'react'

import { Link, matchPath } from 'react-router-dom'

import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useState } from 'react'

import Navbarlink from './Navbarlink'

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



const Navbar = () => {
    console.log("Printing base url: ",process.env.REACT_APP_BASE_URL);
    const {token} = useSelector( (state) => state.auth );
    const {user} = useSelector( (state) => state.profile );
    const {totalItems} = useSelector( (state) => state.cart )
    const location = useLocation();

    const [ssubLinks, setSsubLinks]  = useState([]);

    // const fetchSublinks = async() => {
    //     try{
    //         const result = await apiConnector("GET", categories.CATEGORIES_API);
    //         console.log("Printing Sublinks result:" , result);
    //         setSsubLinks(result.data.data);
    //     }
    //     catch(error) {
    //         console.log("Could not fetch the category list");
    //     }
    // }


    useEffect( () => {
       
       
    },[] )



    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

  return (
    <div >
     <div className='w-full h-[5px] bg-red-900 '></div>
     <div className='w-full h-[100px] flex items-cente bg-gradient-to-l from-white to-blue-500 justify-start'>
    <img src="https://puchd.ac.in/asset/pu-logo.png"  className='m-[20px] mt-1 w-[100px] h-[90px] '   alt="" />
    <div className='flex  flex-col '>
     <div className='  py- text-4xl font-semibold ' class="bg-[url('https://img.freepik.com/premium-vector/bricks-with-charming-red-color_628973-245.jpg')] bg-cover bg-clip-text object-contain  text-transparent font-bold bg-transparent text-7xl bg-center">PU<span>-</span>Awas</div>
     <div className='mx-auto py- text-1xl font-semibold '>House e-councelling service for Panjab University employee</div>
</div>

     </div>
     { !token&&
    
<Navbarlink/>
     }
  
    </div>
  )
}

export default Navbar
