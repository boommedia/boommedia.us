import Link from "next/link";

export default function PortalPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 50%,rgba(26,159,255,0.07) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Clients Only
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(28px,5vw,48px)", color: "#fff" }}>
            Boom <span style={{ color: "#1a9fff" }}>Client Portal</span>
          </h1>
          <p className="mb-10 mx-auto" style={{ fontSize: 16, color: "#7a94b8", maxWidth: 420, lineHeight: 1.7 }}>
            Access your dashboard, invoices, support tickets, and project status. Login credentials are
            sent via email when your account is activated.
          </p>
          <div className="rounded-2xl p-8 mb-8" style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.2)" }}>
            <p className="text-sm mb-4 font-semibold" style={{ color: "#fff" }}>Portal access coming soon.</p>
            <p className="text-sm" style={{ color: "#7a94b8" }}>
              In the meantime, contact us directly at{" "}
              <a href="mailto:eric@boommedia.us" style={{ color: "#1a9fff" }}>eric@boommedia.us</a>{" "}
              or call <a href="tel:+15614212666" style={{ color: "#1a9fff" }}>+1 (561) 421-2666</a> for account support.
            </p>
          </div>
          <Link href="/contact" className="inline-block px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
            style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
            Contact Support
          </Link>
        </div>
      </section>
    </>
  );
}
