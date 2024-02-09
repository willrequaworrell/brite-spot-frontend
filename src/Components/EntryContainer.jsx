import { useEffect, useState } from "react"
import { fetchMostRecentUserEntry, submitEntry } from "../util/apiCalls"


import CustomButton from "./CustomButton"
import { useAuth } from "../Context/AuthContext"
import Spinner from "./Spinner"

const EntryContainer = ({setHasPostedToday}) => {
  
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

  const isToday = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    return date.getDate() === today.getDate() &&
          date.getMonth() === today.getMonth() &&
          date.getFullYear() === today.getFullYear();
  }

  useEffect(() => {
    const fetchWrapper = async () => {
      try {
        const response = await fetchMostRecentUserEntry(currentUser)
        const postIsToday = isToday(response.date)
        setHasPostedToday(postIsToday)
      } catch (error) {
        console.log(error)
      }
    }
    fetchWrapper()
  } , [currentUser])
  
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