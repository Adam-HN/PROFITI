import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

const Left = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="xl:w-[55%] md:w-1/2 h-full flex flex-col items-center justify-center bg-[#FFF9F9] px-6 md:px-12 relative">
      <span className="absolute top-10 left-5 md:left-10 font-synonym font-bold text-3xl md:text-4xl">
        Sign-in
      </span>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-lg bg-white rounded-lg border p-8 shadow-xl flex flex-col gap-y-2"
      >
        <div className="flex flex-col">
          <label htmlFor="username" className="font-semibold text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="bg-gray-200 w-full h-14 rounded-lg mt-2 px-4 focus:outline-none"
            required
            placeholder="Enter your username"
          />
        </div>

        <div className="relative flex flex-col">
          <label htmlFor="password" className="font-semibold text-gray-700">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="bg-gray-200 w-full h-14 rounded-lg mt-2 px-4 pr-12 focus:outline-none"
            placeholder="Enter your password"
          />
          <span
            className="absolute right-4 top-[50px] cursor-pointer text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              size="lg"
            />
          </span>
        </div>

        <button
          type="submit"
          className="bg-[#4B4B99] text-white font-bold self-center w-[95%] h-12 mt-3 rounded-3xl hover:bg-[#8F87F1] transition"
        >
          Login
        </button>

        <p className="text-center">
          Don't have an account?{" "}
          <span className="font-bold underline hover:text-[#4B4B99] cursor-pointer">
            Sign-up
          </span>
        </p>
      </motion.form>

      {/* Animated Div (Visible only on xl screens) */}
      <motion.div
        className="hidden xl:block absolute -bottom-[70px] -left-[240px] rounded-[105px] bg-[#B2A5FF] w-[500px] h-[90px]"
        initial={{ x: -200, y: 100, rotate: -41 }}
        animate={{ x: -50, y: 20, rotate: -41 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
};

export default Left;
