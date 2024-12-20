import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../sections/Header";
import Abstract from "../sections/Abstract";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";
import { GetStaticProps } from "next";
import { fetchGitHubProjects } from "@lib/github";

import type { ProjectsProps } from "../sections/Projects/index";

type HomeProps = {} & ProjectsProps;

export default function Home({ projects, error }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Ignacio Guri's page</title>
        <meta
          name="description"
          content="Ignacio Guri's personal website showcasing skills, experience, and projects."
        />
      </Head>
      <Layout>
        <main className="flex flex-col justify-center items-center py-10 p-0 sm:py-20">
          <Header />
          <Abstract />
          <Skills />
          <Experience />
          <Projects projects={projects} error={error} />
        </main>
        <Footer />
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const projects = await fetchGitHubProjects("ignaguri");
    return {
      props: {
        error: null,
        projects,
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return {
      props: {
        error: errorMessage,
        projects: [],
      },
    };
  }
};
