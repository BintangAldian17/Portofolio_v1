import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full lg:h-fit bg-[#f2f2f2] flex flex-col items-center justify-center gap-y-3 py-4">
      <div className=" w-full flex gap-x-4 items-center justify-center">
        <div className="  w-6 h-6 shadow-[2px_3px_0_0] shadow-neutral-950">
          <FaInstagramSquare className=" w-full h-full text-neutral-950" />
        </div>
        <div className=" w-6 h-6 shadow-[2px_3px_0_0] shadow-neutral-950">
          <AiFillFacebook className=" w-full h-full text-neutral-950" />
        </div>
        <div className=" w-6 h-6 shadow-[2px_3px_0_0] shadow-neutral-950">
          <FaGithubSquare className=" w-full h-full text-neutral-950" />
        </div>
        <div className=" w-6 h-6 shadow-[2px_3px_0_0] shadow-neutral-950">
          <AiFillLinkedin className=" w-full h-full text-neutral-950" />
        </div>
      </div>
      <div className=" lg:w-[50%]">
        <p className=" text-sm font-semibold text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci non officia nam dolorem placeat? Quia
          voluptas atque ullam esse enim laborum,
        </p>
      </div>
      <div className=" w-full flex items-center justify-center">
        <div className=" relative after:absolute after:text-neutral-950 after:bottom-[2px] after:content-['B!'] after:text-4xl border-r-2 border-neutral-950 px-2">
          <h1 className=" font-bold text-4xl text-violet-700 ">B!</h1>
        </div>
        <div className=" flex items-center justify-center px-2">
          <span className=" text-neutral-900 font-bold text-lg">Bintang Aldian </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
