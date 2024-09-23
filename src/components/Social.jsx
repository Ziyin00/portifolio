"use client";

import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Ziyin00",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/ziyin00",
  },
  {
    icon: <FaFacebook />,
    path: " https://www.facebook.com/profile.php?id=61565029324456&mibextid=ZbWKwL",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/ziyin00",
  },
  {
    icon: <FaYoutube />,
    path: "http://www.youtube.com/@ZiyinAb",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
