import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation — Boom Media",
  description: "AI chatbots, voice agents, workflow automation, and review automation built for restaurants and service businesses.",
};

const aiServices = [
  {
    icon: "🤖",
    title: "AI Website Chatbot",
    body: "A custom-trained chatbot on your website that answers questions about your menu, hours, location, specials, and reservations — 24/7, no staff needed.",
    tags: ["Menu Q&A", "Hours & Location", "Reservations"],
  },
  {
    icon: "📞",
    title: "AI Voice Agent",
    body: "An AI that answers your phone calls, handles common questions, takes reservations, and routes urgent calls to the right person — day or night.",
    tags: ["Phone Answering", "Reservation Intake", "Call Routing"],
  },
  {
    icon: "⭐",
    title: "Review Automation",
    body: "Automatically request Google reviews after every order or visit via SMS or email. Grow your review count and local SEO ranking on autopilot.",
    tags: ["SMS", "Email", "Google Reviews"],
    tagBlue: true,
  },
  {
    icon: "📬",
    title: "Order Confirmation & Follow-up",
    body: "Automatically send order confirmations, estimated times, and post-order follow-ups via SMS or email. Keep customers informed without lifting a finger.",
    tags: ["Confirmations", "ETA Updates", "Follow-ups"],
  },
  {
    icon: "📅",
    title: "Booking & Reservation AI",
    body: "AI-powered booking that captures reservations from your website, Instagram DMs, SMS, and more — synced to your calendar automatically.",
    tags: ["Website", "Instagram DMs", "Calendar Sync"],
  },
  {
    icon: "📣",
    title: "Social & Marketing Automation",
    body: "AI-generated post captions, scheduled social media content, promo SMS blasts to past customers, and automated re-engagement campaigns.",
    tags: ["Social Posts", "SMS Blasts", "Re-engagement"],
    tagBlue: true,
  },
];

const steps = [
  {
    num: "1",
    title: "Free AI Audit",
    body: "We review your current operations, identify the highest-value automation opportunities, and walk you through exactly what we'd build and what ROI to expect. No obligation.",
  },
  {
    num: "2",
    title: "We Build Your Automations",
    body: "Our team designs and builds your AI workflows — chatbots, voice agents, SMS flows, review requests — all customized for your business. You review and approve before anything goes live.",
  },
  {
    num: "3",
    title: "We Go Live Together",
    body: "We deploy everything and run a live test with you. Your team gets a simple walkthrough. We stay on-call during the first week to make sure everything runs smoothly.",
  },
  {
    num: "4",
    title: "Ongoing Management & Optimization",
    body: "We monitor performance, update your AI's knowledge (menus, specials, hours), and continuously optimize. When you are open, we are open. PERIOD.",
  },
];

const useCases = [
  { icon: "🍽️", title: "Full-Service Restaurants", body: "AI answers the phone for reservations and FAQs. Automated review requests after every table. Reservation reminders sent via SMS." },
  { icon: "🍕", title: "Fast Casual & Takeout", body: "Order confirmation workflows, ETA SMS updates, post-order review requests. More 5-star reviews with zero staff effort." },
  { icon: "💇", title: "Salons & Spas", body: "AI booking via website and Instagram DMs. Appointment reminders. Follow-up messages requesting reviews and rebooking." },
  { icon: "🏠", title: "Home Service Businesses", body: "Automated quote follow-ups, job completion messages, and review requests. AI chatbot handles service area and pricing questions 24/7." },
];

export default function AIAutomationPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "100vh", padding: "108px 24px 80px" }}
      >
        {/* Grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,0.04) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%,black 0%,transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 900px 600px at 50% 15%,rgba(167,139,250,0.1) 0%,transparent 65%), radial-gradient(ellipse 500px 400px at 20% 80%,rgba(26,159,255,0.07) 0%,transparent 60%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-sm transition-colors" style={{ color: "#7a94b8" }}>
            ← Back to Boom Media
          </Link>

          {/* Badge */}
          <div className="flex items-center gap-2 justify-center mb-7">
            <div
              className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.35)", color: "#a78bfa" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#a78bfa", animation: "pulse 2s infinite" }}
              />
              AI Automation Services
            </div>
          </div>

          <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(38px,7vw,68px)", color: "#fff" }}>
            Put Your Restaurant
            <br />on{" "}
            <span style={{ color: "#1a9fff" }}>Autopilot</span> with{" "}
            <span style={{ color: "#a78bfa" }}>AI</span>
          </h1>

          <p className="mb-12 mx-auto leading-relaxed" style={{ fontSize: 18, color: "#7a94b8", maxWidth: 640 }}>
            From <strong style={{ color: "#fff" }}>AI chatbots</strong> that answer the phone to{" "}
            <strong style={{ color: "#fff" }}>automated workflows</strong> that follow up with every customer —
            we build the systems so you can focus on the food.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-14">
            <Link
              href="#contact"
              className="px-8 py-4 rounded-lg font-bold text-sm"
              style={{ background: "#a78bfa", color: "#0d1225" }}
            >
              Book a Free AI Audit
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 rounded-lg font-bold text-sm"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)" }}
            >
              See All Services
            </Link>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap gap-8 justify-center">
            {["No contracts required", "Built for restaurants & service businesses", "Fully managed by Boom Media"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm" style={{ color: "#7a94b8" }}>
                <span style={{ color: "#34d399" }}>✓</span> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      <section className="py-24 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto grid gap-20" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
          {/* Left */}
          <div>
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}
            >
              What is AI Automation?
            </div>
            <h2 className="font-extrabold leading-snug mb-5" style={{ fontSize: "clamp(26px,4vw,38px)", color: "#fff" }}>
              Stop doing tasks a machine can{" "}
              <span style={{ color: "#1a9fff" }}>handle for you</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#7a94b8" }}>
              AI Automation replaces repetitive, time-consuming tasks — phone calls, follow-ups, review requests, order confirmations — with intelligent systems that run around the clock.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#7a94b8" }}>
              We design, build, and manage these workflows for you. No tech knowledge required.
            </p>
            <ul className="mt-8 flex flex-col gap-0" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {[
                { icon: "🤖", title: "AI Chatbots", body: "Answers customer questions on your website 24/7." },
                { icon: "📞", title: "AI Voice Agents", body: "Answers your phone, takes reservations, handles FAQs." },
                { icon: "⚡", title: "Workflow Automation", body: "Order confirmations, review requests, SMS follow-ups." },
                { icon: "📊", title: "Reporting & Insights", body: "See what customers ask most and where revenue leaks." },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 py-4"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <strong className="block text-sm font-bold" style={{ color: "#fff" }}>{item.title}</strong>
                    <span className="text-xs" style={{ color: "#7a94b8" }}>{item.body}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: workflow diagram */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "#0d1225", border: "1px solid rgba(167,139,250,0.2)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#7a94b8", letterSpacing: "2px" }}>
              Example: Review Request Workflow
            </p>
            {[
              { icon: "📦", color: "rgba(26,159,255,0.12)", title: "Order Completed", sub: "Customer finishes their meal or order" },
              { icon: "⏱️", color: "rgba(167,139,250,0.12)", title: "Wait 2 Hours", sub: "AI waits for optimal timing" },
              { icon: "💬", color: "rgba(26,159,255,0.12)", title: "Send SMS / Email", sub: '"How was your experience? Leave us a review!"' },
              { icon: "⭐", color: "rgba(52,211,153,0.12)", title: "Google Review Posted", sub: "Direct link to your Google Business Profile" },
            ].map((step, i) => (
              <div key={step.title}>
                <div className="flex items-center gap-4 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: step.color }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: "#fff" }}>{step.title}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#7a94b8" }}>{step.sub}</div>
                  </div>
                </div>
                {i < 3 && <div className="text-center py-1" style={{ color: "#7a94b8" }}>↓</div>}
              </div>
            ))}
            <div
              className="mt-5 p-3.5 rounded-xl"
              style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)" }}
            >
              <p className="text-sm font-semibold" style={{ color: "#34d399" }}>
                Result: +2–5 new reviews per week, fully automated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI SERVICES ── */}
      <section id="services" className="py-24 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.35)", color: "#a78bfa" }}
            >
              AI Services
            </div>
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              Everything We <span style={{ color: "#1a9fff" }}>Automate</span> for You
            </h2>
            <p style={{ color: "#7a94b8", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
              Fully managed AI solutions built specifically for restaurants and service businesses.
            </p>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {aiServices.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#0d1225", border: "1px solid rgba(167,139,250,0.18)" }}
              >
                <div
                  className="absolute pointer-events-none rounded-full"
                  style={{ top: -50, right: -50, width: 180, height: 180, background: "radial-gradient(circle,rgba(167,139,250,0.1) 0%,transparent 70%)" }}
                />
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-extrabold mb-2.5" style={{ color: "#fff" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#7a94b8" }}>{s.body}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={
                        s.tagBlue
                          ? { background: "rgba(26,159,255,0.1)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }
                          : { background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.35)", color: "#a78bfa" }
                      }
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6" style={{ background: "linear-gradient(180deg,#07090f 0%,#0a0e20 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.35)", color: "#a78bfa" }}
            >
              Process
            </div>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>How It Works</h2>
          </div>
          <div className="flex flex-col" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-8 py-10"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black flex-shrink-0"
                  style={{ background: "rgba(167,139,250,0.12)", border: "2px solid rgba(167,139,250,0.35)", color: "#a78bfa" }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold mb-2.5" style={{ color: "#fff" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7a94b8" }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-24 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}
            >
              Use Cases
            </div>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(26px,4vw,40px)", color: "#fff" }}>
              Built for <span style={{ color: "#1a9fff" }}>Your</span> Industry
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.2)" }}
              >
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#fff" }}>{u.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7a94b8" }}>{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(180deg,#07090f 0%,#0d0d28 50%,#07090f 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.35)", color: "#a78bfa" }}
          >
            Get Started
          </div>
          <h2 className="font-black mb-5 leading-tight" style={{ fontSize: "clamp(30px,5vw,50px)", color: "#fff" }}>
            Ready to Put Your Business
            <br />on <span style={{ color: "#1a9fff" }}>Autopilot?</span>
          </h2>
          <p className="mb-10 leading-relaxed mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 520 }}>
            Book a free 30-minute AI Audit. We'll show you exactly what can be automated,
            what it costs, and what you'll save — no fluff, no commitment.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="px-9 py-4 rounded-lg font-bold text-sm"
              style={{ background: "#a78bfa", color: "#0d1225" }}
            >
              Book Free AI Audit
            </Link>
            <Link
              href="/"
              className="px-9 py-4 rounded-lg font-bold text-sm"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)" }}
            >
              Back to Boom Media
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
