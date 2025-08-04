import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#181828] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-red-600 text-lg font-bold mb-4">
            Neem contact met ons op
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt /> De Merodelei 19, 2300 Turnhout
            </li>
            <li className="flex items-start gap-2">
              <FaWhatsapp /> +0465 500 015
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt /> +0465 500 015
            </li>
            <li className="flex items-start gap-2">BTW : BE07 2750 3463</li>
            <li className="flex items-start gap-2">
              <FaEnvelope /> info@liederservice.be
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-xl text-white/70">
            <a target="_blank" href="https://x.com/liederserivce?s=11">
              <FaTwitter className="hover:text-white" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/share/16MpNrX733/?mibextid=wwXIfr"
            >
              <FaFacebookF className="hover:text-white" />
            </a>
            <a
              href="https://wa.me/32465500015"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-red-600 text-lg font-bold mb-4">
            Snelkoppelingen
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/over-ons" className="hover:underline">
                Over Ons
              </Link>
            </li>
            <li>
              <Link href="/voorwaarden" className="hover:underline">
                Voorwaarden
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Neem Contact Op
              </Link>
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="text-red-600 font-semibold mb-2">Openingstijden</h4>
            <p>
              <strong>Maandag:</strong> 07.00 – 18.00
            </p>
            <p>
              <strong>Weekend/Feestdagen:</strong> 07.00 – 18.00
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="sm:col-span-2">
          <h3 className="text-red-600 text-lg font-bold mb-4">Nieuwsbrief</h3>
          <p className="text-sm mb-4">
            Vul onderstaand formulier in en wij nemen zo spoedig mogelijk
            contact met u op.
          </p>
          <form className="flex w-full max-w-md">
            <Input
              placeholder="Uw e-mailadres"
              className="rounded-l-md rounded-r-none bg-white text-black"
            />
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 rounded-l-none"
            >
              Aanmelden
            </Button>
          </form>
        </div>
      </div>

      <div className="text-center text-xs text-white/60 mt-10 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Liederservice. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
