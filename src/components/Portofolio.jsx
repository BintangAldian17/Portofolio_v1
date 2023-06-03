import project1 from "../assets/project1.png";

const Portofolio = ({ portofolio }) => {
  return (
    <div className=" w-full lg:h-screen h-full md:pb-20 pb-10" ref={portofolio}>
      <div className="bg-[#f2f2f2] section-wrapper pt-16">
        <div className=" flex flex-col gap-y-10 w-full h-full  overflow-x-auto">
          <div className=" underline text-xl font-bold relative after:absolute after:text-neutral-900 after:content-['PROJECTS.'] after:bottom-[3px] after:text-3xl lg:after:text-5xl tracking-tight">
            <h1 className=" text-gray-400 text-3xl lg:text-5xl font-extrabold ">PROJECTS.</h1>
          </div>
          <div className=" w-full h-full items-center gap-x-10 overscroll-auto grid grid-flow-col max-w-full">
            <div className=" lg:w-96 lg:h-96 rounded-xl bg-[#faf7f7] border-2 border-gray-500 flex flex-col shadow-gray-500 shadow-[7px_8px_1px_0]  overflow-hidden">
              <div className=" w-full h-[8%] bg-neutral-950 flex justify-end items-center px-3 gap-x-2">
                <div className=" w-4 h-4 rounded-full bg-violet-700"></div>
                <div className=" w-4 h-4 rounded-full bg-red-600"></div>
                <div className=" w-4 h-4 rounded-full bg-yellow-400"></div>
              </div>
              <div className=" h-[60%] w-full overflow-hidden object-cover">
                <img src={project1} alt="" className=" w-full h-full object-cover" />
              </div>
              <div className=" h-[30%] w-full px-2 pt-2">
                <h1 className=" text-4xl drop-shadow text-neutral-900 font-bold font-Geologica">#SOSMED</h1>
              </div>
            </div>
            <div className="  lg:w-96 lg:h-96 rounded-xl bg-[#faf7f7] border-2 border-gray-500 flex flex-col shadow-gray-500 shadow-[7px_8px_1px_0]  overflow-hidden">
              <div className=" w-full h-[8%] bg-neutral-950 flex justify-end items-center px-3 gap-x-2">
                <div className=" w-4 h-4 rounded-full bg-violet-700"></div>
                <div className=" w-4 h-4 rounded-full bg-red-600"></div>
                <div className=" w-4 h-4 rounded-full bg-yellow-400"></div>
              </div>
            </div>
            <div className="  lg:w-96 lg:h-96 rounded-xl bg-[#faf7f7] border-2 border-gray-500 flex flex-col shadow-gray-500 shadow-[7px_8px_1px_0]  overflow-hidden">
              <div className=" w-full h-[8%] bg-neutral-950 flex justify-end items-center px-3 gap-x-2">
                <div className=" w-4 h-4 rounded-full bg-violet-700"></div>
                <div className=" w-4 h-4 rounded-full bg-red-600"></div>
                <div className=" w-4 h-4 rounded-full bg-yellow-400"></div>
              </div>
            </div>
            <div className="  lg:w-96 lg:h-96 rounded-xl bg-[#faf7f7] border-2 border-gray-500 flex flex-col shadow-gray-500 shadow-[7px_8px_1px_0]  overflow-hidden">
              <div className=" w-full h-[8%] bg-neutral-950 flex justify-end items-center px-3 gap-x-2">
                <div className=" w-4 h-4 rounded-full bg-violet-700"></div>
                <div className=" w-4 h-4 rounded-full bg-red-600"></div>
                <div className=" w-4 h-4 rounded-full bg-yellow-400"></div>
              </div>
            </div>
            <div className=" lg:w-96 lg:h-96 rounded-xl bg-[#faf7f7] border-2 border-gray-500 flex flex-col shadow-gray-500 shadow-[7px_8px_1px_0]  overflow-hidden">
              <div className=" w-full h-[8%] bg-neutral-950 flex justify-end items-center px-3 gap-x-2">
                <div className=" w-4 h-4 rounded-full bg-violet-700"></div>
                <div className=" w-4 h-4 rounded-full bg-red-600"></div>
                <div className=" w-4 h-4 rounded-full bg-yellow-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
