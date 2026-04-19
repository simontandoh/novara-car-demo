import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import SectionHeading from "@/components/SectionHeading";
import { Leaf, Sparkles, Heart, Sun, Gift, Waves } from "lucide-react";

const services = [
  { icon: Leaf, title: "Massage Therapy", slug: "massage-therapy", desc: "Therapeutic massage to relieve tension, ease muscle pain, and promote deep relaxation.", benefit: "Ideal for stress relief and physical recovery." },
  { icon: Sparkles, title: "Facial Treatments", slug: "facial-treatments", desc: "Bespoke facials using premium products to cleanse, hydrate, and rejuvenate your skin.", benefit: "Restore your natural radiance." },
  { icon: Waves, title: "Body Treatments", slug: "body-treatments", desc: "Full-body wraps, exfoliating scrubs, and nourishing rituals for total skin renewal.", benefit: "Leave feeling refreshed and revitalised." },
  { icon: Heart, title: "Holistic Therapies", slug: "holistic-therapies", desc: "Reflexology, aromatherapy, and energy healing to restore balance and harmony.", benefit: "Support your body's natural healing." },
  { icon: Gift, title: "Wellness Packages", slug: "wellness-packages", desc: "Curated multi-treatment journeys designed for complete mind and body restoration.", benefit: "The perfect gift for yourself or someone special." },
  { icon: Sun, title: "Spa Experiences", slug: "spa-experiences", desc: "Half-day and full-day retreats combining multiple treatments with relaxation time.", benefit: "A true escape from the everyday." },
];

const Services = () => (
  <Layout>
    <PageSEO
      title="Treatments & Services | Willow & Stone Wellness"
      description="Explore our range of massage therapy, facial treatments, body treatments, holistic therapies, and wellness packages in Liverpool, Wirral, Chester & Warrington."
    />

    <section className="bg-secondary py-24">
      <div className="container text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Willow & Stone Wellness</p>
        <h1 className="mt-3 font-display text-4xl font-medium md:text-5xl">Our Treatments</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          Every treatment is designed with care, precision, and your complete comfort in mind.
        </p>
      </div>
    </section>

    <section className="py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.slug} className="group border-border/50 transition-shadow hover:shadow-md">
              <CardContent className="flex flex-col p-8">
                <s.icon className="mb-4 h-7 w-7 text-primary" />
                <h2 className="font-display text-2xl font-medium">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <p className="mt-3 text-sm font-medium text-primary">{s.benefit}</p>
                <Button variant="outline" size="sm" className="mt-6 self-start" asChild>
                  <Link to={`/services/${s.slug}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;