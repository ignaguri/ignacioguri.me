import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ignacio Guri's page</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.signEmoji}>🚧</span> Page under construction{" "}
          <span className={styles.signEmoji}>🚧</span>
        </h1>

        <p className={styles.description}>
          There will be a very good looking site here
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          className={styles.link}
          href="https://github.com/ignaguri"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with ♥ by @ignaguri
        </a>
      </footer>
    </Layout>
  );
}
