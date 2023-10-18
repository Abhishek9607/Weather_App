import MainData from "../Components/MainData.tsx/MainData"
import Sidebar from "../Components/Sidebar/Sidebar"
import NightImage from "../Assets/night.jpg";

function Home() {
  return (
    <div className="h-[100vh]"  style={{backgroundSize: 'cover', backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NightImage})`}}> 
       <div className="h-[90%] mx-8 py-8 flex flex-row justify-center items-center ">
          <Sidebar />
          <MainData />
       </div>
    </div>
  )
}

export default Home