"use client";

import image1 from '@/public/ladder-truck.png'
import image2 from '@/public/parking.png';
import image3 from '@/public/insurance.png';
import image4 from '@/public/responsible.png'

const services = [
  {
    icon: image1.src,
    title: "Ladderlift",
    description: "Onze ladderliften zijn geschikt voor elk type verhuis, van 1ste tot 10ste verdieping. Snel, veilig en professioneel.",
  },
  {
    icon: image2.src,
    title: "Plaatsing Parkeerbord",
    description: "Wij regelen de aanvraag en plaatsing van parkeerborden voor uw verhuis. Voorkom boetes en regel het direct via ons.",
  },
  {
    icon: image3.src,
    title: "Meubelopslag",
    description: "Voor het opslaan van uw meubelen bieden wij meubelcontainers en/of opslag in onze selfstorage, flexibel en veilig.",
  },
  {
    icon: image4.src,
    title: "Service bij iedere services",
    description: "Neem contact met ons op als u interesse hebt. Wij bieden onze ladderlift diensten in groot Turnhout, dus aarzel niet!",
  },
];

export default function OurServices() {
  return (
    <section className="py-20 px-4 md:px-20 bg-white text-center">
      <p className="text-red-700 font-bold uppercase mb-2">ONZE DIENSTEN</p>
      <h2 className="text-4xl font-bold mb-12">Wat bieden wij?</h2>

      <div className="grid md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col items-center border-t-4 border-red-700"
          >
            <div className="text-red-700 mb-4">
              <img 
              src={service.icon}
              className='w-24 h-24'
              />
            </div>
            <h3 className="text-lg font-semibold text-red-700 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
