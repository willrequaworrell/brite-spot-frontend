import { useState } from "react"
import { submitEntry } from "../util/apiCalls"


import CustomButton from "./CustomButton"
import { useAuth } from "../Context/AuthContext"
import Spinner from "./Spinner"

const EntryContainer = ({setHasPostedToday, setHasEntries}) => {
  
  const {currentUser} = useAuth()
  const [entryContent, setEntryContent] = useState("")
  const [loading, setLoading] = useState(false)


  const handleChange = (event) => {
    setEntryContent(event.target.value)
  }
  
  const handleSubmit = async () => {
    setLoading(true)
    setEntryContent("")
    const response = await submitEntry({"userId": currentUser, "content": entryContent})
    setLoading(false)
    if (response.status === "success" ) {
      setHasPostedToday(true)
      setHasEntries(true)
    }
  }

  const handleKeyDown = (event) => {
    if (loading) {
      return
    }
    if (event.key === "Enter") {
      event.preventDefault(); 
      handleSubmit();
    }
  };

  
  return (
    <div className="w-full sm:w-3/4 md:w-[60%] lg:w-[50%] justify-center mx-10 my-32 md:my-16 md:mx-16 rounded-xl bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 p-[2px] shadow-xl">
        <div className="h-full w-full rounded-xl bg-white p-4">
            <div className="m-2">
                <h2 className="text-md sm:text-2xl">{`What's one bright spot from today?`}</h2>
            </div>
            <div className="flex flex-col items-center ">
              <div className="flex w-full m-2 p-[2px] bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 rounded-xl">
                <div className="flex w-full justify-center items-center bg-gray-50 rounded-xl  ">
                  
                  <textarea 
                    value={entryContent} 
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className="w-full min-h-48 p-2 text-xl rounded-xl  bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 inline-block text-transparent bg-clip-text" >
                  </textarea>
                  
                </div>

              </div>
            {loading ? <Spinner/> : <CustomButton text={"Submit"} onClick={handleSubmit}/>}

            </div>
        </div>
    </div>
  )
}

export default EntryContainer