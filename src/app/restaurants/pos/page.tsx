import Link from "next/link";

const features = [
  { icon: "⚡", title: "Fast Setup", body: "Up and running in hours, not days. We configure everything and train your staff on-site." },
  { icon: "🍽️", title: "Table Service Layout", body: "Visual floor plan, table assignments, split checks, and coursing — built for full-service restaurants." },
  { icon: "🖥️", title: "Free Hardware", body: "Starter kit includes terminals, receipt printer, and card reader. No upfront hardware cost." },
  { icon: "📊", title: "Real-Time Reporting", body: "Sales by item, server, shift, and day. Know what's selling and what isn't — instantly." },
  { icon: "🔗", title: "Integration Ready", body: "Connects with online ordering, delivery platforms, accounting software, and more." },
  { icon: "🛠️", title: "24/7 Support", body: "Restaurant hours mean late nights and weekends. Our support team is always available." },
];

export default function POSPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(26,159,255,0.08) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Oracle Partner
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(32px,5vw,54px)", color: "#fff" }}>
            Restaurant <span style={{ color: "#1a9fff" }}>POS Systems</span>
          </h1>
          <p className="mb-10 mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 580, lineHeight: 1.7 }}>
            State-of-the-art Oracle POS software with free hardware. Purpose-built for restaurants —
            table service, quick service, bars, and multi-location operations.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              Get Free Starter Kit
            </Link>
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", letterSpacing: "1px" }}>
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── ORACLE BADGE ── */}
      <section className="py-12 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg,#0d2256 0%,#0a3a90 100%)", border: "1px solid rgba(26,159,255,0.35)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(160,210,255,0.7)" }}>
              Certified Partner
            </p>
            <h2 className="font-extrabold text-2xl mb-3" style={{ color: "#fff" }}>Oracle MICROS Point of Sale</h2>
            <p className="text-sm leading-relaxed mx-auto" style={{ color: "rgba(160,210,255,0.85)", maxWidth: 480 }}>
              Oracle MICROS is the world&apos;s #1 restaurant POS platform used by chains and independent
              operators globally. As a certified Oracle partner, Boom Media handles implementation,
              training, and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              Everything Built for <span style={{ color: "#1a9fff" }}>Restaurants</span>
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

      {/* ── FREE STARTER KIT ── */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg,#071226 0%,#0a1a3a 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-extrabold mb-5" style={{ fontSize: "clamp(26px,4vw,42px)", color: "#fff" }}>
            Free <span style={{ color: "#1a9fff" }}>Starter Kit</span> Included
          </h2>
          <p className="mb-10 mx-auto" style={{ fontSize: 16, color: "#7a94b8", maxWidth: 500, lineHeight: 1.7 }}>
            Every new POS installation comes with free hardware to get you started. No upfront equipment cost.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {["POS Terminal", "Receipt Printer", "Card Reader"].map((item) => (
              <div key={item} className="rounded-xl p-5 text-center"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.25)" }}>
                <div className="font-bold" style={{ color: "#fff" }}>{item}</div>
                <div className="text-xs mt-1" style={{ color: "#1a9fff" }}>Included Free</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
            style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
            Claim Your Free Starter Kit →
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: "#07090f" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
            Ready to Upgrade Your POS?
          </h2>
          <p className="mb-8" style={{ color: "#7a94b8", fontSize: 16, lineHeight: 1.7 }}>
            We&apos;ll assess your current setup and show you exactly what an upgrade would look like for your restaurant.
            Call <a href="tel:+15614212666" style={{ color: "#1a9fff" }}>+1 (561) 421-2666</a> or contact us below.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
            style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
            Book a Free Assessment →
          </Link>
        </div>
      </section>
    </>
  );
}
