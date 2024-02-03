import { useState } from "react";
import { IconContext } from "react-icons";
import { FiSun } from "react-icons/fi";
import { TbUserHexagon } from "react-icons/tb";
import { useAuth } from "../Context/AuthContext";

import { Link } from "react-router-dom";
import { useUser } from "../Context/UserContext";


const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false)

  const { currentUser, login, logout } = useAuth();
  const userObj = useUser()

  const toggleShowUserMenu = () => {
    setShowUserMenu(prev => !prev)
    console.log( showUserMenu)
  }

  console.log("useUser" , userObj)
  return (
    <> 
        <div className="w-full bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 pb-[2px] shadow-xl">
            <div className="relative flex h-full w-full items-center bg-white ">
                {showUserMenu && 
                    <div className="absolute flex justify-center items-center right-0 top-full px-8 py-4 bg-red-400">
                        <Link to={"/auth"} onClick={logout}>
                            <h2 className="text-lg">Logout</h2>
                        </Link>
                    </div>
                }
                <div className="flex flex-1 items-center p-2">
                    {/* <IconContext.Provider value={{className: "text-4xl mx-2"}}>
                        <FiSun />
                    </IconContext.Provider> */}
                    <img src="/logo5.png" alt="logo" className="h-20 -my-4" />
                    {/* <h1 className="text-4xl ">BriteSpot</h1> */}
                    
                </div>
                <div className="flex mx-8 items-center">
                    <Link to={"/"} className="mr-12">
                        <h2 className="text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">Home</h2>
                    </Link>
                    <Link to={"/history"} className="mr-12">
                        <h2 className="text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                            History
                        </h2>
                    </Link>
                    <Link to={"/visualize"} className="mr-12">
                        <h2 className="text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                            Visualize
                        </h2>
                    </Link>
                    <div onClick={toggleShowUserMenu} className="flex items-center">
                        <h2 className="text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                            {/* {currentUser} */}
                            {userObj && userObj.userData.first_name}
                        </h2>
                        <IconContext.Provider value={{className: "flex rounded-full text-4xl cursor-pointer hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500"}}>
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