"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Restaurants", href: "/restaurants" },
  { label: "Services", href: "/services" },
  { label: "B.A.A.R.S", href: "/bar" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10"
      style={{
        height: 68,
        background: "rgba(7,9,15,0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(26,159,255,0.12)",
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="Boom Media" height={36} width={160} style={{ objectFit: "contain" }} priority />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "#7a94b8" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#7a94b8")}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/ai-automation"
          className="text-sm font-semibold transition-colors duration-200"
          style={{ color: "#a78bfa" }}
        >
          AI Automation ✦
        </Link>
        <Link href="/contact" className="text-sm font-medium transition-colors duration-200"
          style={{ color: "#7a94b8" }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#7a94b8")}>
          Contact
        </Link>
        <Link
          href="/portal"
          className="text-sm font-bold px-5 py-2 rounded-lg transition-colors duration-200"
          style={{ background: "#1a9fff", color: "#fff", letterSpacing: "0.3px" }}
        >
          Client Portal
        </Link>
      </nav>

      {/* Mobile toggle */}
      <button
        className="md:hidden p-2 rounded-lg"
        style={{ color: "#7a94b8" }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-1 p-4 md:hidden"
          style={{
            background: "rgba(7,9,15,0.97)",
            borderBottom: "1px solid rgba(26,159,255,0.15)",
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-3 rounded-lg text-sm font-medium"
              style={{ color: "#7a94b8" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/ai-automation"
            className="px-4 py-3 rounded-lg text-sm font-semibold"
            style={{ color: "#a78bfa" }}
            onClick={() => setOpen(false)}
          >
            AI Automation ✦
          </Link>
          <Link
            href="/contact"
            className="px-4 py-3 rounded-lg text-sm font-medium"
            style={{ color: "#7a94b8" }}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/portal"
            className="mt-2 px-4 py-3 rounded-lg text-sm font-bold text-center"
            style={{ background: "#1a9fff", color: "#fff" }}
            onClick={() => setOpen(false)}
          >
            Client Portal
          </Link>
        </div>
      )}
    </header>
  );
}
