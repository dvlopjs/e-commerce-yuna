"use client";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

import { CssBaseline } from "@mui/material";
import { Lora, Montserrat } from "next/font/google";

const dancingScriptCursiva = Montserrat({
  weight: "500",
  subsets: ["latin"],
  // style: "italic",
  variable: "--font-lora-cursive",
});

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: dancingScriptCursiva.style.fontFamily,
  },
  palette: {
    primary: {
      main: "rgb(255, 180, 162)",
    },
    secondary: {
      main: "#B99470",
    },
    success: {
      main: "#41B06E",
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
