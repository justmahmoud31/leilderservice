"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from '@/public/logo.jpeg';
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
const tabs = [
  { name: "Home", href: "/" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Onze Services", href: "/onze-services" },
  { name: "Voorwaarden", href: "/voorwaarden" },
  { name: "Verhuistips", href: "/verhuistips" },
  { name: "LADDERLIFT", href: "/ladderlift" },
  { name: "VERHUIZEN", href: "/verhuizen" },
  { name: "Fotos", href: "/fotos" },
  { name: "Contact", href: "/contact" },
  { name: "Artikelen", href: "/artikelen" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); 

  return (
    <nav className="bg-[#eee] shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          <img src={logo.src} alt="Logo" className="h-12 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`transition  ${
                  isActive
                    ? "text-[#af0c0d] font-semibold"
                    : "text-gray-700 hover:text-[#af0c0d]"
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
          <Link href="/contact">
            <Button className="bg-main cursor-pointer hover:bg-[#901010] text-white font-semibold p-4  rounded">
              Gratis  Offerte
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-black p-0 outline-none focus:outline-none cursor-pointer"
              >
                {open ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-white p-4">
              <div className="flex flex-col mt-8 space-y-4">
                {tabs.map((tab) => {
                  const isActive = pathname === tab.href;
                  return (
                    <Link
                      key={tab.name}
                      href={tab.href}
                      className={`text-lg ${
                        isActive
                          ? "text-[#af0c0d] font-semibold"
                          : "text-gray-700 hover:text-[#af0c0d]"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {tab.name}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  className="bg-main text-white text-center px-2 py-4 rounded font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Gratis Offerte
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
