import Link from "next/link";

const plans = [
  {
    name: "Small Business",
    price: "$8",
    period: "/mo",
    desc: "Perfect for small business websites with light traffic.",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "Daily Backups",
      "99.9% Uptime SLA",
      "cPanel Access",
      "Email Hosting",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$20",
    period: "/mo",
    desc: "For restaurants and businesses that need more power and support.",
    features: [
      "Unlimited Websites",
      "50 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "Daily Backups + Restore",
      "99.9% Uptime SLA",
      "WAF Security Firewall",
      "CDN (Global Delivery)",
      "Dedicated IP",
      "Priority Support",
      "WordPress Multisite",
      "Analytics Dashboard",
    ],
    highlight: true,
  },
];

const features = [
  { icon: "🛡️", title: "WAF Security", body: "Web Application Firewall protects against common attacks, malware, and intrusions." },
  { icon: "🌍", title: "Global CDN", body: "Content delivered from servers in 9 countries for fast load times wherever your customers are." },
  { icon: "💾", title: "Daily Backups", body: "Automated daily backups with one-click restore. Your site is always safe." },
  { icon: "📊", title: "Analytics", body: "Real-time visitor analytics, page views, and traffic sources — no third-party tracking required." },
  { icon: "🔒", title: "Free SSL", body: "Every plan includes a free SSL certificate with automatic renewal." },
  { icon: "⚡", title: "SSD Servers", body: "All hosting runs on SSD storage for dramatically faster page loads vs. traditional HDD hosts." },
];

export default function HostingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(26,159,255,0.08) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Fast. Secure. Reliable.
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(32px,5vw,54px)", color: "#fff" }}>
            Managed <span style={{ color: "#1a9fff" }}>Web Hosting</span>
          </h1>
          <p className="mb-10 mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 580, lineHeight: 1.7 }}>
            Fast, secure hosting built for small businesses and restaurants. With backups, WAF security,
            CDN, and 99.9% uptime guaranteed — starting at just $8/month.
          </p>
          <div className="flex flex-wrap gap-6 justify-center mb-10">
            {[["99.9%", "Uptime SLA"], ["9", "Global Data Centers"], ["24/7", "Monitoring"], ["< 1s", "Avg Load Time"]].map(([val, lbl]) => (
              <div key={lbl} className="text-center">
                <div className="font-black text-2xl" style={{ color: "#1a9fff" }}>{val}</div>
                <div className="text-xs" style={{ color: "#7a94b8" }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className="py-24 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              Simple, Transparent <span style={{ color: "#1a9fff" }}>Pricing</span>
            </h2>
            <p style={{ color: "#7a94b8", fontSize: 16 }}>No surprise fees. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-2xl p-8 flex flex-col"
                style={{
                  background: plan.highlight ? "linear-gradient(140deg,#0d2256 0%,#0a3a90 100%)" : "#0d1225",
                  border: `1px solid ${plan.highlight ? "rgba(26,159,255,0.5)" : "rgba(26,159,255,0.15)"}`,
                }}>
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase"
                      style={{ background: "#1a9fff", color: "#fff" }}>Most Popular</span>
                  </div>
                )}
                <div className="mb-2">
                  <h3 className="font-bold text-sm" style={{ color: plan.highlight ? "rgba(160,210,255,0.7)" : "#7a94b8" }}>{plan.name}</h3>
                </div>
                <div className="mb-2">
                  <span className="font-black" style={{ fontSize: 42, color: "#fff" }}>{plan.price}</span>
                  <span className="text-sm" style={{ color: "#7a94b8" }}>{plan.period}</span>
                </div>
                <p className="text-sm mb-6" style={{ color: plan.highlight ? "rgba(160,210,255,0.7)" : "#7a94b8" }}>{plan.desc}</p>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: plan.highlight ? "rgba(160,210,255,0.85)" : "#7a94b8" }}>
                      <span style={{ color: "#1a9fff", marginTop: 2 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full py-3 rounded-lg font-bold text-sm text-center block"
                  style={{
                    background: plan.highlight ? "#1a9fff" : "transparent",
                    color: plan.highlight ? "#fff" : "#1a9fff",
                    border: plan.highlight ? "none" : "1px solid rgba(26,159,255,0.4)",
                  }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              Enterprise Features at <span style={{ color: "#1a9fff" }}>Small Business Prices</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl p-7"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)" }}>
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: "#fff" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7a94b8" }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MIGRATION ── */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(135deg,#071226 0%,#0a1a3a 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-extrabold mb-5" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
            Free Site <span style={{ color: "#1a9fff" }}>Migration</span>
          </h2>
          <p className="mb-8 mx-auto" style={{ fontSize: 16, color: "#7a94b8", maxWidth: 500, lineHeight: 1.7 }}>
            Already hosted somewhere else? We&apos;ll migrate your entire website to our servers for free —
            zero downtime, no technical knowledge required from you.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
            style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
            Start Free Migration →
          </Link>
        </div>
      </section>
    </>
  );
}
