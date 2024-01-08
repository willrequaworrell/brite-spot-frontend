import { useState } from "react"

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
				<img src="/logo2.png" alt="logo" className="h-64 -mt-8 -mr-12" />
				<h1 className="text-8xl ">BriteSpot</h1>
			</div>
			<div className="flex justify-center">
				<div className="w-[35%] h-[28rem] flex justify-center rounded-xl bg-black p-1 shadow-xl">
					<div className="h-full w-full rounded-xl bg-white p-4">
						<div className="flex justify-center m-2">
							<h2 className="text-2xl">{authModeToggle}</h2>
						</div>
						<div className="flex justify-center m-2" onClick={toggleAuthMode}>
							{authModeToggle === "Sign Up" ? (
								<p>Already have an account?</p>
							) : (
								<p>Don't have an account yet?</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Auth