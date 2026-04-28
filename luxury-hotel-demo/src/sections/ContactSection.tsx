import { useState, useEffect, useRef } from "react";
import { trpc } from "@/providers/trpc";
import { Link } from "react-router";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const fieldsRef = useRef<HTMLDivElement[]>([]);

  const createEnquiry = trpc.enquiry.create.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setForm({ name: "", email: "", checkIn: "", checkOut: "", guests: "", message: "" });
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fieldsRef.current.forEach((el, i) => {
              if (el) {
                setTimeout(() => {
                  el.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, i * 80);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const addFieldRef = (el: HTMLDivElement | null) => {
    if (el && !fieldsRef.current.includes(el)) {
      fieldsRef.current.push(el);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createEnquiry.mutate({
      name: form.name,
      email: form.email,
      checkIn: form.checkIn || undefined,
      checkOut: form.checkOut || undefined,
      guests: form.guests ? parseInt(form.guests) : undefined,
      message: form.message || undefined,
    });
  };

  return (
    <section className="w-full" style={{ backgroundColor: "#E8DFD0" }}>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-[45%] p-8 md:p-12 lg:p-16">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div ref={addFieldRef} className="opacity-0 translate-y-[20px]">
              <h2
                className="font-['Cormorant_Garamond'] font-normal text-[32px] md:text-[36px] mb-8"
                style={{ color: "#2E2E2E" }}
              >
                Begin Your Stay
              </h2>
            </div>

            {submitted && (
              <div
                className="p-4 mb-4 text-[14px] font-light"
                style={{ backgroundColor: "rgba(138, 155, 140, 0.15)", color: "#2E2E2E" }}
              >
                Your inquiry has been received. We will be in touch shortly.
              </div>
            )}

            <div ref={addFieldRef} className="opacity-0 translate-y-[20px]">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full py-3 px-0 bg-transparent text-[14px] font-light outline-none transition-colors duration-300"
                style={{
                  borderBottom: "1px solid rgba(46, 46, 46, 0.2)",
                  color: "#2E2E2E",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
              />
            </div>

            <div ref={addFieldRef} className="opacity-0 translate-y-[20px]">
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full py-3 px-0 bg-transparent text-[14px] font-light outline-none transition-colors duration-300"
                style={{
                  borderBottom: "1px solid rgba(46, 46, 46, 0.2)",
                  color: "#2E2E2E",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
              />
            </div>

            <div ref={addFieldRef} className="flex gap-4 opacity-0 translate-y-[20px]">
              <input
                type="date"
                placeholder="Check-in"
                value={form.checkIn}
                onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                className="w-1/2 py-3 px-0 bg-transparent text-[14px] font-light outline-none transition-colors duration-300"
                style={{
                  borderBottom: "1px solid rgba(46, 46, 46, 0.2)",
                  color: "#2E2E2E",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
              />
              <input
                type="date"
                placeholder="Check-out"
                value={form.checkOut}
                onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                className="w-1/2 py-3 px-0 bg-transparent text-[14px] font-light outline-none transition-colors duration-300"
                style={{
                  borderBottom: "1px solid rgba(46, 46, 46, 0.2)",
                  color: "#2E2E2E",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
              />
            </div>

            <div ref={addFieldRef} className="opacity-0 translate-y-[20px]">
              <input
                type="number"
                placeholder="Guests"
                min="1"
                max="50"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="w-full py-3 px-0 bg-transparent text-[14px] font-light outline-none transition-colors duration-300"
                style={{
                  borderBottom: "1px solid rgba(46, 46, 46, 0.2)",
                  color: "#2E2E2E",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
              />
            </div>

            <div ref={addFieldRef} className="opacity-0 translate-y-[20px]">
              <textarea
                placeholder="Message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full py-3 px-0 bg-transparent text-[14px] font-light outline-none resize-none transition-colors duration-300"
                style={{
                  borderBottom: "1px solid rgba(46, 46, 46, 0.2)",
                  color: "#2E2E2E",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
              />
            </div>

            <div ref={addFieldRef} className="opacity-0 translate-y-[20px] mt-2">
              <button
                type="submit"
                disabled={createEnquiry.isPending}
                className="text-[13px] font-normal uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#C67D5B] disabled:opacity-50"
                style={{ color: "#2E2E2E", fontFamily: "'Inter', sans-serif" }}
              >
                {createEnquiry.isPending ? "Sending..." : "Send Inquiry"}
              </button>
            </div>

            <div ref={addFieldRef} className="opacity-0 translate-y-[20px] mt-4">
              <Link
                to="/booking"
                className="text-[13px] font-normal uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#C67D5B]"
                style={{ color: "#8A9B8C", fontFamily: "'Inter', sans-serif" }}
              >
                Or book directly &rarr;
              </Link>
            </div>
          </form>
        </div>

        <div className="w-full md:w-[55%] h-[400px] md:h-auto">
          <img
            src="/images/contact-aerial.jpg"
            alt="Novara aerial view"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
