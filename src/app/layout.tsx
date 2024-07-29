import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "00259374-preview-auth-test",
  description: "App to test auth on preview deployments with Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-black dark:text-white p-4">{children}</body>
    </html>
  );
}
