"use client";
import H1 from "@/common/component/element/H1";
import React from "react";
import dynamic from "next/dynamic";
import { GoArrowUpRight } from "react-icons/go";
import HeroText from "@/common/component/element/HeroText";
import Rails from "@/common/component/svg/Rails";
import Gradient, { Gradient2 } from "@/common/component/svg/Gradient";
import ButtonWarp from "@/common/component/element/ButtonWarp";
import Image from "@/common/component/element/Image";
import SliderTechLeader from "./components/SliderTechLeader";
import PreviewImage from "./components/PreviewImage";
import SearchButton from "./components/SearchButton";

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-start  w-full mt-20 overflow-hidden ">
      <div className="w-full  px-5 lg:px-10 z-[9] flex-col items-center flex justify-center ">
        <div className="w-full md:mt-24 mt-5 ">
          <HeroText
            texts="Amplify Your Online Journey"
            className="!justify-center lg:!w-[70%] leading-[0.95em]  lg:!py-2"
          />
        </div>
        <H1
          delay={0.2}
          className="mt-5 w-full lg:!w-[60%] justify-center !text-lg text-center"
          title="Explore cutting-edge solutions to enrich your digital experience. Empower your brand and engage your audience with our revolutionary resources."
          textColor="opacity"
        />
        <div className="w-full   py-5 flex justify-center items-center">
          <SearchButton />
        </div>
      </div>
      <div className="w-full mt-5">
        <PreviewImage />
      </div>
      <div className="w-full lg:mt-10  px-5 lg:px-10">
        <SliderTechLeader />
      </div>
    </div>
  );
}