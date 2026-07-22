import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { QueryProvider } from "@/context/QueryProvider";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Innovexa — The Operating System for Entrepreneurs",
    template: "%s | Innovexa",
  },
  description:
    "Build companies, solve real-world problems, collaborate with professionals, find opportunities, raise funding, learn continuously, and create innovation that changes the world.",
  keywords: [
    "startup platform",
    "entrepreneur network",
    "investor matching",
    "co-founder matching",
    "startup tools",
    "innovation platform",
    "business collaboration",
    "startup builder",
    "AI startup",
    "funding",
  ],
  authors: [{ name: "Innovexa" }],
  creator: "Innovexa",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://innovexa.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://innovexa.com",
    title: "Innovexa — The Operating System for Entrepreneurs",
    description:
      "Help people build companies, solve real-world problems, collaborate with professionals, and create innovation that changes the world.",
    siteName: "Innovexa",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovexa — The Operating System for Entrepreneurs",
    description: "Build, innovate, connect, and grow on the world's most powerful entrepreneurship platform.",
    images: ["/og-image.png"],
    creator: "@innovexa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a1a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster
              position="bottom-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "hsl(var(--card))",
                  color: "hsl(var(--foreground))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "500",
                },
              }}
            />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
