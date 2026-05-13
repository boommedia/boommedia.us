import Link from "next/link";

const apps = [
  {
    letter: "B",
    name: "Bloggy",
    tagline: "AI Blog Builder",
    url: "https://www.bloggy.online",
    color: "#1a9fff",
    colorBg: "rgba(26,159,255,0.12)",
    colorBorder: "rgba(26,159,255,0.3)",
    description:
      "Create, publish, and grow a blog in minutes with AI. Auto-generate SEO-optimized content, schedule posts, and drive traffic — without writing a word.",
    features: [
      "AI-generated blog posts",
      "SEO optimization built-in",
      "Scheduled publishing",
      "Custom domain support",
      "Analytics & traffic reports",
      "Multi-user access",
    ],
  },
  {
    letter: "A",
    name: "ADdee",
    tagline: "Ad Management",
    url: "http://addee.online",
    color: "#f59e0b",
    colorBg: "rgba(245,158,11,0.12)",
    colorBorder: "rgba(245,158,11,0.3)",
    description:
      "Manage Google, Meta, and local ad campaigns from one dashboard. AI-powered targeting, budget optimization, and reporting built for small businesses.",
    features: [
      "Google & Meta Ads in one place",
      "AI-powered targeting",
      "Budget optimization",
      "Campaign performance reporting",
      "Local ad audience builder",
      "ROI tracking dashboard",
    ],
  },
  {
    letter: "A",
    name: "Approvee",
    tagline: "Approval Workflows",
    url: "https://www.approvee.online",
    color: "#a78bfa",
    colorBg: "rgba(167,139,250,0.12)",
    colorBorder: "rgba(167,139,250,0.3)",
    description:
      "Streamline approvals, contracts, and sign-offs with automated workflows. Get the right eyes on the right documents — fast.",
    features: [
      "Drag-and-drop approval flows",
      "E-signature & document sign-off",
      "Automated reminders & escalations",
      "Multi-step review chains",
      "Audit trail & compliance logs",
      "Team & client portals",
    ],
  },
  {
    letter: "R",
    name: "Rankee",
    tagline: "Rank Tracker",
    url: "https://www.rankee.online",
    color: "#34d399",
    colorBg: "rgba(52,211,153,0.12)",
    colorBorder: "rgba(52,211,153,0.3)",
    description:
      "Track your Google rankings daily, monitor competitors, and get actionable SEO insights. Know exactly where you stand and what to do next.",
    features: [
      "Daily keyword rank tracking",
      "Competitor monitoring",
      "Local & national rankings",
      "SEO recommendations",
      "Rank history charts",
      "White-label reporting",
    ],
  },
  {
    letter: "S",
    name: "Servvee",
    tagline: "Service Management",
    url: "https://www.servvee.online",
    color: "#06b6d4",
    colorBg: "rgba(6,182,212,0.12)",
    colorBorder: "rgba(6,182,212,0.3)",
    description:
      "All-in-one service business management — scheduling, menus, customer orders, and staff dashboards built for restaurants and service companies.",
    features: [
      "Service & menu management",
      "Customer order dashboard",
      "Staff scheduling & assignments",
      "Real-time status tracking",
      "Multi-location support",
      "Client-facing booking portal",
    ],
  },
];

const acronym = [
  { letter: "B", name: "Bloggy", color: "#1a9fff" },
  { letter: "A", name: "ADdee", color: "#f59e0b" },
  { letter: "A", name: "Approvee", color: "#a78bfa" },
  { letter: "R", name: "Rankee", color: "#34d399" },
  { letter: "S", name: "Servvee", color: "#06b6d4" },
];

export default function BARSPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(139,92,246,0.1) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.35)", color: "#a78bfa" }}>
            ✦ Boom SaaS Suite
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(38px,6vw,72px)", color: "#fff" }}>
            BOOM <span style={{ color: "#a78bfa" }}>B.A.A.R.S</span>
          </h1>
          <p className="mb-8 mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 560, lineHeight: 1.7 }}>
            Five powerful SaaS tools built by Boom Media — available to any business, anywhere in the world.
          </p>

          {/* BAARS acronym breakdown */}
          <div className="inline-flex gap-0 rounded-2xl overflow-hidden mb-10"
            style={{ border: "1px solid rgba(139,92,246,0.2)" }}>
            {acronym.map((item, i) => (
              <div key={`${item.letter}-${item.name}`} className="px-6 py-4 text-center"
                style={{
                  background: "#0d1225",
                  borderRight: i < acronym.length - 1 ? "1px solid rgba(139,92,246,0.15)" : "none",
                }}>
                <div className="font-black text-3xl mb-1" style={{ color: item.color }}>{item.letter}</div>
                <div className="text-xs font-bold" style={{ color: "#7a94b8" }}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP CARDS ── */}
      <section className="pb-24 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {apps.map((app) => (
            <div key={app.name} className="rounded-2xl p-8 grid grid-cols-2 gap-10 items-center"
              style={{ background: "#0d1225", border: `1px solid ${app.colorBorder}` }}>
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl flex-shrink-0"
                    style={{ background: app.colorBg, color: app.color, border: `1px solid ${app.colorBorder}` }}>
                    {app.letter}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-2xl leading-none" style={{ color: "#fff" }}>{app.name}</h2>
                    <p className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color: app.color }}>{app.tagline}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-7" style={{ color: "#7a94b8" }}>{app.description}</p>
                <a href={app.url} target="_blank" rel="noopener noreferrer"
                  className="inline-block px-7 py-3 rounded-xl font-bold text-sm"
                  style={{
                    background: app.color,
                    color: ["#f59e0b", "#34d399", "#06b6d4"].includes(app.color) ? "#0d1225" : "#fff",
                  }}>
                  Launch {app.name} →
                </a>
              </div>
              <div>
                <ul className="flex flex-col gap-3">
                  {app.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "#7a94b8" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: app.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(180deg,#07090f 0%,#10082a 50%,#07090f 100%)" }}>
        <div className="max-w-xl mx-auto">
          <div className="text-4xl mb-5">✦</div>
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
            Built by Boom Media.<br />
            <span style={{ color: "#a78bfa" }}>For Everyone.</span>
          </h2>
          <p className="mb-8 mx-auto" style={{ fontSize: 16, color: "#7a94b8", maxWidth: 440, lineHeight: 1.7 }}>
            All five tools are actively being developed by the Boom Media team.
            Sign up for early access and be the first to know when they launch.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
              style={{ background: "#a78bfa", color: "#0d1225", letterSpacing: "1px" }}>
              Get Early Access
            </Link>
            <Link href="/" className="px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", letterSpacing: "1px" }}>
              Back to Boom Media
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
