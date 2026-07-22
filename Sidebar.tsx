"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Target, Rocket, Users, DollarSign,
  GraduationCap, Briefcase, Calendar, BookOpen, Building2,
  Wrench, Bell, Settings, Zap, Search, MessageSquare,
  TrendingUp, Star, ChevronRight, Plus,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const NAV_SECTIONS = [
  {
    label: "Main",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
      { icon: TrendingUp, label: "Feed", href: "/dashboard/feed" },
      { icon: Search, label: "Discover", href: "/dashboard/discover" },
      { icon: MessageSquare, label: "Messages", href: "/dashboard/messages", badge: 3 },
      { icon: Bell, label: "Notifications", href: "/dashboard/notifications", badge: 12 },
    ],
  },
  {
    label: "Build",
    items: [
      { icon: Rocket, label: "My Startups", href: "/startups", action: { icon: Plus, href: "/startups/new" } },
      { icon: Target, label: "Problems", href: "/problems" },
      { icon: Wrench, label: "Workspace", href: "/workspace" },
      { icon: Zap, label: "AI Copilot", href: "/dashboard/ai" },
    ],
  },
  {
    label: "Connect",
    items: [
      { icon: Users, label: "Co-founders", href: "/dashboard/cofounders" },
      { icon: DollarSign, label: "Investors", href: "/investors" },
      { icon: GraduationCap, label: "Mentors", href: "/mentors" },
      { icon: Briefcase, label: "Talent", href: "/talent" },
    ],
  },
  {
    label: "Learn",
    items: [
      { icon: BookOpen, label: "Knowledge Hub", href: "/knowledge" },
      { icon: Calendar, label: "Events", href: "/events" },
      { icon: Building2, label: "University Hub", href: "/knowledge/university" },
    ],
  },
  {
    label: "Account",
    items: [
      { icon: Star, label: "Upgrade Plan", href: "/pricing" },
      { icon: Settings, label: "Settings", href: "/dashboard/settings" },
    ],
  },
];

interface SidebarProps {
  collapsed?: boolean;
}

export function Sidebar({ collapsed = false }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-card border-r border-border transition-all duration-300",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 h-16 px-4 border-b border-border flex-shrink-0">
        <div className="w-8 h-8 rounded-xl brand-gradient flex items-center justify-center flex-shrink-0 glow">
          <Zap className="w-4 h-4 text-white" />
        </div>
        {!collapsed && (
          <span className="font-bold text-lg brand-gradient-text tracking-tight">Innovexa</span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 no-scrollbar space-y-6">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label}>
            {!collapsed && (
              <div className="text-[10px] font-semibold text-muted-foreground/60 uppercase tracking-widest px-3 mb-1.5">
                {section.label}
              </div>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

                return (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={cn(
                        "sidebar-item",
                        isActive && "active",
                        collapsed && "justify-center px-0"
                      )}
                      title={collapsed ? item.label : undefined}
                    >
                      <item.icon className="w-4.5 h-4.5 flex-shrink-0" />
                      {!collapsed && (
                        <>
                          <span className="flex-1">{item.label}</span>
                          {"badge" in item && item.badge && (
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                              {item.badge}
                            </span>
                          )}
                          {"action" in item && item.action && (
                            <Link
                              href={item.action.href}
                              className="opacity-0 group-hover:opacity-100 p-0.5 hover:bg-primary/10 rounded-md transition-all"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <item.action.icon className="w-3.5 h-3.5 text-muted-foreground" />
                            </Link>
                          )}
                        </>
                      )}
                    </Link>

                    {/* Tooltip when collapsed */}
                    {collapsed && (
                      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 rounded-lg bg-popover border border-border text-foreground text-xs font-medium whitespace-nowrap shadow-card
                        opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
                        {item.label}
                        {"badge" in item && item.badge && (
                          <span className="ml-2 px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground text-[9px]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User quick access - bottom */}
      {!collapsed && (
        <div className="p-3 border-t border-border">
          <Link href="/dashboard/tools" className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 hover:from-primary/20 hover:to-purple-500/20 transition-all">
            <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center flex-shrink-0">
              <Wrench className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold">Business Tools</div>
              <div className="text-[10px] text-muted-foreground">Calculators & Templates</div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
          </Link>
        </div>
      )}
    </aside>
  );
}
