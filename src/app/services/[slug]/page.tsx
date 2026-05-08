import Link from "next/link";
import { redirect } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/lib/services-data";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} — Boom Media`,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return redirect("/services");
  if (service.existingPage) return redirect(service.existingPage);

  const related = servicesData
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(26,159,255,0.07) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Link href="/services" className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#7a94b8" }}>
              ← All Services
            </Link>
          </div>
          <div className="flex items-start gap-6">
            <div className="text-5xl flex-shrink-0 mt-1">{service.icon}</div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
                {service.category}
              </div>
              <h1 className="font-extrabold leading-tight mb-3" style={{ fontSize: "clamp(28px,5vw,50px)", color: "#fff" }}>
                {service.name}
              </h1>
              <p className="text-lg font-semibold mb-4" style={{ color: "#1a9fff" }}>{service.tagline}</p>
              <p className="leading-relaxed" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 600 }}>
                {service.heroBody}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
              Get a Free Quote
            </Link>
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold uppercase text-sm"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", letterSpacing: "1px" }}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      {service.features.length > 0 && (
        <section className="py-20 px-6" style={{ background: "#07090f" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(24px,4vw,38px)", color: "#fff" }}>
                What&apos;s <span style={{ color: "#1a9fff" }}>Included</span>
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-5">
              {service.features.map((f) => (
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
      )}

      {/* ── BENEFITS ── */}
      {service.benefits.length > 0 && (
        <section className="py-16 px-6" style={{ background: "linear-gradient(135deg,#071226 0%,#0a1a3a 100%)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-extrabold mb-8 text-center" style={{ fontSize: "clamp(22px,3vw,34px)", color: "#fff" }}>
              Why It <span style={{ color: "#1a9fff" }}>Matters</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {service.benefits.map((b) => (
                <div key={b} className="rounded-xl p-5 flex items-start gap-3"
                  style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.2)" }}>
                  <span style={{ color: "#1a9fff", fontSize: 18, marginTop: 1 }}>✓</span>
                  <p className="text-sm leading-relaxed" style={{ color: "#7a94b8" }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: "#07090f" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(22px,3vw,34px)", color: "#fff" }}>
            Ready to Get Started with {service.name}?
          </h2>
          <p className="mb-8" style={{ color: "#7a94b8", fontSize: 16, lineHeight: 1.7 }}>
            Call us at <a href="tel:+15614212666" style={{ color: "#1a9fff" }}>+1 (561) 421-2666</a> or
            fill out the form and we&apos;ll get back to you within 1 business day.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide"
            style={{ background: "#1a9fff", color: "#fff", letterSpacing: "1px" }}>
            Contact Us →
          </Link>
        </div>
      </section>

      {/* ── RELATED ── */}
      {related.length > 0 && (
        <section className="py-16 px-6 pb-24" style={{ background: "#07090f" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-extrabold mb-8 text-center" style={{ fontSize: "clamp(20px,3vw,30px)", color: "#fff" }}>
              Related Services
            </h2>
            <div className="grid grid-cols-3 gap-5">
              {related.map((s) => (
                <Link key={s.slug} href={s.existingPage || `/services/${s.slug}`}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 block"
                  style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)", textDecoration: "none" }}>
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#fff" }}>{s.name}</h3>
                  <p className="text-xs" style={{ color: "#1a9fff" }}>{s.tagline} →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
