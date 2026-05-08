# Boom Media — Deployment & DNS Guide

## Current DNS (boommedia.us)
- **A Record:** 149.28.103.62  (current host — Vultr/other VPS)
- **IPv6 AAAA:** 2001:19f0:9000:2b03:5400:5ff:fe26:7b9b

---

## Step 1 — Create Supabase Project

1. Go to https://supabase.com → New Project
2. Name it `boommedia-us`, choose US East region, set a DB password
3. Go to **Settings → API** and copy:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Paste into `.env.local` (local) and Vercel env vars (production)

### Run this SQL in Supabase SQL Editor:
```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  business TEXT,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon (public form submissions)
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

-- Only service role can read (no public exposure)
CREATE POLICY "Service role reads" ON contact_submissions
  FOR SELECT USING (auth.role() = 'service_role');
```

---

## Step 2 — Deploy to Vercel

### First time setup:
```bash
# Install Vercel CLI
npm i -g vercel

# From the web/ directory:
cd web
vercel

# Follow prompts:
# - Link to existing project or create new
# - Project name: boommedia-us
# - Root directory: ./  (you're already in web/)
# - Framework: Next.js (auto-detected)
```

### Add environment variables in Vercel:
1. Go to vercel.com → Your Project → Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_SUPABASE_URL` → your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → your anon key
   - `NEXT_PUBLIC_APP_URL` → https://boommedia.us

### Connect GitHub for auto-deploy:
1. Push code to GitHub repo
2. Vercel Dashboard → Import Repository → select repo
3. Every push to `main` auto-deploys

---

## Step 3 — Add Custom Domain to Vercel

1. Vercel Dashboard → Your Project → Settings → Domains
2. Add domain: `boommedia.us`
3. Also add: `www.boommedia.us`
4. Vercel will show you the DNS records needed

---

## Step 4 — DNS Cutover (parallel build complete)

**Where to make changes:** Your domain registrar (where boommedia.us is registered — check via: https://whois.domaintools.com/boommedia.us)

### Option A — Point A record to Vercel (recommended):
Replace the current A record with Vercel's IP:
```
Type: A
Name: @
Value: 76.76.21.21    ← Vercel's IP
TTL: 300 (5 min for fast propagation)

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
TTL: 300
```

### Option B — Use Vercel Nameservers (cleanest):
In your registrar, change nameservers to:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```
(Vercel manages all DNS from their dashboard — easiest long-term)

### DNS records to preserve/migrate:
```
# Check current full DNS before cutting over:
nslookup -type=MX boommedia.us     ← Email MX records (preserve these!)
nslookup -type=TXT boommedia.us    ← SPF/DKIM for email
nslookup -type=CNAME www.boommedia.us
```

**IMPORTANT:** Check MX records before cutting over — if you have email (Google Workspace, etc.)
on boommedia.us, add those MX records to Vercel's DNS panel first so email isn't interrupted.

---

## Step 5 — SSL

Vercel auto-provisions a free Let's Encrypt SSL certificate once DNS propagates (usually 5–30 min).

---

## Cutover Checklist

- [ ] Supabase project created and SQL schema applied
- [ ] .env.local filled in with real Supabase keys
- [ ] `npm run build` passes with no errors locally
- [ ] Vercel project created and env vars added
- [ ] GitHub repo connected (auto-deploy on push)
- [ ] Preview URL tested: looks good on vercel.app URL
- [ ] Checked MX records — email preserved
- [ ] DNS A record updated to 76.76.21.21
- [ ] www CNAME set to cname.vercel-dns.com
- [ ] DNS propagated (check: https://dnschecker.org)
- [ ] SSL certificate active (green lock)
- [ ] Old site can be shut down

---

## Rollback Plan

If anything goes wrong, just change the A record back to:
`149.28.103.62` (current server)

DNS TTL at 300s = 5-minute rollback time.
