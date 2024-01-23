import { Route, Routes } from "react-router-dom"

import { AuthProvider } from "./Context/AuthContext"
import Auth from "./Components/Auth"
import Home from "./Components/Home"
import AllUserEntries from "./Components/AllUserEntries"

function App() {

	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/auth" element={<Auth/>}/>
					<Route path="/history" element={<AllUserEntries/>}/>
				</Routes>
			</AuthProvider>
		</>
	)
}

export default App
