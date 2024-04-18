import { Cookie, Dancing_Script } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";
import "./globals.css";
import { StoreProvider } from "./redux/StoreProvider";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import ThemeRegistry from "./theme/ThemeRegistry";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang="en">
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <StoreProvider>
          <ThemeRegistry>
            <body
              style={{
                backgroundColor: "#FCF7F8",

                justifyContent: "center",
                paddingTop: 10,
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              // className={dancingScriptCursiva.className}
            >
              <Header />

              {children}

              <Footer />
            </body>
          </ThemeRegistry>
        </StoreProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
