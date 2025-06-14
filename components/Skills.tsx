import { frontEndStack, backEndStack, toolsUsed, databaseUsed } from "@/data";
import React from "react";
import Image from "next/image";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const SkillSection = ({
  title,
  items,
}: {
  title: string;
  items: { title: string; img: string }[];
}) => {
  return (
    <div className="w-full flex flex-col items-center mt-12">
      <h4 className="text-center text-md md:text-lg mb-8">{title}</h4>
      <div className="w-full flex justify-center">
        <div
          className={`grid gap-8 grid-cols-3 md:grid-cols-4 lg:grid-cols-8 max-w-screen-md w-full justify-items-center`}
        >
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Image
                alt={item.title}
                src={item.img}
                width={50}
                height={50}
                className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
              />
              <h5 className="text-sm md:text-md text-center">{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="py-20 relative z-10" id="skills">
      <h1 className="heading text-center">
        My<span className="text-purple"> technical stacks</span>
      </h1>

      <SkillSection title="Front End" items={frontEndStack} />
      <SkillSection title="Back End" items={backEndStack} />
      <SkillSection title="Database and Deployment" items={databaseUsed} />
      <SkillSection title="Tools Used" items={toolsUsed} />

      <BackgroundBeams />
    </div>
  );
};

export default Skills;
