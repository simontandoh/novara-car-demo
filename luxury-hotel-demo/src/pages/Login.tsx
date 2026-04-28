import { useState } from "react";
import { Link } from "react-router";
import { trpc } from "@/providers/trpc";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

function getOAuthUrl() {
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);
  const appId = import.meta.env.VITE_APP_ID;
  const authUrl = import.meta.env.VITE_KIMI_AUTH_URL;
  const url = new URL(`${authUrl}/api/oauth/authorize`);
  url.searchParams.set("client_id", appId);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", "profile");
  url.searchParams.set("state", state);
  return url.toString();
}

export default function Login() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const loginMutation = trpc.localAuth.login.useMutation({
    onSuccess: () => {
      window.location.href = "/";
    },
    onError: (err) => setError(err.message),
  });

  const registerMutation = trpc.localAuth.register.useMutation({
    onSuccess: () => {
      window.location.href = "/";
    },
    onError: (err) => setError(err.message),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (mode === "login") {
      loginMutation.mutate({ username, password });
    } else {
      registerMutation.mutate({
        username,
        password,
        displayName: displayName || undefined,
        email: email || undefined,
      });
    }
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
          style={{ height: "30vh", backgroundColor: "#1A1A1A" }}
        >
          <div className="text-center">
            <h1
              className="font-['Cormorant_Garamond'] font-light text-[40px] md:text-[56px]"
              style={{ color: "#FBF9F6", letterSpacing: "-0.03em" }}
            >
              {mode === "login" ? "Sign In" : "Create Account"}
            </h1>
          </div>
        </section>

        <section className="w-full py-[60px] md:py-[80px]" style={{ backgroundColor: "#F4EFE7" }}>
          <div className="max-w-[400px] mx-auto px-6">
            <button
              onClick={() => { window.location.href = getOAuthUrl(); }}
              className="w-full py-3 mb-8 text-[13px] font-normal uppercase tracking-[0.08em] transition-all duration-300 hover:bg-[#2E2E2E] hover:text-[#FBF9F6]"
              style={{
                color: "#2E2E2E",
                border: "1px solid #2E2E2E",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Sign In with OAuth
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(46, 46, 46, 0.15)" }} />
              <span className="text-[11px] font-light uppercase tracking-[0.12em]" style={{ color: "#8A9B8C" }}>
                Or
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(46, 46, 46, 0.15)" }} />
            </div>

            {error && (
              <div
                className="p-3 mb-6 text-[13px] font-light"
                style={{ backgroundColor: "rgba(198, 125, 91, 0.1)", color: "#C67D5B" }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full py-3 px-0 text-[14px] font-light outline-none transition-colors duration-300"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
              />
              {mode === "register" && (
                <>
                  <input
                    type="text"
                    placeholder="Display Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full py-3 px-0 text-[14px] font-light outline-none transition-colors duration-300"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
                  />
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 px-0 text-[14px] font-light outline-none transition-colors duration-300"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
                  />
                </>
              )}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full py-3 px-0 text-[14px] font-light outline-none transition-colors duration-300"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderBottomColor = "#C67D5B")}
                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(46, 46, 46, 0.2)")}
              />
              <button
                type="submit"
                disabled={loginMutation.isPending || registerMutation.isPending}
                className="mt-4 py-3 text-[13px] font-normal uppercase tracking-[0.08em] transition-all duration-300 hover:bg-[#2E2E2E] hover:text-[#FBF9F6] disabled:opacity-50"
                style={{
                  color: "#2E2E2E",
                  border: "1px solid #2E2E2E",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {loginMutation.isPending || registerMutation.isPending
                  ? "Please wait..."
                  : mode === "login"
                  ? "Sign In"
                  : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => { setMode(mode === "login" ? "register" : "login"); setError(""); }}
                className="text-[13px] font-light transition-colors duration-300 hover:text-[#C67D5B]"
                style={{ color: "#8A9B8C", fontFamily: "'Inter', sans-serif" }}
              >
                {mode === "login" ? "Need an account? Register" : "Already have an account? Sign In"}
              </button>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/"
                className="text-[12px] font-light uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#C67D5B]"
                style={{ color: "#8A9B8C", fontFamily: "'Inter', sans-serif" }}
              >
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
