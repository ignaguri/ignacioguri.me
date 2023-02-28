import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../sections/Header";
import Abstract from "../sections/Abstract";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ignacio Guri's page</title>
      </Head>
      <Layout>
        <main className="flex flex-col justify-center items-center py-10 p-0 sm:py-20">
          <Header />
          <Abstract />
          <Skills />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </Layout>
    </div>
  );
}
