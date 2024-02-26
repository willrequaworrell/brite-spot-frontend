
const AuthFormInput = ({label, name, isRequired, register, regex, errorObj, errorMsg}) => {
    // name and errorObj must have the form name="foo_bar", errorObj=errors.foo_bar
    return (
        <div className="m-4 flex-col text-center">
            <p className="text-sm md:text-md">{label}</p>
            <input {...register(name, { required: isRequired, pattern: regex })} className="w-[90%] sm:w-3/4 lg:w-1/2 p-1 text-sm sm:text-md border-2 border-gray-400 rounded-lg"/>
            {errorObj && <p className="text-xs text-red-500">{errorMsg}</p>}
        </div>
    )
}

export default AuthFormInput

// original format:
/* <div className="m-4 flex-col text-center">
    <p className="text-sm md:text-md">First Name</p>
    <input {...register("first_name", { required: true, pattern: /^[A-Za-z]{1,20}$/ })} className="w-[90%] sm:w-3/4 lg:w-1/2 p-1 text-sm sm:text-md border-2 border-gray-400 rounded-lg"/>
    {errors.first_name && <p className="text-xs text-red-500">Name must be 20 letters or fewer</p>}
</div> */