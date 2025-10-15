import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NGAI Chat",
  description: "Your AI-powered assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full">{children}</body>
    </html>
  );
}
