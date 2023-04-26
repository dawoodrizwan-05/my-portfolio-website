import Image from "next/image";
import React from "react";

const Portolio = () => {
  return (
    <div
      className=" flex items-center max-w-7xl mx-auto leading-8 mb-10"
      id="portfolio"
    >
      <div className="text-gray-500 px-10 mt-32 mx-auto">
        <h1 className="text-center text-4xl text-white mb-10">Portfolio</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full  ">
          {/* card 1 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"https://my-resume-ows-ali.vercel.app/images/portfolio/3.webp"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 2 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"https://my-resume-ows-ali.vercel.app/images/portfolio/2.jpeg"}
                className="w-60 h-40 rounded-t-md "
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 3 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 4 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 5 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}
          {/* card 6 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"https://my-resume-ows-ali.vercel.app/images/portfolio/1.jpeg"}
               
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
    </div>
  );
};
export default Portolio;
