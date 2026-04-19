import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";

const About = () => (
  <Layout>
    <PageSEO
      title="About Us | Willow & Stone Wellness"
      description="Learn about Willow & Stone Wellness — our philosophy, experienced therapists, and commitment to holistic care across Liverpool, Wirral, Chester & Warrington."
    />

    <section className="bg-secondary py-24">
      <div className="container text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">About Us</p>
        <h1 className="mt-3 font-display text-4xl font-medium md:text-5xl">Our Story</h1>
      </div>
    </section>

    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl space-y-16">
          <div>
            <h2 className="font-display text-2xl font-medium">Our Philosophy</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Willow & Stone was founded on a simple belief: wellness should be accessible, 
              intentional, and deeply personal. We create spaces where the noise of daily life 
              fades, and you're free to focus on what matters most — yourself.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We take a holistic approach to wellbeing, understanding that true restoration 
              comes from caring for mind, body, and spirit together. Every treatment, every 
              interaction, and every detail in our spaces reflects this commitment.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-medium">Our Therapists</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our team of over 25 qualified therapists brings together decades of combined 
              experience in massage, skincare, holistic healing, and wellness. Each therapist 
              is fully trained, insured, and committed to ongoing professional development.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We choose our team not just for their expertise, but for their warmth, 
              attentiveness, and genuine care for every client who walks through our doors.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-medium">Our Commitment</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From the products we use to the way we design our spaces, quality and care 
              guide every decision. We work with ethically sourced, premium skincare and 
              organic oils. Our treatment rooms are designed for privacy, comfort, and calm.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-medium">Where to Find Us</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Willow & Stone Wellness serves clients across Liverpool, Wirral, Chester, and 
              Warrington. With four locations, a premium experience is always within reach.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["Liverpool", "Wirral", "Chester", "Warrington"].map((loc) => (
                <div key={loc} className="rounded-lg bg-card p-5">
                  <h3 className="font-display text-lg font-medium">{loc}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Now welcoming appointments</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;