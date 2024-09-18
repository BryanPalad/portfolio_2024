import { projects } from "@/data";
import React from "react";
import { CardHoverEffect } from "./ui/CardHoverEffect";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <CardHoverEffect items={projects}></CardHoverEffect>
    </div>
  );
};

export default RecentProjects;
