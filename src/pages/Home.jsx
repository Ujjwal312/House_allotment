import React from 'react'

import InfiniteLooper from "../components/common/slide"


import TimelineSection from '../components/core/HomePage/TimelineSection'



const Home = () => {
  return (
    <div>
     
  <div className='flex h-11 items-center  border-b-[1px]  bg-blue-900 border-b-richblack-700'>
        <div className='flex w-full '>
            <div className='text-white w-[12%] pl-3 border-r-2 h-full'>
            LATEST NEWS
            </div>
            <div className='text-white pl-4 w-[80%]'>
     <a href="">what is your name bro<span className='bg-red-900 text-white text-[10px] p-1 animate-pulse m-2'>New</span>
     </a>
            </div>
        </div>
    </div>
    <InfiniteLooper speed="1" direction="left">
    // the stuff you want to loop
</InfiniteLooper>
      {/*Section 2  */}
      <div className='bg-pure-greys-5 text-richblack-700'>
      

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

              
                

                <TimelineSection />

               

            </div>

            

      </div>



      <div className='flex h-11 items-center mt-14  border-b-[1px]  bg-blue-900 border-b-richblack-700'>
        <div className='flex  text-center w-full '>
          
    <div className="text-center text-white mx-auto">Made with ❤️ Copywright © 2023 PU-Awas</div>
        </div>
    </div>

    </div>
  )
}

export default Home
