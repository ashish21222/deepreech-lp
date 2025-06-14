import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepreech - AI-Powered Creator Matching Platform",
  description: "Connect with the perfect creators for your brand using our AI-powered matching platform.",
  icons: {
    icon: [
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.ico', sizes: 'any' }
    ],
    apple: '/images/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/images/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/images/android-chrome-512x512.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/deepreech-logo.png"
          type="image/png"
          sizes="192x192"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
