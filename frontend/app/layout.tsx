import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AutoHaul — Premium Korean Car Imports | Kosovo & Albania",
  description:
    "Import premium Korean vehicles directly from South Korea to Kosovo and Albania. Hyundai, Kia, Genesis — certified quality, transparent pricing, door-to-door delivery.",
  keywords:
    "Korean cars, car import, Kosovo, Albania, Hyundai, Kia, Genesis, auto import, Korean vehicles",
  openGraph: {
    title: "AutoHaul — Premium Korean Car Imports",
    description:
      "Import premium Korean vehicles directly from South Korea to Kosovo and Albania.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-screen noise-overlay">{children}</body>
    </html>
  );
}
