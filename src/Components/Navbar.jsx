import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useUser } from "../Context/UserContext";
import { useActivePage } from "../Context/ActivePageContext";

import { TiThMenu } from "react-icons/ti";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import NavbarLink from "./NavbarLink";




const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const {activePage} = useActivePage()
  const {logout } = useAuth();
  const userObj = useUser()

  const toggleShowUserMenu = () => {
    setShowUserMenu(prev => !prev)
  }

  const toggleShowSidebar = () => {
    setShowSidebar(prev => !prev)
  }

  
//   console.log("activePage: ", activePage)
//   console.log("useUser" , userObj)
  return (
    <> 
        <div className="md:hidden fixed z-10 flex justify-center w-full bg-gray-100">
            <div className="absolute left-8 top-8 md:hidden hover:scale-105">
                <div className="text-2xl" onClick={toggleShowSidebar}>
                    {<TiThMenu />}
                </div>
            </div>
            <div className="flex items-center p-2 mt-2">
                <img src="/logo6.png" alt="logo" className="h-20 sm:hidden" />
                <img src="/logo5.png" alt="logo" className="h-20 hidden sm:block" />
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
                    <NavbarLink path={"/"} text={"Enter"} pageName={"enter"}/>
                    <NavbarLink path={"/history"} text={"History"} pageName={"history"}/>
                    <NavbarLink path={"/visualize"} text={"Visualize"} pageName={"visualize"}/>
                    
                    <div onClick={toggleShowUserMenu} className="flex items-center px-4">
                        <h2 className="text-lg font-bold hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                            {/* {currentUser} */}
                            {userObj && userObj.userData.first_name}
                        </h2>
                        <div className="text-xl">
                            {showUserMenu ? <FaCaretUp /> : <FaCaretDown />}
                        </div>
                        {/* <IconContext.Provider value={{className: "flex rounded-full text-4xl cursor-pointer hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500"}}>
                            <TbUserHexagon />
                        </IconContext.Provider> */}
                    </div>
                </div>
                <div>
                    
                </div>

            </div>
        </div>
        {showSidebar && <Sidebar setShowSidebar={setShowSidebar}/>}
        
    </>
  )
}

export default Navbar