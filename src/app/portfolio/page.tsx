import Link from "next/link";

const clients = [
  {
    name: "La Cucina Italiana",
    category: "Full-Service Restaurant",
    services: ["Website Design", "Online Ordering", "Local SEO"],
    location: "West Palm Beach, FL",
    result: "42% increase in online orders in 3 months",
  },
  {
    name: "The Burger Bar",
    category: "Fast Casual",
    services: ["POS System", "Online Ordering", "Digital Signage"],
    location: "Boca Raton, FL",
    result: "Saved $2,800/mo in third-party delivery fees",
  },
  {
    name: "Sunrise Café",
    category: "Breakfast & Brunch",
    services: ["Website Design", "Maintenance Plan", "Google Ads"],
    location: "Palm Beach Gardens, FL",
    result: "#1 ranking for 'breakfast Palm Beach Gardens'",
  },
  {
    name: "Ocean Grill & Bar",
    category: "Seafood Restaurant",
    services: ["Full Service Package", "AI Automation", "Branded App"],
    location: "Jupiter, FL",
    result: "300% more review responses, 4.8★ average",
  },
  {
    name: "Mango Thai Kitchen",
    category: "Asian Cuisine",
    services: ["Online Ordering", "Local SEO", "Social Media"],
    location: "Delray Beach, FL",
    result: "62% of orders now come directly (not via GrubHub)",
  },
  {
    name: "The Wine Room",
    category: "Wine Bar & Restaurant",
    services: ["Custom Website", "Reservation System", "SEO"],
    location: "West Palm Beach, FL",
    result: "Online reservations up 85% YoY",
  },
  {
    name: "Coastal Bowls",
    category: "Health Food",
    services: ["Website Design", "Ordering Widget", "Instagram Ads"],
    location: "Lake Worth, FL",
    result: "Launched online ordering — 0 to 200 orders/mo",
  },
  {
    name: "Casa Tapas",
    category: "Spanish Restaurant",
    services: ["POS System", "Digital Signage", "Maintenance"],
    location: "Boynton Beach, FL",
    result: "Reduced table turn time by 20% with new POS",
  },
];

const stats = [
  { num: "50+", label: "Active Clients" },
  { num: "10+", label: "Years of Experience" },
  { num: "$2M+", label: "in Third-Party Fees Saved" },
  { num: "4.9★", label: "Average Client Rating" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(26,159,255,0.08) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Client Results
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(32px,5vw,54px)", color: "#fff" }}>
            Our Client <span style={{ color: "#1a9fff" }}>Portfolio</span>
          </h1>
          <p className="mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 560, lineHeight: 1.7 }}>
            Real restaurants. Real results. Here&apos;s a look at the work we&apos;ve done and the outcomes our
            clients have achieved with Boom Media.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-black leading-none mb-2" style={{ fontSize: 38, color: "#1a9fff" }}>{s.num}</div>
              <div className="text-xs leading-snug" style={{ color: "#7a94b8" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLIENT CARDS ── */}
      <section className="py-16 px-6 pb-28" style={{ background: "#07090f" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-5">
            {clients.map((client) => (
              <div key={client.name} className="rounded-2xl overflow-hidden flex flex-col"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)" }}>
                <div className="h-32 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg,#071226 0%,#0a2050 100%)" }}>
                  <div className="text-center px-4">
                    <div className="font-bold text-sm" style={{ color: "#fff" }}>{client.name}</div>
                    <div className="text-xs mt-1" style={{ color: "#7a94b8" }}>{client.category}</div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-xs mb-3" style={{ color: "#7a94b8" }}>📍 {client.location}</div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {client.services.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded text-xs"
                        style={{ background: "rgba(26,159,255,0.1)", color: "#1a9fff", border: "1px solid rgba(26,159,255,0.2)" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto rounded-lg p-3" style={{ background: "rgba(26,159,255,0.07)", border: "1px solid rgba(26,159,255,0.15)" }}>
                    <p className="text-xs leading-snug font-semibold" style={{ color: "#1a9fff" }}>
                      📈 {client.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 rounded-2xl p-10 text-center"
            style={{ background: "linear-gradient(135deg,#071226 0%,#0a1a3a 100%)", border: "1px solid rgba(26,159,255,0.25)" }}>
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <blockquote className="font-semibold text-lg mb-4 mx-auto italic" style={{ color: "#fff", maxWidth: 600 }}>
              &ldquo;Boom Media handled everything — our website, POS, and online ordering. We went from zero digital presence
              to over 200 online orders a week. Best investment we&apos;ve made for the restaurant.&rdquo;
            </blockquote>
            <p className="text-sm" style={{ color: "#7a94b8" }}>— Restaurant Owner, South Florida</p>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(22px,3vw,34px)", color: "#fff" }}>
              Ready to Become Our Next Success Story?
            </h2>
            <p className="mb-6" style={{ color: "#7a94b8", fontSize: 16 }}>
              Letters of recommendation available upon request.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              Book a Consultation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
