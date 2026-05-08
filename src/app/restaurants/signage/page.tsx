import Link from "next/link";

const useCases = [
  { icon: "🍔", title: "Digital Menu Boards", body: "Replace printed menus with dynamic digital boards. Update prices and items remotely in seconds." },
  { icon: "📣", title: "Promotional Displays", body: "Showcase daily specials, happy hour deals, and seasonal promotions with eye-catching visuals." },
  { icon: "📱", title: "Social Media Feeds", body: "Display your Instagram or Facebook feed in real-time. Show reviews, photos, and community content." },
  { icon: "🕐", title: "Hours & Announcements", body: "Automatically display holiday hours, closures, and special event information." },
  { icon: "⭐", title: "Review Showcases", body: "Display your 5-star Google and Yelp reviews to build trust with every customer." },
  { icon: "🎬", title: "Video Content", body: "Play branded video content, ads, and behind-the-scenes footage on any screen." },
];

export default function SignagePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(26,159,255,0.08) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Powered by Yodeck
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(32px,5vw,54px)", color: "#fff" }}>
            Restaurant <span style={{ color: "#1a9fff" }}>Digital Signage</span>
          </h1>
          <p className="mb-10 mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 580, lineHeight: 1.7 }}>
            Turn any TV into a powerful marketing tool. Manage your restaurant&apos;s digital displays remotely
            from any device — update menus, promotions, and content in seconds.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              Get a Quote
            </Link>
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", letterSpacing: "1px" }}>
              See Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── YODECK ── */}
      <section className="py-12 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg,#0d2256 0%,#0a3a90 100%)", border: "1px solid rgba(26,159,255,0.35)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(160,210,255,0.7)" }}>Powered By</p>
            <h2 className="font-extrabold text-2xl mb-3" style={{ color: "#fff" }}>Yodeck Digital Signage Platform</h2>
            <p className="text-sm leading-relaxed mx-auto" style={{ color: "rgba(160,210,255,0.85)", maxWidth: 480 }}>
              Yodeck is used by 30,000+ businesses worldwide to manage digital signage from a single
              cloud dashboard. Boom Media handles setup, content design, and ongoing management so
              you never have to touch it.
            </p>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-20 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              What You Can <span style={{ color: "#1a9fff" }}>Display</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {useCases.map((f) => (
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

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg,#071226 0%,#0a1a3a 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
              Simple to Manage, <span style={{ color: "#1a9fff" }}>Powerful Results</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { step: "1", title: "We Install a Yodeck Player", body: "Small device plugs into any HDMI TV. We handle the setup and configuration." },
              { step: "2", title: "We Design Your Content", body: "Our team creates branded templates, menu boards, and promotional graphics." },
              { step: "3", title: "You Update Remotely (or We Do)", body: "Log in from your phone or let us manage all content updates for you." },
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
            Ready to Upgrade Your Displays?
          </h2>
          <p className="mb-8" style={{ color: "#7a94b8", fontSize: 16, lineHeight: 1.7 }}>
            Let us know how many screens you have and we&apos;ll put together a custom quote.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
            style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
