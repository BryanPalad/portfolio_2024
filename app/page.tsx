import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { TracingBeam } from "@/components/ui/TracingBeam";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex 
      justify-center items-center flex-col
      mx-auto sm:px-10 px-5 overflow-clip"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Skills />
        <Testimonials />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
