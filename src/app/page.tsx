"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Image1 from "../../public/assets/All.jpg";
import Image2 from "../../public/assets/Navya.jpg";
import Image3 from "../../public/assets/Akshara.jpg";

import { BsFullscreen } from "react-icons/bs";
import Button from "@/components/ui/Button";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // main image animation based on scroll
  const mainImageBorder = useTransform(scrollYProgress, [0, 0.15], [0, 30]);

const mainImageX = useTransform(
  scrollYProgress,
  [0.05, 0.2, 0.35, 0.45],
  ["0%", "30%", "70%", "100%"]
);

const mainImageY = useTransform(
  scrollYProgress,
  [0.05, 0.2, 0.35, 0.45],
  ["10%", "12%", "14%", "15%"]
);

const mainImageRotate = useTransform(
  scrollYProgress,
  [0.05, 0.2, 0.35, 0.45],
  [0, 2, 3, 5]
);

const mainImageWidth = useTransform(
  scrollYProgress,
  [0.05, 0.2, 0.35, 0.45],
  ["100vw", "90vw", "80vw", "60vw"]
);

const mainImageHeight = useTransform(
  scrollYProgress,
  [0.05, 0.2, 0.35, 0.45],
  ["100vh", "90vh", "80vh", "60vh"]
);


  // Content opacity based on scroll
  const contentOpacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);

  // Image 1 animations
  const image1Opacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const image1Y = useTransform(scrollYProgress, [0.3, 0.4], ["100vh", "10vh"]);
  const image1Scale = useTransform(scrollYProgress, [0.3, 0.4], [0.7, 0.9]);

  // Image 2 animations
  const image2Opacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const image2Y = useTransform(scrollYProgress, [0.4, 0.5], ["100vh", "15vh"]);
  const image2Scale = useTransform(scrollYProgress, [0.4, 0.5], [0.7, 0.55]);

  return (
    <div
      ref={containerRef}
      className="h-[200vh] w-screen relative overflow-hidden bg-[#F5E5DA] max-w-full"
    >
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-4 z-50">
        <div>
          <Link href="/" className="text-3xl font-bold">
            200/0
          </Link>
        </div>
        <div className="space-x-10">
          <Link href="">WORK</Link>
          <Link href="">SERVICES</Link>
          <Link href="">CREW</Link>
          <Link href="">CONTACT</Link>
        </div>
        <div>
          <BsFullscreen className="w-8 h-8 cursor-pointer" />
        </div>
      </nav>

      {/* Main Center Image */}
      <motion.div
        style={{
          x: mainImageX,
          y: mainImageY,
          rotate: mainImageRotate,
          borderWidth: mainImageBorder,
          width: mainImageWidth,
          height: mainImageHeight,
        }}
        className="fixed inset-0 flex items-center justify-center overflow-hidden border-gray-300 rounded-lg"
        initial={{
          width: "100vw",
          height: "100vh",
          x: 0,
          y: "10%",
          rotate: 0,
          borderWidth: 0,
        }}
      >
        <motion.div className="relative overflow-hidden w-full h-full border-white rounded-lg">
          <Image
            src={Image1 || "/placeholder.svg"}
            alt="Default image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Image 1 */}
      <motion.div
        style={{
          opacity: image1Opacity,
          y: image1Y,
          scale: image1Scale,
        }}
        initial={{ opacity: 0, y: "100vh", rotate: -9, scale: 0.7 }}
        className="fixed left-[61%] top-[25%] z-10 border-[20px] border-b-[70px] border-gray-300 border-solid rounded-lg shadow-lg w-[290px] h-[400px]"
      >
        <Image
          src={Image3 || "/placeholder.svg"}
          alt="Akshara"
          width={250}
          height={250}
          className="w-full h-full object-cover"
        />
        <p className="text-lg mt-2 font-cedarville text-gray-700 text-center">
          Pancho and Jojo
          <br /> working on a sign
        </p>
      </motion.div>

      {/* Image 2 */}
      <motion.div
        style={{
          opacity: image2Opacity,
          y: image2Y,
          scale: image2Scale,
        }}
        initial={{ opacity: 0, y: "100vh", rotate: 10, scale: 0.7 }}
        className="fixed left-[76%] top-[-10%] z-20 
        border-t-[65px] border-b-[125px] border-l-[30px] border-r-[30px] 
        border-gray-300 border-solid rounded-lg shadow-lg 
        w-[460px] h-[650px]"
      >
        <Image
          src={Image2 || "/placeholder.svg"}
          alt="Navya"
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
        <p className="text-lg mt-2 font-cedarville text-start text-gray-700">
          Jojo and Niki
          <br /> assembling a stand
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="flex flex-col w-[760px] fixed top-[20%] left-[3%]"
        initial={{ opacity: 0 }}
      >
        {/* Main Heading */}
        <div className="mb-8 text-5xl font-mono font-bold leading-none text-black">
          We&apos;re a tight collective of creative thinkers, crafting unique
          productions, <br />
          designs, and experiences.
        </div>

        {/* Sub Heading */}
        <div className="mb-8 flex gap-10 font-sans">
          <p className="text-lg text-gray-700 w-1/2">
            At 200% Studio, our approach to work is a blend of artistry,
            precision, and collaboration. We start by immersing ourselves in
            your vision, working closely with you to understand your goals and
            aspirations.
          </p>
          <p className="text-lg text-gray-700 w-1/2">
            We&apos;re not defined by the work we do, we&apos;re defined by the
            people we do it with.
          </p>
        </div>

        <div>
          <Button className="px-10 py-1 text-white bg-red-400 rounded-full hover:bg-red-500">
            Check our crew
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
