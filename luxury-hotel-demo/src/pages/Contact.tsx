import { useState } from "react";
import { trpc } from "@/providers/trpc";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", content: "" });
  const [submitted, setSubmitted] = useState(false);

  const createMessage = trpc.message.create.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setForm({ name: "", email: "", content: "" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMessage.mutate({
      name: form.name,
      email: form.email,
      content: form.content,
    });
  };

  const inputStyle = {
    borderBottom: "1px solid rgba(46, 46, 46, 0.2)",
    color: "#2E2E2E",
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "transparent",
  };

  return (
    <div className="relative">
      <GrainOverlay />
      <Navigation />
      <main>
        <section
          className="w-full flex items-end justify-center pb-12"
          style={{ height: "35vh", backgroundColor: "#1A1A1A" }}
        >
          <div className="text-center">
            <h1
              className="font-['Cormorant_Garamond'] font-light text-[48px] md:text-[64px]"
              style={{ color: "#FBF9F6", letterSpacing: "-0.03em" }}
            >
              Contact
            </h1>
          </div>
        </section>

        <section className="w-full py-[80px] md:py-[120px]" style={{ backgroundColor: "#F4EFE7" }}>
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-[80px]">
            <div className="w-full md:w-1/2">
              <h2
                className="font-['Cormorant_Garamond'] text-[32px] font-normal mb-8"
                style={{ color: "#2E2E2E" }}
              >
                Get in Touch
              </h2>
              <div className="flex flex-col gap-6 mb-10">
                <div>
                  <span
                    className="text-[11px] font-normal uppercase tracking-[0.12em] block mb-1"
                    style={{ color: "#8A9B8C", fontFamily: "'Inter', sans-serif" }}
                  >
                    Email
                  </span>
                  <span
                    className="text-[15px] font-light"
                    style={{ color: "#2E2E2E", fontFamily: "'Inter', sans-serif" }}
                  >
                    reservations@novara.hotel
                  </span>
                </div>
                <div>
                  <span
                    className="text-[11px] font-normal uppercase tracking-[0.12em] block mb-1"
                    style={{ color: "#8A9B8C", fontFamily: "'Inter', sans-serif" }}
                  >
                    Phone
                  </span>
                  <span
                    className="text-[15px] font-light"
                    style={{ color: "#2E2E2E", fontFamily: "'Inter', sans-serif" }}
                  >
                    +30 123 456 7890
                  </span>
                </div>
                <div>
                  <span
                    className="text-[11px] font-normal uppercase tracking-[0.12em] block mb-1"
                    style={{ color: "#8A9B8C", fontFamily: "'Inter', sans-serif" }}
                  >
                    Location
                  </span>
                  <span
                    className="text-[15px] font-light"
                    style={{ color: "#2E2E2E", fontFamily: "'Inter', sans-serif" }}
                  >
                    Mediterranean Coast, Southern Europe
                  </span>
                </div>
              </div>

              {submitted ? (
                <div
                  className="p-4 text-[14px] font-light"
                  style={{ backgroundColor: "rgba(138, 155, 140, 0.15)", color: "#2E2E2E" }}
                >
                  Your message has been sent. We will respond within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full py-3 px-0 text-[14px] font-light outline-none transition-colors duration-300"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full py-3 px-0 text-[14px] font-light outline-none transition-colors duration-300"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
                  />
                  <textarea
                    placeholder="Your message"
                    rows={4}
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    required
                    className="w-full py-3 px-0 text-[14px] font-light outline-none resize-none transition-colors duration-300"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
                  />
                  <button
                    type="submit"
                    disabled={createMessage.isPending}
                    className="mt-2 text-[13px] font-normal uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#C67D5B] disabled:opacity-50"
                    style={{ color: "#2E2E2E", fontFamily: "'Inter', sans-serif" }}
                  >
                    {createMessage.isPending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            <div className="w-full md:w-1/2">
              <img
                src="/images/contact-aerial.jpg"
                alt="Novara aerial"
                className="w-full h-full object-cover"
                style={{ minHeight: "400px" }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
