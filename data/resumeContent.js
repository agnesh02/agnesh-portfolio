/**
 * Sourced from resume export (RxResume JSON). Update here when resume changes.
 */

export const SKILL_CATEGORIES = [
  {
    id: "mobile-frontend",
    name: "Mobile & Frontend",
    proficiency:
      "Android (Kotlin, Java), Flutter (Dart), React Native, Next.js (JS, JSX)",
  },
  {
    id: "realtime",
    name: "Real-time Systems",
    proficiency: "BLE, MQTT, Modbus",
  },
  {
    id: "native-perf",
    name: "Native / Performance",
    proficiency: "JNI, C/C++ Integration, Real-time Audio Handling",
  },
  {
    id: "architecture",
    name: "Architecture",
    proficiency: "MVVM, Clean Architecture, Offline-first",
  },
  {
    id: "cloud",
    name: "Cloud",
    proficiency: "GCP",
  },
  {
    id: "concurrency",
    name: "Concurrency",
    proficiency: "Coroutines, Flow",
  },
  {
    id: "tools",
    name: "Tools",
    proficiency: "Android Studio, Git, Cursor, Jira, ClickUp",
  },
];

export const FEATURED_PROJECTS = [
  {
    id: "feat-laennec-stethoscope",
    title: "AI – Digital Stethoscope Application (Android)",
    description:
      "Mobile app integrated with a digital stethoscope for real-time auscultation, with low-latency audio pipelines and JNI-backed native processing.",
    features: [
      "Developed app integrated with a digital stethoscope for real-time auscultation and audio streaming",
      "Low-latency audio processing pipelines for continuous playback and recording",
      "Native C/C++ modules via JNI for denoising, bandpass filtering, and real-time audio",
      "Efficient data flow between native and Android layers for low-latency streaming",
      "Collaboration with hardware and backend teams for reliable device communication",
    ],
    imageUrl: "ai_digital_stethoscope",
    technologiesUsed: [
      "android",
      "kotlin",
      "java",
      "jni",
      "cpp",
    ],
  },
  {
    id: "feat-zorgm",
    title: "AI-Powered Clinical Decision Support & CME Tool (Android, Web)",
    description:
      "AI-powered clinical education and decision support across Android and web, with evidence-based responses, citations, and GCP-backed services.",
    features: [
      "AI-powered clinical education and decision support on Android and web",
      "Chat flows with history, multilingual support, and follow-up suggestions",
      "Backend APIs and GCP for secure handling and real-time query responses",
      "Scalable healthcare knowledge platform with cross-team delivery",
    ],
    imageUrl: "ai_clinical_support",
    technologiesUsed: ["android", "react", "nextjs", "gcp", "firebase"],
  },
  {
    id: "feat-aquasol",
    title: "IoT Mobile Application (Flutter / Android)",
    description:
      "Cross-platform BLE sensor app using Modbus and MQTT, with real-time updates and offline-first local persistence.",
    features: [
      "BLE sensor communication using Modbus and MQTT",
      "Real-time data updates, device control, and automated synchronization",
      "Offline-capable architecture with SQLite (SQFlite) for unstable networks",
    ],
    imageUrl: "pool_monitoring",
    technologiesUsed: ["flutter", "android", "ble", "mqtt", "modbus", "sqlite"],
  },
  {
    id: "feat-hosemonster",
    title: "Industrial Monitoring App (React Native)",
    description:
      "End-to-end mobile app for pressure monitoring: real-time metrics, logging, export, firmware updates, and BLE workflows.",
    features: [
      "Real-time PSI/GPM metrics, data logging, and XLSX export",
      "Firmware updates, calibration, and diagnostics",
      "BLE communication workflows for device interaction",
    ],
    imageUrl: "water_pressure_monitoring",
    technologiesUsed: ["reactNative", "ble", "mqtt", "sqlite"],
  },
];

export const OTHER_PROJECTS = [
  {
    id: 1,
    title: "Cloud College",
    description:
      "Android + Firebase app for college operations: attendance, timetables, student data, and statistics.",
    features: [
      "Sign up and Login using E-mail",
      "Verification using E-mail and phone",
      "Reset/Change password",
      "Add, modify, and view data",
      "View students by batch and department",
      "Mark and edit attendance with logs and statistics",
      "Biodata, profile photos, notes, and timetables",
      "Faculty details",
    ],
    imageUrl: "cloud_college",
    technologiesUsed: ["android", "firebase"],
  },
  {
    id: 2,
    title: "Stubot",
    description:
      "PHP/MySQL chatbot web app assisting students with timetables, marks, attendance, notes, and more.",
    features: [
      "Home chat window for bot interaction",
      "Admin controls to add responses and data",
      "Retrieves timetable, marksheets, attendance, class links, notes, date/time",
      "Search, to-do notes, dark mode",
    ],
    imageUrl: "stubot",
    technologiesUsed: ["php", "html", "css", "mySql", "ajax"],
  },
  {
    id: 3,
    title: "Clinic Management",
    description:
      "Python Tkinter desktop app to manage patient records for a clinic.",
    features: [
      "Home window with core actions",
      "Create tables and add patient data",
      "Edit and search patient personal and illness details by id",
    ],
    imageUrl: "clinic_management",
    technologiesUsed: ["python", "mySql"],
  },
  {
    id: 4,
    title: "Financial Tracker",
    description:
      "Android app for expenses and income with sync, history, charts, and currency API integration.",
    features: [
      "Authentication",
      "Log expenses and incomes by source",
      "Graphs and statistics with sort/filter",
    ],
    imageUrl: "financial_tracker",
    technologiesUsed: ["android", "firebase"],
  },
  {
    id: 5,
    title: "Blend App",
    description:
      "Android learning app with courses, lessons, media, and comments (Coursera/Udemy style).",
    features: [
      "Authentication and course creation",
      "Browse and customize courses",
      "Video, documents, thumbnails, comments",
    ],
    imageUrl: "blend_app",
    technologiesUsed: ["android", "firebase"],
  },
  {
    id: 6,
    title: "More early work & PoCs",
    description:
      "Additional work included BLE/IoT experiments, AR nail-design PoC, and Spotify/YouTube SDK integrations—details available on request or in earlier portfolio notes.",
    features: [
      "Cross-platform BLE and sensor experiments",
      "AR and SDK integration PoCs",
      "Further items listed in legacy portfolio / resume supplements",
    ],
    imageUrl: "devImg",
    technologiesUsed: ["ble", "flutter", "reactNative", "android", "firebase", "mqtt"],
  },
];
