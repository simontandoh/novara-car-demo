import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import SectionHeading from "@/components/SectionHeading";

const galleryItems = [
  { title: "Treatment Room", desc: "Private, warm spaces designed for complete comfort and calm." },
  { title: "Massage Session", desc: "Expert therapists delivering tailored therapeutic massage." },
  { title: "Facial Experience", desc: "Premium skincare rituals for a radiant, refreshed glow." },
  { title: "Relaxation Lounge", desc: "A tranquil space to unwind before and after your treatment." },
  { title: "Spa Atmosphere", desc: "Natural textures, soft lighting, and calming scents throughout." },
  { title: "Couples Suite", desc: "Side-by-side treatments in our dedicated couples room." },
  { title: "Holistic Space", desc: "A serene setting for reflexology, reiki, and energy healing." },
  { title: "Welcome Area", desc: "Your journey begins with warmth and a moment of stillness." },
];

const Gallery = () => (
  <Layout>
    <PageSEO
      title="Gallery | Willow & Stone Wellness"
      description="Explore the Willow & Stone Wellness experience. Treatment rooms, relaxation spaces, and spa atmosphere across Liverpool, Wirral, Chester & Warrington."
    />

    <section className="bg-secondary py-24">
      <div className="container text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Our Spaces</p>
        <h1 className="mt-3 font-display text-4xl font-medium md:text-5xl">The Experience</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          A glimpse into the spaces and moments that define Willow & Stone.
        </p>
      </div>
    </section>

    <section className="py-24">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <Card key={item.title} className="group overflow-hidden border-border/50">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-muted to-secondary" />
              <CardContent className="p-5">
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Gallery;