import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import SectionHeading from "@/components/SectionHeading";
import BookingDialog from "@/components/BookingDialog";
import { Leaf, Sparkles, Heart, Sun, Gift, Waves } from "lucide-react";

const services = [
  { icon: Leaf, title: "Massage Therapy", desc: "Ease tension and restore balance with therapeutic massage tailored to your body.", to: "/services/massage-therapy" },
  { icon: Sparkles, title: "Facial Treatments", desc: "Reveal your natural glow with bespoke facials using premium skincare.", to: "/services/facial-treatments" },
  { icon: Waves, title: "Body Treatments", desc: "Nourish and revitalise with full-body wraps, scrubs, and rituals.", to: "/services/body-treatments" },
  { icon: Heart, title: "Holistic Therapies", desc: "Restore harmony through reflexology, aromatherapy, and energy work.", to: "/services/holistic-therapies" },
  { icon: Gift, title: "Wellness Packages", desc: "Curated treatment journeys designed for complete relaxation.", to: "/services/wellness-packages" },
  { icon: Sun, title: "Spa Experiences", desc: "Half-day and full-day retreats for total mind-body restoration.", to: "/services/spa-experiences" },
];

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "25+", label: "Qualified Therapists" },
  { value: "40k+", label: "Treatments Delivered" },
  { value: "4", label: "Locations" },
];

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <Layout>
      <PageSEO
        title="Willow & Stone Wellness | Premium Spa in Liverpool, Wirral, Chester & Warrington"
        description="Experience restorative massage therapy, facial treatments, and holistic therapies at Willow & Stone Wellness. Serving Liverpool, Wirral, Chester & Warrington."
      />

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/80 to-background" />
        <div className="container relative z-10 py-24 text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-accent">Willow & Stone Wellness</p>
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-light leading-tight md:text-7xl">
            Restore. Renew. Reconnect.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A sanctuary for holistic wellness across Liverpool, Wirral, Chester & Warrington. 
            Step away from the everyday and into a space designed for your restoration.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={() => setBookingOpen(true)}>
              Book an Appointment
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View Treatments</Link>
            </Button>
          </div>
          <p className="mt-8 text-xs tracking-[0.15em] text-muted-foreground">
            Relaxation · Professional Therapists · Holistic Care
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Welcome</p>
            <h2 className="mt-3 font-display text-3xl font-medium md:text-4xl">
              Wellness, Thoughtfully Delivered
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              At Willow & Stone, we believe true wellness begins with intention. Every treatment is designed 
              to honour your body's need for rest, recovery, and renewal. Our therapists bring years of 
              expertise, care, and attention to every session — because you deserve nothing less.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-card py-24">
        <div className="container">
          <SectionHeading
            label="Our Treatments"
            title="Crafted for Your Wellbeing"
            description="From targeted therapies to immersive spa days, each experience is tailored to restore balance and calm."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="group border-border/50 bg-background transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col items-start p-8">
                  <s.icon className="mb-4 h-6 w-6 text-primary" />
                  <h3 className="font-display text-xl font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link
                    to={s.to}
                    className="mt-4 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">The Experience</p>
              <h2 className="mt-3 font-display text-3xl font-medium md:text-4xl">
                A Space Designed for Stillness
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                From the moment you arrive, everything is crafted to ease you into calm. 
                Warm lighting, natural textures, and quiet spaces create an environment where 
                your mind and body can truly let go.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our treatment rooms are private sanctuaries — each one designed with organic 
                materials, soft linens, and an atmosphere of understated luxury. Whether you're 
                here for thirty minutes or an entire day, the experience stays with you.
              </p>
              <Button variant="outline" className="mt-8" asChild>
                <Link to="/gallery">Explore Our Spaces</Link>
              </Button>
            </div>
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-secondary via-muted to-secondary" />
          </div>
        </div>
      </section>

      {/* Trust / Stats */}
      <section className="border-y bg-card py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl font-medium text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="font-display text-2xl font-light italic leading-relaxed md:text-3xl">
              "The most calming experience I've had. From the first moment, I felt completely at ease. 
              It was exactly what I needed."
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground">— Sarah M., Liverpool</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-medium md:text-4xl">Ready to Restore Your Balance?</h2>
          <p className="mx-auto mt-4 max-w-md text-base opacity-90">
            Book your appointment today and experience wellness the way it was meant to feel.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="mt-8"
            onClick={() => setBookingOpen(true)}
          >
            Book an Appointment
          </Button>
        </div>
      </section>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </Layout>
  );
};

export default Index;