import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full bg-slate-800">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-4xl tracking-wider capitalize text-blue-400 font-bold">
          about me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8 text-gray-300 ">
          <p className="py-4 max-w-2xl mx-auto ">
            I am a highly motivated computer science graduate and software
            engineer with experience in building complex applications using
            cutting-edge technologies. I have worked on several projects
            involving ReactJS, ReactTS, Python for machine learning, NodeJS,
            ExpressJS, PHP, HTML, CSS, Tailwind, and MySQL.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            My passion for technology, coupled with my analytical and
            problem-solving skills, has enabled me to deliver innovative
            solutions that meet the needs of both clients and end-users.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            As a quick learner and team player, I am always looking for
            opportunities to expand my skillset and contribute to new and
            exciting projects. If you are looking for a dedicated software
            engineer who can bring your vision to life, look no further!
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
