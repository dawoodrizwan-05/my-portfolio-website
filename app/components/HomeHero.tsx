import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const HomeHero = () => {
  return (
    <section className=" max-w-4xl mx-auto flex md:flex-row flex-col mt-16 ">
      {/* left start here */}

      <div className="p-5 max-w-lg  ">
        <h1>I am a Full Stack developer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          sapiente. Vero sit qui doloremque ex ratione consequatur cumque
          quidem, tempore autem quos totam veniam dicta quaerat nesciunt
          voluptatibus pariatur exercitationem, ipsam hic? Obcaecati cumque
          provident facilis aliquid rem ducimus, molestiae repudiandae
          reiciendis ullam harum dolores magni? Et unde ratione quam.
        </p>

        {/* <button className="bg-gradient-to-b to-cyan-500 from-blue-500  py-2 px-4 rounded-lg">
          Profile-u
        </button>
        <button className="bg-gradient-to-b from-cyan-500 to-blue-500  py-2 px-4 rounded-lg">
          Profile-b
        </button> */}
        <button className="group flex  items-center bg-gradient-to-r from-cyan-500 to-blue-500  py-2 px-4 rounded-lg">
          Profile
          <MdOutlineKeyboardArrowRight
            size={20}
            className="group-hover:rotate-90 duration-500"
          />
        </button>
      </div>
      {/* left ends here */}
      {/* right */}
      <div>
        <img
          src="https://resume-template-gamma.vercel.app/images/car3.webp"
          className="md:w-full w-1/2 mx-auto"
        />
      </div>
      {/* right ends */}
    </section>
  );
};
