import type { Metadata } from "next";
import { Dancing_Script, Great_Vibes } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import "./globals.css";

const dancingScriptCursiva = Dancing_Script({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-dancing-script-cursiva",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <body className={dancingScriptCursiva.className}>{children}</body>
      </AppRouterCacheProvider>
    </html>
  );
}
