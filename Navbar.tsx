"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap, Menu, X, ChevronDown, Bell, Search,
  Rocket, Target, Users, DollarSign, GraduationCap, Briefcase, Sun, Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils/cn";

const NAV_ITEMS = [
  {
    label: "Platform",
    children: [
      { icon: Target, label: "Problem Marketplace", href: "/problems", desc: "Solve real business challenges" },
      { icon: Rocket, label: "Startup Builder", href: "/startups", desc: "Build your startup with AI" },
      { icon: DollarSign, label: "Investor Hub", href: "/investors", desc: "Connect with verified investors" },
      { icon: GraduationCap, label: "Mentor Hub", href: "/mentors", desc: "Book expert mentors" },
      { icon: Briefcase, label: "Talent Marketplace", href: "/talent", desc: "Hire top talent" },
      { icon: Users, label: "Community", href: "/dashboard", desc: "Connect with builders" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="container max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-bold text-xl">
          <div className="w-8 h-8 rounded-xl brand-gradient flex items-center justify-center glow">
            <Zap className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="brand-gradient-text">Innovexa</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <button
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                    openDropdown === item.label
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", openDropdown === item.label && "rotate-180")} />
                </button>
              ) : (
                <Link
                  href={item.href!}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-2xl shadow-card overflow-hidden"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <child.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{child.label}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{child.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Theme */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="btn-ghost w-9 h-9 p-0"
            aria-label="Toggle theme"
          >
            <Sun className="w-4 h-4 dark:hidden" />
            <Moon className="w-4 h-4 hidden dark:block" />
          </button>

          <Link href="/auth/login" className="hidden sm:block btn-ghost text-sm px-4">
            Sign In
          </Link>
          <Link href="/auth/register" className="btn-primary text-sm">
            Get Started
          </Link>

          {/* Mobile menu button */}
          <button
            className="btn-ghost w-9 h-9 p-0 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container px-6 py-4 space-y-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <div className="text-xs font-semibold text-muted-foreground px-3 py-2 uppercase tracking-wider">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm hover:bg-secondary transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <child.icon className="w-4 h-4 text-primary" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="block px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-3 flex gap-3">
                <Link href="/auth/login" className="btn-secondary flex-1 text-center text-sm" onClick={() => setMobileOpen(false)}>
                  Sign In
                </Link>
                <Link href="/auth/register" className="btn-primary flex-1 text-center text-sm" onClick={() => setMobileOpen(false)}>
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
