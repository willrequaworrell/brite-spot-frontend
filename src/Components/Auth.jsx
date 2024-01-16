import { useState } from "react"
import { useForm } from "react-hook-form";
import CustomButton from "./CustomButton";

import { createUser, signInUser} from "../util/apiCalls";

const Auth = () => {
	const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
	const [authModeToggle, setAuthModeToggle] = useState("Sign Up")

	const onSubmit = (data) => {
		console.log(data)
		if (authModeToggle === "Sign Up") {
			console.log("first")
			createUser(data)
		} else {
			signInUser(data)
		}
		reset({ 
            email: "",   
            password: "",
            first_name: ""
        });
	}

	const toggleAuthMode = () => {
		if (authModeToggle === "Sign Up") {
			setAuthModeToggle("Login")
		} else {
			setAuthModeToggle("Sign Up")
		}
	}

	// console.log(watch("email"))
	// console.log(watch("password"))

	console.log(authModeToggle)
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
						<form onSubmit={handleSubmit(onSubmit)} className="flex-col items-center w-full">
							{/* register your input into the hook by invoking the "register" function */}
							<div className="">
								{authModeToggle === "Sign Up" && (
									<div className="m-4 flex-col text-center">
									<p className="">First Name</p>
									<input {...register("first_name", { required: true })} className="p-1 border-2 border-black rounded-lg"/>
								</div>
								)}
								<div className="m-4 flex-col text-center">
									<p className="">Email</p>
									<input {...register("email", { required: true })} className="p-1 border-2 border-black rounded-lg"/>
								</div>
								<div className="m-4 text-center">
									<p>Password</p>
									<input {...register("password", { required: true })} type="password" className="p-1 border-2 border-black rounded-lg" />
								</div>

							</div>
							{/* errors will return when field validation fails  */}
							{errors.exampleRequired && <span>This field is required</span>}
							<div className="flex justify-center">
								<div className="w-1/4 text-center border-4 border-black rounded-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500">
									<input type="submit" className="cursor-pointer" />
								</div>

							</div>
							
							
						</form>
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