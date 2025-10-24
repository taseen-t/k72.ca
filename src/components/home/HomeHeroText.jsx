import Video from "./Video"

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center text-white">
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items center justify-center pb-2">L'étincelle</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] items-start flex items center justify-center">qui<div className="h-[8vw] w-[16vw] rounded-full -mt-5 overflow-hidden"><Video/></div> génère</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items center justify-center">la créativité</div>
      
    </div>
  )
}

export default HomeHeroText
