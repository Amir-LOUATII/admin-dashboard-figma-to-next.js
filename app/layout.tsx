import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import DashboardLayoutWrapper from "@/components/layout/dashboard-layout-wrapper";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FinDash Pro | Modern Financial Dashboard",
  description:
    "Open-source financial dashboard built with Next.js, converted from Figma design to a fully functional web application. Features modern UI/UX with responsive design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
      </body>
    </html>
  );
}
