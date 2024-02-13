import { useEffect, useState } from "react"
import { fetchAllUserEntries } from "../util/apiCalls"

import Navbar from "./Navbar"
import { useAuth } from "../Context/AuthContext"
import EntryCard from "./EntryCard"
import Spinner from "./Spinner"


const AllUserEntries = () => {
    const [userEntries, setUserEntries] = useState(null)
    const [hasEntries, setHasEntries] = useState(true)
    const {currentUser} = useAuth()

    

    useEffect(() => {
        const handleFetchEntries = async () => {
            const entries = await fetchAllUserEntries(currentUser) 
            if (!entries) {
                setHasEntries(false)
            }
            setUserEntries(entries)
        }

        handleFetchEntries()
    }, [currentUser])

    console.log(userEntries)
    return (
        <div className="h-screen w-full bg-gray-100">
            <Navbar/>
            <div className="flex h-full w-full flex-col items-center">
                {userEntries ? (
                    userEntries.map(entry => (
                        <EntryCard setUserEntries={setUserEntries} key={entry.id} id={entry.id} entry={entry}/>
                    ))) : (
                        hasEntries ? (
                            <div className="mt-24">
                                <Spinner size={"large"} />
                            </div>

                        ) : (
                            <p>{`Looks like you don't have any entries yet! Enter one here`}</p>
                        )
                    )
                }
            </div>
        </div>
  )
}

export default AllUserEntries