import { Route, Routes } from "react-router-dom"

import { AuthProvider } from "./Context/AuthContext"
import { UserProvider } from "./Context/UserContext"
import Auth from "./Components/Auth"
import Home from "./Components/Home"
import AllUserEntries from "./Components/AllUserEntries"

function App() {

	return (
		<>
			<AuthProvider>
				<UserProvider>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/auth" element={<Auth/>}/>
						<Route path="/history" element={<AllUserEntries/>}/>
					</Routes>
				</UserProvider>
			</AuthProvider>
		</>
	)
}

export default App
