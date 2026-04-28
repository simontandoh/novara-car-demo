import { useState } from "react";
import { Link } from "react-router";
import { trpc } from "@/providers/trpc";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    roomType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const createEnquiry = trpc.enquiry.create.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setForm({ name: "", email: "", checkIn: "", checkOut: "", guests: "", roomType: "", message: "" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createEnquiry.mutate({
      name: form.name,
      email: form.email,
      checkIn: form.checkIn || undefined,
      checkOut: form.checkOut || undefined,
      guests: form.guests ? parseInt(form.guests) : undefined,
      message: `${form.roomType ? `Room preference: ${form.roomType}. ` : ""}${form.message || ""}`,
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
              Reserve Your Stay
            </h1>
          </div>
        </section>

        <section className="w-full py-[80px] md:py-[120px]" style={{ backgroundColor: "#F4EFE7" }}>
          <div className="max-w-[600px] mx-auto px-6">
            {submitted ? (
              <div className="text-center py-12">
                <h2
                  className="font-['Cormorant_Garamond'] text-[32px] font-normal mb-4"
                  style={{ color: "#2E2E2E" }}
                >
                  Thank You
                </h2>
                <p
                  className="text-[15px] font-light leading-[1.7] mb-8"
                  style={{ color: "rgba(46, 46, 46, 0.75)", fontFamily: "'Inter', sans-serif" }}
                >
                  Your reservation inquiry has been received. Our guest relations team will contact you within 24 hours to confirm availability and discuss your preferences.
                </p>
                <Link
                  to="/"
                  className="text-[13px] font-normal uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#C67D5B]"
                  style={{ color: "#C67D5B", fontFamily: "'Inter', sans-serif" }}
                >
                  Return Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
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
                <div className="flex gap-4">
                  <input
                    type="date"
                    value={form.checkIn}
                    onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                    className="w-1/2 py-3 px-0 text-[14px] font-light outline-none transition-colors duration-300"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
                  />
                  <input
                    type="date"
                    value={form.checkOut}
                    onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                    className="w-1/2 py-3 px-0 text-[14px] font-light outline-none transition-colors duration-300"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Guests"
                    min="1"
                    max="50"
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-1/2 py-3 px-0 text-[14px] font-light outline-none transition-colors duration-300"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
                  />
                  <select
                    value={form.roomType}
                    onChange={(e) => setForm({ ...form, roomType: e.target.value })}
                    className="w-1/2 py-3 px-0 text-[14px] font-light outline-none transition-colors duration-300 bg-transparent"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
                  >
                    <option value="">Select Residence</option>
                    <option value="Olive Suite">The Olive Suite</option>
                    <option value="Stone Bath">The Stone Bath</option>
                    <option value="Sea Room">The Sea Room</option>
                    <option value="Terrace">The Terrace</option>
                    <option value="Passage">The Passage</option>
                  </select>
                </div>
                <textarea
                  placeholder="Special requests or notes"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full py-3 px-0 text-[14px] font-light outline-none resize-none transition-colors duration-300"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
                />
                <button
                  type="submit"
                  disabled={createEnquiry.isPending}
                  className="mt-4 py-4 text-[13px] font-normal uppercase tracking-[0.08em] transition-all duration-300 hover:bg-[#2E2E2E] hover:text-[#FBF9F6] disabled:opacity-50"
                  style={{
                    color: "#2E2E2E",
                    border: "1px solid #2E2E2E",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {createEnquiry.isPending ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
