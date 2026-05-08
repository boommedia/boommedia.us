import Link from "next/link";

const services = [
  {
    eyebrow: "FREE for Local Restaurants",
    title: "Online Ordering",
    titleColor: "#1a9fff",
    body: "Commission-free ordering live within minutes. Mobile app for iOS & Android included. Take orders from your website, Facebook page, and more.",
    list: ["Create an account", "Add the restaurant widget", "Start taking orders tonight"],
    btns: [
      { label: "Create FREE Account", href: "/restaurants/ordering", primary: true },
      { label: "See Live Clients", href: "/portfolio", primary: false },
    ],
    card: "default",
  },
  {
    eyebrow: "Fast. Secure. Reliable.",
    title: "Client",
    titleSecond: "Hosting",
    titleSecondColor: "#1a9fff",
    body: "Backups, Analytics, WAF, CDN, Security, Configs, Opt-ins & Popups, Support. Dedicated IP. WordPress Multisite support.",
    btns: [
      { label: "View Plans", href: "/hosting", primary: true },
      { label: "Learn More", href: "/hosting", primary: false },
    ],
    card: "blue",
  },
  {
    eyebrow: "Oracle Partner",
    title: "POS",
    titleSecond: "Systems",
    titleSecondColor: "#1a9fff",
    body: "State-of-the-art restaurant POS software & free hardware. Intuitive, fast to deploy. Table service solution with dedicated POS layout.",
    btns: [
      { label: "Free Starter Kit", href: "/restaurants/pos", primary: true },
      { label: "Learn More", href: "/restaurants/pos", primary: false },
    ],
    card: "blue",
  },
  {
    eyebrow: "New",
    title: "AI",
    titleSecond: "Automation",
    titleColor: "#a78bfa",
    body: "AI workflows, chatbots, voice agents, and automated follow-ups built for restaurants and service businesses.",
    list: ["AI Chatbots & Voice Agents", "Automated Review Requests", "Order & Booking Workflows", "SMS & Email Follow-ups"],
    btns: [
      { label: "Explore AI Services", href: "/ai-automation", primary: true, violet: true },
      { label: "Book a Demo", href: "/contact", primary: false },
    ],
    card: "violet",
  },
  {
    eyebrow: "Boom Media's",
    title: "Restaurant",
    titleSecond: "Medic",
    body: "Complete Restaurant Support. When you are open, we are open. PERIOD. Social, Google, Meta, Instagram — all managed for you.",
    btns: [{ label: "View Plans", href: "/maintenance", primary: true }],
    card: "default",
  },
  {
    eyebrow: "Pre-Built & Custom",
    title: "Website",
    titleSecond: "Packages",
    body: "Professional restaurant & service business websites. SEO-ready, mobile-first, ADA compliant. Delivered fast with Boom Hub included.",
    list: ["Pre-built templates available", "Custom builds from scratch", "Maintenance plans included"],
    btns: [
      { label: "Browse Packages", href: "/websites", primary: true },
      { label: "Get Quote", href: "/contact", primary: false },
    ],
    card: "default",
  },
];

const stats = [
  { num: "10+", label: "Years in Business" },
  { num: "50+", label: "Happy Clients" },
  { num: "8", label: "Restaurant Ordering Clients" },
  { num: "0%", label: "Commission on Orders" },
];

const allServices = [
  "AI Workflows & Automation","Online Ordering","POS Systems","Website Design",
  "Web Hosting","Booking & Reservation Systems","Payment Portals","Menu Syncing",
  "Menu Printing","Digital Signage","AI Chat Bots","Local SEO & Citations",
  "Photography Services","QR Code Management","Google Ads","Social Media Ads",
  "CTV Cloud Ads","AI Surveillance","Managed WiFi Networks","ADA Compliance",
  "POP Displays","Web Maintenance",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "100vh", padding: "108px 24px 80px" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 600px at 50% 20%,rgba(26,159,255,0.08) 0%,transparent 70%),radial-gradient(ellipse 500px 400px at 80% 65%,rgba(167,139,250,0.05) 0%,transparent 60%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-7"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Restaurant & Service Industry Experts
          </div>
          <div className="font-black tracking-widest mb-7 leading-none select-none"
            style={{ fontSize: "clamp(56px,10vw,96px)", letterSpacing: "6px" }}>
            <span style={{ color: "#1a9fff", textShadow: "0 0 60px rgba(26,159,255,0.45)" }}>BOOM</span>
            <span style={{ color: "#fff" }}>MEDIA</span>
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
            <span style={{ color: "#1a9fff" }}>Restaurant & Service</span> Industry Experts
          </h1>
          <p className="mb-10 mx-auto leading-relaxed" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 660 }}>
            We help local businesses save time, reduce costs, and book more clients with{" "}
            <strong style={{ color: "#fff" }}>smart AI Automated Workflows</strong> and online checkout systems fully managed.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            <Link href="/portal" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm transition-all"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              Boom Client Portal
            </Link>
            <Link href="/restaurants/ordering" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm transition-all"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.22)", letterSpacing: "1px" }}>
              Free Ordering Widget
            </Link>
            <Link href="/ai-automation" className="px-7 py-3.5 rounded-lg font-bold text-sm transition-all"
              style={{ background: "transparent", color: "#a78bfa", border: "2px solid rgba(167,139,250,0.35)" }}>
              AI Automation ✦
            </Link>
          </div>
          <nav className="flex flex-wrap gap-4 justify-center items-center" style={{ color: "#7a94b8", fontSize: 15 }}>
            {["Restaurants","Websites","Hosting","Maintenance","Restaurant Blog"].map((item, i) => (
              <span key={item} className="flex items-center gap-4">
                <Link href={`/${item.toLowerCase().replace(" ","-")}`} className="hover:text-white transition-colors" style={{ color: "#7a94b8" }}>
                  {item}
                </Link>
                {i < 4 && <span style={{ color: "#1a9fff", opacity: 0.5 }}>|</span>}
              </span>
            ))}
            <span style={{ color: "#1a9fff", opacity: 0.5 }}>|</span>
            <Link href="/ai-automation" className="font-semibold" style={{ color: "#1a9fff" }}>AI Automation ✦</Link>
          </nav>
          <p className="mt-7 text-xs" style={{ color: "#7a94b8" }}>
            Trusted by local Service Industries and Partnered Vendors for 10+ Years and counting.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-black leading-none mb-2" style={{ fontSize: 42, color: "#1a9fff" }}>{s.num}</div>
              <div className="text-xs leading-snug" style={{ color: "#7a94b8" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
              Our Services
            </div>
            <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(28px,4vw,42px)", color: "#fff" }}>
              Everything Your Restaurant <span style={{ color: "#1a9fff" }}>Needs</span>
            </h2>
            <p style={{ color: "#7a94b8", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
              One partner. All your digital needs covered — from ordering to AI automation.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {services.map((s, i) => {
              const isBlue = s.card === "blue";
              const isViolet = s.card === "violet";
              return (
                <div key={i} className="rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: isBlue ? "linear-gradient(140deg,#0d2256 0%,#0a3a90 100%)" : "#0d1225",
                    border: `1px solid ${isViolet ? "rgba(167,139,250,0.25)" : isBlue ? "rgba(26,159,255,0.35)" : "rgba(26,159,255,0.15)"}`,
                  }}>
                  <div className="absolute pointer-events-none rounded-full"
                    style={{ top: -60, right: -60, width: 200, height: 200,
                      background: isViolet ? "radial-gradient(circle,rgba(167,139,250,0.12) 0%,transparent 70%)" : "radial-gradient(circle,rgba(26,159,255,0.1) 0%,transparent 70%)" }} />
                  {isViolet && (
                    <div className="inline-block px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
                      style={{ background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.35)", color: "#a78bfa" }}>
                      New
                    </div>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: isBlue ? "rgba(160,210,255,0.7)" : "#7a94b8" }}>
                    {!isViolet && s.eyebrow}
                  </p>
                  <h3 className="font-extrabold leading-tight mb-4" style={{ fontSize: 26 }}>
                    <span style={{ color: s.titleColor || (isViolet ? "#a78bfa" : isBlue ? "#fff" : "#1a9fff") }}>
                      {s.title}
                    </span>
                    {s.titleSecond && (
                      <> <span style={{ color: s.titleSecondColor || (isViolet ? "#fff" : "#1a9fff") }}>{s.titleSecond}</span></>
                    )}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6"
                    style={{ color: isBlue ? "rgba(160,210,255,0.85)" : "#7a94b8" }}>
                    {s.body}
                  </p>
                  {s.list && (
                    <ul className="mb-6 flex flex-col gap-1.5">
                      {s.list.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm" style={{ color: isBlue ? "rgba(160,210,255,0.85)" : "#7a94b8" }}>
                          <span style={{ color: isViolet ? "#a78bfa" : "#1a9fff", marginTop: 2, fontSize: 12 }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {s.btns.map((btn) => (
                      <Link key={btn.label} href={btn.href}
                        className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                        style={btn.primary
                          ? { background: (btn as {violet?:boolean}).violet ? "#a78bfa" : "#1a9fff", color: (btn as {violet?:boolean}).violet ? "#0d1225" : "#fff" }
                          : { background: "transparent", color: isViolet ? "#a78bfa" : isBlue ? "#7dd3fc" : "#1a9fff",
                              border: `1px solid ${isViolet ? "rgba(167,139,250,0.4)" : isBlue ? "rgba(125,211,252,0.35)" : "rgba(26,159,255,0.35)"}` }}>
                        {btn.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AI HIGHLIGHT ── */}
      <section className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(180deg,#07090f 0%,#0d1240 50%,#07090f 100%)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.35)", color: "#a78bfa" }}>
            ✦ New — AI Automation
          </div>
          <h2 className="font-extrabold mb-5 leading-tight" style={{ fontSize: "clamp(30px,5vw,50px)", color: "#fff" }}>
            Put Your Restaurant on <span style={{ color: "#1a9fff" }}>Autopilot</span>
          </h2>
          <p className="mb-10 leading-relaxed" style={{ fontSize: 17, color: "#7a94b8" }}>
            From AI chatbots that answer the phone to automated workflows that follow up with every customer —
            we build the systems so you can focus on the food.
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {["AI Chatbots","Voice Agents","Workflow Automation","Review Requests","SMS Follow-ups","Booking Automation"].map((p) => (
              <span key={p} className="px-4 py-1.5 rounded-full text-sm"
                style={{ background: "rgba(26,159,255,0.1)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
                {p}
              </span>
            ))}
          </div>
          <Link href="/ai-automation" className="inline-block px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
            style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
            Explore AI Services →
          </Link>
          <div className="grid grid-cols-3 gap-4 mt-16 text-left">
            {[
              { icon: "🤖", title: "AI Chatbot", body: "Answers customer questions 24/7 — menu, hours, reservations. Trained on your data." },
              { icon: "📞", title: "Voice Agent", body: "AI answers your phone, takes reservations, handles common questions so staff stays focused." },
              { icon: "⚡", title: "Workflow Automation", body: "Order confirmations, review requests, follow-up emails — automated trigger to send." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl p-6"
                style={{ background: "#0d1225", border: "1px solid rgba(167,139,250,0.2)" }}>
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="font-bold text-sm mb-2" style={{ color: "#fff" }}>{f.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: "#7a94b8" }}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES ── */}
      <section className="py-16 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(22px,3vw,32px)", color: "#fff" }}>All Services</h2>
          <p className="mb-10 text-sm" style={{ color: "#7a94b8" }}>We specialize in everything your business needs to thrive online.</p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {allServices.map((s) => (
              <span key={s} className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)", color: "#7a94b8" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="py-24 px-6 text-center" style={{ background: "#07090f" }}>
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#7a94b8" }}>
            🔥 Vision & Mission
          </div>
          <h2 className="font-extrabold leading-tight mb-6" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
            Discover, Design, Develop, & Deploy your Vision<br />
            with attention to detail for a flawless <span style={{ color: "#a78bfa" }}>FINAL PRODUCT!</span>
          </h2>
          <p className="mb-10 leading-relaxed mx-auto" style={{ fontSize: 16, color: "#7a94b8", maxWidth: 560 }}>
            Trusted by local Service Industries and Partnered Vendors for 10+ Years and counting.
            Letters of Recommendation upon Request.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              Book a Consultation
            </Link>
            <Link href="/portfolio" className="px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.22)", letterSpacing: "1px" }}>
              View Client Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
