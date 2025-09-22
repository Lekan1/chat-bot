// pages/_app.tsx
// Next.js custom App component.
// Wraps all pages with global providers (MUI Theme, Tailwind styles).

import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme/mui-theme";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline resets browser styles for consistency */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
