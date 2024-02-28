import { Route, Routes, Navigate } from "react-router-dom"

import { useAuth } from "./Context/AuthContext"
import { UserProvider } from "./Context/UserContext"
import { ActivePageProvider } from "./Context/ActivePageContext"
import Auth from "./Components/Auth"
import Home from "./Components/Home"
import AllUserEntries from "./Components/AllUserEntries"
import ProtectedRoute from "./Components/ProtectedRoute"
import Visualize from "./Components/Visualize"

function App() {
	const {currentUser} = useAuth()

	return (
		<>
			{currentUser ? console.log("there is a user!") : console.log("no user!")}
			<UserProvider>
				<ActivePageProvider>
					<Routes>
						<Route
							path="/auth"
							element={currentUser ? <Navigate to="/" /> : <Auth />}
						/>
						{/* <Route path="/auth" element={<Auth/>}/> */}
						<Route element={<ProtectedRoute/>}>
							<Route path="/" element={<Home/>}/>
							<Route path="/history" element={<AllUserEntries/>}/>
							<Route path="/visualize" element={<Visualize/>}/>
						</Route>
					</Routes>
				</ActivePageProvider>
			</UserProvider>
			
		</>
	)
}

export default App
