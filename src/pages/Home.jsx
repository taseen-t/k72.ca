import HomeBottomText from "../components/home/HomeBottomText"
import HomeHeroText from "../components/home/HomeHeroText"
import Video from "../components/home/Video"

const Home = () => {
  return (
    <>
    <div className="h-screen w-screen fixed">
       <Video />
    </div>
    <div className="h-screen w-screen relative pb-3 overflow-hidden flex flex-col justify-between">
        <HomeHeroText/>
        <HomeBottomText/>
    </div>
    
    </>
  )
}

export default Home
