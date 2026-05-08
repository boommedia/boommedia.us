import Link from "next/link";

const services = [
  { icon: "📍", title: "Google Business Profile", body: "Optimized GBP setup, category selection, photos, posts, and Q&A management to dominate local map results." },
  { icon: "📋", title: "Citation Building", body: "Your business listed consistently across 50+ directories: Yelp, TripAdvisor, Foursquare, Apple Maps, and more." },
  { icon: "⭐", title: "Review Management", body: "Monitor and respond to reviews across all platforms. Automated requests to grow your star rating." },
  { icon: "🔍", title: "Local Keyword Rankings", body: "Target the searches that bring in hungry customers — 'best pizza near me,' 'restaurants open now,' and more." },
  { icon: "📱", title: "Mobile Optimization", body: "70% of restaurant searches happen on mobile. We ensure your site and listings are mobile-perfect." },
  { icon: "📊", title: "Monthly Reporting", body: "Transparent reports showing keyword rankings, impressions, clicks, and calls generated from search." },
];

export default function SEOPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(26,159,255,0.08) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Get Found on Google
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(32px,5vw,54px)", color: "#fff" }}>
            Local SEO for <span style={{ color: "#1a9fff" }}>Restaurants</span>
          </h1>
          <p className="mb-10 mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 580, lineHeight: 1.7 }}>
            Show up at the top of Google Maps and local search results when hungry customers are looking for
            exactly what you serve. We specialize in local SEO for restaurants and food businesses.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              Get a Free Audit
            </Link>
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", letterSpacing: "1px" }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY LOCAL SEO ── */}
      <section className="py-16 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-5">
            {[
              { stat: "46%", label: "of Google searches are local", icon: "🔍" },
              { stat: "88%", label: "of local searches lead to a visit or call within 24 hours", icon: "📞" },
              { stat: "97%", label: "of people learn about local businesses online", icon: "🌐" },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl p-8 text-center"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)" }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-black mb-2" style={{ fontSize: 36, color: "#1a9fff" }}>{item.stat}</div>
                <p className="text-sm" style={{ color: "#7a94b8" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              Complete Local <span style={{ color: "#1a9fff" }}>SEO Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl p-7"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)" }}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: "#fff" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7a94b8" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg,#071226 0%,#0a1a3a 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
              Our <span style={{ color: "#1a9fff" }}>Process</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { step: "1", title: "Free SEO Audit", body: "We analyze your current rankings, Google Business Profile, and citation consistency." },
              { step: "2", title: "Strategy & Keyword Research", body: "We identify the exact searches your target customers are making in your area." },
              { step: "3", title: "On-Page & Local Optimization", body: "We optimize your website, GMB listing, and citations across all major directories." },
              { step: "4", title: "Monthly Reporting & Improvement", body: "Clear monthly reports and ongoing optimizations to keep you ranking higher over time." },
            ].map((item) => (
              <div key={item.step} className="rounded-xl p-6 flex items-start gap-5"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.2)" }}>
                <div className="font-black text-3xl flex-shrink-0" style={{ color: "rgba(26,159,255,0.3)" }}>{item.step}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "#fff" }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: "#7a94b8" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: "#07090f" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
            Start Ranking Higher Today
          </h2>
          <p className="mb-8" style={{ color: "#7a94b8", fontSize: 16, lineHeight: 1.7 }}>
            Get your free local SEO audit and see exactly where you stand and what it would take to
            rank above your competition.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
            style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
            Get Your Free Audit →
          </Link>
        </div>
      </section>
    </>
  );
}
