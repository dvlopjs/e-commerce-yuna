"use client";
import type { Metadata } from "next";
import { Dancing_Script, Great_Vibes } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./globals.css";
import { StoreProvider } from "./redux/StoreProvider";

const dancingScriptCursiva = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-dancing-script-cursiva",
});

const theme = createTheme({
  typography: {
    fontFamily: dancingScriptCursiva.style.fontFamily,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // opcion1 "#FCF7F8"
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <html lang="en">
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <body
              style={{ backgroundColor: "#FCF7F8" }}
              className={dancingScriptCursiva.className}
            >
              {children}
            </body>
          </AppRouterCacheProvider>
        </html>
      </ThemeProvider>
    </StoreProvider>
  );
}
