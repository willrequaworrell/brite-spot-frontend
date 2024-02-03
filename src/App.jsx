import { Route, Routes } from "react-router-dom"

import { AuthProvider } from "./Context/AuthContext"
import { UserProvider } from "./Context/UserContext"
import Auth from "./Components/Auth"
import Home from "./Components/Home"
import AllUserEntries from "./Components/AllUserEntries"
import ProtectedRoute from "./Components/ProtectedRoute"
import Visualize from "./Components/Visualize"

function App() {

	return (
		<>
			<AuthProvider>
				<UserProvider>
					<Routes>
						<Route path="/auth" element={<Auth/>}/>
						<Route element={<ProtectedRoute/>}>
							<Route path="/" element={<Home/>}/>
							<Route path="/history" element={<AllUserEntries/>}/>
							<Route path="/visualize" element={<Visualize/>}/>
						</Route>
					</Routes>
				</UserProvider>
			</AuthProvider>
		</>
	)
}

export default App
