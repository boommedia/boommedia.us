import Link from "next/link";
import { servicesData, categories, serviceSlugMap } from "@/lib/services-data";

const categoryColors: Record<string, string> = {
  "Restaurant Technology": "#1a9fff",
  "Web Services": "#a78bfa",
  "Marketing": "#f59e0b",
  "AI & Automation": "#34d399",
  "Operations": "#f87171",
};

export const metadata = {
  title: "All Services — Boom Media | Restaurant & Business Digital Services",
  description: "Complete digital services for restaurants and small businesses — online ordering, POS, websites, hosting, SEO, Google Ads, AI automation, and more.",
};

export default function ServicesPage() {
  const byCategory = categories.slice(1).map((cat) => ({
    category: cat,
    color: categoryColors[cat] || "#1a9fff",
    services: servicesData.filter((s) => s.category === cat),
  }));

  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(26,159,255,0.08) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Everything We Do
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(32px,5vw,54px)", color: "#fff" }}>
            All <span style={{ color: "#1a9fff" }}>Services</span>
          </h1>
          <p className="mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 520, lineHeight: 1.7 }}>
            One partner for every digital need your restaurant or service business has — from ordering systems
            to AI automation to local SEO.
          </p>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      {byCategory.map(({ category, color, services }) => (
        <section key={category} className="py-16 px-6" style={{ background: "#07090f" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full" style={{ background: color }} />
              <h2 className="font-extrabold text-xl" style={{ color: "#fff" }}>{category}</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {services.map((s) => {
                const href = s.existingPage || `/services/${s.slug}`;
                return (
                  <Link key={s.slug} href={href}
                    className="rounded-2xl p-6 flex flex-col group transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "#0d1225", border: `1px solid ${color}22`, textDecoration: "none" }}>
                    <div className="text-3xl mb-4">{s.icon}</div>
                    <h3 className="font-bold text-sm mb-2 leading-tight" style={{ color: "#fff" }}>{s.name}</h3>
                    <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "#7a94b8" }}>{s.tagline}</p>
                    <span className="text-xs font-semibold" style={{ color }}>Learn more →</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: "linear-gradient(135deg,#071226 0%,#0a1a3a 100%)" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
            Not Sure Where to Start?
          </h2>
          <p className="mb-8" style={{ color: "#7a94b8", fontSize: 16, lineHeight: 1.7 }}>
            Book a free consultation and we&apos;ll tell you exactly which services will make the biggest
            impact for your business right now.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              Book Free Consultation →
            </Link>
            <Link href="/portfolio" className="px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", letterSpacing: "1px" }}>
              See Client Results
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="py-12 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#7a94b8" }}>
            Quick Jump
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {Object.entries(serviceSlugMap).map(([name, href]) => (
              <Link key={name} href={href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)", color: "#7a94b8", textDecoration: "none" }}>
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
