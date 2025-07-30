import image1 from '@/public/verhuizing-regelen.jpg';
import image2 from '@/public/verhuizen.jpg';
import image3 from '@/public/verhuizing-zelf-doen.jpg';
import image4 from '@/public/moving-in-move-out-cleaning-service-cleaners-Maine-1-1024x683-1.jpg';
import image5 from '@/public/verhuizen-dozen.jpg';
import image6 from '@/public/check-list-deplacer.jpg';
import image7 from '@/public/MoveMoversPackers.jpg';
import image8 from '@/public/moving-in-move-out-cleaning-service-cleaners-Maine-1-1024x683-1.jpg';
import image9 from '@/public/moving-in-out-cleaning-service-Maine-affordable-1-1024x684-1.jpg';
import image10 from '@/public/verhuizen-telecomabonnement.jpg';
import image11 from '@/public/consejos-practicos-para-mudarse-de-casa-1.jpg';
import image12 from '@/public/packed-boxes.jpg';
const features = [
  {
    title: "Scherpe prijs",
    text: "We bieden de beste ladderlift-service tegen een heel scherpe prijs!",
    img: image1.src,
    alt: "Verhuizing regelen - scherpe prijs",
  },
  {
    title: "Snel",
    text: "Betrouwbare vakmannen, altijd snel en stipt op de afspraak.",
    img: image2.src,
    alt: "Snel verhuizen",
  },
  {
    title: "Handig en makkelijk",
    text: "Parkeerborden nodig? Vertrouw op ons voor de plaatsing!",
    img: image3.src,
    alt: "Handig en makkelijk verhuizen",
  },
  {
    title: "Goede service en goedkoop",
    text: "Scherpe tarieven, door de week én in het weekend.",
    img: image4.src,
    alt: "Goede service en goedkoop verhuizen",
  },
  {
    title: "7/7 Service en altijd beschikbaar",
    text: "Elke dag van de week. Ook op zaterdag en zondag – zonder toeslag.",
    img: image5.src,
    alt: "7/7 service en altijd beschikbaar",
  },
  {
    title: "Flexibel",
    text: "Met meer dan 30 ladderliften in heel België vinden we altijd een oplossing.",
    img: image6.src,
    alt: "Checklist - flexibel verhuizen",
  },
  {
    title: "Lift Verhuizen",
    text: "Heeft u grote of zware voorwerpen? De meubellift is dé oplossing.",
    img: image7.src,
    alt: "Lift verhuizen - professionele service",
  },
  {
    title: "Veilig verhuizen",
    text: "Groot meubilair verhuizen tot de 22e verdieping met ladderlift en profs.",
    img: image8.src,
    alt: "Veilig verhuizen met verhuislift",
  },
  {
    title: "Verhuizen",
    text: "Renovatie, keuken of kunstwerken? Alles veilig en snel verhuisd.",
    img: image9.src,
    alt: "Verhuizen met schoonmaakservice",
  },
  {
    title: "Professioneel",
    text: "Al onze chauffeurs zijn professionals. Elke verhuis is vlot.",
    img: image10.src,
    alt: "Professioneel telecomabonnement verhuizen",
  },
  {
    title: "Online reserveren",
    text: "Je kan online eenvoudig een ladderlift reserveren.",
    img: image11.src,
    alt: "Online reserveren verhuisservice",
  },
  {
    title: "Heel België",
    text: "We bedienen alle provincies met verschillende vertrekpunten.",
    img: image12.src,
    alt: "Verhuizen in heel België",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-12 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Waarom voor ons kiezen?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 bg-white"
            >
              <div className="relative  w-full">
                <img
                  src={feature.img}
                  alt={feature.alt}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
