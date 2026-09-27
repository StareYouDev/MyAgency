import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
import { Comparison } from "@/components/site/Comparison";
import { Trust } from "@/components/site/Trust";
import { Faq } from "@/components/site/Faq";
import { Giving } from "@/components/site/Giving";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { faqs } from "@/lib/content";

const SITE = "https://www.projectone.website/";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <Pricing />
        <Comparison />
        <Trust />
        <Faq />
        <Giving />
        <Contact />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ ...faqJsonLd, url: SITE }),
        }}
      />
    </>
  );
}
