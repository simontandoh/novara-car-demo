import BookingDialog from "@/components/BookingDialog";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Link } from "react-router-dom";

/* -------- Imagery placeholders (replace when Simon supplies curated photos) -------- */
const IMG = {
  hero:       "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2400&q=80", // dim spa with stone texture
  philosophy: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80", // oils / linen
  ritual1:    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80", // massage hands
  ritual2:    "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80", // facial close-up
  ritual3:    "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=80", // hot stones
  space1:     "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=1200&q=80", // treatment room
  space2:     "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80", // apothecary shelf
  space3:     "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80", // draped linen
} as const;

const rituals = [
  {
    number: "01",
    title: "Therapeutic Bodywork",
    excerpt: "Deep, intentional massage that moves with your breath and your body's memory. For release, for recovery, for return.",
    meta: "60 – 120 minutes",
    to: "/services/massage-therapy",
    img: IMG.ritual1,
  },
  {
    number: "02",
    title: "Skin Rituals",
    excerpt: "Facial treatments grounded in botanical science and hands-on craft. Skin, soothed and read clearly.",
    meta: "45 – 90 minutes",
    to: "/services/facial-treatments",
    img: IMG.ritual2,
  },
  {
    number: "03",
    title: "Elemental Therapies",
    excerpt: "Hot stones, clay, infused oils, breath. The slow medicine of warmth and weight on the body.",
    meta: "75 – 150 minutes",
    to: "/services/holistic-therapies",
    img: IMG.ritual3,
  },
];

const spaces = [
  { title: "The Treatment Rooms", text: "Low light, warmed stone, linen that's been laundered more times than you can count.", img: IMG.space1 },
  { title: "The Apothecary",       text: "Plant oils, salts, resins — selected by our therapists, blended on the day.",           img: IMG.space2 },
  { title: "The Threshold",        text: "A quiet transition room. Tea, stillness, nothing asked of you.",                        img: IMG.space3 },
];

const stats = [
  { value: "12",  suffix: " yrs",  label: "of practice" },
  { value: "25",  suffix: "",      label: "therapists on staff" },
  { value: "40k", suffix: "",      label: "treatments delivered" },
  { value: "4",   suffix: "",      label: "locations across the North West" },
];

const testimonials = [
  { quote: "The most restorative hour I've spent in years. I left quieter than I arrived.",              author: "Sarah M.", location: "Liverpool" },
  { quote: "Everything is considered. The lighting, the scent, the silence. This is what hospitality is.", author: "James R.", location: "Chester" },
  { quote: "I booked a 60-minute and stayed for the afternoon. No one made me feel hurried.",             author: "Elena K.", location: "Wirral" },
];

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  useScrollReveal();

  return (
    <Layout>
      <PageSEO
        title="Willow & Stone Wellness | Premium Spa in Liverpool, Wirral, Chester & Warrington"
        description="Restorative bodywork, skin rituals, and elemental therapies across the North West. Book into a space built for stillness."
      />

      {/* ─────────── Hero ─────────── */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden -mt-16 md:-mt-20">
        <div
          className="absolute inset-0 animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.hero})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/80" aria-hidden="true" />

        <div className="container relative z-10 pb-24 pt-32 md:pb-32 md:pt-40">
          <div className="max-w-3xl">
            <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.4em] text-white/70">
              Willow &amp; Stone Wellness · Est. 2012
            </p>
            <h1 className="font-display text-5xl font-light leading-[1.05] text-white md:text-7xl lg:text-[5.5rem]">
              A quiet place<br />
              for the body<br />
              <em className="not-italic text-white/75">to return to.</em>
            </h1>
            <p className="mt-10 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
              Restorative therapy across Liverpool, Wirral, Chester &amp; Warrington.
              Treatment as it was meant to be — unhurried, honest, skilled.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" onClick={() => setBookingOpen(true)} className="rounded-none px-8">
                Book a treatment
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-none border-white/30 bg-transparent px-8 text-white hover:bg-white hover:text-foreground">
                <Link to="/services">View the rituals</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-8 z-10 hidden items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/50 md:flex">
          <span className="h-px w-10 bg-white/40" />
          Scroll
        </div>
      </section>

      {/* ─────────── Philosophy ─────────── */}
      <section className="py-28 md:py-40">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="reveal md:col-span-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Our philosophy</p>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] md:text-5xl">
                We don't sell <em className="italic">escape</em>.<br />
                We practice <em className="italic">return</em>.
              </h2>
            </div>
            <div className="reveal md:col-span-6 md:col-start-7 md:pt-4">
              <p className="text-lg leading-relaxed text-foreground/80">
                Wellness has been turned into performance. We think it should be quieter than that.
                A room that smells right. A therapist who reads your body before you speak.
                An hour where nothing is asked of you.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Willow &amp; Stone opened in 2012 with two rooms and a small shelf of botanicals.
                Four locations later, the practice has only refined — never expanded for its own sake.
                Every therapist we hire has worked the floor of clinics, studios, or hospitals first.
                We believe that matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Rituals ─────────── */}
      <section className="bg-card py-28 md:py-40">
        <div className="container">
          <div className="reveal mb-20 max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-accent">The rituals</p>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] md:text-5xl">
              Three practices.<br />Held in the old way.
            </h2>
          </div>

          <div className="space-y-24 md:space-y-32">
            {rituals.map((r, i) => (
              <div
                key={r.number}
                className={`reveal grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={r.img}
                    alt={r.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                  />
                </div>
                <div>
                  <p className="font-display text-sm tracking-[0.2em] text-accent">— {r.number} —</p>
                  <h3 className="mt-4 font-display text-3xl font-light md:text-4xl">{r.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-foreground/75 md:text-lg">
                    {r.excerpt}
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {r.meta}
                  </p>
                  <Link
                    to={r.to}
                    className="mt-8 inline-block border-b border-foreground/40 pb-1 text-sm tracking-wide transition-colors hover:border-foreground"
                  >
                    Read the treatment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── The Spaces (editorial 3-col) ─────────── */}
      <section className="py-28 md:py-40">
        <div className="container">
          <div className="reveal mb-16 grid gap-10 md:mb-20 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-accent">The spaces</p>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] md:text-5xl">
                Rooms that remember you.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pt-3">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Every Willow &amp; Stone room is built in the same language — limewash walls,
                unfinished oak, linen in three weights, oil on open shelves. The consistency is the point.
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {spaces.map((s) => (
              <article key={s.title} className="reveal group">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl font-light">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Stats ─────────── */}
      <section className="border-y border-border bg-card py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="reveal text-center md:text-left">
                <p className="font-display text-5xl font-light text-primary md:text-6xl">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Testimonials ─────────── */}
      <section className="py-28 md:py-36">
        <div className="container">
          <div className="reveal mb-16 max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-accent">In their words</p>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] md:text-5xl">
              What guests leave saying.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            {testimonials.map((t) => (
              <figure key={t.author} className="reveal">
                <blockquote className="font-display text-xl font-light italic leading-[1.4] text-foreground/85 md:text-2xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.author} · {t.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Final invitation ─────────── */}
      <section className="relative overflow-hidden bg-primary py-28 text-primary-foreground md:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${IMG.philosophy})` }}
          aria-hidden="true"
        />
        <div className="container relative z-10 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-primary-foreground/60">
            An invitation
          </p>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-light leading-[1.1] md:text-6xl">
            The room is ready<br />when you are.
          </h2>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => setBookingOpen(true)}
            className="mt-12 rounded-none px-10"
          >
            Book your treatment
          </Button>
        </div>
      </section>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </Layout>
  );
};

export default Index;
