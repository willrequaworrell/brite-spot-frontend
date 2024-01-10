import { useState } from "react"
import { useForm } from "react-hook-form";

const Auth = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	const [authModeToggle, setAuthModeToggle] = useState("Sign Up")

	const toggleAuthMode = () => {
		if (authModeToggle === "Sign Up") {
			setAuthModeToggle("Login")
		} else {
			setAuthModeToggle("Sign Up")
		}
	}

	console.log(watch("email"))
	console.log(watch("password"))

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
						<form onSubmit={handleSubmit(onSubmit)} className="flex-col items-center w-full">
							{/* register your input into the hook by invoking the "register" function */}
							<div className="">
								<div className="m-4 flex-col text-center">
									<p className="">Email</p>
									<input {...register("email", { required: true })} className="p-1 border-2 border-black rounded-lg"/>
								</div>
								<div className="m-4 text-center">
									<p>Password</p>
									<input {...register("password", { required: true })} className="p-1 border-2 border-black rounded-lg" />
								</div>

							</div>
							{/* errors will return when field validation fails  */}
							{errors.exampleRequired && <span>This field is required</span>}
							<div className="flex justify-center ">
								<input type="submit" className="cursor-pointer" />

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