import Link from "next/link";
import { Zap, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const FOOTER_LINKS = {
  Platform: [
    { label: "Problem Marketplace", href: "/problems" },
    { label: "Startup Builder", href: "/startups" },
    { label: "Investor Hub", href: "/investors" },
    { label: "Mentor Hub", href: "/mentors" },
    { label: "Talent Marketplace", href: "/talent" },
    { label: "Knowledge Hub", href: "/knowledge" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Startup Guides", href: "/knowledge/guides" },
    { label: "Business Templates", href: "/knowledge/templates" },
    { label: "API Docs", href: "/docs" },
    { label: "Community", href: "/community" },
    { label: "Events", href: "/events" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 rounded-xl brand-gradient flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="brand-gradient-text">Innovexa</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              The operating system for the next generation of entrepreneurs.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "https://twitter.com/innovexa", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com/company/innovexa", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/innovexa", label: "GitHub" },
                { icon: Instagram, href: "https://instagram.com/innovexa", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-surface-1 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-semibold text-sm mb-4">{section}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Innovexa. All rights reserved. Built with ❤️ in India.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>🇮🇳 Made in India</span>
            <span>•</span>
            <span>DPIIT Recognized</span>
            <span>•</span>
            <span>SOC2 Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
