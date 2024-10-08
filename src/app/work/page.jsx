"use client";
import { animate, motion } from "framer-motion";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",

    category: "Frontend",
    title: "Suza Coffee Export ",
    description:
      "Developed a dynamic website for a coffee export company, optimizing global reach and user engagement. Contact me for a tailored web solution!",
    stack: [{ name: "React.js" }, { name: "Css 3" }],
    image: "/assets/work/photo7.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Z-Shop ",
    description:
      "Explore my sample E-commerce website to see a creative, user-friendly design that showcases my web development skills. Contact me for custom solutions tailored to your business!",
    stack: [{ name: "React.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/photo6.png",
    live: "https://e-commerce-frontend-eight-black.vercel.app/",
    github: "https://github.com/Ziyin00/E-commerceFrontend.git",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Z-Fitness Club",
    description:
      "Explore my sample fitness club website design, built with user-friendly navigation, responsive layouts, and modern aesthetics—perfect for your gym's online presence! ",
    stack: [{ name: "Naxt.js" }, { name: "Tailwind.css " }],
    image: "/assets/work/phtot5.png",
    live: "https://z-fitness00.netlify.app",
    github: "https://github.com/Ziyin00/Z-gym.git",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center px-4 lg:px-0 "
    >
      <div className="container max-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[10px] ">
              <div className="group">
                <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
                  {project.num}
                </div>
                <p className="text-white/80">{project.category}</p>
                <h2 className="text-[42px] font-bold leading-none text-white tracking-tighter group-hover:text-accent-DEFUALT transition-all duration-500 capitalize">
                  {project.title}
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4 ">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent-DEFUALT">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-3xl text-white transition-all group-hover:text-accent-DEFUALT" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-3xl text-white transition-all group-hover:text-accent-DEFUALT" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[400px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt=""
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-16 z-20 w-full justify-between lg:w-max lg:justify-none "
                btnStyles="bg-accent-DEFUALT hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
