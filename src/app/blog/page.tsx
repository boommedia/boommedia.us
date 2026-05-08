import Link from "next/link";

const posts = [
  {
    category: "AI Automation",
    title: "How AI is Changing the Restaurant Industry in 2025",
    excerpt: "From AI chatbots that answer the phone to automated review management, here's what local restaurants need to know about AI automation and how it can save hours of work every week.",
    date: "May 2025",
    readTime: "5 min read",
    slug: "ai-changing-restaurants-2025",
  },
  {
    category: "Online Ordering",
    title: "Why Restaurants Are Ditching DoorDash for Commission-Free Ordering",
    excerpt: "Third-party platforms take 15–30% per order. We break down exactly how much restaurants are losing and how commission-free ordering compares in real dollars.",
    date: "April 2025",
    readTime: "4 min read",
    slug: "ditching-doordash-commission-free",
  },
  {
    category: "Local SEO",
    title: "The 7-Step Google Business Profile Checklist for Restaurants",
    excerpt: "Your Google Business Profile is the most powerful free tool in your marketing arsenal. Here's exactly how to optimize it to show up first when local customers search for restaurants.",
    date: "April 2025",
    readTime: "6 min read",
    slug: "google-business-profile-checklist",
  },
  {
    category: "Website Design",
    title: "Why Your Restaurant Website Is Costing You Customers",
    excerpt: "Slow load times, missing menus, no online ordering — a bad website can silently kill your business. Here's the 10-point audit we run on every restaurant site.",
    date: "March 2025",
    readTime: "5 min read",
    slug: "restaurant-website-costing-customers",
  },
  {
    category: "POS Systems",
    title: "Square vs. Toast vs. Clover: Choosing the Right Restaurant POS in 2025",
    excerpt: "We've set up dozens of POS systems. Here's our honest comparison of the top platforms — features, pricing, pros, and cons for full-service restaurants.",
    date: "March 2025",
    readTime: "7 min read",
    slug: "pos-comparison-oracle-square-toast",
  },
  {
    category: "Digital Signage",
    title: "Digital Menu Boards: ROI for Restaurants in 2025",
    excerpt: "Restaurants using digital menu boards see an average 5% increase in check size. Here's the breakdown of costs, options, and expected return on investment.",
    date: "February 2025",
    readTime: "4 min read",
    slug: "digital-menu-boards-roi",
  },
];

const categories = ["All", "AI Automation", "Online Ordering", "Local SEO", "Website Design", "POS Systems", "Digital Signage"];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 10%,rgba(26,159,255,0.08) 0%,transparent 70%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(26,159,255,0.12)", border: "1px solid rgba(26,159,255,0.3)", color: "#1a9fff" }}>
            Restaurant Industry
          </div>
          <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(32px,5vw,54px)", color: "#fff" }}>
            Restaurant <span style={{ color: "#1a9fff" }}>Blog</span>
          </h1>
          <p className="mx-auto" style={{ fontSize: 17, color: "#7a94b8", maxWidth: 500, lineHeight: 1.7 }}>
            Insights, guides, and tips on technology, marketing, and operations for restaurant owners.
          </p>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-6 px-6" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, i) => (
              <button key={cat}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: i === 0 ? "#1a9fff" : "#0d1225",
                  color: i === 0 ? "#fff" : "#7a94b8",
                  border: i === 0 ? "none" : "1px solid rgba(26,159,255,0.15)",
                }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── POSTS ── */}
      <section className="py-16 px-6 pb-28" style={{ background: "#07090f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.15)" }}>
                <div className="h-40 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg,#071226 0%,#0a2050 100%)" }}>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                    style={{ background: "rgba(26,159,255,0.15)", color: "#1a9fff", border: "1px solid rgba(26,159,255,0.3)" }}>
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs" style={{ color: "#7a94b8" }}>{post.date}</span>
                    <span style={{ color: "rgba(26,159,255,0.3)" }}>·</span>
                    <span className="text-xs" style={{ color: "#7a94b8" }}>{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-base leading-snug mb-3 flex-1" style={{ color: "#fff" }}>
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#7a94b8" }}>
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-semibold" style={{ color: "#1a9fff" }}>
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 rounded-2xl p-10 text-center"
            style={{ background: "linear-gradient(135deg,#071226 0%,#0a1a3a 100%)", border: "1px solid rgba(26,159,255,0.25)" }}>
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(22px,3vw,32px)", color: "#fff" }}>
              Get Restaurant Tips in Your Inbox
            </h2>
            <p className="mb-6" style={{ color: "#7a94b8", fontSize: 15 }}>
              Join 500+ restaurant owners getting weekly tips on tech, marketing, and operations.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com"
                className="flex-1 rounded-lg px-4 py-3 text-sm"
                style={{ background: "#0d1225", border: "1px solid rgba(26,159,255,0.2)", color: "#fff", outline: "none" }} />
              <button className="px-6 py-3 rounded-lg font-bold text-sm whitespace-nowrap"
                style={{ background: "#1a9fff", color: "#fff" }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
