import Head from 'next/head';
import Layout from '../components/Layout';
import PersonIcon from '../components/Icons/Person';
import HeartbeatIcon from '../components/Icons/Heartbeat';

export default function ClientInfo({ ips, userAgent }) {
  return (
    <div>
      <Head>
        <title>Client info page</title>
      </Head>
      <Layout>
        <main className="flex flex-col justify-center items-center py-10 px-10 sm:py-20">
          <section className="text-gray-600 body-font">
            <div className="flex flex-col text-center w-full mb-8">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Client info page
              </h1>
            </div>
            <div className="container px-5 py-2 mx-auto">
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <PersonIcon />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    User agent
                  </h2>
                  <p className="leading-relaxed text-base">{userAgent}</p>
                </div>
              </div>
              <div className="flex items-center lg:w-3/5 mx-auto pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <HeartbeatIcon />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    IP Address
                  </h2>
                  {Object.keys(ips).map(
                    possibleIp =>
                      ips[possibleIp] && (
                        <p className="leading-relaxed text-base">
                          {possibleIp}: {ips[possibleIp]}
                        </p>
                      )
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const userAgent = context.req.headers['user-agent'];
  let forwarded = context.req.headers['x-forwarded-for'];
  forwarded = forwarded ? forwarded.split(/, /)[0] : null;

  const realIP = context.req.headers['x-real-ip'] ?? null;
  const clientIP = context.req.headers['x-client-ip'] ?? null;

  const { remoteAddress } = context.req.connection;

  const ips = {
    clientIP,
    forwarded,
    realIP,
    remoteAddress,
  };

  return {
    props: {
      ips,
      userAgent,
    },
  };
}
