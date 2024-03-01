import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../Context/AuthContext";
import { signInUser } from "../util/apiCalls";

import AuthFormInput from "./AuthFormInput";
import Spinner from "./Spinner";




const LoginForm = () => {
	const navigate = useNavigate()
	const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
	const { currentUser, login, logout } = useAuth();

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
		// console.log(response)
		console.log("Login Status: ", response.status)
		if (response.status === "success") {
			login(response.userData)
			navigate("/")
		} else {
			setShowError(true)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex-col items-center w-full">
			<div className="">
				<div className="flex justify-center">
					{showError && <p className="text-xs text-center text-red-500">Invalid Credentials</p>}
				</div>
				<AuthFormInput 
					label={"Email"} 
					name={"email"} 
					isRequired={true} 
					register={register}
					regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
					errorObj={errors.email}
					errorMsg={"Please enter a valid email"}
				/>

				<AuthFormInput 
					label={"Password"} 
					name={"password"} 
					type={"password"}
					isRequired={true} 
					register={register}
					errorObj={errors.password}
				/>

			</div>

			
			
			<div className="flex justify-center">
				<div className={`flex justify-center items-center text-center rounded-lg w-1/4 ${!loading && "bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500  p-[2px]"}`}>
					<div className={`flex justify-center w-full bg-white rounded-lg ${!loading && "hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500" }`}>
						{loading ? (
							<Spinner/>
						) : (
							<div className="px-4">
								<input type="submit" className=" text-xs md:text-sm cursor-pointer" disabled={loading} />
							</div>
						)}
					</div>

				</div>

			</div>
		
		
		</form>
	)
}

export default LoginForm