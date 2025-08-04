"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import pic from "@/public/price.png";
function LadderliftPricing() {
  const ladderliftLevels = [
    { from: 1, to: 5, price: 100 },
    { from: 1, to: 6, price: 110 },
    { from: 1, to: 7, price: 120 },
    { from: 1, to: 8, price: 130 },
    { from: 1, to: 9, price: 140 },
    { from: 1, to: 10, price: 150 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <p className="text-sm text-red-600 font-semibold tracking-wide">
          PRICING PLAN
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ladderlift Verdiepingsprijzen
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {ladderliftLevels.map((level, idx) => (
          <Card
            key={idx}
            className={cn(
              "shadow-xl hover:scale-[1.02] transition-transform duration-300"
            )}
          >
            <CardContent className="flex flex-col items-center py-8 px-4">
              <div className="text-3xl font-bold text-gray-900">
                €{level.price},00{" "}
                <span className="text-sm font-medium text-gray-500">/uur</span>
              </div>

              <div className="flex items-center gap-3 my-4">
                <img src={pic.src} alt="ladderlift" className="w-24" />
              </div>

              <div className="text-lg font-semibold bg-main text-white py-1 px-4 rounded">
                Van verdieping {level.from} tot {level.to}
              </div>

              <ul className="mt-4 text-sm text-gray-600 space-y-2 text-center">
                <li>Ladderlift inbegrepen</li>
                <li>Bediener inbegrepen</li>
              </ul>
              <p className="text-red-600 font-semibold">Prijzen zijn exclusief belastingen</p>
              <Link
                href="/contact"
                className="mt-6 p-2 rounded-md text-center w-full bg-main hover:bg-red-700 text-white"
              >
                Reserveer nu
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default LadderliftPricing;
