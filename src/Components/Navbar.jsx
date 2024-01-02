import { IconContext } from "react-icons";
import { FiSun } from "react-icons/fi";

import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <> 
        <div className="w-full bg-gradient-to-r from-green-800 via-indigo-500 to-yellow-800 pb-1 shadow-xl">
            <div className="flex h-full w-full bg-white ">
                <div className="flex flex-1 items-center p-2">
                    <IconContext.Provider value={{className: "text-6xl mx-2"}}>
                        <FiSun />
                    </IconContext.Provider>
                    <h1 className="text-4xl">BriteSpot</h1>
                    <Link to={"/auth"}>
                        <h2 className="text-lg">View All</h2>
                    
                    </Link>
                    
                </div>
                <div>
                    
                </div>

            </div>
        </div>
    </>
  )
}

export default Navbar