import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HireLens",
  description: "A smarter way to explore your next career opportunity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
