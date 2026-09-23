// Single source of truth for app config.
const config = {
  port: 6005,
  siteUrl: "https://sagarhv001.me",
  title: "Sagar H V",
  description: "Portfolio",
};

config.content = {
  name: "Sagar H V",
  headline: "Full Stack Engineer at Onyx — HL7 FHIR, US Healthcare",
  tagline: "Making healthcare systems talk to each other",
  location: "Mysore, Karnataka, India",
  about:
    "Full Stack Engineer building healthcare technology with Node.js, React, Python, PostgreSQL and HL7 FHIR. I work on healthcare interoperability and Electronic Prior Authorization (ePA) workflows — designing APIs, integrations and full-stack applications that carry data between payers and providers. Day to day that means backend services, FHIR-based workflows, wiring up healthcare data systems, and untangling problems that run from the frontend through to the database.",
  links: {
    github: "https://github.com/sagarhv001",
    linkedin: "https://www.linkedin.com/in/sagarhv001/",
    email: "mailto:sagarhv001@gmail.com"
  },
  // public by design — web3forms access keys are meant to sit in client code
  web3formsKey: "f6d8d22d-0627-4183-a280-4ece1def5167",
  skills: [
    "Node.js", "React", "Python", "JavaScript", "PostgreSQL", "REST APIs",
    "HL7 FHIR", "Electronic Prior Authorization", "Healthcare Interoperability",
    "PySpark", "Data Pipelines", "Docker", "Azure Databricks",
    "Azure Application Insights", "Amazon CloudWatch"
  ],
  experience: [
    {
      role: "Jr. Full Stack Engineer",
      org: "Onyx",
      date: "September 2025 — Present",
      desc: "Healthcare interoperability and Electronic Prior Authorization workflows: APIs, FHIR-based integrations and full-stack applications for payer–provider data exchange."
    },
    {
      role: "Full Stack Engineering Intern",
      org: "Onyx",
      date: "July 2025 — September 2025",
      desc: ""
    },
    {
      role: "Project Intern",
      org: "IISc Aerospace Engineering",
      date: "October 2024 — March 2025",
      desc: "Computer vision project on pose estimation."
    },
    {
      role: "AI/ML Intern",
      org: "Infosys Springboard",
      date: "May 2024 — August 2024",
      desc: ""
    }
  ],
  education: [
    {
      role: "BE, Information Technology",
      org: "PES College of Engineering, Mandya",
      date: "December 2021 — June 2025",
      desc: ""
    },
    {
      role: "Pre-University",
      org: "Marimallappa's P.U. College, Mysuru",
      date: "2019 — 2021",
      desc: ""
    },
    {
      role: "SSLC",
      org: "Deepa High School",
      date: "May 2018 — April 2019",
      desc: ""
    }
  ],
  certifications: [
    "Create an intelligent document processing solution with Azure AI Document Intelligence",
    "Build a natural language processing solution with Azure AI Language",
    "Google Data Analytics Professional Certificate",
    "AWS Academy Graduate — AWS Academy Cloud Foundations",
    "Data Science Foundations: Fundamentals"
  ],
  projects: [
    {
      title: "Youtube India Analytics",
      desc: "Exploratory analysis and visualisation of Indian YouTube trends, in a Jupyter notebook.",
      link: "https://github.com/sagarhv001/Data_Analytics/blob/main/DA_1.ipynb"
    },
    {
      title: "Mandya Climate Prediction",
      desc: "Machine learning models predicting the climate of the Mandya district.",
      link: "https://github.com/sagarhv001"
    },
    {
      title: "Starforge Nexus",
      desc: "A Django site for online tutorials.",
      link: "https://github.com/sagarhv001/Tution_website"
    }
  ]
};

module.exports = config;

// ponytail: thin wrapper so `port` lives in one file — npm scripts can't import JS.
if (require.main === module) {
  const { spawn } = require("child_process");
  const cmd = process.argv[2] || "dev";
  spawn("next", [cmd, "-p", config.port], { stdio: "inherit", shell: true }).on(
    "exit",
    (code) => process.exit(code ?? 0)
  );
}
