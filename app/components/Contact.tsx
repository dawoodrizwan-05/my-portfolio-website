import React from "react";

export default function Contact() {
  return (
    <div>
      <div
        className=" flex items-center max-w-7xl mx-auto leading-8 mb-10"
        id="contact"
      >
        <div className="text-gray-500 px-10 mt-32 mx-auto">
          <h1 className="text-center text-4xl text-white ">Contact</h1>
          <p className="text-center text-white my-5">Get in touch with me</p>
          <form action="https://formspree.io/f/mbjeaqpn" method="POST">
            <div>
              <input
                placeholder="Your name"
                type="text"
                required
                name="name"
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
              />
            </div>
            <div className="my-5">
              <input
                required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
                placeholder="Your email"
                type="email"
                name="email"
              />
            </div>
            <div>
              <textarea
                rows={8}
                name="meraMessage"
                required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="mx-auto block px-5  rounded-md  bg-gradient-to-b from-gray-300 text-black to-gray-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
