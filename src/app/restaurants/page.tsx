import Link from "next/link";

const solutions = [
  {
    icon: "🛒",
    title: "Online Ordering",
    body: "Commission-free ordering widget for your website. Accept orders from Facebook, Google, and more. Get started free — no monthly fee on the basic plan.",
    href: "/restaurants/ordering",
    tag: "FREE",
  },
  {
    icon: "🖥️",
    title: "POS Systems",
    body: "Oracle-partnered restaurant POS software with free hardware. Intuitive, fast to deploy with table service and dedicated POS layout.",
    href: "/restaurants/pos",
    tag: "Oracle Partner",
  },
  {
    icon: "📺",
    title: "Digital Signage",
    body: "Yodeck-powered digital menu boards and signage. Display promotions, social feeds, and live menus on any screen in your restaurant.",
    href: "/restaurants/signage",
    tag: null,
  },
  {
    icon: "📍",
    title: "Local SEO",
    body: "Get found on Google Maps and local search. We build and manage your citations, Google Business Profile, and local keyword rankings.",
    href: "/restaurants/seo",
    tag: null,
  },
];

const plans = [
  {
    name: "Credit Card System",
    price: "$50",
    period: "/mo",
    features: ["Commission-free ordering", "Built-in payment processing", "Mobile-friendly menu", "Order notifications"],
    cta: "Get Started",
    href: "/restaurants/ordering",
    highlight: false,
  },
  {
    name: "Marketing Suite",
    price: "$150",
    period: "/mo",
    features: ["Everything in CC System", "Email & SMS campaigns", "Review management", "Social media posts", "Google Ads management"],
    cta: "Get Started",
    href: "/contact",
    highlight: true,
  },
  {
    name: "Branded Mobile App",
    price: "$100",
    period: "/mo",
    features: ["iOS & Android app", "Your logo & branding", "Push notifications", "Loyalty program", "In-app ordering"],
    cta: "Get Started",
    href: "/contact",
    highlight: false,
  },
  {
    name: "All-in-One",
    price: "$650",
    period: "/mo",
    features: ["Full ordering platform", "Marketing suite", "Branded mobile app", "POS integration", "Priority support", "Dedicated account manager"],
    cta: "Let's Talk",
    href: "/contact",
    highlight: false,
  },
];

export default function RestaurantsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(26,159,255,0.08) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Restaurant Technology
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(32px,5vw,54px)", color: "#fff" }}>
            Everything Your <span style={{ color: "#1a9fff" }}>Restaurant</span> Needs
          </h1>
          <p className="mb-10 mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 580, lineHeight: 1.7 }}>
            Commission-free ordering, POS systems, digital signage, and local SEO — all from one partner
            who specializes in the restaurant industry.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/restaurants/ordering" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              Free Ordering Widget
            </Link>
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", letterSpacing: "1px" }}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-20 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              Restaurant <span style={{ color: "#1a9fff" }}>Solutions</span>
            </h2>
            <p style={{ color: "#7a94b8", fontSize: 16 }}>Tailored technology for food service businesses.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {solutions.map((s) => (
              <Link key={s.title} href={s.href}
                className="rounded-2xl p-8 block transition-all duration-300 hover:-translate-y-1 group"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)", textDecoration: "none" }}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{s.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg" style={{ color: "#fff" }}>{s.title}</h3>
                      {s.tag && (
                        <span className="px-2 py-0.5 rounded text-xs font-bold"
                          style={{ background: "rgba(26,159,255,0.15)", color: "#1a9fff" }}>{s.tag}</span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#7a94b8" }}>{s.body}</p>
                    <span className="inline-block mt-4 text-sm font-semibold" style={{ color: "#1a9fff" }}>
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZERO COMMISSION ── */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg,#071226 0%,#0a1a3a 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="font-extrabold mb-5" style={{ fontSize: "clamp(26px,4vw,42px)", color: "#fff" }}>
            <span style={{ color: "#1a9fff" }}>0%</span> Commission on Every Order
          </h2>
          <p className="mb-8 mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 560, lineHeight: 1.7 }}>
            Unlike third-party platforms that take 15–30% per order, our system charges zero commission.
            You keep every dollar your customers pay. No hidden fees, no per-order charges.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-10">
            {[
              { label: "Grubhub / DoorDash", value: "15–30%", bad: true },
              { label: "Boom Media Ordering", value: "0%", bad: false },
              { label: "You Keep", value: "100%", bad: false },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-6"
                style={{ background: "#0d1225", border: `1px solid ${item.bad ? "rgba(248,113,113,0.25)" : "rgba(26,159,255,0.3)"}` }}>
                <div className="font-black text-3xl mb-2" style={{ color: item.bad ? "#f87171" : "#1a9fff" }}>{item.value}</div>
                <div className="text-sm" style={{ color: "#7a94b8" }}>{item.label}</div>
              </div>
            ))}
          </div>
          <Link href="/restaurants/ordering" className="inline-block px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
            style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
            Get Free Ordering Widget →
          </Link>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              Simple, Transparent <span style={{ color: "#1a9fff" }}>Pricing</span>
            </h2>
            <p style={{ color: "#7a94b8", fontSize: 16 }}>No long-term contracts. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-4 gap-5">
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
                <h3 className="font-bold text-sm mb-4" style={{ color: plan.highlight ? "#7dd3fc" : "#7a94b8" }}>{plan.name}</h3>
                <div className="mb-6">
                  <span className="font-black" style={{ fontSize: 38, color: "#fff" }}>{plan.price}</span>
                  <span className="text-sm" style={{ color: "#7a94b8" }}>{plan.period}</span>
                </div>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: plan.highlight ? "rgba(160,210,255,0.85)" : "#7a94b8" }}>
                      <span style={{ color: "#1a9fff", marginTop: 2 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={plan.href} className="w-full py-3 rounded-lg font-bold text-sm text-center block"
                  style={{
                    background: plan.highlight ? "#1a9fff" : "transparent",
                    color: plan.highlight ? "#fff" : "#1a9fff",
                    border: plan.highlight ? "none" : "1px solid rgba(26,159,255,0.4)",
                  }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: "#07090f" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
            Ready to Modernize Your Restaurant?
          </h2>
          <p className="mb-8" style={{ color: "#7a94b8", fontSize: 16, lineHeight: 1.7 }}>
            Call us at <a href="tel:+15614212666" style={{ color: "#1a9fff" }}>+1 (561) 421-2666</a> or fill out the form and
            we&apos;ll set everything up for you.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
            style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
