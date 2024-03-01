import { useEffect, useState } from "react"
import EntryContainer from "./EntryContainer"
import Navbar from "./Navbar"
import { useAuth } from "../Context/AuthContext"
import { fetchMostRecentUserEntry, submitEntry } from "../util/apiCalls"
import AlreadyPostedMessage from "./AlreadyPostedMessage"
import Spinner from "./Spinner"



const Home = () => {
  const {currentUser} = useAuth()
  const [hasPostedToday, setHasPostedToday] = useState(null)
  const [hasEntries, setHasEntries] = useState(true)

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
        if (!response) {
          setHasEntries(false)
        } else {
          const postIsToday = isToday(response.date)
          setHasPostedToday(postIsToday)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchWrapper()
    
  } , [currentUser])
  
  console.log("entries?", hasEntries)
  return (
    <div className="h-screen w-full overflow-y-auto bg-gray-100">
        <Navbar/>
        {(hasPostedToday === null && hasEntries) ? (
          <div className="w-full mt-24 flex justify-center items-center">
            <Spinner size={"large"}/>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            {!hasEntries || !hasPostedToday ? <EntryContainer setHasPostedToday={setHasPostedToday} setHasEntries={setHasEntries}/> : <AlreadyPostedMessage /> }
          </div>
        )}
    </div>
  )
}

export default Home