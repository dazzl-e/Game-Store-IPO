import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function SideBar({triggerSiderBar, setTriggerSideBar}) {
    

  return (
    <>
    {triggerSiderBar && 
        (
            <div className="absolute top-0 left-0 h-screen w-full bg-black bg-opacity-30 z-50 overflow-hidden">                
                <div className="relative w-[400px] bg-white h-screen flex flex-col justify-center items-center">
                  <FontAwesomeIcon onClick={() => setTriggerSideBar(false)} className="absolute top-0 right-0 h-6 w-6 hover:cursor-pointer p-3" icon={faXmark}/>
                    This will be filter by price or something else 
                </div>
            </div>
        )
    }
    </>
    
  )
}
