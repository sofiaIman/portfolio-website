import React from "react";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/html.png";
import python from "../public/assets/experience/python.jpg";
import node from "../public/assets/experience/node.png";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
    },
    {
      id: 5,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
    },
    {
      id: 7,
      title: "Python",
      src: python,
    },
    {
      id: 8,
      title: "Node JS",
      src: node,
    },
  ];

  return (
    <div id="experience" className="w-full bg-slate-800">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl tracking-wider capitalize text-blue-400 font-bold">
          experience
        </h2>
        <p className="py-4  text-gray-200">
          Below are some of the programming languages I have experience working
          with, which I have used to develop a variety of projects and
          applications.
        </p>

        <div className="grid lg:grid-cols-8 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="relative flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <Image src={src} width="64px" height="64px" alt={title} />
              <h3 className="absolute bottom-0 left-0 font-light text-gray-200">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
