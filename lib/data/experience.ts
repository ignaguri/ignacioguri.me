export interface Position {
  title: string;
  from: string;
  to: string | null;
}

export interface Role {
  id: string;
  company: string;
  companyUrl: string;
  logo: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  context: string;
  positions: Position[];
  /** One plain line on the kind of work. Deliberately not a metrics pitch. */
  summary: string;
  collapsed?: boolean;
}

export const experience: Role[] = [
  {
    id: "holidu",
    company: "Holidu GmbH",
    companyUrl: "https://www.linkedin.com/company/holidu/",
    logo: { src: "/logos/holidu.png", width: 120, height: 30, alt: "Holidu" },
    context: "Vacation rental marketplace, Munich.",
    positions: [{ title: "Senior Frontend Engineer", from: "Apr 2024", to: null }],
    summary: "Front-end for the booking site, plus performance and build tooling.",
  },
  {
    id: "doctari",
    company: "Doctari Group",
    companyUrl: "https://www.linkedin.com/company/doctari-group/",
    logo: { src: "/logos/doctari_pro.png", width: 120, height: 24, alt: "Doctari" },
    context: "Staffing platform for German hospitals and clinics.",
    positions: [{ title: "Fullstack TypeScript Developer", from: "Sep 2021", to: "Mar 2024" }],
    summary: "Front-end and Firebase/AWS backend.",
  },
  {
    id: "mercadolibre",
    company: "Mercado Libre",
    companyUrl: "https://www.linkedin.com/company/mercadolibre/",
    logo: { src: "/logos/meli.svg", width: 120, height: 60, alt: "Mercado Libre" },
    context: "Latin America's largest e-commerce and fintech platform.",
    positions: [
      { title: "Sr Software Developer", from: "Mar 2020", to: "Aug 2021" },
      { title: "Jr Software Developer", from: "Mar 2019", to: "Mar 2020" },
      { title: "IT Assistant", from: "Mar 2018", to: "Mar 2019" },
    ],
    summary: "Web, mobile web and iOS across several fintech products.",
  },
  {
    id: "intel",
    company: "Intel (now McAfee)",
    companyUrl: "https://www.linkedin.com/company/mcafee/",
    logo: { src: "/logos/intel.svg", width: 120, height: 60, alt: "Intel" },
    context: "Engineering internship.",
    positions: [{ title: "Engineering Intern", from: "Mar 2016", to: "Mar 2017" }],
    summary: "Internal web tooling and test automation.",
    collapsed: true,
  },
];
