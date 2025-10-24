import team1 from '../assets/1st.jpg'
import team2 from '../assets/2nd.jpg'
import team3 from '../assets/3rd.jpg'
import team4 from '../assets/4th.jpg'
import team5 from '../assets/5th.jpg'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

const imageArray = [team1, team2, team3, team4,team5];

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

   useGSAP(() => {
     gsap.to(imageDivRef.current, {
       scrollTrigger: {
         trigger: imageDivRef.current,
         start:"top 30%",
         end: "top -130%",
         pin: true,
         pinSpacing: true,
         pinReparent: true,
         pinType: "transform",
          scrub: 1,
          anticipatePin:1,
          invalidateOnRefresh: true,
          onUpdate: (elem) => {
            let imageIndex;
            if(elem.progress < 1){
            imageIndex = Math.floor(elem.progress * imageArray.length)
            } else{
              imageIndex = imageArray.length -1;
            }
            imageRef.current.src = imageArray[imageIndex];
          }
       },
       
     });
   });
  return (
    <div className="parent">
      <div id="page1" className="py-1 relative">
        <div className='relative'>
          <div
            ref={imageDivRef}
            className="absolute h-[20vw] overflow-hidden w-[15vw] top-96 rounded-4xl left-[30vw]"
          >
            <img
              ref={imageRef}
              className="h-full object-cover w-full "
              src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
              alt=""
            />
          </div>
        </div>
        <div className="relative font-[font2]">
          <div className="mt-[80vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className="h-screen"></div>
    </div>
  );
}

export default Agence
