"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          transition={{
            typ:"tween",
            duration: 0.2,
          }}
          >
            <Image
              src="https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYXJkfGVufDB8fDB8fHww"
              alt="Pic Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl "
            />

            <motion.span
              className="text-3xl absolute bottom-0 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 130,
               
              }}
            >
              👏
            </motion.span>
          </motion.div>
        </div>
      </div>

      <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.2] sm:text-4xl
      "
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      >
        <span className="font-bold"> Hello, I'm Hammad.</span> I'm a
        <span className="font-bold"> full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="font-bold"> sites & apps. </span> My focus is
        <span className="font-bold"> React (Next.js).</span>
      </motion.p>
    </section>
  );
}

export default Intro;
