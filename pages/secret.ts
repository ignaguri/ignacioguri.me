import Head from 'next/head';
import Layout from '../components/Layout';
import PersonIcon from '../components/Icons/Person';
import HeartbeatIcon from '../components/Icons/Heartbeat';

export default function ClientInfo({
  ips,
  userAgent
}: any) {
  return (
    // @ts-expect-error TS(2304): Cannot find name 'div'.
    <div>
      // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Head>
        // @ts-expect-error TS(2304): Cannot find name 'title'.
        <title>Client info page</title>
      </Head>
      <Layout>
        // @ts-expect-error TS(2304): Cannot find name 'main'.
        <main className="flex flex-col justify-center items-center py-10 px-10 sm:py-20">
          // @ts-expect-error TS(2304): Cannot find name 'section'.
          <section className="text-gray-600 body-font">
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className="flex flex-col text-center w-full mb-8">
              // @ts-expect-error TS(2304): Cannot find name 'h1'.
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                // @ts-expect-error TS(2304): Cannot find name 'Client'.
                Client info page
              </h1>
            </div>
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className="container px-5 py-2 mx-auto">
              // @ts-expect-error TS(2304): Cannot find name 'div'.
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  // @ts-expect-error TS(2749): 'PersonIcon' refers to a value, but is being used ... Remove this comment to see the full error message
                  <PersonIcon />
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  // @ts-expect-error TS(2304): Cannot find name 'h2'.
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    // @ts-expect-error TS(2304): Cannot find name 'User'.
                    User agent
                  </h2>
                  // @ts-expect-error TS(2304): Cannot find name 'p'.
                  <p className="leading-relaxed text-base">{userAgent}</p>
                </div>
              </div>
              // @ts-expect-error TS(2304): Cannot find name 'div'.
              <div className="flex items-center lg:w-3/5 mx-auto pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  // @ts-expect-error TS(2749): 'HeartbeatIcon' refers to a value, but is being us... Remove this comment to see the full error message
                  <HeartbeatIcon />
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  // @ts-expect-error TS(2304): Cannot find name 'h2'.
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    // @ts-expect-error TS(2304): Cannot find name 'IP'.
                    IP Address
                  </h2>
                  {Object.keys(ips).map(
                    possibleIp =>
                      ips[possibleIp] && (
                        // @ts-expect-error TS(2304): Cannot find name 'p'.
                        <p className="leading-relaxed text-base">
                          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                          {possibleIp}: {ips[possibleIp]}
                        </p>
                      )
                  )}
                // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context: any) {
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
