"use client";

import CountUp from "react-countup";

import React from "react";

const states = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 2,
    text: "Projects completed",
  },
  {
    num: 5,
    text: "Technologies mastered",
  },
  {
    num: 300,
    text: "Code commits",
  },
];
const States = () => {
  return (
    <section className="pt-4 pb-12 lg:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {states.map((item, index) => {
            return (
              <div
                className="flex items-center justify-center flex-1 gap-4 lg:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-5xl font-extrabold lg:text-6xl"
                />
                <p
                  className={`${
                    item.text.length > 15
                      ? "max-w-[100px]"
                      : "max-w-[150px] leading-snug text-white/80"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default States;
