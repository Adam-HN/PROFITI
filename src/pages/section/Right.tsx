import { useEffect, useState } from "react";
import { motion } from "motion/react";
import PC from "../../assets/images/pc.png";
import { Typewriter } from "react-simple-typewriter";

const Right = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hidden md:flex xl:w-[45%] md:w-1/2 bg-[#B2A5FF] flex-col items-center justify-center h-full text-white text-3xl font-bold px-6">
      {/* PC Image */}
      <motion.img
        initial={{ scale: 0.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-2/3 max-w-sm absolute left-[45%] xl:w-[30%] "
        src={PC}
        alt="PC"
      />

      {/* Typewriter Text */}
      {showTypewriter && (
        <div className="absolute text-center text-xl top-[10%] md:text-2xl lg:text-3xl text-slate-700 mt-6 font-OpenSans ">
          <Typewriter
            words={["Welcome to  PROFITII.", "Please sign in to continue."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      )}
    </div>
  );
};

export default Right;
