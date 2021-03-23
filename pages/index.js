import { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import * as gtag from '../lib/gtag';
import Header from '../components/Header';

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
        <main className="flex flex-col justify-center items-center py-20 p-0">
          <Header />
        </main>
        <footer className="w-full h-24 flex justify-center items-center border-t border-solid border-gray-300">
          <a
            className="flex justify-center items-center text-black no-underline"
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
