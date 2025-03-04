"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAnimation() {
  const { scrollYProgress } = useScroll(); // Get scroll progress (0 to 1)
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]); // Moves up
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]); // Doubles in size
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]); // Fades out

  return (
    <div className="h-[200vh] flex justify-center items-start pt-[30vh] bg-gray-100">
      <motion.div
        style={{ y, scale, opacity }}
        className="w-40 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg"
      >
        Scroll Me!
      </motion.div>
    </div>
  );
}
