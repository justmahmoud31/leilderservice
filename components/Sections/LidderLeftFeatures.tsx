import { FeatureCard } from "@/components/Shared/FeatureCard";
import image1 from '@/public/g-1.jpg'
import image2 from '@/public/g-2.jpg'
import image3 from '@/public/g-3.jpg'
import image4 from '@/public/g-4.jpg'
import image5 from '@/public/g-5.jpg'
import image6 from '@/public/g-6.jpg'

const features = [
  {
    title: "Betaalbaar",
    image: image1.src,
    description: "Wij bieden professionele ladderliftservices tegen een zeer scherpe prijs.",
  },
  {
    title: "Flexibel",
    image: image2.src,
    description: "Met meer dan 30 ladderliften bieden wij voor iedere verhuizing in België een oplossing.",
  },
  {
    title: "Professioneel",
    image: image3.src,
    description: "Al onze operators zijn getrainde professionals om veilig en vlot te kunnen werken.",
  },
  {
    title: "7/7 Beschikbaar",
    image: image4.src,
    description: "Flexibele structuur, zelfs tijdens het weekend zonder extra toeslag!",
  },
  {
    title: "Betrouwbare diensten",
    image: image5.src,
    description: "Klanttevredenheid is topprioriteit. We zorgen dat u vlot en zonder stress kunt verhuizen.",
  },
  {
    title: "Jarenlange ervaring",
    image: image6.src,
    description: "Wij zijn een familiebedrijf met meer dan 20 jaar ervaring en sterke reputatie.",
  },
];

export default function FeaturesPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Waarom voor ons kiezen?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            title={feature.title}
            image={feature.image}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
