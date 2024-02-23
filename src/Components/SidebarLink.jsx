import { Link } from "react-router-dom";


const SidebarLink = ({id, linkTo, text, active, onClick}) => {
	return (
		<Link to={linkTo} onClick={onClick}>
			<div id={id} className=" bg-gradient-to-b from-teal-500 via-yellow-500 to-pink-500 m-4">
				<div id={id} className={`flex h-full w-full p-2 ${active ? "bg-gray-100" : "bg-white"}`} >
					<p id={id} className="text-md hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
						{text}
					</p>
				</div>
			</div>
		</Link>
	)
}

export default SidebarLink