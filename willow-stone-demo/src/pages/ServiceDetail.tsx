import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import BookingDialog from "@/components/BookingDialog";

const serviceData: Record<string, { title: string; seoTitle: string; seoDesc: string; intro: string; details: string[]; expect: string[] }> = {
  "massage-therapy": {
    title: "Massage Therapy",
    seoTitle: "Massage Therapy | Willow & Stone Wellness",
    seoDesc: "Therapeutic massage treatments in Liverpool, Wirral, Chester & Warrington. Deep tissue, Swedish, and hot stone massage by qualified therapists.",
    intro: "Our massage therapies are designed to release tension, restore movement, and bring you into a state of deep calm. Each session is tailored to your body's specific needs.",
    details: [
      "Swedish Massage — Flowing strokes to promote relaxation and improve circulation.",
      "Deep Tissue Massage — Targeted pressure to release chronic muscle tension.",
      "Hot Stone Massage — Heated basalt stones combined with massage for deep warmth.",
      "Sports Massage — Focused techniques for recovery and injury prevention.",
      "Pregnancy Massage — Gentle, supportive massage for expectant mothers.",
    ],
    expect: [
      "A private consultation to understand your needs and preferences.",
      "A warm, peaceful treatment room with soft lighting.",
      "Premium organic oils selected for your skin type.",
      "Aftercare advice to extend the benefits of your treatment.",
    ],
  },
  "facial-treatments": {
    title: "Facial Treatments",
    seoTitle: "Facial Treatments | Willow & Stone Wellness",
    seoDesc: "Bespoke facial treatments to cleanse, hydrate, and rejuvenate. Premium skincare at Willow & Stone Wellness in Liverpool, Wirral, Chester & Warrington.",
    intro: "Our facial treatments use premium, results-driven skincare to cleanse, nourish, and restore your natural radiance. Every facial is tailored to your skin type.",
    details: [
      "Signature Glow Facial — Deep cleanse, exfoliation, mask, and hydration.",
      "Anti-Ageing Facial — Targeted treatment to firm, smooth, and brighten.",
      "Hydration Rescue — Intensive moisture replenishment for dry or dehydrated skin.",
      "Sensitive Skin Facial — Calming formulations for reactive and delicate skin.",
      "Express Facial — A 30-minute refresh for when time is limited.",
    ],
    expect: [
      "A detailed skin analysis to determine the best approach.",
      "Cleansing, toning, and targeted treatment application.",
      "Relaxing facial massage techniques throughout.",
      "Product recommendations tailored to your skin.",
    ],
  },
  "body-treatments": {
    title: "Body Treatments",
    seoTitle: "Body Treatments | Willow & Stone Wellness",
    seoDesc: "Full-body wraps, scrubs, and skin rituals at Willow & Stone Wellness. Nourish and revitalise your skin in Liverpool, Wirral, Chester & Warrington.",
    intro: "Our body treatments are crafted to nourish, exfoliate, and revitalise from head to toe. Using natural ingredients and expert techniques, each session leaves your skin renewed.",
    details: [
      "Salt & Oil Body Scrub — Exfoliate and hydrate for silky-smooth skin.",
      "Detox Body Wrap — Drawing out impurities whilst deeply nourishing.",
      "Moisturising Body Ritual — A full-body treatment for ultimate hydration.",
      "Back, Neck & Shoulder Treatment — Targeted relief combined with skin care.",
    ],
    expect: [
      "A consultation to choose the right treatment for your skin.",
      "Natural, ethically sourced products.",
      "A warm, comfortable treatment environment.",
      "Visible skin improvement from the first session.",
    ],
  },
  "holistic-therapies": {
    title: "Holistic Therapies",
    seoTitle: "Holistic Therapies | Willow & Stone Wellness",
    seoDesc: "Reflexology, aromatherapy, and energy healing at Willow & Stone Wellness. Holistic treatments in Liverpool, Wirral, Chester & Warrington.",
    intro: "Our holistic therapies work with the body's natural energy to promote healing, balance, and deep relaxation. These gentle yet powerful treatments support your overall wellbeing.",
    details: [
      "Reflexology — Pressure point therapy on the feet to support whole-body health.",
      "Aromatherapy — Essential oil blends combined with therapeutic massage.",
      "Reiki — Gentle energy healing to restore balance and reduce stress.",
      "Indian Head Massage — Tension relief across the scalp, face, neck, and shoulders.",
    ],
    expect: [
      "A peaceful, calming environment for each session.",
      "A consultation to understand your wellness goals.",
      "Techniques that respect your comfort at all times.",
      "A sense of deep calm and renewed energy afterwards.",
    ],
  },
  "wellness-packages": {
    title: "Wellness Packages",
    seoTitle: "Wellness Packages | Willow & Stone Wellness",
    seoDesc: "Curated multi-treatment wellness packages at Willow & Stone Wellness. The perfect gift or personal retreat in Liverpool, Wirral, Chester & Warrington.",
    intro: "Our wellness packages combine multiple treatments into a single, seamless experience. Designed for those who want to fully immerse in relaxation and restoration.",
    details: [
      "The Restoration — Full body massage + signature facial (2.5 hours).",
      "The Retreat — Body scrub + massage + express facial (3 hours).",
      "The Journey — Half-day experience with four treatments and relaxation time.",
      "Couples Harmony — Side-by-side massage and facial for two.",
    ],
    expect: [
      "A dedicated treatment schedule planned around your visit.",
      "Relaxation time between treatments with refreshments.",
      "A seamless, unhurried experience from start to finish.",
      "Available as gift vouchers for that perfect present.",
    ],
  },
  "spa-experiences": {
    title: "Spa Experiences",
    seoTitle: "Spa Experiences | Willow & Stone Wellness",
    seoDesc: "Half-day and full-day spa retreats at Willow & Stone Wellness. Total relaxation experiences in Liverpool, Wirral, Chester & Warrington.",
    intro: "Our spa experiences are designed as a complete escape. Whether you choose a half-day or full-day retreat, every moment is curated for your restoration.",
    details: [
      "Morning Calm — Half-day retreat with two treatments and relaxation lounge access.",
      "The Full Day — A luxurious full-day experience with four treatments, lunch, and refreshments.",
      "Couples Escape — A shared spa day designed for connection and calm.",
      "Seasonal Specials — Rotating experiences inspired by the time of year.",
    ],
    expect: [
      "Welcome refreshments upon arrival.",
      "Exclusive access to our relaxation lounge.",
      "Multiple treatments with private time between sessions.",
      "A restorative experience that lingers long after you leave.",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [bookingOpen, setBookingOpen] = useState(false);
  const service = serviceData[slug || ""];

  if (!service) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="font-display text-3xl">Treatment not found</h1>
          <Button className="mt-6" asChild><Link to="/services">View All Treatments</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageSEO title={service.seoTitle} description={service.seoDesc} />

      <section className="bg-secondary py-24">
        <div className="container text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Treatments</p>
          <h1 className="mt-3 font-display text-4xl font-medium md:text-5xl">{service.title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">{service.intro}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl space-y-16">
            <div>
              <h2 className="font-display text-2xl font-medium">Treatment Options</h2>
              <ul className="mt-6 space-y-4">
                {service.details.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium">What to Expect</h2>
              <ul className="mt-6 space-y-4">
                {service.expect.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-card p-8 text-center">
              <h2 className="font-display text-2xl font-medium">Book This Treatment</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Ready to experience {service.title.toLowerCase()}? Book your appointment today.
              </p>
              <Button className="mt-6" onClick={() => setBookingOpen(true)}>
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </Layout>
  );
};

export default ServiceDetail;