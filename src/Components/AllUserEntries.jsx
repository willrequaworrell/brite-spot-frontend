import { useEffect, useState } from "react"
import { fetchAllUserEntries } from "../util/apiCalls"

import Navbar from "./Navbar"


const AllUserEntries = () => {
    const [userEntries, setUserEntries] = useState(null)

    const handleFetchEntries = async () => {
        const entries = await fetchAllUserEntries(1) // HARDCODED
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
                    <div key={entry.content} className=" w-1/2 m-4 bg-red-300 border-black border-2">
                        <div>
                            <p>{entry.date}</p>
                        </div>
                        <p>{entry.content}</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default AllUserEntries