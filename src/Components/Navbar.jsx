import { useState } from "react";
import { IconContext } from "react-icons";
import { FiSun } from "react-icons/fi";
import { TbUserHexagon } from "react-icons/tb";

import { Link } from "react-router-dom";


const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false)

  const toggleShowUserMenu = () => {
    setShowUserMenu(prev => !prev)
    console.log(showUserMenu)
  }

  return (
    <> 
        <div className="w-full bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 pb-1 shadow-xl">
            <div className="relative flex h-full w-full items-center bg-white ">
                {showUserMenu && 
                    <div className="absolute flex justify-center items-center right-0 top-full px-8 py-4 bg-red-400">
                        <Link to={"/auth"}>
                            <h2 className="text-lg">Logout</h2>
                        </Link>
                    </div>
                }
                <div className="flex flex-1 items-center p-2">
                    {/* <IconContext.Provider value={{className: "text-4xl mx-2"}}>
                        <FiSun />
                    </IconContext.Provider> */}
                    <img src="/public/sun.png" alt="logo" className="h-16" />
                    <h1 className="text-4xl ">BriteSpot</h1>
                    
                </div>
                <div className="flex mx-8 items-center">
                    <Link to={"/auth"} className="mx-8">
                        <h2 className="text-lg">History</h2>
                    </Link>
                    <Link to={"/auth"}>
                        <h2 className="text-lg">Word Map</h2>
                    </Link>
                    <div onClick={toggleShowUserMenu}>
                        <IconContext.Provider value={{className: "flex text-4xl ml-8 "}}>
                            <TbUserHexagon />
                        </IconContext.Provider>
                    </div>
                </div>
                <div>
                    
                </div>

            </div>
        </div>
    </>
  )
}

export default Navbar