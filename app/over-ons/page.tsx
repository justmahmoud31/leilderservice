"use client";

import AboutSection from "@/components/Sections/AboutSection";
import ImageSlider from "@/components/Sections/ImageSlider";
import OurServices from "@/components/Sections/Services";
import FadeIn from "@/components/Shared/FadeIn";
import header from "@/public/header.webp";
import Link from "next/link";
function overons() {
  return (
    <div className="flex flex-col">
      <FadeIn direction="down">
        <div
          className="flex"
          style={{
            backgroundImage: `url(${header.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // filter : "brightness(0.5)",
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
          }}
        >
          <div className="flex flex-col lg:w-1/2 w-full justify-center items-center gap-4 transition-transform duration-300 ease-in-out hover:scale-104 cursor-pointer filter backdrop-blur-sm bg-white/20 p-8 rounded-lg shadow-lg">
            <h2 className="text-main lg:text-3xl text-xl font-bold text-center">
              Over ons
            </h2>

            <div className="flex justify-center items-center text-white gap-2">
              <Link
                href="/"
                className=" cursor-pointer  text-white font-semibold "
              >
                Home
              </Link>
              <span className="text-white">/</span>
              <Link
                href="/over-ons"
                className=" cursor-pointer  text-white font-semibold "
              >
                Over ons
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn direction="up">
        <AboutSection />
      </FadeIn>
      <FadeIn direction="up">
        <OurServices />
      </FadeIn>
      <FadeIn direction="up">
        <ImageSlider />
      </FadeIn>
    </div>
  );
}

export default overons;
