import TruckRatesTable from "@/components/Sections/TruckRatesTable";
import { Card, CardContent } from "@/components/ui/card";
import header from "@/public/header.webp";
import img2 from "@/public/price2.png";
import img3 from "@/public/price3.png";
import img4 from "@/public/price4.png";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import FeaturesGrid from "../../components/Sections/FeatruesGrid";
import FadeIn from "@/components/Shared/FadeIn";
function page() {
  const packs = [
    {
      price: "€450,00",
      duration: "3 uur",
      label: "PROMOPACK voor",
      features: ["tot 5de Verdieping", "Ladderlift", "Allen Bestelwagen"],
      icon: img3.src,
      people: null,
    },
    {
      price: "€550,00",
      duration: "3 uur",
      label: "PROMOPACK voor",
      features: [
        "tot 5de Verdieping",
        "Ladderlift",
        "Bestelwagen",
        "2 personen",
      ],
      icon: img2.src,
      people: <FaUsers className="w-6 h-6" />,
    },
    {
      price: "€650,00",
      duration: "3 uur",
      label: "PROMOPACK voor",
      features: [
        "tot 5de Verdieping",
        "Ladderlift",
        "Bestelwagen",
        "4 personen",
      ],
      icon: img4.src,
      people: <FaUsers className="w-6 h-6" />,
    },
    {
      price: "€120,00",
      duration: "uur",
      label: "6e - 7e Verdieping",
      features: ["Ladderlift", "Bestelwagen"],
      icon: img3.src,
      people: null,
    },
    {
      price: "€135,00",
      duration: "uur",
      label: "8e - 10e Verdieping",
      features: ["Ladderlift", "Bestelwagen"],
      icon: img3.src,
      people: null,
    },
  ];
  return (
    <div>
      <FadeIn>
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
              Verhuizen
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
                href="/verhuizen"
                className=" cursor-pointer  text-white font-semibold "
              >
                verhuizen
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn direction="up">
        <div className="flex flex-col justify-center items-center gap-2 my-4">
          <div className="bg-main h-1 lg:w-1/4 w-1/2"></div>
          <h2 className="text-main font-bold text-xl text-center">
            Ladderlift service + verhuiswagen
          </h2>
          <div className="bg-main h-1 lg:w-1/4 w-1/2"></div>
        </div>
        <div className="flex flex-col justify-start lg:px-12 px-6 my-4">
          <p>
            Verhuis met ladderlift, tarief gerekend van vertrek magazijn tot
            retour magazijn.
          </p>
          <h2>Deze tarieven gelden enkel voor:</h2>
          <p className="text-gray-600">
            <span className="text-red-600">Groot-Antwerpen:</span>
            Antwerpen, Berchem, Borgerhout, Borsbeek, Deurne, Ekeren, Hoboken,
            Merksem, Mortsel, Schoten, Wijnegem, Wilrijk, Wommelgem
          </p>
          <p className="text-gray-600">
            <span className="text-red-600">Daarbuiten:</span> Van magazijn tot
            magazijn berekend
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="uppercase text-main font-bold lg:text-3xl text-xl">
            Tarieven verhuispakketten
          </h2>
          <h3 className="text-black font-bold lg:text-2xl text-lg">
            Onze voordelige verhuispakketten
          </h3>
        </div>
      </FadeIn>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-4">
        {packs.map((pack, index) => (
          <FadeIn direction="up" key={index}>
            <Card
              key={index}
              className="shadow-md border border-gray-200 hover:shadow-xl transition"
            >
              <CardContent className="p-4 text-center space-y-4">
                <div className="text-2xl font-bold text-primary">
                  {pack.price}{" "}
                  <span className="text-base font-medium text-muted-foreground">
                    {pack.duration}
                  </span>
                </div>
                <div className="flex justify-center gap-2 text-gray-700">
                  <img src={pack.icon} className="h-12" />
                </div>
                <div className="bg-red-700 text-white py-1 rounded uppercase text-sm font-semibold">
                  {pack.label}
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {pack.features.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                <Link
                  href={"/contact"}
                  className="w-full bg-main hover:bg-red-800 text-white p-2 rounded"
                >
                  Reserveer nu
                </Link>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
      {/* <TruckRatesTable /> */}
      <FadeIn direction="up">
        <FeaturesGrid />
      </FadeIn>
    </div>
  );
}

export default page;
