import { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/index.module.css';
import * as gtag from '../lib/gtag';

export default class Home extends Component {
  handleGoToGithub = () => {
    gtag.event({
      action: 'go_to_github',
      category: 'Contact',
    });
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>Ignacio Guri's page</title>
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <span className={styles.signEmoji}>🚧</span> Page under construction{' '}
            <span className={styles.signEmoji}>🚧</span>
          </h1>

          <p className={styles.description}>
            There will be a very good looking site here
          </p>
        </main>

        <footer className={styles.footer}>
          <a
            className={styles.link}
            onClick={this.handleGoToGithub}
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
}
