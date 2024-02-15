import { useState } from "react";
import { IconContext } from "react-icons";
import { FiSun } from "react-icons/fi";
import { TbUserHexagon } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";
import { useAuth } from "../Context/AuthContext";

import { Link } from "react-router-dom";
import { useUser } from "../Context/UserContext";


const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const { currentUser, login, logout } = useAuth();
  const userObj = useUser()

  const toggleShowUserMenu = () => {
    setShowUserMenu(prev => !prev)
  }

  const toggleShowSidebar = () => {
    setShowSidebar(prev => !prev)
  }

  console.log("useUser" , userObj)
  return (
    <> 
        <div className="w-full hidden sm:hidden md:block bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 pb-[2px] shadow-xl">
            <div className="relative flex h-full w-full items-center bg-white ">
                {showUserMenu && 
                    <div className="absolute flex justify-center items-center right-0 top-full px-8 py-4 bg-red-400">
                        <Link to={"/auth"} onClick={logout}>
                            <h2 className="text-lg">Logout</h2>
                        </Link>
                    </div>
                }
                <div className="flex flex-1 items-center p-2">
                    <img src="/logo5.png" alt="logo" className="h-20 -my-4" />
                </div>
                <div className="flex mx-8 items-center">
                    <Link to={"/"} className="mr-12">
                        <h2 className="text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                            Enter
                        </h2>
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
                    <div onClick={toggleShowUserMenu} className="flex items-center px-4">
                        <h2 className="text-lg font-bold hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                            {/* {currentUser} */}
                            {userObj && userObj.userData.first_name}
                        </h2>
                        {/* <IconContext.Provider value={{className: "flex rounded-full text-4xl cursor-pointer hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500"}}>
                            <TbUserHexagon />
                        </IconContext.Provider> */}
                    </div>
                </div>
                <div>
                    
                </div>

            </div>
        </div>
        {showSidebar ? (
            <div className="md:hidden absolute z-50 left-0 top-0 h-screen w-1/2 bg-gradient-to-t from-teal-500 via-yellow-500 to-pink-500 pr-[2px] shadow-2xl ">
                <div className="flex flex-col h-full w-full bg-white">
                    <div className="flex w-full justify-center py-4 border-b-2 border-gray-300">
                        <p className="text-2xl ">Menu</p>
                    </div>
                    <div className="flex flex-col">
                    
                        <div className=" ">
                            <Link to={"/"} className="">
                                <div className=" bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 rounded-xl p-[2px] m-2">
                                    <div className="flex h-full w-full rounded-xl p-2 bg-white">
                                        <h2 className="text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                                            Enter
                                        </h2>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className=" ">
                            <Link to={"/history"} className="">
                                <div className=" bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 rounded-xl p-[2px] m-2">
                                    <div className="flex h-full w-full rounded-xl p-2 bg-white">
                                        <h2 className="text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                                            History
                                        </h2>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className=" ">
                            <Link to={"/visualize"} className="">
                                <div className=" bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 rounded-xl p-[2px] m-2">
                                    <div className="flex h-full w-full rounded-xl p-2 bg-white">
                                        <h2 className="text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                                            Visualize
                                        </h2>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="">
                            <Link to={"/visualize"} className="" onClick={logout}>
                                <div className=" bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 rounded-xl p-[2px] m-2">
                                    <div className="flex h-full w-full rounded-xl p-2 bg-white">
                                        <h2 className="text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                                            Logout
                                        </h2>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    
                    </div>

                </div>
            </div>
        ) : (
            <div className="absolute left-8 top-8 md:hidden">
                <div className="text-2xl" onClick={toggleShowSidebar}>
                    {<TiThMenu />}

                </div>
            </div>
        )}
        
    </>
  )
}

export default Navbar