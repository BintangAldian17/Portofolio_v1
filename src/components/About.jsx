import { FaReact } from "react-icons/fa";
import { SiReactquery, SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs, IoLogoJavascript } from "react-icons/io";
import profile from "../assets/test.png";
import { forwardRef } from "react";

const About = ({ about }) => {
  return (
    <div className=" w-full h-full lg:h-screen md:pb-20 pb-16" ref={about}>
      <div className="section-wrapper bg-neutral-900 flex flex-col gap-y-4 lg:gap-y-0 lg:pt-16">
        <div className=" flex items-center justify-center gap-x-2 lg:pt-0 pt-8 ">
          <div className="  text-xl font-bold relative after:absolute after:text-[#f2f2f2] after:content-['About']  after:bottom-[3px] after:text-3xl lg:after:text-5xl ">
            <h1 className=" text-violet-600 text-3xl lg:text-5xl">About</h1>
          </div>
          <div className="  text-xl font-bold relative after:absolute after:text-[#f2f2f2] after:content-['Me.']  after:bottom-[3px] after:text-3xl lg:after:text-5xl ">
            <h1 className=" text-violet-600 text-3xl lg:text-5xl">Me.</h1>
          </div>
        </div>
        <div className=" w-full h-full flex items-center px-2 ">
          <div className=" w-full h-fit flex items-start lg:flex-row flex-col gap-y-7 lg:gap-y-0 ">
            <div className=" w-full h-full flex justify-center items-center">
              <div className=" lg:w-[298px] lg:h-80 h-[220px] w-[220px] p-2 border-2 border-violet-700 shadow-violet-700 shadow-[5px_7px_0_0]">
                <img src={profile} alt="profile_image" className=" w-full h-full object-cover" />
              </div>
            </div>
            <div className=" w-full h-full text-[#f2f2f2] flex items-center lg:pr-16 lg:text-justify lg:text-lg text-sm border-2 border-[#f2f2f2] shadow-[#f2f2f2] shadow-[5px_7px_0_0] lg:border-none lg:shadow-none px-5 text-center py-4 lg:px-0 lg:py-0">
              <h1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eius inventore, corporis expedita eos
                voluptatem quaerat. Suscipit exercitationem rerum natus! Exercitationem repellat, ipsum corrupti qui
                asperiores commodi in voluptate ratione beatae? Libero dolorem perferendis quod nobis reiciendis sed
                eius quae porro! Ipsam, sunt incidunt! Autem nesciunt labore sapiente! Nesciunt, repellat.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
