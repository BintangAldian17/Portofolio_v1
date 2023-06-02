import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
const Navbar = ({ hero, contact }) => {
  const [isScroll, setIsScroll] = useState(false);

  const scrollSection = (elementRef) => {
    console.log(elementRef.current.offsetTop);
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <header className=" w-full lg:h-20 h-16 fixed z-50  px-2 lg:px-28 text-neutral-900 border-b-[3px] border-neutral-900 bg-[#f2f2f2]">
      <nav
        className={`${
          isScroll ? " bg-neutral-950" : ""
        } w-full h-full  flex justify-between items-center lg:px-16 px-9 `}>
        <div className=" relative after:content-['B!'] after:absolute after:bottom-[3px] after:lg:text-5xl after:text-[42px] after:font-semibold border-[3px] border-neutral-950 shadow-[3px_4px_0_0] shadow-violet-700  hover:shadow-[1px_1px_0_0] transition-all  ease-out duration-150 hover:translate-y-1 hover:translate-x-[1px] cursor-pointer">
          <h1 className=" lg:text-5xl text-[42px] text-violet-600 font-bold">B!</h1>
        </div>
        <div className=" lg:flex justify-center items-center gap-x-7 text-xl font-bold transition-all ease-in-out duration-300 hidden h-full border-r-[3px] border-l-[3px] border-neutral-950">
          <span className=" cursor-pointer  px-8 flex items-center border-neutral-900 w-full h-full">
            <h2 className="nav relative" onClick={() => scrollSection(hero)}>
              Home
            </h2>
          </span>
          <span className=" cursor-pointer  px-8 flex items-center border-neutral-900 w-full h-full">
            <h2 className="nav relative">About</h2>
          </span>
          <span className=" cursor-pointer  px-8 flex items-center border-neutral-900 w-full h-full">
            <h2 className="nav relative">Project</h2>
          </span>
          <span
            className=" cursor-pointer  px-8 flex items-center border-neutral-900 w-full h-full"
            onClick={() => scrollSection(contact)}>
            <h2 className="nav relative">Contact</h2>
          </span>
        </div>
        <button className=" w-36 h-10 border border-black bg-violet-600 shadow-[3px_4px__1px_1px] shadow-black hover:translate-y-1 hover:translate-x-[1px] hover:bg-violet-500 hover:shadow-[1px_1px_0_0] transition-all  ease-out duration-150 hidden lg:flex justify-center items-center text-neutral-900 font-bold">
          Hire me!
        </button>
        <span className=" w-9 h-9 lg:hidden">
          <GiHamburgerMenu className=" w-full h-full text-neutral-950" />
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
