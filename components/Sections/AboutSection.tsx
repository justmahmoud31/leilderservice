import React from "react";
import about from "@/public/about.jpg";
import FadeIn from "../Shared/FadeIn";

function AboutSection() {
  return (
    <FadeIn>
      <div className="flex">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex justify-center items-center p-8">
            <img
              src={about.src}
              alt="Over Ons"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-start p-8">
            <h2 className="text-main  text-xl font-bold text-start ">
              PLAASTSING PARKEERBORD
            </h2>
            <h2 className="text-black lg:text-3xl text-lg mb-4 font-bold">
              Parkeerborden & Toelatingen
            </h2>
            <p className="text-gray-700 text-lg text-start">
              Tarief €75,- indien wij toelating aanvragen en parkeerborden
              plaatsen.
              <br /> Niet vergeten: Zonder toelating van de politie mag de lift
              niet op de openbare weg, stoep of fietspad staan. Hiervoor worden
              boetes uitgeschreven die kunnen oplopen tot €250,- en zijn ten
              laste van de klant indien u geen toelating heeft.
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default AboutSection;
