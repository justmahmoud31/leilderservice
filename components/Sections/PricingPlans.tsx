import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { FaArrowRight, FaTools, FaTruck, FaUserFriends } from "react-icons/fa"

function PricingPlans() {
    
const plans = [
  {
    price: "€450,00",
    duration: "3 uur",
    title: "PROMOPACK voor",
    details: [
      "tot 5’de Verdieping",
      "Ladderlift",
      "Bestelwagen",
      "2 personen",
    ],
    icon: <FaTruck />,
    highlight: true,
  },
  {
    price: "€350,00",
    duration: "3 uur",
    title: "PROMOPACK voor",
    details: [
      "tot 5’de Verdieping",
      "Ladderlift",
      "Allen Bestelwagen",
      "-",
    ],
    icon: <FaTools />,
    highlight: false,
  },
  {
    price: "€90,00",
    duration: "per uur",
    title: "6e–7e Verdieping",
    details: [
      "Bijkomende half uur 40 €",
      "Ladderlift",
      "Bediener",
      "Personen + 30€ / uur",
    ],
    icon: <FaUserFriends />,
    highlight: false,
  },
]
  return (
   <section className="py-12 bg-gradient-to-b from-gray-100 to-white">
      <div className="text-center mb-10">
        <h3 className="text-red-600 font-bold text-sm uppercase">Pricing Plan</h3>
        <h2 className="text-3xl font-bold text-gray-800">Affordable Pricing Packages</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={cn(
              "transition-all border-2",
              plan.highlight ? "border-red-600 shadow-lg" : "border-gray-200"
            )}
          >
            <CardContent className="p-6 flex flex-col gap-4 items-center text-center">
              <div className="text-main text-4xl">{plan.icon}</div>
              <div className="text-4xl font-bold text-gray-800">{plan.price}</div>
              <div className="text-sm text-gray-500">{plan.duration}</div>
              <div className="w-full py-2 bg-main text-white font-semibold text-lg rounded">
                {plan.title}
              </div>
              <ul className="text-gray-600 space-y-1 mt-2 text-sm">
                {plan.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <Link href={'/contact'} className="mt-4 flex justify-center items-center p-2 bg-main hover:bg-red-700 text-white w-full">
                Reserveer nu <FaArrowRight className="ml-2" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default PricingPlans