
const CustomButton = ({text, onClick}) => {
    


    return (
        <div className="flex justify-center w-1/4 rounded-lg bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 p-[2px] hover:scale-105">
            <div 
                className="flex justify-center w-full bg-white rounded-lg shadow-lg hover:bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500"
                onClick={onClick}  
            >
                <p className="text-xl">{text}</p>
            </div>
        </div>
    )
}

export default CustomButton