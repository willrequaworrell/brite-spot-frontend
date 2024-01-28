import { useState } from "react"
import { submitEntry } from "../util/apiCalls"

import CustomButton from "./CustomButton"
import { useAuth } from "../Context/AuthContext"

const EntryContainer = () => {
  const [entryContent, setEntryContent] = useState("")
  const {currentUser} = useAuth()

  const handleChange = (event) => {
    setEntryContent(event.target.value)
  }
  
  /* THIS IS CURRENTLY HARDCODED TO userId=1 */
  const handleSubmit = () => {
    submitEntry({"userId": currentUser, "content": entryContent})
    setEntryContent("")
  }

  return (
    // <div className="w-[50%] justify-center m-8 rounded-xl bg-gradient-to-r from-green-800 via-indigo-500 to-yellow-800 p-2 shadow-xl">
    <div className="w-[50%] justify-center m-16 rounded-xl bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 p-[2px] shadow-xl">
        <div className="h-full w-full rounded-xl bg-white p-4">
            <div className="m-2">
                <h2 className="text-2xl">What's one bright spot from today?</h2>
            </div>
            <div className="flex flex-col items-center ">
              <div className="flex w-full m-2 p-[2px] bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 rounded-xl">
                <div className="flex w-full justify-center items-center bg-gray-50 rounded-xl  ">
                  
                  <textarea 
                    value={entryContent} 
                    onChange={handleChange}
                    className="w-full min-h-48 p-2 text-xl rounded-xl  bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 inline-block text-transparent bg-clip-text" >
                  </textarea>
                  
                </div>

              </div>
            <CustomButton text={"Submit"} onClick={handleSubmit}/>

            </div>
        </div>
    </div>
  )
}

export default EntryContainer