
	const Spinner = ({size}) => {

		if (size === "small"){
			return (
				<div
					className={`p-1 bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 inline-block h-[20px] w-[20px] animate-spin rounded-full border-current align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]`}
					role="status"
				> 
					<div className="flex w-full h-full bg-white rounded-full "></div>
				</div>
			)
		}
		else if (size === "large") {
			return (
				<div
					className={`p-1 bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 inline-block h-[100px] w-[100px] animate-spin rounded-full border-current align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]`}
					role="status"
				> 
					<div className="flex w-full h-full bg-white rounded-full "></div>
				</div>
			)
		}
		else {
			return (
				<div
					className={`p-1 bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 inline-block h-8 w-8 animate-spin rounded-full border-current align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]`}
					role="status"
				> 
					<div className="flex w-full h-full bg-white rounded-full "></div>
				</div>
			)
		}
	}

export default Spinner