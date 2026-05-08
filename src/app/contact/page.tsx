"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const services = [
  "AI Automation / Chatbot",
  "Online Ordering System",
  "POS System",
  "Website Design",
  "Web Hosting",
  "Maintenance Plan",
  "Digital Signage",
  "Local SEO",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", business: "", service: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("contact_submissions").insert([form]);
    setStatus(error ? "error" : "success");
  };

  const inputStyle = {
    background: "#0d1225",
    border: "1px solid rgba(26,159,255,0.2)",
    borderRadius: 10,
    color: "#fff",
    padding: "12px 16px",
    fontSize: 14,
    width: "100%",
    outline: "none",
  };

  return (
    <>
      <section className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 800px 500px at 50% 20%,rgba(26,159,255,0.07) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Get In Touch
          </div>
          <h1 className="font-extrabold mb-4" style={{ fontSize: "clamp(28px,5vw,48px)", color: "#fff" }}>
            Let&apos;s Discuss Your <span style={{ color: "#1a9fff" }}>Needs</span>
          </h1>
          <p style={{ color: "#7a94b8", fontSize: 16, lineHeight: 1.7 }}>
            Fill out the form below and we&apos;ll get back to you within 1 business day.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {status === "success" ? (
            <div className="rounded-2xl p-12 text-center"
              style={{ background: "#0d1225", border: "1px solid rgba(52,211,153,0.3)" }}>
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#fff" }}>Message Sent!</h2>
              <p style={{ color: "#7a94b8" }}>We&apos;ll get back to you within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl p-8 flex flex-col gap-5"
              style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)" }}>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#7a94b8" }}>
                    Name *
                  </label>
                  <input required style={inputStyle} placeholder="John Doe"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#7a94b8" }}>
                    Email *
                  </label>
                  <input required type="email" style={inputStyle} placeholder="john@restaurant.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#7a94b8" }}>
                    Phone
                  </label>
                  <input style={inputStyle} placeholder="(555) 000-0000"
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#7a94b8" }}>
                    Business Name
                  </label>
                  <input style={inputStyle} placeholder="Le Petit Pain"
                    value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#7a94b8" }}>
                  Service Interested In
                </label>
                <select style={{ ...inputStyle, cursor: "pointer" }}
                  value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  <option value="">Select a service...</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#7a94b8" }}>
                  Message *
                </label>
                <textarea required rows={5} style={{ ...inputStyle, resize: "vertical" }}
                  placeholder="Tell us about your business and what you need..."
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              {status === "error" && (
                <p className="text-sm" style={{ color: "#f87171" }}>
                  Something went wrong. Please try again or email us directly at eric@boommedia.us
                </p>
              )}
              <button type="submit" disabled={status === "loading"}
                className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all"
                style={{
                  background: status === "loading" ? "rgba(26,159,255,0.5)" : "#1a9fff",
                  color: "#fff", letterSpacing: "1px", cursor: status === "loading" ? "not-allowed" : "pointer",
                }}>
                {status === "loading" ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
