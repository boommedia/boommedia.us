import Link from "next/link";

const plans = [
  {
    name: "Basic Care",
    price: "$99",
    period: "/mo",
    desc: "Essential maintenance for sites that just need to stay healthy.",
    features: [
      "Monthly plugin updates",
      "Security monitoring",
      "Daily backups",
      "Uptime monitoring",
      "Monthly report",
      "1 hour of edits/mo",
    ],
    highlight: false,
  },
  {
    name: "Restaurant Medic",
    price: "$199",
    period: "/mo",
    desc: "Complete support when you are open, we are open. PERIOD.",
    features: [
      "Everything in Basic",
      "Priority support (same-day)",
      "Unlimited minor edits",
      "Menu & content updates",
      "Social media management",
      "Google Business updates",
      "Monthly performance report",
      "Emergency support 7 days/wk",
    ],
    highlight: true,
  },
  {
    name: "Full Service",
    price: "$349",
    period: "/mo",
    desc: "Complete digital management for growing restaurants.",
    features: [
      "Everything in Medic",
      "Social media posting (daily)",
      "Google & Meta ad management",
      "Email/SMS campaign management",
      "Review monitoring & responses",
      "SEO monitoring & updates",
      "Quarterly strategy calls",
      "Dedicated account manager",
    ],
    highlight: false,
  },
];

const included = [
  { icon: "🔐", title: "Security Updates", body: "Plugin, theme, and core updates applied and tested every month." },
  { icon: "💾", title: "Daily Backups", body: "Your site is backed up daily with 30-day retention and one-click restore." },
  { icon: "🕐", title: "Uptime Monitoring", body: "We monitor your site 24/7 and respond immediately to any outages." },
  { icon: "✏️", title: "Content Updates", body: "Menu changes, hours updates, new photos — we handle it all." },
  { icon: "📱", title: "Social Management", body: "Regular posts on Facebook, Instagram, and Google Business Profile." },
  { icon: "📊", title: "Monthly Reports", body: "Clear reports on site health, traffic, and any work performed." },
];

export default function MaintenancePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(26,159,255,0.08) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Boom Media&apos;s
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(32px,5vw,54px)", color: "#fff" }}>
            Restaurant <span style={{ color: "#1a9fff" }}>Medic</span>
          </h1>
          <p className="mb-6 mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 580, lineHeight: 1.7 }}>
            Complete restaurant support — when you are open, we are open. <strong style={{ color: "#fff" }}>PERIOD.</strong>
            Social, Google, Meta, Instagram — all managed for you.
          </p>
          <div className="inline-block px-4 py-2 rounded-xl mb-8" style={{ background: "rgba(26,159,255,0.1)", border: "1px solid rgba(26,159,255,0.25)" }}>
            <p className="text-sm font-semibold" style={{ color: "#1a9fff" }}>
              Never worry about your website or online presence again.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              View Plans
            </Link>
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", letterSpacing: "1px" }}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              What&apos;s <span style={{ color: "#1a9fff" }}>Included</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {included.map((item) => (
              <div key={item.title} className="rounded-2xl p-7"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)" }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: "#fff" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7a94b8" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className="py-24 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              Maintenance <span style={{ color: "#1a9fff" }}>Plans</span>
            </h2>
            <p style={{ color: "#7a94b8", fontSize: 16 }}>No long-term contracts. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-2xl p-7 flex flex-col"
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
                <h3 className="font-bold text-sm mb-3" style={{ color: plan.highlight ? "rgba(160,210,255,0.7)" : "#7a94b8" }}>{plan.name}</h3>
                <div className="mb-2">
                  <span className="font-black" style={{ fontSize: 38, color: "#fff" }}>{plan.price}</span>
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

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: "linear-gradient(135deg,#071226 0%,#0a1a3a 100%)" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
            Stop Worrying About Your Website
          </h2>
          <p className="mb-8" style={{ color: "#7a94b8", fontSize: 16, lineHeight: 1.7 }}>
            We handle everything. You focus on the food and the guests.
            Call <a href="tel:+15614212666" style={{ color: "#1a9fff" }}>+1 (561) 421-2666</a> or contact us below.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
            style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
            Get Started Today →
          </Link>
        </div>
      </section>
    </>
  );
}
