"use client"
import feature from "@/public/feature.jpg"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaCheckCircle } from "react-icons/fa"
function WhyUs() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-4 items-center justify-center bg-gray-50 p-6">
      {/* Left: Image */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 mb-6 lg:mb-0"
      >
        <img
          src={feature.src}
          alt="Mover carrying a box"
          width={600}
          height={500}
          className="rounded-xl shadow-lg object-cover"
        />
      </motion.div>

      {/* Right: Content */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 space-y-6 text-gray-800"
      >
        <p className="text-sm text-red-600 font-semibold tracking-wide uppercase">
          Waarom kiezen voor Lieder Services?
        </p>

        <h1 className="text-4xl font-bold text-gray-900">
          Uw winst, <span className="text-red-600">onze zorg</span>
        </h1>

        <p className="text-gray-600 text-base leading-relaxed">
          Dit feit brengt winst alleen voor u – onze klanten. Wij bieden onze
          ladderlift diensten in groot Antwerpen, dus aarzel niet en neem contact
          met ons op als u interesse hebt.
        </p>

        <ul className="space-y-3">
          {[
            "Snelle service",
            "Veilig & professioneel",
            "Flexibele opslagmogelijkheden",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-lg">
              <FaCheckCircle className="text-red-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link href={'/contact'} className="bg-red-600 hover:bg-red-700 text-white text-base rounded-xl px-6 py-2 shadow-md transition">
          Neem contact op
        </Link>
      </motion.div>
    </div>
  )
}

export default WhyUs