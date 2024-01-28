import { useEffect, useState } from "react"
import { fetchAllUserEntries } from "../util/apiCalls"

import Navbar from "./Navbar"
import { useAuth } from "../Context/AuthContext"
import EntryCard from "./EntryCard"


const AllUserEntries = () => {
    const [userEntries, setUserEntries] = useState(null)

    const {currentUser} = useAuth()

    const handleFetchEntries = async () => {
        const entries = await fetchAllUserEntries(currentUser) 
        setUserEntries(entries)
    }

    useEffect(() => {
        handleFetchEntries()
    }, [])

    console.log(userEntries)
    return (
        <div className="h-screen w-full bg-gray-100">
            <Navbar/>
            <div className="flex h-full w-full flex-col items-center">
                {userEntries && userEntries.map(entry => (
                    <EntryCard setUserEntries={setUserEntries} key={entry.id} id={entry.id} entry={entry}/>
                ))}
            </div>
        </div>
  )
}

export default AllUserEntries