import React, { useEffect, useState } from "react"
import WordCloud from 'react-d3-cloud';
import axios from "axios";

import Navbar from "./Navbar";

import { fetchWordCloudData } from "../util/apiCalls";
import { useAuth } from "../Context/AuthContext";
import Spinner from "./Spinner";

const data = [
	{ text: 'awesome', value: 42 },
	{ text: 'fantastic', value: 35 },
	{ text: 'great', value: 28 },
	{ text: 'amazing', value: 19 },
	{ text: 'wonderful', value: 15 },
	{ text: 'exciting', value: 11 },
	{ text: 'beautiful', value: 8 },
	{ text: 'funny', value: 6 },
	{ text: 'interesting', value: 4 },
	{ text: 'creative', value: 3 },
	{ text: 'brilliant', value: 2 },
	{ text: 'inspiring', value: 1 },
	{ text: 'excellent', value: 39 },
	{ text: 'outstanding', value: 32 },
	{ text: 'superb', value: 25 },
	{ text: 'marvelous', value: 18 },
	{ text: 'splendid', value: 14 },
	{ text: 'remarkable', value: 10 },
	{ text: 'stellar', value: 7 },
	{ text: 'top-notch', value: 5 },
];

const handleFill = (word, index) => {
	const colors = ["#14B8A6", "#22C55E" , "#EAB308", "#F97316" , "#EC4899"]
	return colors[index % colors.length]
}


const Visualize = () => {
	const [wordcloudData, setWordcloudData] = useState(null)

	const {currentUser} = useAuth()

	const handleFetchData = async () => {
		try {
			const data = await fetchWordCloudData(currentUser) 
			setWordcloudData(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect( () => {
		handleFetchData()
	}, [])

	return (
		<div className="h-screen w-full bg-gray-100">
			<Navbar/>
			
			<div className="flex justify-center items-center m-8">
				<div className="w-[80%] bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 p-[2px] rounded-xl shadow-xl">
					<div className=" bg-white rounded-xl">
						{wordcloudData ? (
							<WordCloud 
								data={wordcloudData} 
								height={350}
								fill={handleFill}
								fontSize={(word) => Math.max(10 ,Math.log2(word.value) * 10)}
								font="sans-serif"
								fontWeight="bold"
							/>

							) : (
								<div className="w-full flex justify-center items-center p-16">
									<Spinner size={"large"}/>
								</div>
							)
						}
					</div>
				</div>

			</div>
			
		
			
		</div>
	);
}

export default Visualize