import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <CTA />
      <Contact />
    </main>
  );
}
