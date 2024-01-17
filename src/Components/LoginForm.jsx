import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { signInUser } from "../util/apiCalls";

const LoginForm = () => {
	const navigate = useNavigate()
	const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();


	const onSubmit = async (credentials) => {
		reset({ 
            email: "",   
            password: "",
        });
		const response = await signInUser(credentials)
		console.log("Login Status: ", response.status)
		if (response.status === "success") {
			navigate("/")
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex-col items-center w-full">
		{/* register your input into the hook by invoking the "register" function */}
		<div className="">
			
			<div className="m-4 flex-col text-center">
				<p className="">Email</p>
				<input {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} className="p-1 border-2 border-black rounded-lg"/>
				{/* {errors.email && <p className="text-xs text-red-500">Please enter a valid email</p>} */}
			</div>
			<div className="m-4 text-center">
				<p>Password</p>
				<input {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/ })} type="password" className="p-1 border-2 border-black rounded-lg" />
				{/* {errors.password && <p className="text-xs text-red-500">Password must include 8 characters, at least 1 number, and at least 1 special character</p>} */}
			</div>

		</div>
		
		<div className="flex justify-center">
			<div className="w-1/4 text-center border-4 border-black rounded-lg hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500">
				<input type="submit" className="cursor-pointer" />
			</div>

		</div>
		
		
		</form>
	)
}

export default LoginForm