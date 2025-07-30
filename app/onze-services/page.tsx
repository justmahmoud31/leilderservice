"use client";
import Link from "next/link";
import header from "@/public/header.webp";
import { Card, CardContent } from "@/components/ui/card";
import { FaHome, FaBuilding, FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import FadeIn from "@/components/Shared/FadeIn";
function page() {
  const services = [
    {
      icon: <FaHome className="text-3xl text-primary" />,
      title: "Particuliere verhuizingen",
      description:
        "Proberen om die 4-zits bank of super kingsize bed door te top te krijgen of door een smalle deur? Een ladderlift bespaart tijd, geld en moeite.",
    },
    {
      icon: <FaBuilding className="text-3xl text-primary" />,
      title: "Commerciële verhuizingen",
      description:
        "De levering van dat mooie nieuwe fornuis is geweldig, totdat je het naar de tweede verdieping moet tillen. Huur eenvoudig een ladderlift.",
    },
    {
      icon: <MdWork className="text-3xl text-primary" />,
      title: "Office verhuizingen",
      description:
        "Veel oudere kantoorgebouwen hebben geen goederenliften. Een ladderlift is efficiënter en veiliger voor uw meubilair.",
    },
    {
      icon: <FaTools className="text-3xl text-primary" />,
      title: "Bouw verhuisliften",
      description:
        "Ideaal voor het heffen van dakkisten, ramen en andere bouwmaterialen. Efficiënt en veilig voor elke bouwlocatie.",
    },
  ];
  return (
    <div>
      <FadeIn direction="left" >
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
              onze services
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
                onze services
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
      <section className="py-16 px-4 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          ONZE SERVICES
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Heeft u meubels of apparatuur om te verwijderen of te installeren naar
          moeilijk bereikbare plekken? De oplossing is simpel – huur een
          ladderlift.
        </p>
        <FadeIn direction="up">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-xl cursor-pointer transition-shadow duration-300 rounded-2xl border border-gray-200"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

export default page;
