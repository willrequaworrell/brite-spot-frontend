import { Link } from "react-router-dom";
import { useActivePage } from "../Context/ActivePageContext";

const NavbarLink = ({path, text, pageName}) => {
    const {activePage} = useActivePage()

    return (
        <Link to={path} className="mr-12" >
            <div className={`bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 ${activePage === pageName && "pb-[2px]"}`}>
                <div className="bg-white px-2">
                    <h2 className={`text-lg text-gray-700 hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text`}>
                        {text}
                    </h2>
                </div>
            </div>
        </Link>
    )
}

export default NavbarLink