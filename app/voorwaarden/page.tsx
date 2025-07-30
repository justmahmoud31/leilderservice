"use client";
import { Card, CardContent } from "@/components/ui/card";
import { FaFileAlt } from "react-icons/fa";
import header from "@/public/header.webp";
import Link from "next/link";
import terms from "@/public/verhuizen-dozen.jpg";
import FadeIn from "@/components/Shared/FadeIn";

function page() {
  return (
    <div>
      <FadeIn>
        <div
          className="flex"
          style={{
            backgroundImage: `url(${header.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
              Voorwaarden
            </h2>
            <div className="flex justify-center items-center text-white gap-2">
              <Link
                href="/"
                className="cursor-pointer text-white font-semibold"
              >
                Home
              </Link>
              <span className="text-white">/</span>
              <Link
                href="/voorwaarden"
                className="cursor-pointer text-white font-semibold"
              >
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

      <section className="py-16 px-4 md:px-20 bg-white">
        <FadeIn direction="up">
          <div className="flex justify-center mb-10">
            <img
              src={terms.src}
              alt="Person under boxes"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </FadeIn>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 uppercase">
            Voorwaarden & Belangrijke Informatie
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Lees deze voorwaarden zorgvuldig door voor een vlotte en veilige
            verhuiservaring.
          </p>
        </div>

        {/* Main Card */}
        <FadeIn direction="up">
          <Card className="max-w-4xl mx-auto bg-gray-50 shadow-md rounded-xl border border-gray-200">
            <CardContent className="p-6 md:p-10">
              <div className="flex items-center gap-2 mb-6">
                <FaFileAlt className="text-blue-600 text-xl" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Algemene Voorwaarden
                </h2>
              </div>

              {/* Grouped Conditions */}
              <div className="space-y-6 text-gray-700 text-sm md:text-base">
                {[
                  {
                    title: "Voorwaarden 1–5",
                    items: [
                      "Kleine voorwerpen (lusters, staande lampen, potten, enz.) moeten op voorhand in gesloten dozen zijn verpakt (behalve bij full service).",
                      "Kasten moeten leeg zijn. Schabben moeten uit de kasten gehaald worden (behalve bij full service).",
                      "Laden moeten leeg zijn و uit de kasten gehaald worden. De deurtjes moeten op slot en dichtgekleefd zijn (behalve bij full service).",
                      "Indien er meubelen moeten gedemonteerd worden, dient dit uitdrukkelijk vermeld te worden bij het bestellen van de verhuizing. Meubelen die reeds gedemonteerd zijn, worden door ons personeel niet gemonteerd.",
                      "Bij regenweer kan de klant: a) aan de verhuizers vragen de meubels in te pakken in plastic folie b) de meubels laten afdekken met dekens c) de verhuizers laten wachten tot de bui voorbij is d) de verhuizers gewoon laten verder werken.",
                    ],
                  },
                  {
                    title: "Voorwaarden 6–10",
                    items: [
                      "Elektronische toestellen dienen in originele dozen verpakt te zijn. Indien dit niet het geval is, mogen de verhuizers weigeren deze te verhuizen of gebeurt hun vervoer op eigen risico.",
                      "Matrassen dienen op voorhand ingepakt te zijn. Indien nodig kan de klant op het bureau plastic matrasbeschermers komen afhalen of aan de verhuizers vragen tijdens de verhuizing.",
                      "Verhuizingen 's morgens beginnen ALTIJD om 7:30 u. Namiddag verhuizingen beginnen NORMAAL GEZIEN tussen 11 en 14 uur, maar dit kan door onvoorziene omstandigheden variëren.",
                      "De klant is verantwoordelijk indien er gebruik dient gemaakt te worden van opritten en dient vooraf schriftelijke toelating te geven.",
                      "De klant dient de verhuisfirma op de hoogte te brengen van mogelijke obstakels voor de woning zoals palen, terrassen, telefoonkasten, bomen, de lengte van de voortuin en of de verhuizing op een binnenkoer moet plaatsvinden.",
                    ],
                  },
                  {
                    title: "Voorwaarden 11–15",
                    items: [
                      "Er wordt altijd een factuur opgemaakt die op aanvraag na de verhuizing wordt opgestuurd. Facturatiekosten voor particulieren bedragen 6 EURO (incl. BTW).",
                      "Na 18:00 u, op ZON- EN FEESTDAGEN en na 8 werkuren wordt de prijs van de werkuren MET 100% VERMEERDERD.",
                      "Als door onvoorziene omstandigheden de hydraulische lift niet kan geplaatst worden, kan een andere lift opgeroepen worden mits extra kosten.",
                      "De ladderlift mag enkel door het verhuispersoneel worden bediend.",
                      "De meubelen die in de vrachtwagen geplaatst worden door iemand anders dan het verhuispersoneel zijn NIET verzekerd.",
                    ],
                  },
                  {
                    title: "Voorwaarden 16–20",
                    items: [
                      "Het gebruik van de huislift gebeurt op verantwoordelijkheid van de klant. Deze dient op voorhand toestemming te vragen en voorzorgsmaatregelen te nemen.",
                      "Er wordt niet verhuisd via de trap tenzij indien er geen andere mogelijkheid bestaat. De firma is niet aansprakelijk voor schade aan trapzalen.",
                      "De klant dient bij het vertrek naar het losadres zelf te controleren of alle goederen mee verhuisd zijn.",
                      "Bij verplaatsing tussen adressen blijft steeds één persoon van de klant bij de verhuiswagen.",
                      "De helpers van de klant moeten Nederlands-, Frans- of Engelstalig zijn en fysiek in staat zijn om te helpen bij het laden en lossen.",
                    ],
                  },
                  {
                    title: "Voorwaarden 21–25",
                    items: [
                      "Bij het verhuizen van buffetpiano’s is de aanwezigheid van 3 verhuizers verplicht. Voor een vleugelpiano zijn minimum 4 verhuizers vereist en een toeslag van 150 EURO.",
                      "Bij het verhuizen van stukken zwaarder dan 200 kg zijn 3 verhuizers verplicht, boven 250 kg zijn 4 verhuizers vereist.",
                      "Er wordt nooit alcohol aangeboden aan de verhuisploeg.",
                      "De verhuisfirma behoudt zich het recht voor de overeenkomst te beëindigen bij overmacht zonder enige schadevergoeding.",
                      "Een verhuizing kan verplaatst worden naar een andere datum mits dit minstens 7 dagen vooraf gemeld wordt.",
                    ],
                  },
                  {
                    title: "Voorwaarden 26–30",
                    items: [
                      "Bij annulatie van de verhuizing wordt de waarborg niet terugbetaald en kunnen er extra kosten aangerekend worden van minimum 150 EURO per halve dag.",
                      "Voor elke volledige verhuizing worden minimum 3 uur aangerekend (behalve bij liftservice). De uren worden berekend vanaf vertrek tot terugkeer in de garage.",
                      "Bij problemen of klachten verzoeken wij u geen discussie aan te gaan met de verhuizers, maar direct het bureau te contacteren.",
                      "De firma is niet aansprakelijk voor wachttijden door verkeerd geparkeerde voertuigen, zelfs als verkeersborden zijn aangevraagd.",
                      "Facturen brengen van rechtswege een verwijlintrest op van 12% per jaar + schadevergoeding van 20% van het factuurbedrag met minimum van 75 EURO indien niet binnen 15 dagen betaald.",
                    ],
                  },
                  {
                    title: "Voorwaarden 31–32",
                    items: [
                      "De Rechtbanken te Antwerpen zijn uitsluitend bevoegd voor geschillen. Indien het een geschil voor de Vrederechter betreft, is het 7de Gerechtelijk Kanton van Antwerpen bevoegd.",
                      "Consumenten kunnen binnen 7 werkdagen de overeenkomst kosteloos annuleren, tenzij de verhuizing binnen die 7 dagen gepland is.",
                    ],
                  },
                ].map(({ title, items }, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {title}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
        {/* Liability Section */}
        <FadeIn direction="up">
          <Card className="max-w-4xl mx-auto mt-12 bg-gray-50 shadow-md rounded-xl border border-gray-200">
            <CardContent className="p-6 md:p-10">
              <div className="flex items-center gap-2 mb-6">
                <FaFileAlt className="text-red-600 text-xl" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Aansprakelijkheid en Schade
                </h2>
              </div>

              <div className="space-y-6 text-gray-700 text-sm md:text-base">
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <strong>A.</strong> Partijen komen uitdrukkelijk overeen de
                    verhuisfirma te ontheffen van alle aansprakelijkheid uit
                    hoofde van schade aan personen of aan goederen, die ter
                    gelegenheid van de verhuizing zou worden veroorzaakt.
                  </li>
                  <li>
                    <strong>B.</strong> Mits het betalen van een opleg van 21
                    EURO, ten titel van schadedekkingspremie, kan de
                    aansprakelijkheid van de verhuisfirma in afwijking van hoger
                    vermeld artikel worden verhoogd per schijf van 2500 EURO per
                    verhuizing en met een vrijstelling lastens de klant van 250
                    EURO.
                  </li>
                  <li>
                    <strong>C.</strong> De verhuisfirma kan nooit aansprakelijk
                    gesteld worden uit hoofde van materiële of lichamelijke
                    schade, aan of door de klant of aan of door zijn helpers
                    toegebracht aan wie ook, zelfs niet indien het schadegeval
                    zich voordoet ter gelegenheid van de samenwerking tussen een
                    aangestelde van de verhuisfirma en de klant en/of zijn
                    helper(s).
                  </li>
                  <li>
                    <strong>D.</strong> Schade aan planten, schilderijen,
                    aquariums, waterbedden, dieren en trapzalen blijft steeds
                    van de aansprakelijkheid van de verhuisfirma uitgesloten.
                  </li>
                  <li>
                    <strong>E.</strong> Schade veroorzaakt door
                    weersomstandigheden blijft steeds uitgesloten van de
                    aansprakelijkheid van de firma. (zie punt 5)
                  </li>
                  <li>
                    <strong>F.</strong> Krassen zijn steeds uitgesloten van de
                    aansprakelijkheid van de firma.
                  </li>
                  <li>
                    <strong>G.</strong> Mits het betalen van bovenvernoemde
                    opleg zijn kunstvoorwerpen in eerste risico gedekt tot max.
                    2500 EURO.
                  </li>
                  <li>
                    <strong>H.</strong> Er mag vertrek in Deurne tot aan de
                    terugkeer in de garage. Bij problemen of klachten verzoeken
                    wij u geen discussie aan te gaan met de verhuizers, maar
                    direct het bureau te contacteren, waarna indien nodig iemand
                    van de firma zal langskomen. De firma is niet aansprakelijk
                    voor wachttijden veroorzaakt door verkeerd geparkeerde
                    voertuigen, zelfs indien de verkeersborden door de firma
                    zijn aangevraagd. De kosten voor de wachttijd zijn altijd
                    ten laste van de klant. Alle facturen brengen van rechtswege
                    en zonder ingebrekestelling een verwijlsintrest op van 12 %
                    per jaar vanaf de factuurdatum. De klant is van rechtswege
                    en zonder ingebrekestelling een contractuele
                    schadevergoeding verschuldigd van 20 % van het totale
                    factuurbedrag, met een minimum van 75 EURO, voor iedere
                    factuur die niet betaald is binnen de 15 dagen na de
                    factuurdatum.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </section>
    </div>
  );
}

export default page;
