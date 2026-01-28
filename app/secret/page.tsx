import HeartbeatIcon from "@components/Icons/Heartbeat";
import PersonIcon from "@components/Icons/Person";
import { headers } from "next/headers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client info page",
};

async function getClientInfo() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");
  const forwardedFor = headersList.get("x-forwarded-for");
  const forwarded = forwardedFor ? forwardedFor.split(",")[0] : null;
  const realIP = headersList.get("x-real-ip");
  const clientIP = headersList.get("x-client-ip");
  const remoteAddress = headersList.get("remote-address");

  const ips = {
    clientIP,
    forwarded,
    realIP,
    remoteAddress,
  };

  return { ips, userAgent };
}

export default async function ClientInfo() {
  const { ips, userAgent } = await getClientInfo();

  return (
    <main className="flex flex-col justify-center items-center py-10 px-10 sm:py-20">
      <section className="text-gray-600 dark:text-gray-100 body-font">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200">
            Client info page
          </h1>
        </div>
        <div className="container px-5 py-2 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
              <PersonIcon />
            </div>
            <div className="grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 dark:text-gray-200 text-lg title-font font-medium mb-2">
                User agent
              </h2>
              <p className="leading-relaxed text-base">{userAgent}</p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
              <HeartbeatIcon />
            </div>
            <div className="grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 dark:text-gray-200 text-lg title-font font-medium mb-2">
                IP Address
              </h2>
              {Object.keys(ips).map(
                (possibleIp) =>
                  ips[possibleIp as keyof typeof ips] && (
                    <p key={possibleIp} className="leading-relaxed text-base">
                      {possibleIp}: {ips[possibleIp as keyof typeof ips]}
                    </p>
                  ),
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
