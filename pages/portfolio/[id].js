import React from "react";
import foodDel from "../../public/assets/portfolio/fooddel.jpg";
import crime from "../../public/assets/portfolio/crimeInsight.jpg";
import bites from "../../public/assets/portfolio/imanBites.jpg";
import techPen from "../../public/assets/portfolio/techpen.jpg";
import stayCationer from "../../public/assets/portfolio/staycationer.jpg";

import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const portfolios = [
  {
    id: 1,
    title: "TechPen Blog app",
    imageSrc: techPen,
    url: "tech-pen",
    description: "A blog app about Technology!",
    about:
      "This is a fullstack blog app based on React MySql, Its use cases involve things like a user being able to log in using JWT, logging out using cookies, and how to use react MySQL to add new items, how to upload a file to a server and create and Update a post. It also covers how to fetch MySQL data, react context API and how to fetch recommended posts to a user",
    demoUrl: "https://3-imans-bites.vercel.app/",
    gitUrl: "https://github.com/sofiaIman/tech-pen",
    
  },
  {
    id: 2,
    title: "Restaurant delivery App",
    imageSrc: foodDel,
    url: "food-delivery",
    description: "Restaurant Food delivery App",
    about:
      "This is  a full stack food delivery application using Reactjs, Firebase, Framer motion, Tailwind css. This projects allows to the user to add new items and to maintain all the things over the firestore cloud database. It involves functionalities like fetching data from firebase, Filering food menu, Updating cart items and updating cart total and quantity of food added to cart",
    demoUrl: "https://3-imans-bites.vercel.app/",
    gitUrl: "https://github.com/sofiaIman/4-react-restaurant-delivery",
  },
  {
    id: 3,
    title: "Food Menu UI",
    imageSrc: bites,
    url: "react-menu",
    description: "Responsive Food Menu UI",
    about:
      "This is a fully responsive website with modern UI and UX in ReactjS. It involves use of flex and grid, CSS BEM Model, soft and pleasant animations to complex gradients. It also includes Perfectly placed media queries for satisfactory responsiveness covering almost all devices",
    demoUrl: "https://3-imans-bites.vercel.app/",
    gitUrl: "https://github.com/sofiaIman/3-Imans-bites",
  },
  {
    id: 4,
    title: "Crime Insight App",
    imageSrc: crime,
    url: "crime-insight",
    description: "Web App to predict and Analyze crimes",
    about:
      "This is a crime analysis and prediction system that assists the police force in identifying and analyzing patterns and trends in crime in SanFrancisco City.To accomplish analysis of crimes, K-means clustering algorithm was used in this project to identify the crime patterns which are used to commit crimes knowing the fact that each crime has certain patterns. The database was then trained with a supervised learning algorithm, Naïve Bayes to predict possible crime prone areas. Hence, the system forecasts the probability of a crime occurring in a city by analyzing the crime dataset and visualizing its findings.",
    demoUrl: "https://3-imans-bites.vercel.app/",
    gitUrl: "https://github.com/sofiaIman/CrimeInsight",
  },
  {
    id: 5,
    title: "Booking App",
    imageSrc: stayCationer,
    url: "Stay-Cationer",
    description: "Web App to help in booking hotels",
    about:
      "This is a hotel booking site which helps visitors to book hotel seamlessly",
    demoUrl: "https://staycationer.vercel.app/",
    gitUrl: "https://github.com/sofiaIman/staycationer",
  },
];

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({
  portfolio: { title, imageSrc, description, about, demoUrl, gitUrl},
}) => {
  return (
    <div className="h-fit w-full text-center bg-slate-800">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-gray-300 tracking-wider">
          {title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-center md:text-left my-4 text-2xl font-bold text-gray-300">
          {description}
        </h2>

        <p className=" text-gray-200">{about}</p>

        <div className="flex items-center justify-center gap-10">
          <Link href={demoUrl}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href={gitUrl}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              Github Code
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
