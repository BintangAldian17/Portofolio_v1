import { FaReact } from "react-icons/fa";
import { SiReactquery, SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs, IoLogoJavascript } from "react-icons/io";
import profile from "../assets/test.png";

const About = () => {
  return (
    <div className=" w-full lg:h-screen h-full lg:pb-20">
      <div className="section-wrapper bg-neutral-900">
        <div className=" w-full h-full border-[3px] border-[#f2f2f2] flex items-center">
          <div className=" w-full h-fit flex items-start">
            <div className=" w-full h-full flex justify-center items-center">
              <div className=" lg:w-[298px] lg:h-80 p-2 border-2 border-violet-700 shadow-violet-700 shadow-[5px_7px_0_0]">
                <img src={profile} alt="profile_image" className=" w-full h-full object-cover" />
              </div>
            </div>
            <div className=" w-full h-full text-[#f2f2f2] flex items-center pr-16 text-justify text-lg">
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
