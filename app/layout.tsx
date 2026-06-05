import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aether AI | Your Terminal, Reimagined",
  description:
    "A sleek, intelligent AI agent that lives in your CLI. Context awareness, tool integration, and sub-millisecond streaming powered by OpenRouter.",
  keywords: [
    "AI coding assistant",
    "CLI tool",
    "terminal AI",
    "code editor",
    "AI agent",
    "Aether",
    "OpenRouter",
    "MCP",
  ],
  authors: [{ name: "Irtaza Barlas" }],
  openGraph: {
    title: "Aether AI | Your Terminal, Reimagined",
    description:
      "The professional-grade AI coding assistant that lives in your CLI. Reads your code, edits files surgically, runs commands safely.",
    url: "https://aether-ai.dev",
    siteName: "Aether AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether AI | Your Terminal, Reimagined",
    description:
      "The professional-grade AI coding assistant that lives in your CLI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Aether AI",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "macOS, Linux, Windows",
              description:
                "A professional-grade AI coding assistant that runs directly in your terminal.",
              url: "https://github.com/irtaza302/aether-agent",
              author: {
                "@type": "Person",
                name: "Irtaza Barlas",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
