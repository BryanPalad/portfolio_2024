import { ExperienceData } from "@/utils/constants";
import { Timeline } from "./ui/Timeline";

const Experience = () => {
  return (
    <div className="py-20 mt-20" id="experience">
      <h1 className="heading">
        Highlights from My <span className="text-purple">Work Experience</span>
      </h1>
      <Timeline data={ExperienceData} />
    </div>
  );
};

export default Experience;
