import EntryContainer from "./EntryContainer"
import Navbar from "./Navbar"



const Home = () => {
  return (
    <div className="h-full w-full">
        <Navbar/>
        <div className="flex justify-center items-center">
            <EntryContainer/>
        </div>
    </div>
  )
}

export default Home