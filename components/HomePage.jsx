import React from "react";
import heroImage from "../public/assets/profileImage.png";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center bg-slate-800">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-64 mx-auto overflow-hidden">
          <Image src={heroImage} alt="me" />
        </div>
        <h1 className="font-bold text-blue-400 text-6xl">Software Engineer</h1>
        <p className="text-gray-300 text-xl tracking-wider mx-auto">
          I am a computer science graduate and software engineer with expertise
          in HTML, CSS, JS, ReactJS, ReactTS, Python for machine learning, NodeJS, MongoDB,
          tailwind and MySQL. With a passion for problem-solving and an eye for
          detail, I have worked on a range of projects, from developing
          user-friendly web applications to building complex machine learning
          models. .
        </p>
        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-900 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            Know More
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
