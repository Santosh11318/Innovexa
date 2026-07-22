# 🚀 Innovexa — The Operating System for Entrepreneurs

> **"Help people build companies, solve real-world problems, collaborate with professionals, find opportunities, raise funding, learn continuously, and create innovation that changes the world."**

---

## 🌟 What is Innovexa?

Innovexa is NOT another social media platform. It is the **world's most powerful Business, Innovation, Startup, and Professional Collaboration Platform**.

Every minute spent on Innovexa must create measurable value. Users leave with:
- A solved problem
- A new business connection
- A mentor, investor, or co-founder
- A customer or business opportunity
- Funding or a completed task

---

## 🗂️ Project Structure

```
innovexa/
├── prisma/
│   └── schema.prisma          # Complete database schema
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout
│   │   ├── auth/
│   │   │   ├── login/         # Sign in page
│   │   │   ├── register/      # Sign up page
│   │   │   └── onboarding/    # Role & interest selection
│   │   ├── dashboard/
│   │   │   ├── page.tsx       # Main dashboard
│   │   │   ├── layout.tsx     # Dashboard layout (sidebar)
│   │   │   └── ai/            # AI Copilot chat
│   │   ├── problems/          # Problem Marketplace
│   │   ├── startups/          # Startup Builder
│   │   │   └── new/           # Create startup wizard
│   │   ├── investors/         # Investor Hub
│   │   ├── mentors/           # Mentor Hub
│   │   ├── talent/            # Talent Marketplace
│   │   └── tools/             # Business Tools & Calculators
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Landing page navbar
│   │   │   ├── Sidebar.tsx    # Dashboard sidebar
│   │   │   ├── DashboardHeader.tsx
│   │   │   └── Footer.tsx
│   │   └── common/
│   │       ├── ThemeProvider.tsx
│   │       └── StatsCounter.tsx
│   ├── context/
│   │   └── QueryProvider.tsx
│   ├── lib/
│   │   └── utils/
│   │       ├── cn.ts          # className utility
│   │       └── format.ts      # Format helpers
│   ├── types/
│   │   └── index.ts           # All TypeScript types
│   └── styles/
│       └── globals.css        # Design system & CSS vars
├── .env.example               # Environment variables template
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚡ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Custom Design System |
| Database | PostgreSQL + Prisma ORM |
| Auth | NextAuth.js v5 + Google/GitHub OAuth |
| AI | OpenAI GPT-4o / Claude API |
| Realtime | Socket.io |
| File Upload | UploadThing / Cloudinary |
| Caching | Redis |
| Animations | Framer Motion |
| State | Zustand + React Query |
| Payments | Razorpay (INR) |
| Deployment | Vercel / AWS / GCP |

---

## 🚀 Getting Started

### 1. Prerequisites
```bash
Node.js >= 18.0.0
PostgreSQL >= 14
Redis (optional, for caching)
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Setup Environment
```bash
cp .env.example .env.local
# Fill in your values in .env.local
```

### 4. Setup Database
```bash
# Push schema to database
npm run db:push

# Generate Prisma client
npm run db:generate

# Open Prisma Studio (optional)
npm run db:studio
```

### 5. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Key Features

### 🔥 Problem Marketplace
- Post real business/technical problems
- Community submits solutions
- Rewards: Cash, Employment, Equity, Partnership
- AI ranks best solutions automatically

### 🚀 Startup Builder
- Unlimited startup profiles
- AI-generated: Business Plan, Pitch Deck, Financial Projections
- Go-to-Market Strategy, SWOT, Competitor Analysis
- Roadmap, Milestones, Team Management

### 🤖 AI Copilot
- 24/7 AI Business Consultant
- Business Plan Generator
- Pitch Deck Creator
- Market Research Tool
- Financial Projection Builder
- Investor Pitch Coach

### 💰 Investor Hub
- Verified investor profiles
- AI startup-investor matching
- Meeting request system
- Deal pipeline management

### 🎓 Mentor Hub
- Book sessions with expert mentors
- Free & paid options
- Video calls, office hours
- Reviews and ratings

### 💼 Talent Marketplace
- Hire: Developers, Designers, AI Engineers, Co-founders
- One-click job applications
- AI candidate matching
- Equity + salary offers

### 🛠️ Business Tools
- Runway Calculator
- CAC/LTV Calculator
- Equity Dilution Calculator
- ROI Calculator
- Burn Rate Tracker
- Startup Valuation (Quick)
- GST Calculator (coming soon)
- Cap Table Builder (coming soon)

---

## 🎨 Design System

Inspired by: Apple, Linear, Notion, Stripe, Vercel

- **Dark Mode First** (also full light mode)
- Glassmorphism (subtle)
- Smooth animations (Framer Motion)
- Premium typography (Inter)
- Consistent spacing & rounded corners
- Brand gradient: Indigo → Purple → Cyan

CSS Variables:
```css
--primary: 238 84% 58%;        /* Brand indigo */
--brand-gradient: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
```

---

## 🔒 Security

- Enterprise-grade authentication (NextAuth v5)
- Role-based permissions
- End-to-end encryption for private messages
- GDPR compliant
- SOC2-ready architecture
- Rate limiting & fraud detection
- AI spam/scam detection

---

## 📱 Pages Overview

| Route | Page |
|-------|------|
| `/` | Landing Page |
| `/auth/login` | Sign In |
| `/auth/register` | Sign Up |
| `/auth/onboarding` | Role & Interest Setup |
| `/dashboard` | Main Dashboard |
| `/dashboard/ai` | AI Copilot Chat |
| `/problems` | Problem Marketplace |
| `/startups` | Startup Builder |
| `/startups/new` | Create Startup Wizard |
| `/investors` | Investor Hub |
| `/mentors` | Mentor Hub |
| `/talent` | Talent Marketplace |
| `/tools` | Business Calculators |

---

## 🛣️ Roadmap

### Phase 1 (MVP) ✅
- [x] Landing page
- [x] Auth (Login/Register/Onboarding)
- [x] Dashboard
- [x] Problem Marketplace
- [x] Startup Builder
- [x] Investor Hub
- [x] Mentor Hub
- [x] Talent Marketplace
- [x] AI Copilot
- [x] Business Tools

### Phase 2
- [ ] Real-time Chat (Socket.io)
- [ ] Video meetings (WebRTC)
- [ ] Knowledge Hub (Courses & Templates)
- [ ] Events System
- [ ] University Hub
- [ ] Notification System
- [ ] Payment Integration (Razorpay)

### Phase 3
- [ ] Mobile App (React Native)
- [ ] AI Startup Valuation
- [ ] Startup Credit Score
- [ ] Company Acquisition Marketplace
- [ ] Patent Marketplace
- [ ] Global Startup Ranking
- [ ] Government Problem Portal
- [ ] No-Code App Builder

---

## 🤝 Target Users

Students • Startup Founders • Entrepreneurs • Business Owners • Investors • Angel Investors • VCs • Mentors • Developers • Designers • Product Managers • AI Engineers • Researchers • Freelancers • Consultants • Recruiters • Incubators • Accelerators • Universities • Government Innovation Programs • Corporate Innovation Teams

---

## 📞 Contact

- Website: [innovexa.com](https://innovexa.com)
- Email: hello@innovexa.com
- Twitter: [@innovexa](https://twitter.com/innovexa)
- LinkedIn: [Innovexa](https://linkedin.com/company/innovexa)

---

> **"Do not build another social network. Build the operating system for the next generation of entrepreneurs."**

Made with ❤️ in India 🇮🇳
