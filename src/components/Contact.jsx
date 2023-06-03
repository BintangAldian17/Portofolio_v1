import { forwardRef } from "react";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa";

const Contact = ({ contact }) => {
  return (
    <div className="w-full h-full lg:h-screen text-[#f2f2f2] " ref={contact}>
      <div className="section-wrapper bg-neutral-900 pt-16">
        <div className=" w-full h-full flex items-center justify-center flex-col gap-y-5">
          <div className=" flex items-center justify-center gap-x-2 lg:pt-0 pt-8 ">
            <div className="  text-xl font-bold relative after:absolute after:text-[#f2f2f2] after:content-['Contact']  after:bottom-[3px] after:text-3xl lg:after:text-5xl ">
              <h1 className=" text-violet-600 text-3xl lg:text-5xl">Contact</h1>
            </div>
            <div className="  text-xl font-bold relative after:absolute after:text-[#f2f2f2] after:content-['Us.']  after:bottom-[3px] after:text-3xl lg:after:text-5xl ">
              <h1 className=" text-violet-600 text-3xl lg:text-5xl">Us.</h1>
            </div>
          </div>
          <div className=" w-full h-full flex items-center justify-center px-16">
            <form className=" w-full h-full flex flex-col lg:w-[50%] px-3 py-5 text-[#f2f2f2] lg:gap-y-6 gap-y-3 items-center justify-center">
              <div className=" w-full flex h-fit gap-x-3 items-center">
                <div className=" w-full">
                  <label className=" text-[#f2f2f2] font-semibold" htmlFor="firstname">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter your first name"
                    className=" input"
                  />
                </div>
                <div className=" w-full">
                  <label className=" text-[#f2f2f2] font-semibold" htmlFor="lastname">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter your last name"
                    className=" input"
                  />
                </div>
              </div>
              <div className=" w-full">
                <label className=" text-[#f2f2f2] font-semibold" htmlFor="email">
                  Email
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email" className=" input" />
              </div>
              <div className=" w-full">
                <label className=" text-[#f2f2f2] font-semibold" htmlFor="subject">
                  Subject
                </label>
                <input type="text" name="subject" id="subject" placeholder="Enter your subject" className=" input" />
              </div>
              <div className=" w-full">
                <label className=" text-[#f2f2f2] font-semibold" htmlFor="message">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  className=" w-full lg:h-32 border border-[#f2f2f2] outline-none px-2 bg-neutral-900 shadow-[#f2f2f2] shadow-[3px_4px_0_0] focus:translate-y-1 focus:translate-x-[1px] focus:shadow-[1px_2px_0_0] transition-all ease-in-out duration-100"
                />
              </div>
              <button className="w-full lg:h-10 border border-[#f2f2f2] outline-none px-2 bg-violet-700 shadow-[#f2f2f2] shadow-[3px_4px_0_0] hover:translate-y-1 hover:translate-x-[1px] hover:shadow-[1px_2px_0_0] transition-all ease-in-out duration-200 font-bold text-lg hover:bg-violet-600 flex items-center justify-center gap-x-2 group">
                Send Your Feedback
                <FaArrowRight className="group-hover:rotate-180 transition-all ease-in-out duration-300" />
              </button>
            </form>
            <div className=" w-[50%] h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
