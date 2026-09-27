// Single source of truth for app config.
const config = {
  port: 6005,
  siteUrl: "https://sagarhv001.me",
  title: "Sagar's Website",
  description: "Portfolio",
};

config.content = {
  name: "Sagar H V",
  headline: "Backend Developer — Python Automation, AI Integrations",
  role: "Backend Developer",
  focus: "AI Integrations",
  tagline: "I build the backends behind the automation.",
  intro: "APIs, workflow automation and AI-powered applications — production-ready software that solves real business problems.",
  location: "Mysore, Karnataka, India",
  about:
    "Backend Developer with experience building APIs, automation solutions, AI-powered applications, and data processing systems. Skilled in Python, FastAPI, Node.js, MongoDB, PostgreSQL, and cloud deployments. Experienced in developing LLM-powered applications, workflow automation tools, web scraping solutions, and scalable backend services. Focused on delivering production-ready software that solves real business problems.",
  links: {
    github: "https://github.com/sagarhv001",
    linkedin: "https://www.linkedin.com/in/sagarhv001/",
    email: "mailto:sagarhv001@gmail.com"
  },
  // public by design — web3forms access keys are meant to sit in client code
  web3formsKey: "f6d8d22d-0627-4183-a280-4ece1def5167",
  skills: [
    { group: "Backend Development", items: ["Python", "FastAPI", "Node.js", "Express.js"] },
    { group: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { group: "AI & Automation", items: ["OpenAI APIs", "LLM Applications", "RAG Systems", "Prompt Engineering", "Workflow Automation"] },
    { group: "Scraping & Data", items: ["Playwright", "Data Processing", "ETL Pipelines", "Data Analytics"] },
    { group: "Cloud & DevOps", items: ["Docker", "AWS", "Git", "CI/CD"] },
    { group: "Frontend", items: ["React.js", "JavaScript"] }
  ],
  services: [
    "Backend API Development",
    "Python Automation",
    "AI Chatbots and LLM Integrations",
    "Web Scraping Solutions",
    "Database Design and Development",
    "Workflow Automation",
    "Data Processing Pipelines"
  ],
  experience: [
    {
      role: "Full Stack Developer",
      org: "Onyx Digital Health Services",
      date: "Sep 2025 — Present",
      points: [
        "Developed backend APIs and production-grade software solutions supporting healthcare interoperability workflows.",
        "Built integrations between multiple systems using HL7 FHIR standards and REST APIs.",
        "Participated in feature development, testing, deployment, and maintenance activities.",
        "Collaborated with business stakeholders and engineering teams to deliver scalable software solutions."
      ]
    },
    {
      role: "Project Intern",
      org: "Indian Institute of Science (IISc)",
      date: "Oct 2024 — Mar 2025",
      points: [
        "Developed internal data collection and annotation tools to streamline research workflows.",
        "Built computer vision data pipelines and dataset management systems.",
        "Improved annotation efficiency and dataset quality through custom tooling and automation.",
        "Worked extensively with Python-based machine learning workflows."
      ]
    }
  ],
  education: [
    {
      role: "Bachelor of Engineering, Information Science and Engineering",
      org: "P.E.S College of Engineering, Mandya",
      date: "CGPA 8.79"
    }
  ],
  certifications: [
    "Google Professional Data Analytics",
    "Business Intelligence and Analytics (NPTEL Elite)"
  ],
  // the first three are featured (big cards); the rest sit in a smaller row below
  projects: [
    {
      title: "Freelance Copilot",
      image: "/projects/freelance-copilot.jpg",
      points: [
        "Aggregates freelance opportunities from multiple sources.",
        "Automated job collection pipelines with Playwright and MongoDB.",
        "AI-powered job scoring and proposal generation workflows.",
        "REST APIs and dashboards for opportunity management."
      ],
      kind: "Automation platform",
      desc: "Aggregates freelance opportunities from multiple sources with Playwright pipelines, then scores jobs and drafts proposals with AI.",
      outcome: ["Status", "In progress"],
      stack: ["Playwright", "MongoDB", "REST APIs", "LLMs"],
      link: "https://github.com/sagarhv001"
    },
    {
      title: "AI Python Code Generation",
      image: "/projects/python-codegen.jpg",
      points: [
        "Fine-tuned LLaMA 3.1 8B using LoRA for Python code generation.",
        "Evaluation pipelines using BLEU and ROUGE metrics.",
        "Training workflows under limited GPU constraints in the cloud.",
        "Optimized model checkpointing and storage strategies."
      ],
      kind: "LLM fine-tuning",
      desc: "Fine-tuned LLaMA 3.1 8B with LoRA for better Python code generation, with BLEU / ROUGE evaluation under limited GPU budgets.",
      outcome: ["Base model", "LLaMA 3.1 8B"],
      stack: ["Python", "Transformers", "LoRA", "Hugging Face"],
      link: "https://github.com/sagarhv001"
    },
    {
      title: "Real-Time Friend-or-Foe Detection",
      image: "/projects/friend-or-foe.jpg",
      points: [
        "End-to-end computer vision system for real-time classification.",
        "GPS tracking interfaces using ESP32 and Python.",
        "Deep learning inference on Raspberry Pi hardware.",
        "87.4% mAP@50 while staying real-time."
      ],
      kind: "Edge computer vision",
      desc: "End-to-end real-time personnel classification with deep learning on Raspberry Pi, plus GPS tracking interfaces on ESP32.",
      outcome: ["Detection", "87.4% mAP@50"],
      stack: ["Python", "YOLO", "ESP32", "Raspberry Pi"],
      link: "https://github.com/sagarhv001"
    },
    {
      title: "Quant-Qual Stock Movement Prediction",
      image: "/projects/stock-prediction.jpg",
      points: [
        "Hybrid system combining quantitative models and market sentiment.",
        "Automated pipelines for market data collection and processing.",
        "ML and NLP models integrated to improve prediction accuracy.",
        "Actionable insights through automated analysis workflows."
      ],
      kind: "ML + NLP",
      desc: "Hybrid prediction system combining quantitative models with market sentiment analysis and automated data pipelines.",
      stack: ["Python", "XGBoost", "Random Forest", "Transformers"],
      link: "https://github.com/sagarhv001"
    },
    {
      title: "YouTube Trends Analytics",
      image: "/projects/youtube-trends.jpg",
      points: [
        "Processed large-scale YouTube datasets for viewer behaviour patterns.",
        "Automated data cleaning workflows and analytical reporting.",
        "Interactive dashboards for business and content strategy.",
        "Reduced data preparation effort by ~40%."
      ],
      kind: "Data analytics",
      desc: "Viewer-behaviour analysis on large YouTube datasets with automated cleaning and dashboards — ~40% less data prep.",
      stack: ["Python", "Tableau"],
      link: "https://github.com/sagarhv001/Data_Analytics/blob/main/DA_1.ipynb"
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
