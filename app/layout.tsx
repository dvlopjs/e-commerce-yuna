import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Header from "./components/Header/Header";
import "./globals.css";
import { StoreProvider } from "./redux/StoreProvider";
import Footer from "./components/Footer";
import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
import ThemeRegistry from "./theme/ThemeRegistry";
import SessionProvider from "./components/SessionProvider";
import Template from "./template";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        {/* <SessionProvider session={session}> */}
        <StoreProvider>
          <ThemeRegistry>
            <body>
              <main
                style={{
                  paddingTop: 10,
                  backgroundColor: "#FCF7F8",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                }}
              >
                <Header />

                <Template>{children}</Template>
                <Footer />
              </main>
            </body>
          </ThemeRegistry>
        </StoreProvider>
        {/* </SessionProvider> */}
      </AppRouterCacheProvider>
    </html>
  );
}
