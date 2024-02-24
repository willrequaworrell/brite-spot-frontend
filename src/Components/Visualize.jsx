import React, { useEffect, useState } from "react"
import WordCloud from 'react-d3-cloud';
import axios from "axios";

import Navbar from "./Navbar";

import { fetchWordCloudData } from "../util/apiCalls";
import { useAuth } from "../Context/AuthContext";
import Spinner from "./Spinner";


const handleFill = (word, index) => {
	const colors = ["#14B8A6", "#22C55E" , "#EAB308", "#F97316" , "#EC4899"]
	return colors[index % colors.length]
}


const Visualize = () => {
	const [wordcloudData, setWordcloudData] = useState(null)
	const [hasEntries, setHasEntries] = useState(false) 
	const {currentUser} = useAuth()

	
	useEffect( () => {
		const handleFetchData = async () => {
			try {
				const data = await fetchWordCloudData(currentUser) 
				if (data.length === 0) {
					setHasEntries(false)
				} else {
					setWordcloudData(data)
				}
			} catch (error) {
				console.log(error)
			}
		}

		handleFetchData()
	}, [currentUser])

	return (
		<div className="h-screen w-full overflow-y-auto bg-gray-100">
			<Navbar/>
			<div className="hidden sm:block">
				<div className="flex justify-center items-center my-36  mx-18 lg:mx-24 xl:mx-32">
					<div className="w-[80%] bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 p-[2px] rounded-xl shadow-xl">
						<div className=" bg-white rounded-xl">
							{wordcloudData ? (
								<WordCloud 
									data={wordcloudData} 
									height={350}
									fill={handleFill}
									fontSize={(word) => Math.max(10 , Math.max(Math.log2(word.value), 2) * 10)}
									font="sans-serif"
									fontWeight="bold"
								/>

								) : (
									hasEntries ? (
										<div className="w-full flex justify-center items-center p-16">
											<Spinner size={"large"}/>
										</div>
									) : (
										<div className="w-full h-[350px] flex justify-center items-center">
											<p>No entries yet!</p>
										</div>
									)
								)
							}
						</div>
					</div>

				</div>

			</div>
			<div className="w-full h-screen flex justify-center items-center">
				<div className="flex-col items-center">
					<img src="/rotate.png" alt="rotate phone" className="sm:hidden h-48" />
					<p className="text-center text-lg font-bold">Rotate your device</p>
				</div>
			</div>
			
		
			
		</div>
	);
}

export default Visualize