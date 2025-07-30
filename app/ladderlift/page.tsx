"use client";
import Link from "next/link";
import React from "react";
import header from "@/public/header.webp";
import TestimonialSlider from "@/components/Sections/TestimonialSlider";
import LadderliftPricing from "@/components/Sections/LadderliftPricing";
import FeaturesPage from "@/components/Sections/LidderLeftFeatures";
import FadeIn from "@/components/Shared/FadeIn";
function page() {
  return (
    <div>
      <FadeIn direction="left">
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
              Ladderlift
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
                href="/ladderlift"
                className=" cursor-pointer  text-white font-semibold "
              >
                ladderlift
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn direction="up">
        <LadderliftPricing />
      </FadeIn>
      <FadeIn direction="up">
        <div className="flex flex-col justify-start items-start lg:px-24 px-6">
          <h3 className="text-gray-600">
            <span className="text-main">Daarbuiten:</span>Van magazijn tot
            magazijn berekend.
          </h3>
          <h2 className="text-red-500 font-bold">Extra Man 30€ Per uur</h2>
          <ul>
            <li>
              Laadvermogen lift is max. 300 Kg. Laadvermogen is afhankelijk van
              de hellingsgraad en de verdieping, laadplateau is 2m50 breed en
              1m50 diep.
            </li>
            <li>Afrekenen is steeds cash na de lift service.</li>
            <li>
              Opgelet want zonder schriftelijke toelating van de politie mag je
              niet meer op de openbare baan of voetpad! Vermijd de boete’s want
              die zijn ten laste van de klant. Voor stad Antwerpen toelating
              vragen kan via volgende link :
              <a
                className="text-blue-600 underline"
                href="https://www.antwerpen.be/nl/overzicht/parkeren/op-strat/aanvraag-tijdelijk-parkeerverbod."
                target="_blank"
              >
                here
              </a>
            </li>
          </ul>
        </div>
      </FadeIn>
      <FadeIn direction="up">
        <FeaturesPage />
      </FadeIn>
      <FadeIn direction="up">
        <TestimonialSlider />
      </FadeIn>
    </div>
  );
}

export default page;
