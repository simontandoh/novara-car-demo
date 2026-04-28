import { useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/providers/trpc";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import { Trash2 } from "lucide-react";

export default function Admin() {
  const { user, isAdmin, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
    if (!isLoading && user && !isAdmin) {
      navigate("/");
    }
  }, [isLoading, user, isAdmin, navigate]);

  const { data: enquiries, refetch: refetchEnquiries } = trpc.enquiry.list.useQuery(undefined, {
    enabled: isAdmin,
  });

  const { data: messages, refetch: refetchMessages } = trpc.message.list.useQuery(undefined, {
    enabled: isAdmin,
  });

  const updateStatus = trpc.enquiry.updateStatus.useMutation({
    onSuccess: () => refetchEnquiries(),
  });

  const deleteEnquiry = trpc.enquiry.delete.useMutation({
    onSuccess: () => refetchEnquiries(),
  });

  const deleteMessage = trpc.message.delete.useMutation({
    onSuccess: () => refetchMessages(),
  });

  if (isLoading) {
    return (
      <div className="relative min-h-screen" style={{ backgroundColor: "#F4EFE7" }}>
        <GrainOverlay />
        <Navigation />
        <div className="flex items-center justify-center h-[50vh]">
          <span className="text-[14px] font-light" style={{ color: "#8A9B8C" }}>Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="relative min-h-screen">
      <GrainOverlay />
      <Navigation />
      <main className="pb-[80px]" style={{ backgroundColor: "#F4EFE7" }}>
        <section
          className="w-full flex items-end justify-center pb-12"
          style={{ height: "25vh", backgroundColor: "#1A1A1A" }}
        >
          <div className="text-center">
            <h1
              className="font-['Cormorant_Garamond'] font-light text-[40px] md:text-[56px]"
              style={{ color: "#FBF9F6", letterSpacing: "-0.03em" }}
            >
              Dashboard
            </h1>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6 py-[60px]">
          {/* Enquiries */}
          <div className="mb-[60px]">
            <h2
              className="font-['Cormorant_Garamond'] text-[28px] font-normal mb-6"
              style={{ color: "#2E2E2E" }}
            >
              Booking Enquiries
            </h2>
            {!enquiries?.length ? (
              <p className="text-[14px] font-light" style={{ color: "#8A9B8C" }}>No enquiries yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(46, 46, 46, 0.15)" }}>
                      <th className="py-3 text-[11px] font-normal uppercase tracking-[0.08em]" style={{ color: "#8A9B8C" }}>Name</th>
                      <th className="py-3 text-[11px] font-normal uppercase tracking-[0.08em]" style={{ color: "#8A9B8C" }}>Email</th>
                      <th className="py-3 text-[11px] font-normal uppercase tracking-[0.08em]" style={{ color: "#8A9B8C" }}>Dates</th>
                      <th className="py-3 text-[11px] font-normal uppercase tracking-[0.08em]" style={{ color: "#8A9B8C" }}>Guests</th>
                      <th className="py-3 text-[11px] font-normal uppercase tracking-[0.08em]" style={{ color: "#8A9B8C" }}>Status</th>
                      <th className="py-3 text-[11px] font-normal uppercase tracking-[0.08em]" style={{ color: "#8A9B8C" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((eq) => (
                      <tr key={eq.id} style={{ borderBottom: "1px solid rgba(46, 46, 46, 0.08)" }}>
                        <td className="py-4 text-[14px] font-light" style={{ color: "#2E2E2E" }}>{eq.name}</td>
                        <td className="py-4 text-[14px] font-light" style={{ color: "#2E2E2E" }}>{eq.email}</td>
                        <td className="py-4 text-[14px] font-light" style={{ color: "#2E2E2E" }}>
                          {eq.checkIn && eq.checkOut ? `${eq.checkIn} – ${eq.checkOut}` : "—"}
                        </td>
                        <td className="py-4 text-[14px] font-light" style={{ color: "#2E2E2E" }}>{eq.guests || "—"}</td>
                        <td className="py-4">
                          <select
                            value={eq.status}
                            onChange={(e) => updateStatus.mutate({ id: eq.id, status: e.target.value as any })}
                            className="text-[12px] font-light py-1 px-2 bg-transparent outline-none cursor-pointer"
                            style={{
                              color: eq.status === "new" ? "#8A9B8C" : eq.status === "confirmed" ? "#C67D5B" : "#2E2E2E",
                              border: "1px solid rgba(46, 46, 46, 0.15)",
                            }}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="declined">Declined</option>
                          </select>
                        </td>
                        <td className="py-4">
                          <button
                            onClick={() => deleteEnquiry.mutate({ id: eq.id })}
                            className="p-1 transition-opacity hover:opacity-60"
                          >
                            <Trash2 size={14} strokeWidth={1} color="#C67D5B" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Messages */}
          <div>
            <h2
              className="font-['Cormorant_Garamond'] text-[28px] font-normal mb-6"
              style={{ color: "#2E2E2E" }}
            >
              Guest Messages
            </h2>
            {!messages?.length ? (
              <p className="text-[14px] font-light" style={{ color: "#8A9B8C" }}>No messages yet.</p>
            ) : (
              <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="p-5"
                    style={{ backgroundColor: "rgba(251, 249, 246, 0.5)", borderLeft: "2px solid #C67D5B" }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-[14px] font-light" style={{ color: "#2E2E2E" }}>{msg.name}</span>
                        <span className="text-[12px] font-light ml-3" style={{ color: "#8A9B8C" }}>{msg.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-light" style={{ color: "#8A9B8C" }}>
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => deleteMessage.mutate({ id: msg.id })}
                          className="p-1 transition-opacity hover:opacity-60"
                        >
                          <Trash2 size={14} strokeWidth={1} color="#C67D5B" />
                        </button>
                      </div>
                    </div>
                    <p className="text-[14px] font-light leading-[1.6]" style={{ color: "rgba(46, 46, 46, 0.75)" }}>
                      {msg.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="text-[13px] font-normal uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#C67D5B]"
              style={{ color: "#8A9B8C", fontFamily: "'Inter', sans-serif" }}
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
