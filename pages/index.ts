import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../sections/Header';
import Abstract from '../sections/Abstract';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    // @ts-expect-error TS(2304): Cannot find name 'div'.
    <div>
      // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Head>
        // @ts-expect-error TS(2304): Cannot find name 'title'.
        <title>Ignacio Guri's page</title>
      </Head>
      <Layout>
        // @ts-expect-error TS(2304): Cannot find name 'main'.
        <main className="flex flex-col justify-center items-center py-10 p-0 sm:py-20">
          // @ts-expect-error TS(2749): 'Header' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Header />
          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          <Abstract />
          // @ts-expect-error TS(2749): 'Skills' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Skills />
          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          <Experience />
          // @ts-expect-error TS(2749): 'Projects' refers to a value, but is being used as... Remove this comment to see the full error message
          <Projects />
        </main>
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <Footer />
      </Layout>
    </div>
  );
}
