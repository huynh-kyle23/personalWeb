export type WindowId =
  | "about"
  | "projects"
  | "research"
  | "contact"
  | "recycle";

export const PROFILE = {
  name: "Kyle Huynh",
  shortName: "Kyle",
  title: "Data Science · UC Irvine",
  location: "Irvine / Torrance, CA",
  phone: "+1 (424) 352-9782",
  email: "huynhkyle23@gmail.com",
  github: "https://github.com/huynh-kyle23",
  linkedin: "https://www.linkedin.com/in/kyle-huynh-093b8624b/",
  resume: "/KyleHuynhResume.pdf",
  education: {
    school: "University of California, Irvine",
    degree: "Bachelor of Science in Data Science",
    gpa: "3.9 / 4.0",
    graduation: "June 2026",
  },
  bio: "UC Irvine Data Science student (GPA 3.9) graduating June 2026. I build ETL pipelines, analytics systems, and full-stack data products — most recently as a Data Engineering Intern at Pacific Life. Explore this desktop for projects, experience, and ways to get in touch.",
  photo: "/profile.jpg",
  skills: {
    languages:
      "Python, SQL, R, C++, C#, TypeScript, JavaScript, HTML/CSS, Visual Basic",
    dataCloud:
      "Snowflake, Databricks, dbt, Apache Airflow, Spark, MS SQL Server, BigQuery, Redis, MongoDB, AWS (S3, Lambda, EC2), GCP, Docker, Terraform, Power Automate",
    aiTools:
      "pandas, scikit-learn, TensorFlow, PyTorch, LLMs/NLP, Power BI, Tableau, Git, React, Next.js",
  },
};

export type ProjectItem = {
  id: string;
  name: string;
  event: string;
  stack: string;
  bullets: string[];
};

/** Consolidated from KyleHuynhResumeDS / DE / SWE. */
export const PROJECTS: ProjectItem[] = [
  {
    id: "newtools",
    name: "New Tools Radar",
    event: "Full-stack / Data Pipeline",
    stack: "Python, Airflow, dbt, Docker, PostgreSQL/Supabase, TypeScript",
    bullets: [
      "Built a full-stack application with a Python backend (Apache Airflow, dbt, Docker, PostgreSQL/Supabase) and a TypeScript/HTML frontend to ingest, process, and display data on emerging developer tools from multiple APIs.",
      "Designed a modular, layered backend architecture (raw → staging → marts) following software design best practices, processing 1,000+ records daily through fault-tolerant, quality-checked workflows.",
      "Built an end-to-end ELT pipeline and data warehouse to ingest, model, and analyze emerging tools data with layered transformation architecture.",
      "Developed the frontend UI in TypeScript and HTML to display and categorize processed tool data, and orchestrated backend job scheduling in Airflow with dependency management, automated retries, and logging/monitoring for reliable, on-time pipeline execution.",
    ],
  },
  {
    id: "cotality",
    name: "Cotality Propensity to List for Rent and For Sale",
    event: "Analytics / ML",
    stack: "BigQuery, LightGBM, ELT, LLMs",
    bullets: [
      "Built an ELT pipeline using data from publicly available housing APIs and stored them in BigQuery tables.",
      "Performed feature engineering and built two LightGBM analytical models to predict propensity to list for rent and sale, achieving AUC-ROC of 0.8576 and 0.8106 — exceeding client benchmarks by 0.20 and 0.09 respectively.",
      "Applied prompt engineering techniques with LLM tools to optimize SQL/BigQuery queries for the ELT pipeline, reviewing all AI-generated code for accuracy and correctness before implementation.",
    ],
  },
  {
    id: "yelp-vae",
    name: "Yelp Recommender System (Variational Autoencoder)",
    event: "Machine Learning",
    stack: "PyTorch, pandas, feature engineering",
    bullets: [
      "Designed a Variational Autoencoder (VAE) using PyTorch on Yelp data to generate recommendations.",
      "Performed data preprocessing and feature engineering with pandas, encoding implicit user behavior patterns and item metadata into structured inputs for generative model training.",
      "Evaluated model performance via reconstruction loss and latent space analysis, demonstrating the model’s ability to capture diverse user preference distributions for downstream recommendation tasks.",
    ],
  },
  {
    id: "sepsis",
    name: "Sepsis: A Case Study",
    event: "UCI Embark Datathon",
    stack: "Python, logistic regression, SQL, Tableau, R, Jupyter",
    bullets: [
      "Built a machine learning pipeline leveraging data mining techniques to predict sepsis using logistic regression, integrating data preprocessing, feature engineering, and model evaluation.",
      "Achieved 90% accuracy and recognized for best use of data at the UCI Embark Datathon.",
    ],
  },
  {
    id: "petrpages",
    name: "PetrPages",
    event: "UCI Hackathon",
    stack: "React, Python, FastAPI, SQLite",
    bullets: [
      "Developed SQL tables and sent queried data to the frontend using Python and sqlite3.",
      "Built the frontend in React and used FastAPI endpoints for page search and connecting login to each user’s page.",
      "Social app for students to find hangouts and productive study groups.",
    ],
  },
  {
    id: "jotgenius",
    name: "JotGenius",
    event: "LA Hacks",
    stack: "Next.js, Tailwind, Flask, Gemini API",
    bullets: [
      "Website app that gamifies note-taking and scores notes using Google Gemini AI.",
      "Frontend built with Tailwind CSS and Next.js; backend and API calls in Python with Flask and the Gemini API.",
    ],
  },
  {
    id: "yappr",
    name: "Yappr",
    event: "Hack @ UCI",
    stack: "Python, OpenAI Whisper, GPT-3.5, PyAudio",
    bullets: [
      "Chatbot developed in Python with speech-to-text input and text-to-speech output.",
      "Used the OpenAI API with Whisper and GPT-3.5 for transcription and responses; PyAudio for spoken output.",
    ],
  },
  {
    id: "dublin",
    name: "Dublin Housing Classification",
    event: "Datathon",
    stack: "pandas, matplotlib, Plotly, scikit-learn",
    bullets: [
      "Classification project predicting whether a Dublin Airbnb listing would be booked.",
      "Data wrangling in Jupyter with pandas, matplotlib, seaborn, Plotly, and scikit-learn.",
      "Implemented a random forest classifier with ~90% accuracy on the test set.",
    ],
  },
];

export type ExperienceItem = {
  id: string;
  title: string;
  org: string;
  date: string;
  location: string;
  category: "Work" | "Research" | "Campus";
  role: string;
  bullets: string[];
};

/**
 * Work/campus bullets consolidated from Documents:
 * KyleHuynhResumeDS.pdf, KyleHuynhResumeDE.pdf, KyleHuynhResumeSWE.pdf
 * (older research roles kept from prior resumes).
 */
export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "pacific-life",
    title: "Data Engineering Intern",
    org: "Pacific Life",
    date: "June 2025 – June 2026",
    location: "Irvine, CA",
    category: "Work",
    role: "Data Engineering Intern",
    bullets: [
      "Designed and maintained a scalable ETL pipeline and underlying data model for 32,000+ records using Docker, Microsoft SQL Server, and Snowflake, supporting downstream reporting and analytics needs.",
      "Developed automated data validation and monitoring workflows using SQL, AWS S3, Lambda, and Power Automate, improving data quality and reducing technical debt by $40K+.",
      "Reduced pipeline runtime by 40%, ensuring data availability within SLA windows for Power BI dashboards.",
      "Built dashboards on Power BI to monitor device lifecycle, reducing unnecessary resource allocation by 10%.",
      "Implemented CI/CD pipelines with Azure DevOps and Git to test, version, and deploy data workflows reliably in an Agile framework.",
    ],
  },
  {
    id: "cdph",
    title: "Data Science Intern",
    org: "California Department of Public Health",
    date: "January 2025 – June 2025",
    location: "Sacramento, CA",
    category: "Work",
    role: "Data Science Intern",
    bullets: [
      "Built distributed ETL pipelines using PySpark and SQL on Databricks to support analytical modeling on 100,000+ records from a cloud-based data lakehouse.",
      "Optimized data transformations and queries to improve pipeline performance and scalability across large datasets.",
      "Developed Power BI dashboards to surface key metrics across 1,200+ facilities, supporting data-driven decision making.",
      "Conducted inferential statistical modeling using logistic regression on 100,000+ records in PySpark, analyzing predictor significance, effect sizes, and confidence intervals to surface actionable public health insights.",
    ],
  },
  {
    id: "uci-health",
    title: "Data Engineering Intern",
    org: "UCI Health",
    date: "January 2025 – March 2025",
    location: "Irvine, CA",
    category: "Work",
    role: "Data Engineering Intern",
    bullets: [
      "Developed SQL-based ETL pipelines and data models to integrate stroke data into the UCI Health Data Warehouse, ensuring compliant handling of sensitive healthcare data.",
      "Designed transformations, validation logic, and quality checks to ensure consistency and accuracy across datasets.",
      "Built reusable R Markdown workflows to standardize data cleaning and preprocessing for research teams.",
    ],
  },
  {
    id: "calnetix",
    title: "Software Engineer Intern",
    org: "Calnetix",
    date: "June 2024 – September 2024",
    location: "Sacramento, CA",
    category: "Work",
    role: "Software Engineer Intern",
    bullets: [
      "Developed a real-time C# and C++ application to monitor RPM and temperature on embedded motor systems.",
      "Collaborated directly with an electrical engineer to define data requirements and validate visualization accuracy.",
      "Debugged and migrated an existing codebase from Visual Basic to C#, resolving defects and ensuring functional consistency with original system requirements.",
    ],
  },
  {
    id: "data-uci",
    title: "Director of Community Development",
    org: "Data@UCI",
    date: "June 2024 – June 2026",
    location: "Irvine, CA",
    category: "Campus",
    role: "Director of Community Development",
    bullets: [
      "Developed and mentored weekly workshops on data science tools and techniques, teaching foundational concepts using R, pandas, Tableau, scikit-learn, TensorFlow, PyTorch, and SQL totaling over 60+ workshops.",
    ],
  },
  {
    id: "learning-assistant",
    title: "Learning Assistant — ICS 32",
    org: "UC Irvine Donald Bren School of ICS",
    date: "December 2023 – Present",
    location: "Irvine, CA",
    category: "Campus",
    role: "Learning Assistant",
    bullets: [
      "Assisted in lab sessions for ICS 32: Programming with Software Libraries in Python.",
      "Hosted online office hours weekly to help students on coding projects and course material.",
      "Reinforced topics including recursion, classes, sockets, pathlib, and tkinter; received CLAP certification concurrently with the learning assistant program.",
    ],
  },
  {
    id: "olivares",
    title: "Research Assistant — Olivares Lab",
    org: "UC Irvine (Public Health / ML)",
    date: "June 2024 – Present",
    location: "Irvine, CA",
    category: "Research",
    role: "Research Assistant",
    bullets: [
      "Found public health databases used to implement machine learning algorithms.",
      "Conducted literature reviews on public databases to assist the primary investigator on data cleaning and feature engineering.",
      "Assisted in feature engineering for machine learning algorithms using Python, scikit-learn, and pandas, improving the model by 5%.",
    ],
  },
  {
    id: "hypertension",
    title: "Research Assistant — Hypertension Waves",
    org: "Dr. Baldi Lab, UC Irvine",
    date: "January 2024 – March 2024",
    location: "Irvine, CA",
    category: "Research",
    role: "Research Assistant",
    bullets: [
      "Participated in feature engineering on wave models that would accurately benefit machine learning models.",
      "Responsible for processing data collected within the project and synthesizing information from relevant research papers to inspire novel approaches to model development.",
      "Participated in data wrangling — hours of cleaning and modifying waves to reduce noise in the machine learning model.",
    ],
  },
  {
    id: "catalyst",
    title: "Research Assistant — CATALYST",
    org: "CATALYST Project",
    date: "September 2022 – June 2023",
    location: "Irvine, CA",
    category: "Research",
    role: "Research Assistant",
    bullets: [
      "Participated in a project on the effects of community health workers in Orange County during the COVID-19 pandemic.",
      "Participated in data warehousing and data collection through recording and storing interviews with stakeholders (community health workers, school officials, etc.).",
      "Hours of clearing through muddy interview transcripts in the data wrangling process.",
      "Worked closely with doctors, public health experts, and other professionals for a deeper understanding of the public health system.",
    ],
  },
];

/** @deprecated alias — use EXPERIENCE */
export const RESEARCH = EXPERIENCE;

export const DESKTOP_ICONS: {
  id: WindowId;
  label: string;
  icon: "user" | "folder" | "research" | "mail" | "recycle";
}[] = [
  { id: "about", label: "About Me", icon: "user" },
  { id: "projects", label: "My Projects", icon: "folder" },
  { id: "research", label: "Experience", icon: "research" },
  { id: "contact", label: "Contact", icon: "mail" },
  { id: "recycle", label: "Recycle Bin", icon: "recycle" },
];

export const WINDOW_TITLES: Record<WindowId, string> = {
  about: "About Me — Kyle Huynh",
  projects: "My Projects",
  research: "Experience & Research",
  contact: "Contact — Internet Explorer",
  recycle: "Recycle Bin",
};
