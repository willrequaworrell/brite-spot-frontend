import EntryContainer from "./EntryContainer"
import Navbar from "./Navbar"



const Home = () => {
  return (
    <div className="h-screen w-full bg-gray-100">
        <Navbar/>
        <div className="flex justify-center items-center">
            <EntryContainer/>
        </div>
    </div>
  )
}

export default Home