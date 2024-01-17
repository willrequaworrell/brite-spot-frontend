import { useState } from "react"

import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const Auth = () => {
	const [authModeToggle, setAuthModeToggle] = useState("Sign Up")

	const toggleAuthMode = () => {
		if (authModeToggle === "Sign Up") {
			setAuthModeToggle("Login")
		} else {
			setAuthModeToggle("Sign Up")
		}
	}

	return (
		<div className="h-full w-full flex-col justify-center items-center">
			<div className="flex justify-center items-center">
				<img src="/logo2.png" alt="logo" className="h-32  -mr-4" />
				<h1 className="text-6xl ">BriteSpot</h1>
			</div>
			<div className="flex justify-center">
				<div className="w-[35%]  flex justify-center rounded-xl bg-black p-1 shadow-xl">
					<div className="h-full w-full rounded-xl bg-white p-4">
						<div className="flex-col items-center text-center m-2">
							<h2 className="text-2xl m-2">{authModeToggle}</h2>
							<div className="h-1 w-full bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500"></div>
						</div>
						{authModeToggle === "Sign Up" ? (
							<SignUpForm/>
						) : (
							<LoginForm />
						)}
				
						<div className="flex justify-center m-2" onClick={toggleAuthMode}>
							{authModeToggle === "Sign Up" ? (
								<p className="text-xs cursor-pointer hover:border-b hover:border-black">Already have an account?</p>
							) : (
								<p className="text-xs cursor-pointer hover:border-b hover:border-black">Don't have an account yet?</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Auth