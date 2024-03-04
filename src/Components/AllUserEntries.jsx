import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { fetchAllUserEntries } from "../util/apiCalls"

import Navbar from "./Navbar"
import { useAuth } from "../Context/AuthContext"
import EntryCard from "./EntryCard"
import Spinner from "./Spinner"

import { CSVLink } from "react-csv"
import { FaFileExport } from "react-icons/fa6";
import { RiArrowUpDownFill } from "react-icons/ri";

  
const csvHeaders = [
    { label: 'Date', key: 'date' },
    { label: 'Entry', key: 'content' },
];

const AllUserEntries = () => {
    const [userEntries, setUserEntries] = useState(null)
    const [userEntriesForCSV, setUserEntriesForCSV] = useState([])
    const [hasEntries, setHasEntries] = useState(true)
    const [newestFirst, setNewestFirst] = useState(true)
    const {currentUser} = useAuth()
    const navigate = useNavigate()

    const currentDate = new Date().toLocaleDateString().replace(/\//g, '-');

    const toggleSort = () => {
        if (newestFirst) {
            setUserEntries(userEntries.sort((a, b) => (new Date(a.date) - new Date(b.date)) ))
        } else {
            setUserEntries(userEntries.sort((a, b) => (new Date(b.date) - new Date(a.date)) ))
        }
        setNewestFirst(prev => !prev)
    }

    useEffect(() => {
        const handleFetchEntries = async () => {
            const entries = await fetchAllUserEntries(currentUser)
            if (!entries) {
                setHasEntries(false)
                return
            }
            setUserEntries(entries)
            const entriesForCSV = entries.map(({date, content}) => ({date, content}))
            setUserEntriesForCSV(entriesForCSV)
        }

        handleFetchEntries()
    }, [currentUser])

    // console.log(userEntries)
    return (
        <div className="h-screen w-full overflow-y-auto bg-gray-100">
            <Navbar/>
            <div className="flex justify-center">
                <div className="flex w-full flex-col items-center mx-16 md:mx-24 mt-24">
                    {userEntries && 
                        <div className="flex justify-around">
                            <CSVLink data={userEntriesForCSV} headers={csvHeaders} filename={`BriteSpot Export ${currentDate}.csv`}>
                                <div className="flex justify-center items-center text-center m-2 p-1 px-2 bg-gray-200 rounded-full hover:scale-105">
                                        <p className="mr-1 text-gray-600">Export</p>
                                        <FaFileExport className="text-gray-600"/>
                                </div>
                            </CSVLink>
                            <div onClick={toggleSort} className="flex justify-center items-center text-center m-2 p-1 px-2 bg-gray-200 rounded-full hover:scale-105">
                                <p className="mr-1 text-gray-600">{newestFirst ? "Newest" : "Oldest"} First</p>
                                <RiArrowUpDownFill />
                            </div>

                        </div>
                    }
                    {userEntries ? (
                        userEntries.map(entry => (
                            <EntryCard setUserEntries={setUserEntries} key={entry.id} id={entry.id} entry={entry}/>
                        ))) : (
                            hasEntries ? (
                                <div className="mt-24">
                                    <Spinner size={"large"} />
                                </div>

                            ) : (
                                <div className="w-full sm:w-3/4 md:w-3/5 lg:w-1/2 mt-32 hover:scale-105 bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 p-[2px] rounded-lg shadow-lg">
                                    <div className="relative p-4 h-full w-full items-center bg-white rounded-lg">
                                        <div className="flex justify-center text-center">
                                            <p>{`Looks like you don't have any entries yet! `} <span onClick={() => navigate("/")} className="underline cursor-pointer hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text ">{"Enter one here"}</span></p> 
                                        </div>
                                    </div>
                                </div>
                                
                            )
                        )
                    }
                    
                </div>

            </div>
        </div>
  )
}

export default AllUserEntries