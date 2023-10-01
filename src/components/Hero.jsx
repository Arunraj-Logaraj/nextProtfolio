import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { Link } from "react-scroll";

// background-image: linear-gradient( 135deg, #FD6585 10%, #0D25B9 100%);

// bg-[#915Eff]

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-5`}
      >
        {/* <div className=" flex flex-col justify-center items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-[#915Eff]" />
          <div className=" w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

        <div>
          {/* <h1
            className={`${styles.heroHeadText}bg-gradient-to-r from-red-700 to-pink-700  `}
          >
            Hi, I'm <span className="text-violet-800">Arun</span>{" "}
            Hi, I'm <span>Arun</span>{" "}
          </h1> */}
          <h1
            className={`${styles.heroHeadText} text-center animate-text bg-gradient-to-r from-indigo-900 via-pink-700 to-pink-100 bg-clip-text text-9xl font-semibold text-transparent `}
          >
            {/* Hi, I'm <span className="text-violet-800">Arun</span>{" "} */}
            Hi, I'm Arun{" "}
          </h1>

          <p
            className={`${styles.heroSubText} mb-2  text-white-100  text-center`}
          >
            I Am a ReactJS Developer
            <br className=" sm:block hidden" />
            in web applications and web design
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center cursor-pointer">
        <Link
          activeClass="active"
          to={"about"}
          spy={true}
          smooth={true}
          // offset={-70}
          duration={500}
          // href={`#${link.id}`}
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
