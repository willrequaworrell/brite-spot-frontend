import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useUser } from "../Context/UserContext";

import { TiThMenu } from "react-icons/ti";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

import SidebarLink from "./SidebarLink";


const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeLink, setActiveLink] = useState('home')
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
    console.log(event.target.id)
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
                    <Link to={"/"} className="mr-12" >
                        <h2 className="text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                            Enter
                        </h2>
                    </Link>
                    <Link to={"/history"} className="mr-12" >
                        <h2 className="text-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                            History
                        </h2>
                    </Link>
                    <Link to={"/visualize"} className="mr-12" >
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
            <div className="md:hidden absolute z-50 left-0 top-0 h-screen w-5/6 bg-gradient-to-t from-teal-500 via-yellow-500 to-pink-500  shadow-2xl ">
                <div className="absolute  bg-white p-4 rounded-full -right-8 top-1/2 hover:scale-105" onClick={() => setShowSidebar(false)}>
                    <MdOutlineKeyboardArrowLeft className="text-6xl" />
                </div>
                <div className="flex flex-col h-full w-full bg-white">
                    <div className="bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 pb-[2px]">
                        <div className="flex w-full justify-center bg-white  py-4">
                            <p className="text-2xl ">Menu</p>
                        </div>
                    </div>
                    <div className="flex flex-col h-full justify-between">
                    
                        <SidebarLink id="home" linkTo={"/"} text={"Enter"} onClick={handleLinkClick} active/>
                        <SidebarLink id="history" linkTo={"/history"} text={"History"} onClick={handleLinkClick}/>
                        <SidebarLink id="visualize" linkTo={"/visualize"} text={"Visualize"} onClick={handleLinkClick}/>
                        
                        <div className="mt-auto">
                            <div className="h-[2px] mx-4 bg-gray-100"/>
                            {/* <SidebarLink text={"Close"} onClick={() => setShowSidebar(false)} /> */}
                            <SidebarLink linkTo={"/auth"} text={"Logout"} onClick={logout}/>
                        </div>
                    
                    </div>

                </div>
            </div>
        ) : (
            <div className="absolute left-8 top-8 md:hidden hover:scale-105">
                <div className="text-2xl" onClick={toggleShowSidebar}>
                    {<TiThMenu />}
                </div>
            </div>
        )}
        
    </>
  )
}

export default Navbar