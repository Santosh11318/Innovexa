"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Zap, Users, TrendingUp, Globe, Brain, Shield,
  Target, Lightbulb, Building2, GraduationCap, DollarSign,
  Code2, Rocket, Star, CheckCircle2, ChevronRight, Play,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StatsCounter } from "@/components/common/StatsCounter";

const FEATURES = [
  {
    icon: Target,
    title: "Problem Marketplace",
    description: "Post real business challenges. Get solutions from the world's best minds. Reward innovation.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Rocket,
    title: "Startup Builder",
    description: "Build and launch your startup with AI-powered tools. Business plan, pitch deck, financial models—all in one place.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Brain,
    title: "AI Copilot",
    description: "Your 24/7 AI business consultant. Generate strategies, analyze markets, build pitch decks, and more.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Co-founder Matching",
    description: "AI-powered matching with the perfect co-founder based on skills, vision, and personality.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: DollarSign,
    title: "Investor Hub",
    description: "Connect with verified angel investors and VCs. Get funding from idea to scale.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: GraduationCap,
    title: "Mentor Hub",
    description: "Book sessions with industry experts. Get guidance from founders who've been there.",
    color: "from-pink-500 to-rose-500",
  },
];

const STATS = [
  { label: "Startups Built", value: 12400, suffix: "+" },
  { label: "Professionals", value: 85000, suffix: "+" },
  { label: "Problems Solved", value: 3200, suffix: "+" },
  { label: "Funding Raised", value: 42, suffix: "M+" },
];

const ROLES = [
  { icon: Rocket, label: "Founders", color: "text-violet-500" },
  { icon: DollarSign, label: "Investors", color: "text-green-500" },
  { icon: GraduationCap, label: "Students", color: "text-blue-500" },
  { icon: Star, label: "Mentors", color: "text-yellow-500" },
  { icon: Code2, label: "Developers", color: "text-cyan-500" },
  { icon: Building2, label: "Enterprises", color: "text-pink-500" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose Your Role",
    description: "Select your identity — Founder, Investor, Developer, Mentor, or more. The platform adapts to your goals.",
  },
  {
    step: "02",
    title: "Define Your Goal",
    description: "Looking for a co-founder? Want to invest? Need to hire? Post a problem? Set your mission.",
  },
  {
    step: "03",
    title: "Build with AI",
    description: "Use our AI Copilot to generate business plans, pitch decks, market research, and everything you need.",
  },
  {
    step: "04",
    title: "Connect and Grow",
    description: "Find co-founders, investors, mentors, and talent. Every connection creates measurable value.",
  },
];

const TESTIMONIALS = [
  {
    name: "Arjun Sharma",
    role: "Founder, FinStack AI",
    avatar: "AS",
    content: "Innovexa helped me find my CTO, raise our seed round, and launch in 3 months. This platform is the real deal.",
    raised: "₹2.5 Cr",
  },
  {
    name: "Priya Nair",
    role: "Angel Investor",
    avatar: "PN",
    content: "I've found 3 of my best portfolio companies through Innovexa. The AI startup matching is incredibly accurate.",
    invested: "12 startups",
  },
  {
    name: "Rahul Verma",
    role: "Student, IIT Delhi",
    avatar: "RV",
    content: "From a student with just an idea to a funded startup in 8 months. The mentor connections changed everything.",
    built: "1 startup",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 container max-w-5xl mx-auto px-6 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
          >
            <Zap className="w-3.5 h-3.5" />
            The Operating System for Entrepreneurs
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Build the Future,{" "}
            <span className="brand-gradient-text">Together</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            The world's most powerful platform for entrepreneurs, investors, mentors, and innovators.
            Every minute here creates measurable value.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/auth/register" className="btn-primary text-base px-7 py-3 glow">
              Start Building Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="btn-secondary text-base px-7 py-3 flex items-center gap-2">
              <Play className="w-4 h-4 text-primary fill-primary" />
              Watch Demo
            </button>
          </div>

          {/* Role pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {ROLES.map((role) => (
              <div
                key={role.label}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-1 border border-border text-sm font-medium"
              >
                <role.icon className={`w-3.5 h-3.5 ${role.color}`} />
                {role.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative z-10 w-full container max-w-4xl mx-auto px-6 mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="card-premium p-6 text-center">
                <div className="text-3xl font-bold brand-gradient-text">
                  <StatsCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="brand-gradient-text">Build & Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Not a social network. A professional ecosystem where every feature drives real progress.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium p-6 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              <div className="flex items-center gap-1 mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-surface-1">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Innovexa Works</h2>
            <p className="text-muted-foreground text-lg">Go from idea to funded startup in record time.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {HOW_IT_WORKS.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Real People. <span className="brand-gradient-text">Real Progress.</span>
          </h2>
          <p className="text-muted-foreground text-lg">Join thousands of entrepreneurs already building on Innovexa.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium p-6 space-y-4"
            >
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.content}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="avatar w-10 h-10 text-sm">{t.avatar}</div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto text-right">
                  {t.raised && <div className="text-xs font-semibold text-green-500">{t.raised} raised</div>}
                  {t.invested && <div className="text-xs font-semibold text-blue-500">{t.invested}</div>}
                  {t.built && <div className="text-xs font-semibold text-purple-500">{t.built}</div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 brand-gradient opacity-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />

        <div className="relative z-10 container max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Your startup journey <br />
            <span className="brand-gradient-text">starts here</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            A student with just an idea can join today and, using AI, mentors, investors, and structured workflows, launch a real startup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register" className="btn-primary text-base px-8 py-3.5 glow">
              Start for Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/problems" className="btn-secondary text-base px-8 py-3.5">
              Explore Problems
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
            {["No credit card required", "Free forever plan", "10,000+ resources"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
