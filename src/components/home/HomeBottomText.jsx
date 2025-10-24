import { Link } from "react-router";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-4 text-white">
      <Link
        className="text-[6.5vw] leading-[5.5vw] border-2 border-white uppercase rounded-full px-14 pt-4 hover:border-[#D3FD50] hover:text-[#D3FD50]"
        to="/projects"
      >
        Projets
      </Link>
      <Link
        className="text-[6.5vw] leading-[5.5vw] border-2 border-white uppercase rounded-full px-14 pt-4 hover:border-[#D3FD50] hover:text-[#D3FD50]"
        to="/agence"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
