import { frontEndStack, backEndStack, toolsUsed } from "@/data";
import React from "react";
import Image from "next/image";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Skills = () => {
  return (
    <div className="py-20" id="skills">
      <h1 className="heading">
        My
        <span className="text-purple"> technical stacks</span>
      </h1>

      <div className="w-full flex flex-col mt-12">
        <h4 className="text-center text-lg md:text-xl mb-8">Front End</h4>
        <div className="w-full flex justify-center">
          <div
            className={`grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 ${
              frontEndStack.length < 8 ? "justify-center" : ""
            }`}
          >
            {frontEndStack.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <Image
                  alt={item.title}
                  src={item.img}
                  width={50}
                  height={50}
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
                />
                <h5 className="text-sm md:text-md">{item.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col mt-12">
        <h4 className="text-center text-lg md:text-xl mb-8">Back End</h4>
        <div className="w-full flex justify-center">
          <div
            className={`grid gap-8
        grid-cols-4 md:grid-cols-6 lg:grid-cols-${
          backEndStack.length < 8 ? backEndStack.length : 8
        }`}
          >
            {backEndStack.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <Image
                  alt={item.title}
                  src={item.img}
                  width={50}
                  height={50}
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
                />
                <h5 className="text-sm md:text-md">{item.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col mt-12">
        <h4 className="text-center text-lg md:text-xl mb-8">Tools Used</h4>
        <div className="w-full flex justify-center">
          <div
            className={`grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 ${
              toolsUsed.length < 8 ? "justify-center" : ""
            }`}
          >
            {toolsUsed.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <Image
                  alt={item.title}
                  src={item.img}
                  width={50}
                  height={50}
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:scale-110 transition-transform duration-200"
                />
                <h5 className="text-sm md:text-md">{item.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Skills;
