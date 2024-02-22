import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useUser } from "../Context/UserContext";
import { useActivePage } from "../Context/ActivePageContext";

import { TiThMenu } from "react-icons/ti";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";

import SidebarLink from "./SidebarLink";


const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const {activePage, setActivePage} = useActivePage()
  const {logout } = useAuth();
  const userObj = useUser()

  const toggleShowUserMenu = () => {
    setShowUserMenu(prev => !prev)
  }

  const toggleShowSidebar = () => {
    setShowSidebar(prev => !prev)
  }

  const handleLinkClick = (event) => {
    const clickedLink = event.target.id
    console.log("clicked link: ", clickedLink)
  }
  console.log("activePage: ", activePage)
  console.log("useUser" , userObj)
  return (
    <> 
        <div className="md:hidden fixed z-10 flex justify-center w-full bg-gray-100">
            <div className="absolute left-8 top-8 md:hidden hover:scale-105">
                <div className="text-2xl" onClick={toggleShowSidebar}>
                    {<TiThMenu />}
                </div>
            </div>
            <div className="flex items-center p-2">
                <img src="/logo5.png" alt="logo" className="h-16 sm:h-20" />
            </div>
        </div>
        <div className="w-full fixed top-0 z-10 hidden sm:hidden md:block bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 pb-[2px] shadow-xl">
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
                    <Link to={"/"} className="mr-12" >
                        <div className={`bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 ${activePage === "enter" && "pb-[2px]"}`}>
                            <div className="bg-white px-2">
                                <h2 className={`text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text`}>
                                    Enter
                                </h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/history"} className="mr-12" >
                        <div className={`bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 ${activePage === "history" && "pb-[2px]"}`}>
                            <div className="bg-white px-2">
                                <h2 className={`text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text`}>
                                    History
                                </h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/visualize"} className="mr-12" >
                        <div className={`bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 ${activePage === "visualize" && "pb-[2px]"}`}>
                            <div className="bg-white px-2">
                                <h2 className={`text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text`}>
                                    Visualize
                                </h2>
                            </div>
                        </div>
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
        {showSidebar && (
            <div className="md:hidden absolute z-50 left-0 top-0 h-screen w-5/6 bg-gradient-to-t from-teal-500 via-yellow-500 to-pink-500 rounded-r-2xl shadow-2xl">
                <div className="absolute  bg-white  rounded-full right-4 top-4  hover:scale-105" onClick={() => setShowSidebar(false)}>
                    <TiDelete className="text-4xl hover:text-red-400" />
                </div>
                <div className="flex flex-col h-full w-full bg-white rounded-r-2xl">
                    <div className="bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 rounded-tr-2xl rounded-b-none pb-[2px]">
                        <div className="flex w-full justify-center bg-white rounded-tr-2xl rounded-b-none py-4">
                            <p className="text-2xl ">Menu</p>
                        </div>
                    </div>
                    <div className="flex flex-col h-full justify-between">
                    
                        <SidebarLink id="enter" linkTo={"/"} text={"Enter"} onClick={handleLinkClick} active={activePage === "enter"}/>
                        <SidebarLink id="history" linkTo={"/history"} text={"History"} onClick={handleLinkClick} active={activePage === "history"}/>
                        <SidebarLink id="visualize" linkTo={"/visualize"} text={"Visualize"} onClick={handleLinkClick} active={activePage === "visualize"}/>
                        
                        <div className="mt-auto">
                            <div className="h-[2px] mx-4 bg-gray-100"/>
                            {/* <SidebarLink text={"Close"} onClick={() => setShowSidebar(false)} /> */}
                            <SidebarLink linkTo={"/auth"} text={"Logout"} onClick={logout}/>
                        </div>
                    
                    </div>

                </div>
            </div>
        ) 
            
        }
        
    </>
  )
}

export default Navbar