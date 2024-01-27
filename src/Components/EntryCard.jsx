import moment from "moment"


const EntryCard = ({entry}) => {
    return (
        <div key={entry.content} className="w-1/2 m-4 bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 p-[2px] rounded-lg shadow-xl">
            <div className="p-1 h-full w-full items-center bg-gray-50 rounded-lg">
                <div>
                    <p className="font-bold">{moment(entry.date).format('M/DD')}</p>
                </div>
                <p>{entry.content}</p>
            </div>
        </div>
    )
}

export default EntryCard