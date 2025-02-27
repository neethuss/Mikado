"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Image1 from "../../public/assets/All.jpg";
import Image2 from "../../public/assets/Navya.jpg";
import Image3 from "../../public/assets/Akshara.jpg";
import Button from "@/components/ui/Button";
import { BsFullscreen } from "react-icons/bs";

export default function Home() {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [showBorder, setShowBorder] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBorder(true);

      setTimeout(() => {
        setAnimationComplete(true);

        setTimeout(() => {
          setShowContent(true);
        }, 1200);
      }, 500);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-[#F5E5DA]">
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
        <div><BsFullscreen className="w-8 h-8 cursor-pointer"/></div>
      </nav>

      {/* Main Center Image */}
      <motion.div
        initial={{
          width: "100vw",
          height: "100vh",
          x: 0,
          y: 0,
          rotate: 0,
          borderWidth: 0,
        }}
        animate={
          showBorder
            ? animationComplete
              ? {
                  scale: 0.35,
                  x: "calc(35vw )",
                  y: "-27%",
                  rotate: 5,
                  borderWidth: "60px",
                  width: "1400px",
                  height: "1000px",
                  transition: { duration: 1.2, ease: "easeInOut" },
                }
              : {
                  borderWidth: "60px",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }
            : {}
        }
        className="absolute inset-0 flex items-center justify-center overflow-hidden border-gray-300 rounded-lg"
      >
        <motion.div className="relative overflow-hidden w-full h-full border-white rounded-lg">
          <Image
            src={Image1}
            alt="Default image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      {showContent && (
        <>
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, y: "100vh", rotate: -8, scale: 0.7 }}
            animate={{ opacity: 1, rotate: -9, y: "10vh", scale: 0.9 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="absolute left-[61%] top-[25%] z-10 border-[20px] border-b-[70px] border-gray-300 border-solid rounded-lg shadow-lg w-[290px] h-[400px]"
          >
            <Image
              src={Image3}
              alt="Akshara"
              width={250}
              height={250}
              className="w-full h-full object-cover "
            />
            <p className="text-lg mt-2 font-cedarville  text-gray-700 text-center ">
              Pancho and Jojo
              <br /> working on a sign
            </p>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, y: "100vh", rotate: 10, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 10, y: "15vh", scale: 0.55 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
            className="absolute left-[76%] top-[-10%] z-20 
            border-t-[65px] border-b-[125px] border-l-[30px] border-r-[30px] 
            border-gray-300 border-solid rounded-lg shadow-lg 
            w-[460px] h-[650px]"
          >
            <Image
              src={Image2}
              alt="Navya"
              width={300}
              height={200}
              className
              ="w-full h-full object-cover "
            />
            <p className="text-lg mt-2 font-cedarville text-start text-gray-700 ">
              Jojo and Niki
              <br /> assembling a stand
            </p>
          </motion.div>
        </>
      )}

      {showContent && (
        <div className="flex flex-col w-[760px] absolute top-[20%] left-[3%] ">
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
              We&apos;re not defined by the work we do, we&apos;re defined by
              the people we do it with.
            </p>
          </div>

          <div>
            <Button className="px-10 py-1 text-white bg-red-400 rounded-full hover:bg-red-500">
              Check our crew
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
