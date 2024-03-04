import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { createUser } from "../util/apiCalls";

import Spinner from "./Spinner";
import AuthFormInput from "./AuthFormInput";

const SignUpForm = () => {
	const navigate = useNavigate()
	const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)


	const onSubmit = async (data) => {
		setLoading(true)
		setError(null)
		reset({ 
            email: "",   
            password: "",
            first_name: ""
        });
		const response = await createUser(data)
		setLoading(false)
		console.log("Sign Up Status: ", response.status)
		if (response.errorData){
			console.log(response.errorData)
			setError(response.errorData.error)
		}
		if (response.status === "success") {
			console.log("hootydoodle!")
			setSuccess(true)
		}
	}

	console.log(watch("password"))
	console.log(success, "<---")
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex-col items-center w-full">
			<div className="flex-col items-center">
				<div className="flex justify-center">
					{error && <p className="text-xs text-center text-red-500">{error}</p>}
					<div className="bg-green-500">
						{success && <p className="text-xs ">Sign Up Success! <span className="underline">Login?</span></p>}
					</div>
				</div>
				<AuthFormInput 
					label={"First Name"} 
					name={"first_name"} 
					isRequired={true} 
					register={register}
					regex={/^[A-Za-z]{1,20}$/}
					errorObj={errors.first_name}
					errorMsg={"Name must be 20 letters or fewer"}
				/>

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
					regex={/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,20}$/}
					errorObj={errors.password}
					errorMsg={"Password must include 8 characters, at least 1 number, and at least 1 special character"}
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

export default SignUpForm