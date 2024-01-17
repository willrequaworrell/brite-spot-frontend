import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";

import { signInUser } from "../util/apiCalls";
import { useState } from "react";
import Spinner from "./Spinner";



const LoginForm = () => {
	const navigate = useNavigate()
	const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

	const [showError, setShowError] = useState(false)
	const [loading, setLoading] = useState(false)


	const onSubmit = async (credentials) => {
		setLoading(true)
		setShowError(false)
		// console.log("login attempt")
		reset({ 
			email: "",   
            password: "",
        });
		const response = await signInUser(credentials)
		setLoading(false)
		console.log("Login Status: ", response.status)
		if (response.status === "success") {
			navigate("/")
		} else {
			setShowError(true)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex-col items-center w-full">
		<div className="">
			
			<div className="m-4 flex-col text-center">
				<p className="">Email</p>
				<input {...register("email", { required: true })} className="p-1 border-2 border-black rounded-lg"/>
				{errors.email && <p className="text-xs text-red-500">Please enter a valid email</p>}
			</div>
			<div className="m-4 text-center">
				<p>Password</p>
				<input {...register("password", { required: true })} type="password" className="p-1 border-2 border-black rounded-lg" />
				{showError && <p className="mt-2 text-xs text-red-500">Invalid Credentials</p> }
				{errors.password && <p className="text-xs text-red-500">Password must include 8 characters, at least 1 number, and at least 1 special character</p>}
			</div>

		</div>
		
		<div className="flex justify-center">
			<div className={`flex justify-center items-center w-1/4 p-1 text-center rounded-lg ${!loading && "border-4 border-black hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500" }`}>
				{loading ? (
					<Spinner/>
				) : (
					<input type="submit" className="cursor-pointer" disabled={loading} />
				)}
			</div>

		</div>
		
		
		</form>
	)
}

export default LoginForm