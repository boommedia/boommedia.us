import Link from "next/link";
import Image from "next/image";

const cols = [
  {
    heading: "Services",
    links: [
      { label: "Online Ordering", href: "/restaurants/ordering" },
      { label: "Web Hosting", href: "/hosting" },
      { label: "POS Systems", href: "/restaurants/pos" },
      { label: "Website Packages", href: "/websites" },
      { label: "Maintenance", href: "/maintenance" },
      { label: "AI Automation ✦", href: "/ai-automation", violet: true },
    ],
  },
  {
    heading: "Restaurants",
    links: [
      { label: "Digital Signage", href: "/restaurants/signage" },
      { label: "Local SEO", href: "/restaurants/seo" },
      { label: "Menu Printing", href: "/restaurants/printing" },
      { label: "Photography", href: "/restaurants/photography" },
      { label: "Restaurant Blog", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Client Portal", href: "/portal" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Guarantee", href: "/guarantee" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060810",
        borderTop: "1px solid rgba(26,159,255,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Image src="/logo.png" alt="Boom Media" height={32} width={140} style={{ objectFit: "contain" }} />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#7a94b8" }}>
              Restaurant & Service Industry Experts. Helping local businesses thrive with AI-powered digital solutions for 10+ years.
            </p>
          </div>

          {/* Columns */}
          <div className="flex flex-wrap gap-12">
            {cols.map((col) => (
              <div key={col.heading}>
                <h4
                  className="text-xs font-bold uppercase mb-4 tracking-widest"
                  style={{ color: "#fff" }}
                >
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: (l as { violet?: boolean }).violet ? "#a78bfa" : "#7a94b8" }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs" style={{ color: "#7a94b8" }}>
            © {new Date().getFullYear()} Boom Media LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs" style={{ color: "#7a94b8" }}>Privacy Policy</Link>
            <Link href="/terms" className="text-xs" style={{ color: "#7a94b8" }}>Terms</Link>
            <Link href="/contact" className="text-xs" style={{ color: "#7a94b8" }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
