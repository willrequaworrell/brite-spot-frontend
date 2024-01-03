
const CustomButton = ({text}) => {
    


    return (
        <div 
            className="flex justify-center w-1/4 border-4 border-black rounded-lg shadow-md hover:scale-105 hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500"
            onClick={() => console.log("dafds")}  
        >
            <p className="text-xl">{text}</p>
        </div>
    )
}

export default CustomButton