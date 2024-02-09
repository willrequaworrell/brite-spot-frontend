import { useEffect, useState } from "react"
import EntryContainer from "./EntryContainer"
import Navbar from "./Navbar"
import { useAuth } from "../Context/AuthContext"
import { fetchMostRecentUserEntry, submitEntry } from "../util/apiCalls"
import AlreadyPostedMessage from "./AlreadyPostedMessage"



const Home = () => {
  const {currentUser} = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [hasPostedToday, setHasPostedToday] = useState(true)

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
    fetchWrapper().then(setIsLoading(false))
    
  } , [currentUser])

  return (
    <div className="h-screen w-full bg-gray-100">
        <Navbar/>
        {!isLoading && 
          <div className="flex justify-center items-center">
              {hasPostedToday ? <AlreadyPostedMessage /> : <EntryContainer/> }
          </div>
        }
    </div>
  )
}

export default Home