import { useEffect, useState } from "react"
import Cookies from "js-cookie"

import { useAuth } from "../Context/AuthContext";

import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";


const Auth = () => {
	const [authModeToggle, setAuthModeToggle] = useState("Sign Up")
	const {currentUser, login} = useAuth()

	const toggleAuthMode = () => {
		if (authModeToggle === "Sign Up") {
			setAuthModeToggle("Login")
		} else {
			setAuthModeToggle("Sign Up")
		}
	}

	useEffect( () => {
		const tokenCookie = Cookies.get('jwt');
		if (tokenCookie && !currentUser) {
            console.log("logging in on auth")
            login(tokenCookie);
        }
	} , [currentUser, login])

	return (
		<div className="h-screen w-full pt-16 flex-col justify-center items-center bg-gray-100">
			<div className="flex justify-center items-center">
				<img src="/logo5.png" alt="logo" className="h-20 md:h-28 " />
			</div>
			<div className="flex justify-center">
				<div className="w-3/4 sm:w-1/2 md:w-[35%]  flex justify-center rounded-xl bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 p-[2px] shadow-xl">
					<div className="h-full w-full rounded-xl bg-white p-4">
						<div className="flex-col items-center text-center m-2">
							<h2 className="text-xl md:text-2xl m-2">{authModeToggle}</h2>
							<div className="h-[2px] w-full bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500"></div>
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