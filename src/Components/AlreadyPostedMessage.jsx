
const AlreadyPostedMessage = () => {
  return (
    <div className="w-full sm:w-3/4 md:w-[50%] justify-center mt-32 m-16 md:m-32 rounded-xl bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 p-[2px] shadow-xl">
       <div className="h-full w-full flex-col rounded-xl bg-white p-4 sm:p-8">
        <div className="bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500">
          <div className="h-full w-full bg-white">
            <p className="text-lg sm:text-xl md:text-2xl text-center">{"Great work making an entry today!"}</p>

          </div>
        </div>
        <div className="w-full h-full">
          <p className="text-xs md:text-sm text-center ">{"Come back tomorrow to make another or delete today's entry from your History to submit again"}</p>
        </div>
       </div>
    </div>
  )
}

export default AlreadyPostedMessage