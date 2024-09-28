"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import States from "@/components/States";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row lg:pt-2 lg:pb-16">
          <div className="order-2 text-center lg:text-left lg:order-none">
            <span className="text-xl ">Website Developer</span>
            <h1 className="mb-6 h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent-DEFUALT">Ziyin Abdlshkur</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>

            <div className="flex flex-col items-center gap-8 lg:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
              >
                <Link
                  href="/public/assets/Black Modern Professional Resume (2).pdf"
                  target="_blank"
                  alt="my cv"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload />
                </Link>
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent-DEFUALT rounded-full flex justify-center items-center text-accent-DEFUALT text-base hover:bg-accent-DEFUALT hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 lg:order-none lg:mb-0">
            <Photo />{" "}
          </div>
        </div>
      </div>
      <States />
    </section>
  );
};

export default Home;
