import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Geist } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Nex Commerce",
    template: "%s | Nex Commerce",
  },
  description: "Premium Next.js eCommerce experience with polished shopping, checkout, and account flows.",
  metadataBase: new URL("https://nexstore.local"),
  openGraph: {
    title: "Nex Commerce",
    description: "Premium eCommerce storefront built with Next.js 15 and modern UI patterns.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nex Commerce",
    description: "Premium eCommerce storefront built with Next.js 15 and modern UI patterns.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script id="cleanup-extension-attrs" strategy="beforeInteractive">
          {`document.body?.removeAttribute('cz-shortcut-listen');document.documentElement?.removeAttribute('cz-shortcut-listen');`}
        </Script>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
