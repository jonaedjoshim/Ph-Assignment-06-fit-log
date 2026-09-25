import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import AppShell from "@/components/layout/AppShell";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "FitLog",
    template: "%s | FitLog",
  },
  description:
    "A dark, no-nonsense gym companion for planning and tracking workouts.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={oswald.variable}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}