import { TiDelete } from "react-icons/ti";

import SidebarLink from "./SidebarLink";
import { useActivePage } from "../Context/ActivePageContext";
import { useAuth } from "../Context/AuthContext";


const Sidebar = ({setShowSidebar}) => {
    const {activePage, setActivePage} = useActivePage()
    const {logout } = useAuth();

    const handleLinkClick = (event) => {
        const clickedLink = event.target.id
        console.log("clicked link: ", clickedLink)
      }

    return (
        <div className="md:hidden absolute z-50 left-0 top-0 h-screen w-5/6 bg-gradient-to-t from-teal-500 via-yellow-500 to-pink-500 rounded-r-2xl shadow-2xl">
                <div className="absolute  bg-white  rounded-full right-4 top-4  hover:scale-105" onClick={() => setShowSidebar(false)}>
                    <TiDelete className="text-4xl hover:text-red-400" />
                </div>
                <div className="flex flex-col h-full w-full bg-white rounded-r-2xl">
                    <div className="bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 rounded-tr-2xl rounded-b-none pb-[2px]">
                        <div className="flex w-full justify-center bg-white rounded-tr-2xl rounded-b-none py-4">
                            <p className="text-xl ">Menu</p>
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

export default Sidebar