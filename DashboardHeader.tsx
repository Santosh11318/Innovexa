"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search, Bell, Menu, ChevronLeft, Plus, Zap,
  Command, User, Settings, LogOut, Star,
} from "lucide-react";

interface DashboardHeaderProps {
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}

export function DashboardHeader({ sidebarCollapsed, onToggleSidebar }: DashboardHeaderProps) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="h-16 bg-card border-b border-border flex items-center px-6 gap-4 flex-shrink-0">
      {/* Toggle sidebar */}
      <button
        onClick={onToggleSidebar}
        className="btn-ghost w-9 h-9 p-0 hidden md:flex"
        aria-label="Toggle sidebar"
      >
        {sidebarCollapsed ? (
          <Menu className="w-4.5 h-4.5" />
        ) : (
          <ChevronLeft className="w-4.5 h-4.5" />
        )}
      </button>

      {/* Search */}
      <div className="flex-1 max-w-lg">
        <button
          onClick={() => setShowSearch(true)}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-xl bg-surface-1 border border-border text-muted-foreground text-sm hover:border-primary/50 transition-colors"
        >
          <Search className="w-4 h-4 flex-shrink-0" />
          <span className="flex-1 text-left">Search people, startups, problems...</span>
          <kbd className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded bg-secondary text-xs font-mono">
            <Command className="w-3 h-3" /> K
          </kbd>
        </button>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2 ml-auto">
        {/* Quick create */}
        <div className="relative group">
          <button className="btn-primary text-sm gap-1.5 px-3 py-2">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:block">Create</span>
          </button>
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-xl shadow-card overflow-hidden
            opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all z-50">
            <div className="p-1.5 space-y-0.5">
              {[
                { label: "New Startup", href: "/startups/new" },
                { label: "Post Problem", href: "/problems/new" },
                { label: "New Post", href: "/dashboard/post/new" },
                { label: "New Event", href: "/events/new" },
                { label: "Post Job", href: "/talent/post" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-lg text-sm hover:bg-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* AI Copilot quick */}
        <Link href="/dashboard/ai" className="btn-ghost w-9 h-9 p-0 text-primary" title="AI Copilot">
          <Zap className="w-4.5 h-4.5" />
        </Link>

        {/* Notifications */}
        <Link href="/dashboard/notifications" className="btn-ghost w-9 h-9 p-0 relative">
          <Bell className="w-4.5 h-4.5" />
          <span className="notif-badge">5</span>
        </Link>

        {/* User menu */}
        <div className="relative group">
          <button className="w-9 h-9 avatar text-sm flex-shrink-0">
            AR
          </button>
          <div className="absolute right-0 top-full mt-2 w-52 bg-card border border-border rounded-xl shadow-card overflow-hidden
            opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all z-50">
            <div className="p-3 border-b border-border">
              <div className="font-semibold text-sm">Arjun Sharma</div>
              <div className="text-xs text-muted-foreground mt-0.5">Founder · Builder Level 5</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 bg-surface-2 rounded-full h-1.5">
                  <div className="bg-primary h-full rounded-full w-3/4" />
                </div>
                <span className="text-[10px] text-muted-foreground">750/1000 XP</span>
              </div>
            </div>
            <div className="p-1.5 space-y-0.5">
              <Link href="/profile" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm hover:bg-secondary transition-colors">
                <User className="w-4 h-4 text-muted-foreground" /> My Profile
              </Link>
              <Link href="/dashboard/settings" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm hover:bg-secondary transition-colors">
                <Settings className="w-4 h-4 text-muted-foreground" /> Settings
              </Link>
              <Link href="/pricing" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm hover:bg-secondary transition-colors text-primary">
                <Star className="w-4 h-4" /> Upgrade to Pro
              </Link>
              <hr className="border-border my-1" />
              <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm hover:bg-secondary transition-colors text-destructive">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
