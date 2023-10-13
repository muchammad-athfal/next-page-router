import AppSheel from "@/components/layouts/AppShell";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppSheel>
      <Component {...pageProps} />
    </AppSheel>
  );
}
