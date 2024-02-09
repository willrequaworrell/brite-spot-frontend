
const AlreadyPostedMessage = () => {
  return (
    <div className="w-[50%] justify-center m-16 rounded-xl bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 p-[2px] shadow-xl">
       <div className="h-full w-full rounded-xl bg-white p-8">
        <div className="bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500">
          <div className="h-full w-full bg-white">
            <p className="text-2xl text-center">{"Great work making an entry today!"}</p>

          </div>
        </div>

          <p className="text-sm text-center px-32">{"Come back tomorrow to make another or delete today's entry from your History to submit again"}</p>
       </div>
    </div>
  )
}

export default AlreadyPostedMessage