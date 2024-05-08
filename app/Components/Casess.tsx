"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Swiper as SwiperType } from "swiper";
import folder from "@/public/folder.png";
import folder1 from "@/public/folder1.png";
import folder2 from "@/public/folder1.png";
import { motion } from "framer-motion";
import Image from "next/image";

import { Navigation } from "swiper/modules";
import Link from "next/link";

SwiperCore.use([]);
SwiperCore.use([Navigation]);

const Casess = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(1);
    }
  }, []);
  return (
    <div className="pt-[2rem] pb-[1.5rem] bg-black">
      <motion.h1
        initial={{ color: "white" }}
        animate={{ color: "#FF0000" }}
        transition={{ delay: 3 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-2 uppercase text-center"
      >
        Most viewed
      </motion.h1>
      <div className="mt-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#FE0000]">
                The Gruesome Brothers
              </h3>
              <Image src={folder1} width={300} height={300} alt="icon " />
              <Link href="/Case">
                <motion.button
                  className="bg-[#03045E] border-none hover:bg-[#FF0800] text-white font-serif border rounded-md 
                px-3 py-1 "
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Open Case
                </motion.button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#FE0000]">Riddle</h3>
              <Image src={folder2} width={300} height={300} alt="icon " />

              <motion.button
                className="bg-[#03045E] border-none hover:bg-[#FE0000] text-white font-serif border rounded-md 
                px-3 py-1 "
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Open Riddle
              </motion.button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#FE0000]">Puzzle</h3>
              <Image src={folder} width={300} height={300} alt="icon " />

              <motion.button
                className="bg-[#03045E] border-none hover:bg-[#FE0000] text-white font-serif border rounded-md 
                px-3 py-1 "
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Open Puzzle
              </motion.button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Casess;
