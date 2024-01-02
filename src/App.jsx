import { Route, Routes } from "react-router-dom"

import Auth from "./Components/Auth"
import Home from "./Components/Home"

function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/auth" element={<Auth/>}/>
			</Routes>
		</>
	)
}

export default App
