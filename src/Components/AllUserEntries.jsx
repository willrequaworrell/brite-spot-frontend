import { useEffect, useState } from "react"
import { fetchAllUserEntries } from "../util/apiCalls"

import Navbar from "./Navbar"
import { useAuth } from "../Context/AuthContext"
import EntryCard from "./EntryCard"


const AllUserEntries = () => {
    const [userEntries, setUserEntries] = useState(null)

    const {currentUser} = useAuth()

    const handleFetchEntries = async () => {
        const entries = await fetchAllUserEntries(currentUser) // HARDCODED
        setUserEntries(entries)
    }

    useEffect(() => {
        handleFetchEntries()
    }, [])

    console.log(userEntries)
    return (
        <div className="h-full w-full">
            <Navbar/>
            <div className="flex h-full w-full flex-col items-center">
                {userEntries && userEntries.map(entry => (
                    <EntryCard key={entry.content} entry={entry}/>
                ))}
            </div>
        </div>
  )
}

export default AllUserEntries