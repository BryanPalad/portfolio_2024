import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { FaFileDownload } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className="w-full pb-10 mb-[60px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:mt-2 mt-4">
          <a href="/#about">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          <a href="/files/BryanPalad.pdf" download>
            <MagicButton
              title="Download CV"
              icon={<FaFileDownload />}
              position="right"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col mt-16 md:flex-row justify-between items-center gap-8 md:gap-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {year} Bryan
        </p>
                  <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                    Powered by Next, TS and Aceternity UI
                  </h2>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link} target="_blank">
                <Image
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
