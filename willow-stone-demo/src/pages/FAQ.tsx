import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";

const faqs = [
  { q: "What treatments do you offer?", a: "We offer massage therapy, facial treatments, body treatments, holistic therapies, wellness packages, and full spa day experiences. Each treatment is tailored to your needs by our qualified therapists." },
  { q: "Do I need to book in advance?", a: "Yes, we recommend booking in advance to secure your preferred time and therapist. You can book online or call us directly. We occasionally have same-day availability." },
  { q: "How long are appointments?", a: "Treatment times vary from 30 minutes for express treatments to full-day spa experiences. Most individual treatments run between 60 and 90 minutes." },
  { q: "What should I expect during my visit?", a: "You'll be welcomed into a calm, peaceful environment. Your therapist will begin with a brief consultation to understand your needs, then guide you through your treatment in a private room." },
  { q: "Are treatments suitable for beginners?", a: "Absolutely. Many of our clients are first-time spa visitors. Our therapists are experienced in making everyone feel comfortable and will explain everything before and during your treatment." },
  { q: "Do you offer wellness packages?", a: "Yes, we offer curated packages combining multiple treatments — from 2-hour journeys to full-day retreats. These are also available as gift vouchers." },
  { q: "Is parking available?", a: "Parking is available at all four of our locations. Details will be included in your booking confirmation email." },
  { q: "How early should I arrive?", a: "We recommend arriving 10–15 minutes before your appointment. This allows time to settle in, complete any forms, and begin your experience in a relaxed state." },
  { q: "Can I buy treatments as gifts?", a: "Yes, gift vouchers are available for all treatments and packages. They can be purchased online or at any of our locations and are valid for 12 months." },
  { q: "How do I book?", a: "You can book through our website using the 'Book Appointment' button, call us on 0151 000 0000, or email hello@willowandstone.co.uk." },
];

const FAQ = () => (
  <Layout>
    <PageSEO
      title="Frequently Asked Questions | Willow & Stone Wellness"
      description="Find answers to common questions about treatments, booking, parking, gift vouchers, and more at Willow & Stone Wellness."
    />

    <section className="bg-secondary py-24">
      <div className="container text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Support</p>
        <h1 className="mt-3 font-display text-4xl font-medium md:text-5xl">Frequently Asked Questions</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          Everything you need to know before your visit.
        </p>
      </div>
    </section>

    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border bg-card px-6">
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  </Layout>
);

export default FAQ;