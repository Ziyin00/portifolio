"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Passionate front-end developer with bold web development skills, ready to create interactive and responsive websites for your needs.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "As a passionate graphic designer with bold UI/UX skills, I create intuitive, impactful designs that captivate users and enhance experiences.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Passionate about crafting bold, impactful logos that capture brand identity and resonate with your audience",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Expert in SEO optimization, driving organic traffic and boosting online visibility for enhanced engagement.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center flex-1 gap-6 group"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-DEFUALT transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />{" "}
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-DEFUALT transition-all duration-500 ">
                  {service.title}{" "}
                </h2>
                <p className="text-white/60">{service.description}</p>

                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
