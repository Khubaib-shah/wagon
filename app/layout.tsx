import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FoodWagon – Fast Delivery, Fresh Food",
  description:
    "Order your favorite food online and get it delivered to your door in minutes. Best restaurants, best deals.",
  openGraph: {
    title: "FoodWagon – Fast Delivery, Fresh Food",
    description: "Order your favorite food online and get it delivered in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="bg-neutral-50 min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
