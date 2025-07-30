import ContactForm from "@/components/Sections/ContactForm";
import FadeIn from "@/components/Shared/FadeIn";
import React from "react";

function page() {
  return (
    <div className="lg:px-12 px-6 py-24">
      <FadeIn direction="up">
        <ContactForm />
      </FadeIn>
    </div>
  );
}

export default page;
