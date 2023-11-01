import "./slide.css"
import { useState } from 'react';
import { useRef } from 'react';


export  default function InfiniteLooper() {
    const [looperInstances, setLooperInstances] = useState(1);
  

    return (
      <div className="looper" >
        <div className="looper__innerList">
          
            <div
              
              className="looper__listInstance  flex flex-col mr-auto justify-end"
              style={{
                animationDuration: "18s",
                animationDirection: "left",
              }}
            >
                <div className="flex ml-[500px] text-red-900">
                For Letest news and notificantions of PU-Awas, please view News/Notifications page.
              </div>

            </div>
          
        </div>
      </div>
    );
  }