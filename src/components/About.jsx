import { FaGithub, FaReact } from "react-icons/fa";
import DivideLine from "./DivideLine";
import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { FiFramer } from "react-icons/fi";
import EndComponent from "./EndComponent";

const About = () => {
  
  return (
    <div className="flex justify-center items-center">
          <div className="flex flex-col p-6 rounded-lg overflow-hidden  max-w-[50rem] relative mt-[5rem] z-20">
    <div>
      <div>
        <h1 className="text-[3rem] mb-3 font-bold">About</h1>
        <p>👋 Hi there! I am Shubham, a student who loves web development.</p>
        <DivideLine></DivideLine>
      </div>

      <div>
        <h1 className="text-[1.5rem] font-medium">WHO AM I</h1>
        <p className="my-4">
          Hey there! I’m Shubham Semwal, a 20-year-old Full-Stack developer from
          India who thrives on crafting intuitive and dynamic Website
        </p>

        <p className="my-4">
          I started learning web development on November 5, 2023 . It's a big
          challenge because it's just one of my hobbies, and I have yet to take
          any courses. I am self-learning on YouTube. One of my favorite YouTube
          channels is{" "}
          <a
            href="https://youtube.com/@procodrr?si=8vnrjPpqVgpyuXyh"
            target="_blank"
            className="underline decoration-wavy decoration-customGray text-[#ff6363] text-[1.1rem]"
          >
            Procodrr
          </a>
          . I learned a lot of web development skills from him.
        </p>

        <p>
          I love using React.js to create a website. Then use{" "}
          <a
            href="https://github.com/code-with-ShubhamS"
            className="underline decoration-wavy decoration-customGray text-[1.1rem]"
            target="_blank"
          >
            GitHub
          </a>{" "}
          to host my codebase. After that, I use{" "}
          <a
            href="https://vercel.com/code-with-shubhams"
            target="_blank"
            className="underline decoration-wavy decoration-customGray text-[1.1rem]"
          >
            Vercel
          </a>{" "}
          to deploy my website.
        </p>

        <DivideLine></DivideLine>
      </div>

      <h1 className="text-[2rem] font-medium">About this site</h1>
      <div className="mt-4">
        <h3 className="my-5 text-[1.5rem] font-normal">Tech Stack</h3>
        <div>
          <div className="flex justify-evenly flex-wrap">
            <RiTailwindCssFill className=" text-[4rem] "/>
            <FaReact className="text-[4rem]" />
            <IoLogoVercel className="text-[4rem]" />
            <FiFramer className="text-[4rem]" />
            <FaGithub className="text-[4rem]" />
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-[1.5rem] font-normal">Inspiration</h2>
        <p className="my-5">
          Here are some websites that inspired me a lot to build a
          fantastic website.
        </p>

          <ul className="list-disc ml-3">
            <li><a href="https://www.faisalhusa.in/"  target="_blank"  className="hover:text-[#6c6d6e]">faisalhusa.in</a></li>
            <li><a href="https://antfu.me/" target="_blank" className="hover:text-[#6c6d6e]">antfu.me</a></li>
            <li><a href="https://beta.vimfn.in/"  target="_blank"className="hover:text-[#6c6d6e]">beta.vimfn.in/</a></li>
            <li><a href="https://rohitsinghrawat.tech/" target="_blank" className="hover:text-[#6c6d6e]">rohitsinghrawat.tech</a></li>
            <li><a href="https://honghong.me/" target="_blank" className="hover:text-[#6c6d6e]">honghong.me</a></li>
          </ul>
          <p className="mt-4">and more but I can't remember them all 🥹</p>
          <DivideLine></DivideLine>
      </div>

      <div>
      <h1 className="text-[2rem] font-medium">Logo</h1>
      <div className="flex ">
      <div className="w-[50%] rounded px-2 py-4 bg-black">     
        <img src="myLogo.png" alt="" width={100} className= "m-auto" />
      </div>
      <div  className="w-[50%] rounded px-2 py-4 bg-white ">
         <img src="myLogo.png" alt="" width={100} className="m-auto invert"/>
      </div>
      </div>
      </div>

      <EndComponent />
    </div>
    </div>
    </div>
  );
};

export default About;
