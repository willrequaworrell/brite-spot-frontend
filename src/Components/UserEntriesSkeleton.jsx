
const UserEntriesSkeleton = ({count}) => {
  

  return Array(count).fill(0).map((item, i) => (
    <div  key={i} className="flex justify-center">
        <div  className="w-full sm:w-3/4 md:w-3/5 lg:w-1/2 m-4 hover:scale-105  p-[2px] rounded-lg shadow-lg">
            <div className="relative p-2 h-full w-full items-center bg-white rounded-lg">
                <div className="flex-col animate-pulse">
                    <div className="flex">
                        <div className="flex-1">
                            <div className="flex-1 w-12 h-6 rounded-full mb-4 bg-gray-200" />
                        </div>
                        
                        <div className="w-4 h-4 rounded-full mb-4 bg-gray-200" />
                        
                    </div>
                    <div className="w-3/4 h-2 rounded-full mb-2 bg-gray-200" />
                    <div className="w-5/6 h-2 rounded-full mb-2 bg-gray-200" />
                    <div className="w-1/3 h-2 rounded-full mb-2 bg-gray-200" />
                    
                    
                </div>
                <p className="text-sm md:text-md"></p>
            </div>
        </div>

    </div>
    
    ))

}

export default UserEntriesSkeleton