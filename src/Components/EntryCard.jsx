import moment from "moment"
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import Spinner from "./Spinner";

import { deleteEntry } from "../util/apiCalls";


const EntryCard = ({entry, id, setUserEntries}) => {
    const [deleteLoading, setDeleteLoading] = useState(false)


    const handleDelete = async () => {
        setDeleteLoading(true)
        try {
            const response = await deleteEntry(id)
            console.log(response)
            setUserEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id ))
        } catch (error) {
            console.log(error)
        }
        
        
        
        setDeleteLoading(false)
    }
    
    return (
        <div key={entry.content} className="w-full sm:w-3/4 md:w-3/5 lg:w-1/2 m-4 hover:scale-105 bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 p-[2px] rounded-lg shadow-lg">
            <div className="relative p-2 h-full w-full items-center bg-white rounded-lg">
                <div className="flex">
                    <p className="text-md md:text-lg font-bold flex-1">{moment(entry.date).format('M/DD')}</p>
                    <div onClick={handleDelete}>
                        {deleteLoading ? <Spinner size={"small"}/> : <TiDelete className="text-2xl hover:text-red-400" />}
                    </div>
                </div>
                <p className="text-sm md:text-md">{entry.content}</p>
            </div>
        </div>
    )
}

export default EntryCard