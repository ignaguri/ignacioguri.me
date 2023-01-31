import Head from 'next/head';
import Layout from '../components/Layout';

export default function Secret({ userAgent }) {
  return (
    <div>
      <Head>
        <title>Secret page</title>
      </Head>
      <Layout>
        <main className="flex flex-col justify-center items-center py-10 px-10 sm:py-20">
          <div className="border border-black">
            <pre>User agent: {JSON.stringify(userAgent)}</pre>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const userAgent = context.req.headers['user-agent'];

  return {
    props: {
      userAgent,
    },
  };
}
