import React from "react";
import foodDel from "../../public/assets/portfolio/fooddel.jpg";
import crime from "../../public/assets/portfolio/crimeInsight.jpg";
import bites from "../../public/assets/portfolio/imanBites.jpg";
import techPen from "../../public/assets/portfolio/techpen.jpg";
import stayCationer from "../../public/assets/portfolio/staycationer.PNG";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
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

  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full bg-slate-800">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-5xl tracking-wider capitalize text-blue-400 font-bold pb-16">
          portfolio
        </h2>

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
      </div>
    </div>
  );
};

export default PortfoliosRoute;
