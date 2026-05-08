import Link from "next/link";

const preBuilt = [
  "Professional restaurant template", "Mobile-first responsive design", "SEO-ready structure",
  "Menu page with photos", "Contact & reservation form", "Google Maps integration",
  "Social media links", "ADA compliant", "SSL certificate included",
];

const custom = [
  "Fully custom design & branding", "Unlimited pages & sections", "Custom features & integrations",
  "E-commerce / online store", "Booking & reservation systems", "Payment portal integration",
  "CMS for easy content updates", "Advanced SEO & analytics", "Priority support & maintenance",
];

const addOns = [
  { name: "Boom Hub CMS", desc: "Manage your content, menu, and images from a simple dashboard." },
  { name: "Online Ordering Widget", desc: "Commission-free ordering embedded directly in your site." },
  { name: "Reservation System", desc: "Table reservations with automated confirmations and reminders." },
  { name: "Review Widget", desc: "Display your Google & Yelp reviews with a live feed on your site." },
  { name: "ADA Compliance", desc: "Full WCAG 2.1 compliance for accessibility and legal protection." },
  { name: "QR Code Manager", desc: "Generate and manage QR codes for menus, ordering, and WiFi." },
];

export default function WebsitesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(26,159,255,0.08) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Pre-Built & Custom
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(32px,5vw,54px)", color: "#fff" }}>
            Restaurant <span style={{ color: "#1a9fff" }}>Website</span> Packages
          </h1>
          <p className="mb-10 mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 580, lineHeight: 1.7 }}>
            Professional websites for restaurants and service businesses. SEO-ready, mobile-first,
            and delivered fast — with Boom Hub CMS included so you can manage your own content.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              Get a Quote
            </Link>
            <Link href="/portfolio" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", letterSpacing: "1px" }}>
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-24 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              Choose Your <span style={{ color: "#1a9fff" }}>Package</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {/* Pre-Built */}
            <div className="rounded-2xl p-8"
              style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)" }}>
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#7a94b8" }}>Starter</div>
                <h3 className="font-extrabold text-2xl mb-1" style={{ color: "#fff" }}>Pre-Built Website</h3>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="font-black" style={{ fontSize: 42, color: "#1a9fff" }}>$75</span>
                  <span style={{ color: "#7a94b8" }}>/mo</span>
                </div>
                <p className="text-sm mt-2" style={{ color: "#7a94b8" }}>Professional template, live in days.</p>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8">
                {preBuilt.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#7a94b8" }}>
                    <span style={{ color: "#1a9fff", marginTop: 2 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full py-3 rounded-lg font-bold text-sm text-center block"
                style={{ background: "transparent", color: "#1a9fff", border: "1px solid rgba(26,159,255,0.4)" }}>
                Get Started
              </Link>
            </div>

            {/* Custom */}
            <div className="rounded-2xl p-8"
              style={{ background: "linear-gradient(140deg,#0d2256 0%,#0a3a90 100%)", border: "1px solid rgba(26,159,255,0.5)" }}>
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(160,210,255,0.7)" }}>Premium</div>
                <h3 className="font-extrabold text-2xl mb-1" style={{ color: "#fff" }}>Custom Website</h3>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="font-black" style={{ fontSize: 42, color: "#fff" }}>Custom</span>
                </div>
                <p className="text-sm mt-2" style={{ color: "rgba(160,210,255,0.7)" }}>Built from scratch to your spec.</p>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8">
                {custom.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "rgba(160,210,255,0.85)" }}>
                    <span style={{ color: "#7dd3fc", marginTop: 2 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full py-3 rounded-lg font-bold text-sm text-center block"
                style={{ background: "#1a9fff", color: "#fff" }}>
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ── */}
      <section className="py-20 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              Power-Up with <span style={{ color: "#1a9fff" }}>Add-Ons</span>
            </h2>
            <p style={{ color: "#7a94b8", fontSize: 16 }}>Bolt-on features to make your site work harder for you.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {addOns.map((a) => (
              <div key={a.name} className="rounded-2xl p-6"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)" }}>
                <h3 className="font-bold mb-2" style={{ color: "#fff" }}>{a.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7a94b8" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(135deg,#071226 0%,#0a1a3a 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold mb-2" style={{ color: "#7a94b8" }}>Our Office</p>
          <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(20px,3vw,30px)", color: "#fff" }}>
            West Palm Beach, Florida
          </h2>
          <p style={{ color: "#7a94b8" }}>500 South Australian Ave Suite 600, West Palm Beach FL 33401</p>
          <Link href="/contact" className="inline-block mt-8 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
            style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
            Schedule a Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
