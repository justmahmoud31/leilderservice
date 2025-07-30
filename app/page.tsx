import header from "@/public/header.jpg";
import Link from "next/link";
import LadderliftSection from "@/components/Sections/LadderliftSection";
import AboutSection from "@/components/Sections/AboutSection";
import OurServices from "@/components/Sections/Services";
import WhyUs from "@/components/Sections/WhyUs";
import Safe from "@/components/Sections/Safe";
import PricingPlans from "@/components/Sections/PricingPlans";
import ImageSlider from "@/components/Sections/ImageSlider";
import TestimonialSlider from "@/components/Sections/TestimonialSlider";
import FadeIn from "@/components/Shared/FadeIn";
export default function Home() {
  return (
    <>
      <FadeIn direction="down">
        <div
        className="flex"
        style={{
          backgroundImage: `url(${header.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // filter : "brightness(0.5)",
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 20px",
        }}
      >
        <div className="flex flex-col justify-center items-center gap-4 transition-transform duration-300 ease-in-out hover:scale-104 cursor-pointer filter backdrop-blur-sm bg-white/20 p-8 rounded-lg shadow-lg">
          <h2 className="text-main lg:text-3xl text-xl font-bold text-center">
            Lieder Service verhuisbedrijf & ladderlift in Antwerpen
          </h2>
          <h1 className="text-white lg:text-4xl text-2xl font-bold">
            Snel, veilig en betrouwbaar verhuizen
          </h1>
          <Link
            href="/contact"
            className="bg-main cursor-pointer hover:bg-[#901010] text-white font-semibold p-4 rounded"
          >
            Neem Contact op
          </Link>
        </div>
      </div>
      </FadeIn>
      <AboutSection />
      <FadeIn direction="left">
        <LadderliftSection />
      </FadeIn>
      <FadeIn direction="down">
        <OurServices />
      </FadeIn>
      <FadeIn direction="down">
        <WhyUs />
      </FadeIn>
      <FadeIn direction="up">
        <Safe />
      </FadeIn>
      <FadeIn direction="up">
        <PricingPlans />
      </FadeIn>
      <FadeIn direction="up">
        <ImageSlider />
      </FadeIn>

        <TestimonialSlider />
     
    </>
  );
}
