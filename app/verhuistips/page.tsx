// app/verhuistips/page.tsx (or pages/verhuistips.tsx for older structure)

import FadeIn from "@/components/Shared/FadeIn";
import React from "react";

const verhuisTips = [
  {
    title: "Zodra u weet wanneer u gaat verhuizen",
    items: [
      "Offerte opvragen en afspraak maken met Lieder Service",
      "Informeren naar verhuisvergoeding bij werkgever",
      "Huur oude woning opzeggen",
      "Verhuizing telefoon en internetaansluiting bij uw provider",
      "School van de kinderen informeren",
      "Afspraken maken met oude bewoners van uw nieuwe huis",
      "Verhuisverlof aanvragen bij werkgever",
      "Maten opnemen nieuwe huis",
      "Huishoudelijke hulp opzeggen/adreswijziging bespreken",
      "Beginnen met opruimen",
      "Informeren naar - scholen, verenigingen, kleuteropvang, gezinszorg, etc.",
    ],
  },
  {
    title: "Vier tot twee weken voor de verhuizing",
    items: [
      "Kinderen aanmelden bij nieuwe school",
      "Verzekering inlichten over uw verhuizing",
      "Afsluiten elektra, gas en water oude woning regelen",
      "Aansluiten elektra, gas en water nieuwe woning regelen",
      "Naamplaatje laten maken",
      "Opruimen van spullen die niet mee verhuizen",
    ],
  },
  {
    title: "De laatste paar dagen voor de verhuizing",
    items: [
      "Nieuwe huis schoonmaken en kamers merken",
      "Vaste lampen afnemen",
      "Gordijnen afnemen (behalve slaapkamers)",
      "Leveranciers inlichten",
      "Spullen inpakken die u niet meer nodig heeft",
      "Maaltijden voorbereiden voor verhuisdag",
      "Voldoende koffie, thee, fris in beide huizen aanwezig?",
      "Gemeentereiniging inschakelen voor grofvuil",
      "Trommelbeveiliging wasmachine vastzetten",
      "Huisvuilcontainers legen en schoonmaken",
      "Chemobox leegmaken en wegbrengen",
    ],
  },
  {
    title: "Op de laatste dag voor de verhuizing",
    items: [
      "Koelkast ontdooien en schoonmaken",
      "Diepvriezer op koudste stand zetten",
      "Meubels demonteren",
      "Slinger uit de klok nemen",
      "Plaats voor verhuiswagen reserveren",
      "Laatste dingen inpakken",
      "Harde schijf computer beveiligen",
    ],
  },
  {
    title: "Op de verhuisdag zelf",
    items: [
      "Gordijnen slaapkamers afnemen",
      "Sleutels opbergen in sleutelzakje",
      "Geld en pasjes gescheiden houden",
      "Controleer het oude huis op spullen",
      "Meterstanden opnemen",
      "Gas/elektra/water afsluiten indien nodig",
      "Ramen en deuren afsluiten",
      "Sleutel oude huis afgeven",
      "Afscheid nemen van de buren",
    ],
  },
  {
    title: "Na aankomst in de nieuwe woning",
    items: [
      "Spullen op juiste plekken zetten",
      "Controleer alles op schade",
      "Afrekenen met Erkende Verhuizer",
      "Eén kamer direct bewoonbaar maken",
      "Slaapkamergordijnen ophangen",
      "Koelkast/vriezer 24u laten acclimatiseren",
      "Trommelbeveiliging wasmachine verwijderen",
      "Beveiliging harde schijf verwijderen",
    ],
  },
];

export default function VerhuisTipsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn direction="up">
          <h1 className="text-4xl font-bold text-center mb-10 text-main">
            Verhuistips
          </h1>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Verhuizen is al lastig genoeg. Daarom heeft Lieder Services -
            Ladderlift een lijst met handige tips samengesteld zodat u niets
            over het hoofd ziet!
          </p>
        </FadeIn>

        <div className="space-y-12">
          {verhuisTips.map((section, idx) => (
            <FadeIn direction="up" key={idx}>
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-semibold text-main mb-4">
                  {section.title}
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {section.items.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
