"use client";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

import { CssBaseline } from "@mui/material";
import { Cookie } from "next/font/google";

const dancingScriptCursiva = Cookie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dancing-script-cursiva",
});

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: dancingScriptCursiva.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#8B4513",
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
