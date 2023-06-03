import { forwardRef } from "react";

// eslint-disable-next-line react/prop-types
const Hero = ({ hero }) => {
  return (
    <div className=" w-full h-screen md:pb-20 pb-16" ref={hero}>
      <div className=" bg-[#f2f2f2] section-wrapper lg:pt-[110px] pt-20">
        <div className=" w-full h-full flex justify-center items-center border-neutral-950 border-[3px] shadow-[7px_9px_0_0] shadow-neutral-950 px-4">
          <div className=" h-full flex items-start justify-center flex-col lg:w-[70%] w-full lg:py-0 py-16">
            <h1
              className={` md:text-[80px] text-[50px] font-Geologica font-extrabold leading-none tracking-tight lg:after:content-["I'M"] text-hover relative`}>
              I'M
            </h1>
            <h1 className=" md:text-[80px] text-[50px] font-Geologica font-extrabold leading-none tracking-tight lg:after:content-['BINTANG'] text-hover relative">
              BINTANG
            </h1>
            <h1 className=" md:text-[80px] text-[50px] font-Geologica font-extrabold leading-none tracking-tight lg:after:content-['ALDIAN'] text-hover relative">
              ALDIAN
            </h1>
            <h1
              className={` md:text-[80px] text-[50px] font-Geologica font-extrabold leading-none tracking-tight lg:after:content-[] text-hover relative`}>
              WEB DEVELOPER
            </h1>
            <p className=" md:text-lg text-xs font-Geologica pt-6 md:pt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates beatae, quaerat, vero,
              consequatur iusto dignissimos quam eum voluptatem laudantium libero
            </p>
          </div>
          <div className=" lg:w-[50%] h-full"></div>
        </div>
      </div>

      {/* <div className=" w-full h-full bg-stone-950 lg:shadow-[9px_12px__1px_1px] shadow-[6px_8px__1px_1px] shadow-violet-600 lg:shadow-violet-300 flex flex-col-reverse">
        <div className=" w-full h-full lg:border-2 lg:block hidden"></div>
        <div className=" h-full  lg:border-l-2 lg:border-t-2 lg:border-r-2 bg-glitch lg:w-[80%] pt-28 lg:pt-0 relative">
          <div className="lg:absolute top-[94px] left-16 lg:pl-0 pl-4 ">
            <h2 className=" text-[60px] lg:text-[90px] leading-[70px] lg:leading-[80px] font-bold lg:text-violet-200 text-violet-200/90">
              I'M
            </h2>
            <h2 className=" text-[60px] lg:text-[90px] leading-[70px] lg:leading-[80px] font-bold lg:text-violet-200 text-violet-200/90">
              BINTANG
            </h2>
            <h2 className=" text-[60px] lg:text-[90px] leading-[70px] lg:leading-[80px] font-bold lg:text-violet-200 text-violet-200/90">
              ALDIAN
            </h2>
            <div>
              <h1 className=" text-[60px] lg:text-[90px] leading-[70px] lg:leading-[80px] font-bold lg:text-violet-600 text-violet-200/90">
                WEB
              </h1>
            </div>
            <h2 className=" text-[60px] lg:text-[90px] leading-[70px] lg:leading-[80px] font-bold lg:text-violet-600 text-violet-200/90">
              DEVELOPER
            </h2>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
