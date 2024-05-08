"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Swiper as SwiperType } from "swiper";
import folder from "@/public/folder.png";
import folder1 from "@/public/folder1.png";
import folder2 from "@/public/folder1.png";

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
            <div className="w-full h-50 px-[6rem] py-[3rem] border border-white">
              <h3 className="font-bold text-[18px] text-[#03045E]">Anger</h3>
              <Image src={folder1} width={300} height={300} alt="icon " />
              <Link href="/Case">
                <button
                  className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
                >
                  Open Case
                </button>
              </Link>
              <p className="text-md font-semibold pt-2 text-[#023047]">
                Transforming Shame into Strength
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#03045E]">Anger</h3>
              <Image src={folder2} width={300} height={300} alt="icon " />

              <button
                className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
              >
                Open Article
              </button>

              <p className="text-md font-semibold pt-2 text-[#023047]">
                Transforming Shame into Strength
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-50 px-[6rem] py-[3rem]">
              <h3 className="font-bold text-[18px] text-[#03045E]">Anger</h3>
              <Image src={folder} width={300} height={300} alt="icon " />

              <button
                className="bg-[#03045E] text-white font-serif border rounded-md 
                px-3 py-1 hover:bg-[#fca311] hover:text-black"
              >
                Open Article
              </button>

              <p className="text-md font-semibold pt-2 text-[#023047]">
                Transforming Shame into Strength
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Casess;
