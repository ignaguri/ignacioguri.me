import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import "../styles/global.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ignacio Guri's page</title>
        <meta
          name="description"
          content="This is Ignacio Guri's personal webpage"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
