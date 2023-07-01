// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBth from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//fromer motion
import { motion } from "framer-motion";

// variants
import { tadeln } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      {/* Text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* Title */}
          <h1 className="h1">
            Transforming Ideas <br /> Into
            <span className="text-accent">Digital Reality</span>
          </h1>

          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nostrum quam reprehenderit vero, tenetur voluptatem nulla aut
            aspernatur dolores ut.
          </p>

          {/* Btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBth />
          </div>
        </div>
      </div>

      {/* image */}
      <div>Image</div>
    </div>
  );
};

export default Home;
