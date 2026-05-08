import Link from "next/link";

const steps = [
  { num: "01", title: "Create a Free Account", body: "Sign up in under 2 minutes. No credit card required to get started." },
  { num: "02", title: "Add Your Menu", body: "Upload your menu items with photos, descriptions, and pricing. We can help if needed." },
  { num: "03", title: "Add the Widget", body: "Paste one line of code on your website or Facebook page and you're live." },
  { num: "04", title: "Start Taking Orders Tonight", body: "Orders go directly to your kitchen. Payments processed instantly to your account." },
];

const features = [
  { icon: "📱", title: "Mobile App for iOS & Android", body: "Your customers can order from a native app with your branding." },
  { icon: "💳", title: "Built-in Payment Processing", body: "Accept credit cards, Apple Pay, Google Pay. Funds deposited next business day." },
  { icon: "🌐", title: "Multiple Order Channels", body: "Accept orders from your website, Facebook page, Google ordering, and more." },
  { icon: "🔔", title: "Real-Time Notifications", body: "Instant alerts on your phone, tablet, or POS system when orders come in." },
  { icon: "📊", title: "Order Analytics", body: "Track your top items, peak hours, customer data, and revenue trends." },
  { icon: "🎯", title: "Marketing Integration", body: "Built-in email list capture, promo codes, and loyalty program support." },
];

export default function OrderingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(26,159,255,0.08) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            FREE for Local Restaurants
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(32px,5vw,54px)", color: "#fff" }}>
            Commission-Free <span style={{ color: "#1a9fff" }}>Online Ordering</span>
          </h1>
          <p className="mb-10 mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 580, lineHeight: 1.7 }}>
            Stop paying 15–30% to third-party apps. Our online ordering system lets you take orders
            directly from your website with <strong style={{ color: "#fff" }}>zero commission</strong> on every order.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://boomonlineordering.com" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              Create FREE Account
            </a>
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", letterSpacing: "1px" }}>
              Talk to an Expert
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 justify-center">
            {[["0%", "Commission"], ["5 min", "Setup Time"], ["100%", "Yours to Keep"], ["24/7", "Order Support"]].map(([val, lbl]) => (
              <div key={lbl} className="text-center">
                <div className="font-black text-2xl" style={{ color: "#1a9fff" }}>{val}</div>
                <div className="text-xs" style={{ color: "#7a94b8" }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              Up and Running in <span style={{ color: "#1a9fff" }}>Minutes</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="rounded-2xl p-7"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)" }}>
                <div className="font-black text-4xl mb-3" style={{ color: "rgba(26,159,255,0.2)" }}>{step.num}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#fff" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7a94b8" }}>{step.body}</p>
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
              Everything Included — <span style={{ color: "#1a9fff" }}>For Free</span>
            </h2>
            <p style={{ color: "#7a94b8", fontSize: 16 }}>No hidden fees. No per-order charges. Just more revenue for you.</p>
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

      {/* ── COMPARISON ── */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg,#071226 0%,#0a1a3a 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-extrabold mb-12" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
            Why Not Just Use <span style={{ color: "#f87171" }}>DoorDash?</span>
          </h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(26,159,255,0.2)" }}>
            <div className="grid grid-cols-3 p-4 text-xs font-bold uppercase tracking-wider"
              style={{ background: "#0d1225", color: "#7a94b8" }}>
              <div>Feature</div>
              <div style={{ color: "#f87171" }}>DoorDash/Grubhub</div>
              <div style={{ color: "#1a9fff" }}>Boom Ordering</div>
            </div>
            {[
              ["Commission", "15–30% per order", "0%"],
              ["Your customer data", "❌ They keep it", "✅ You own it"],
              ["Monthly fee", "$0 (they take cuts)", "$0 basic plan"],
              ["Branded experience", "❌ Their app/brand", "✅ Your brand"],
              ["Customer loyalty", "❌ Builds their app", "✅ Builds your list"],
              ["Direct deposits", "Weekly/bi-weekly", "Next business day"],
            ].map(([feat, bad, good]) => (
              <div key={feat} className="grid grid-cols-3 p-4 text-sm"
                style={{ borderTop: "1px solid rgba(26,159,255,0.1)" }}>
                <div style={{ color: "#7a94b8" }}>{feat}</div>
                <div style={{ color: "#f87171" }}>{bad}</div>
                <div style={{ color: "#1a9fff" }}>{good}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: "#07090f" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
            Start Taking Orders Tonight
          </h2>
          <p className="mb-8" style={{ color: "#7a94b8", fontSize: 16, lineHeight: 1.7 }}>
            Free account setup. We&apos;ll walk you through the whole process in under 30 minutes.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://boomonlineordering.com" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              Create Free Account →
            </a>
            <Link href="/contact" className="px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", letterSpacing: "1px" }}>
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
