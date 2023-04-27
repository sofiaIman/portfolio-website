import React from "react";

import { MdExpandMore } from "react-icons/md";

import foodDel from "../public/assets/portfolio/fooddel.jpg";
import crime from "../public/assets/portfolio/crimeInsight.jpg";
import bites from "../public/assets/portfolio/imanBites.jpg";
import techPen from "../public/assets/portfolio/techpen.jpg";
import stayCationer from "../public/assets/portfolio/staycationer.jpg";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "TechPen Blog app",
      imageSrc: techPen,
      url: "tech-pen",
    },
    {
      id: 2,
      title: "Restaurant delivery App",
      imageSrc: foodDel,
      url: "food-delivery",
    },
    {
      id: 3,
      title: "Food Menu UI",
      imageSrc: bites,
      url: "react-menu",
    },
    {
      id: 4,
      title: "Crime Insight App",
      imageSrc: crime,
      url: "crime-insight",
    },
    {
      id: 5,
      title: "Booking App",
      imageSrc: stayCationer,
      url: "Stay-Cationer",
    },
  ];

  return (
    <div id="portfolio" className="w-full bg-slate-800">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl tracking-wider capitalize text-blue-400 font-bold">
          portfolio
        </h2>
        <p className="py-4  text-gray-300">
          Welcome to my personal project portfolio! As a software developer, I
          have experience working on various personal projects, including web
          development and software applications. Below are some of the projects
          that I have worked on. I enjoy solving complex problems and
          continually exploring new technologies to improve my skills
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4 text-gray-300">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
