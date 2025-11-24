import Accordion from "@components/Accordion";
import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      id: "holidu",
      logo: "/logos/holidu.png",
      logoAlt: "Holidu",
      logoWidth: 120,
      logoHeight: 30,
      company: "Holidu GmbH",
      companyUrl: "https://www.linkedin.com/company/holidu/",
      description:
        "Working on a platform for vacation rentals, helping travelers find the perfect accommodation.",
      positions: [
        { title: "Senior Frontend Engineer", period: "Apr 2024 - Present" },
      ],
      tasks: ["Web front-end development", "UI/UX improvements"],
    },
    {
      id: "doctari",
      logo: "/logos/doctari_pro.png",
      logoAlt: "Doctari",
      logoWidth: 120,
      logoHeight: 24,
      company: "Doctari Group",
      companyUrl: "https://www.linkedin.com/company/doctari-group/",
      description:
        "Worked on a platform for hospitals and clinics, to easily hire doctors and caregivers all throughout Germany.",
      positions: [
        {
          title: "Fullstack TypeScript Developer",
          period: "Sep 2021 - Mar 2024",
        },
      ],
      tasks: ["Web front-end", "Backend (Firebase & AWS)"],
    },
    {
      id: "mercadolibre",
      logo: "/logos/meli.svg",
      logoAlt: "Mercado Libre",
      logoWidth: 120,
      logoHeight: 60,
      company: "Mercado Libre",
      companyUrl: "https://www.linkedin.com/company/mercadolibre/",
      description:
        "I worked in several products. An app for managing the Mercado Pago Credit Card, another one that allows users to buy from Mercado Libre and pay in installments without a credit card and a personal loans offer & management one.",
      positions: [
        { title: "Sr Software Developer", period: "Mar 2020 - Aug 2021" },
        { title: "Jr Software Developer", period: "Mar 2019 - Mar 2020" },
        { title: "IT Assistant", period: "Mar 2018 - Mar 2019" },
      ],
      tasks: [
        "Web & Web mobile front-end",
        "Emails development",
        "Test automation",
        "iOS app",
        "Internal dashboard web apps",
      ],
    },
    {
      id: "intel",
      logo: "/logos/intel.svg",
      logoAlt: "Intel",
      logoWidth: 120,
      logoHeight: 60,
      company: "Intel (now McAfee)",
      companyUrl: "https://www.linkedin.com/company/mcafee/",
      description:
        "Internship - Web front-end development & Testing automation",
      positions: [
        { title: "Engineering Intern", period: "Mar 2016 - Mar 2017" },
      ],
      tasks: [
        "Web-app for parsing & filtering security report logs",
        "Tests automation with Selenium",
        "Set up a pipeline of tools for user's feedback & bug reporting",
      ],
    },
  ];

  return (
    <section className="max-w-sm mt-4 md:max-w-lg lg:max-w-4xl">
      <Accordion header="Experience" initOpen>
        <div className="mt-6 space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Company Logo */}
                <div className="shrink-0">
                  <Image
                    className="rounded-lg"
                    src={exp.logo}
                    alt={exp.logoAlt}
                    width={exp.logoWidth}
                    height={exp.logoHeight}
                    style={{
                      objectFit: "contain",
                      width: "auto",
                      height: "auto",
                      maxWidth: "120px",
                      maxHeight: "60px",
                    }}
                  />
                </div>

                {/* Company Info and Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div>
                      <a
                        className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline"
                        href={exp.companyUrl}
                        rel="noopener noreferrer"
                      >
                        {exp.company}
                      </a>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                      {exp.positions.map((pos, idx) => (
                        <div key={idx} className="font-medium">
                          {pos.period}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Position Titles */}
                  <div className="mb-3">
                    {exp.positions.map((pos, idx) => (
                      <div
                        key={idx}
                        className="text-base font-medium text-gray-800 dark:text-gray-200"
                      >
                        {pos.title}
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tasks */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1.5 list-none">
                      {exp.tasks.map((task, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-gray-400 shrink-0 mt-0.5">
                            •
                          </span>
                          <span className="flex-1">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < experiences.length - 1 && (
                <div className="mt-8 border-t border-gray-200 dark:border-gray-700" />
              )}
            </div>
          ))}
        </div>
      </Accordion>
    </section>
  );
}
