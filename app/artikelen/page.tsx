// app/artikelen/page.tsx
import { articles } from "../articleData";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // adjust path if needed
import FadeIn from "@/components/Shared/FadeIn";

export const metadata: Metadata = {
  title: "Alle Artikelen - Onze Complete Gids",
  description:
    "Bekijk onze verzameling van nuttige artikelen over elektriciteit, loodgieterswerk en meer.",
};

export default function ArticlesPage() {
  return (
    <div className="max-w-5xl mx-auto py-24 px-4">
      <h1 className="text-3xl font-bold mb-10 text-center">Artikels</h1>

      <Accordion type="multiple" className="w-full space-y-4">
        {articles.map((article, index) => (
          <FadeIn direction="down" key={index}>
            <AccordionItem key={article.slug} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold cursor-pointer">
                {article.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {article.h2.map((heading, i) => (
                  <div key={i} className="mb-4">
                    <h2 className="text-lg font-medium mb-2">{heading}</h2>
                    <ul className="list-disc pl-6">
                      {article.h3.map((sub, j) => (
                        <li key={j}>{sub}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </FadeIn>
        ))}
      </Accordion>
    </div>
  );
}
