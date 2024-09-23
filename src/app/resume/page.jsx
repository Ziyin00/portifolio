"use client";
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

const about = {
  title: "About me",
  describtion:
    "Passionate web developer with a strong work ethic, dedicated to delivering high-quality solutions I truly love creating.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ziyin Ab.",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+251) 900 075 600",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Year",
    },
    {
      fieldName: "Email",
      fieldValue: "ziyinab00@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ethiopian",
    },
    {
      fieldName: "Telegram",
      fieldValue: "@ziyin07",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Amharic, English, Arabic",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  describtion:
    "Skilled in crafting responsive, dynamic websites with a focus on clean, modern design and seamless user experience.",
  items: [
    {
      company: " Alif Tech Solutions Inc.",
      position: "Front-End Developer",
      duration: "2024-Present",
    },
    {
      company: " Alif Tech Solutions Inc.",
      position: "Front-End Developer",
      duration: "2024 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  describtion:
    "Highly skilled in web development, backed by strong educational foundations and hands-on expertise, ready to bring innovative solutions.",
  items: [
    {
      institution: " Alif Techs",
      position: "Skill Based Programming Course",
      duration: "2024",
    },
    {
      institution: " Online Course Platform",
      position: "Full Stack Web Development Bootcapms",
      duration: "2024",
    },
    {
      institution: "Jimma University",
      position: "Student in Associate with Computer Science",
      duration: "2023-present",
    },
  ],
};

const skills = {
  title: "My skills",
  describtion:
    "Creative web developer delivering responsive, high-performance websites with seamless user experiences.",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skils</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
              }}
            >
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center lg:text-left ">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {experience.describtion}{" "}
                  </p>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent-DEFUALT">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent-DEFUALT "></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
              }}
            >
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center lg:text-left ">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {education.describtion}{" "}
                  </p>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent-DEFUALT">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[350px] min-h-[60px] text-center lg:text-left mb-5">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent-DEFUALT "></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
              }}
            >
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center lg:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                      {skills.describtion}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] gap-6">
                    {skills.skilllist.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl transition-all duration-300 group-hover:text-accent-DEFUALT">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
              }}
            >
              <TabsContent
                value="about"
                className="w-full text-center lg:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.describtion}
                  </p>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px]mx-auto lg:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center gap-4 lg:justify-start"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </motion.div>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
