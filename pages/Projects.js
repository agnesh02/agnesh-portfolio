import Image from "next/image";
import { useContext, useState } from "react";
import AppContext from "../state/AppContext";

const projects = [
  {
    id: 1,
    title: "Cloud College",
    description:
      "Cloud College is an android application which is developed using android and firebase to help and manage the day to day college tasks like mark the attendance,\nget the attendance statistics on different basis, create, edit and publish time table, get student data/list and so on.",
    features: [
      "Sign up and Login using E-mail",
      "Verification using E-mail and phone",
      "Reset/Change password",
      "Add data",
      "Modify data",
      "View list of students based on batch and department",
      "Mark Attendance",
      "Get last Attendance update log",
      "Edit attendance",
      "View Attendance Stat in a statistical and graphical way",
      "Retrieve individual attendance statistics based on subjects",
      "View attendance statistics of the whole class based on subjects and dates",
      "Add/modify/view Biodata",
      "Add/view/remove profile picture",
      "View college notes",
      "View profile details",
      "View/edit/publish time table",
      "Get faculty details",
    ],
    imageUrl: require("../public/assets/cloud_college.png"),
    technologiesUsed: ["android", "firebase"],
  },
  {
    id: 2,
    title: "Stubot",
    description:
      "STUBOT is a chatbot web application which is developed using HTML, CSS, PHP, JS and MySQL. It basically acts as an assistant chatbot which helps the students based on their academic needs.",
    features: [
      "Contains the home chat window, where we basically chat with the bot",
      "The contents retrieved or the response from the bot will be displayed in that window itself.",
      "Admins can add new details/data/response",
      "Retrieves contents like: Time table, Marksheets, Attendance Reports, Class Link, Class Notes, Activity notes, Current Date and Time",
      "Can make searches",
      "Can add to-do notes and retrieve it",
      "Dark mode/normal mode available",
    ],
    imageUrl: require("../public/assets/stubot.png"),
    technologiesUsed: ["php", "html", "css", "mySql", "ajax"],
  },
  {
    id: 3,
    title: "Clinic Management",
    description:
      "Clinic Management is a software which is developed using python Tkinter.This software is mainly used to keep track of the records of patients of a particular clinic.",
    features: [
      "Contains the Home window consisting of all options",
      "We can create a table and start adding details",
      "Edit a patient details",
      "Add personal as well as illness details of a particular patient",
      "Can search for a particular patient personal details based on id",
      "Can search for a particular patient illness details based on id",
    ],
    imageUrl: require("../public/assets/clinic_management.png"),
    technologiesUsed: ["python", "mySql"],
  },
  {
    id: 4,
    title: "Financial Tracker",
    description:
      "This is an android application which is used to keep track of your financial data. You can note down the expenses, incomes etc and keep track of it really easily. The data is processed from the local device and is stored to the server so that they could get their individual data when they login from any device. All the history, details and statistics of every expense, income, withdraws, transfers etc are logged and can be displayed. Graphical statistics based on each month or as a whole is available. The necessary backend logic is performed based on user action there by making the app really efficient and easy to keep track of their records. Uptodate currency conversion is also made available with the help of an API",
    features: [
      "Authentication",
      "Logging expenses and incomes for each source",
      "Getting graphical and statistical data",
      "Sorting and filtering data",
    ],
    imageUrl: require("../public/assets/financial_tracker.png"),
    technologiesUsed: ["android", "firebase"],
  },
  {
    id: 5,
    title: "Blend App",
    description:
      "Blend is basically an android application which is used for open learning.Each course could contain multiple lessons basically like the coursera and udemy.",
    features: [
      "Authentication",
      "Implementing the provision to add courses",
      "View other courses",
      "Provision to customize and edit the course details/resources",
      "Add comments to a course",
      "Adding video files, documents, course thumbnails, details etc.",
    ],
    imageUrl: require("../public/assets/blend_app.png"),
    technologiesUsed: ["android", "firebase"],
  },
  {
    id: 6,
    title: "More Projects",
    description:
      "In addition to the above projects, there are several other projects available in my resume, including cross-platform mobile apps, BLE sensor interactions, financial tracking, and augmented reality apps. Please refer to my resume for a detailed list of all projects and their descriptions.",
    features: [
      "Cross-platform mobile apps using Flutter and React Native",
      "Real-time BLE sensor data updates",
      "Automatic data syncing",
      "Augmented reality app for trying on nail designs real-time",
      "Integration with external APIs and SDKs like Spotify and YouTube",
    ],
    imageUrl: require("../public/devImg.png"), // Replace with your own image
    technologiesUsed: [
      "ble",
      "flutter",
      "reactNative",
      "android",
      "firebase",
      "mqtt",
      "snapAr",
    ],
  },
  // {
  //   id: 6,
  //   title: "BLE Sensor App (Flutter)",
  //   description:
  //     "Developed a cross-platform mobile app with Flutter for BLE sensor interaction using the Modbus protocol and MQTT. Key features include real-time sensor data updates, automatic data syncing, Modbus coil and register management, and file operations. Integrated MQTT communication, used MVVM architecture, and implemented data persistence with SQFLite, networking with Dio, and Firebase integration.",
  //   features: [
  //     "Real-time sensor data updates",
  //     "Automatic data syncing",
  //     "Modbus coil and register management",
  //     "File operations",
  //     "MQTT communication",
  //     "MVVM architecture",
  //     "Data persistence with SQFLite",
  //     "Networking with Dio",
  //     "Firebase integration",
  //   ],
  //   imageUrl: require("../public/assets/ble_sensor_app.png"),
  //   technologiesUsed: ["flutter", "mqtt", "sqflite", "dio", "firebase"],
  // },
  // {
  //   id: 7,
  //   title: "Water Pressure Monitoring App (React Native)",
  //   description:
  //     "Developed a cross-platform mobile app with React Native for BLE sensor and range extender interaction. Key features include real-time water pressure readings (PSI, GPM), data recording and export to xlsx, device calibration, firmware updates, and residual/differential pressure monitoring. Integrated SQLite for data persistence and used fetch for API calls.",
  //   features: [
  //     "Real-time water pressure readings (PSI, GPM)",
  //     "Data recording and export to xlsx",
  //     "Device calibration",
  //     "Firmware updates",
  //     "Residual/differential pressure monitoring",
  //     "SQLite data persistence",
  //     "API calls using fetch",
  //   ],
  //   imageUrl: require("../public/assets/water_pressure_monitoring.png"),
  //   technologiesUsed: ["react-native", "sqlite", "fetch", "mqtt"],
  // },
  // {
  //   id: 8,
  //   title: "BLE and Weather App (Android PoC)",
  //   description:
  //     "Developed native Android apps as two PoCs in Java and Kotlin, featuring BLE interaction, displaying a live streaming source, API calls, and standard UI designs with XML. Implemented MVVM architecture with clean code and coroutines, integrated RoomDB for data persistence, and used Retrofit for networking. Integrated Firebase for authentication and data storage. Additionally, implemented side navigation, weather API calls (current and forecast), user profile management, and media receiving with saving to local storage.",
  //   features: [
  //     "BLE interaction and live streaming source display",
  //     "API calls for weather (current and forecast)",
  //     "RoomDB for data persistence",
  //     "Retrofit for networking",
  //     "Firebase for authentication and data storage",
  //     "Side navigation implementation",
  //     "User profile management",
  //     "Media receiving and saving to local storage",
  //   ],
  //   imageUrl: require("../public/assets/ble_weather_app.png"),
  //   technologiesUsed: ["android", "java", "kotlin", "retrofit", "firebase"],
  // },
  // {
  //   id: 9,
  //   title: "Nail Design App (Android PoC)",
  //   description:
  //     "Developed a native Android app as a PoC for trying on nail designs and colors in real-time using augmented reality. Built with XML-based UI, MVVM architecture, and clean code practices. Integrated Snap SDK for AR and used Retrofit for networking. Optimized for smooth performance and user-friendly interactions.",
  //   features: [
  //     "Real-time AR-based nail design trials",
  //     "MVVM architecture",
  //     "Snap SDK for AR integration",
  //     "Retrofit for networking",
  //     "Smooth performance and user-friendly interface",
  //   ],
  //   imageUrl: require("../public/assets/nail_design_app.png"),
  //   technologiesUsed: ["android", "ar", "snap-sdk", "retrofit"],
  // },
  // {
  //   id: 10,
  //   title: "Spotify & YouTube Integration App (Android PoC)",
  //   description:
  //     "Developed a native Android app as a PoC integrating features from Spotify and YouTube using their official SDKs. Implemented MVVM architecture, clean code, authentication, playback functionalities, and other key features.",
  //   features: [
  //     "Spotify and YouTube integration",
  //     "MVVM architecture",
  //     "Authentication",
  //     "Playback functionalities",
  //   ],
  //   imageUrl: require("../public/assets/spotify_youtube_integration.png"),
  //   technologiesUsed: ["android", "spotify-sdk", "youtube-sdk", "mvvm"],
  // },
];

const getTechnologyImageUrl = function (technologyUsed) {
  const images = {
    firebase: require("../public/assets/firebase_img.png"),
    android: require("../public/assets/android_img.png"),
    mySql: require("../public/assets/mySql_img.png"),
    html: require("../public/assets/html_img.png"),
    css: require("../public/assets/css_img.png"),
    php: require("../public/assets/php_img.png"),
    ajax: require("../public/assets/ajax_img.png"),
    python: require("../public/assets/python_img.png"),
    flutter: require("../public/assets/flutter.png"),
    reactNative: require("../public/assets/react.png"),
    mqtt: require("../public/assets/mqtt_ver.png"),
    snapAr: require("../public/assets/snap_ar.png"),
    ble: require("../public/assets/ble.png"),
  };

  return images[technologyUsed];
};

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [technologyUsed, setTechnologyUsed] = useState({
    name: currentProject.technologiesUsed[0],
    image: getTechnologyImageUrl(currentProject.technologiesUsed[0]),
  });
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingTechImage, setLoadingTechImage] = useState(true);
  const { darkMode, isLargeScreen } = useContext(AppContext);

  const handlePrev = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === currentProject.id
    );
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentProject(projects[prevIndex]);
    setLoadingImage(true); // Trigger loading for new project
    setTechnologyUsed({
      name: projects[prevIndex].technologiesUsed[0],
      image: getTechnologyImageUrl(projects[prevIndex].technologiesUsed[0]),
    });
    setLoadingTechImage(true);
  };

  const handleNext = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === currentProject.id
    );
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentProject(projects[nextIndex]);
    setLoadingImage(true); // Trigger loading for new project
    setTechnologyUsed({
      name: projects[nextIndex].technologiesUsed[0],
      image: getTechnologyImageUrl(projects[nextIndex].technologiesUsed[0]),
    });
    setLoadingTechImage(true);
    handleNextTechnology();
  };

  const handlePrevTechnology = () => {
    const currentIndex = currentProject.technologiesUsed.findIndex(
      (technology) => technology === technologyUsed.name
    );
    const prevIndex =
      (currentIndex - 1 + currentProject.technologiesUsed.length) %
      currentProject.technologiesUsed.length;
    setTechnologyUsed({
      name: currentProject.technologiesUsed[prevIndex],
      image: getTechnologyImageUrl(currentProject.technologiesUsed[prevIndex]),
    });
    setLoadingTechImage(true);
  };

  const handleNextTechnology = () => {
    const currentIndex = currentProject.technologiesUsed.findIndex(
      (technology) => technology === technologyUsed.name
    );
    const nextIndex =
      (currentIndex + 1) % currentProject.technologiesUsed.length;
    setTechnologyUsed({
      name: currentProject.technologiesUsed[nextIndex],
      image: getTechnologyImageUrl(currentProject.technologiesUsed[nextIndex]),
    });
    setLoadingTechImage(true);
  };

  return (
    <div className="glass-panel mt-2 flex min-h-screen flex-col items-start rounded-[1.75rem] p-4 lg:p-8">
      <div className="mb-2 w-full text-center lg:mb-4 lg:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          Selected work
        </p>
        <h1 className="mt-1 font-poppins_semi_bold text-2xl text-slate-900 dark:text-white lg:text-3xl">
          Projects
        </h1>
      </div>
      <div className="flex w-full flex-row items-center justify-between gap-2 py-4">
        <div className="flex flex-col justify-center">
          <button
            onClick={() => handlePrev()}
            className="h-10 w-10 transform rounded-full bg-indigo-600 text-xl text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-indigo-800 lg:h-12 lg:w-12"
          >
            &lt;
          </button>
        </div>
        <div className="flex w-full justify-center">
          <div
            className="relative flex h-[240px] w-full max-w-5xl items-center justify-center overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 sm:h-[320px] lg:h-[500px]"
          >
            {loadingImage && (
              <div className="absolute flex h-full w-full items-center justify-center bg-opacity-50">
                <svg
                  className="h-20 w-20 animate-spin text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 0116 0"
                  />
                </svg>
              </div>
            )}
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "14px",
              }}
              src={currentProject.imageUrl}
              alt={currentProject.title}
              className="w-full rounded-2xl object-contain p-3"
              onLoadingComplete={() => setLoadingImage(false)}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button
            onClick={() => handleNext()}
            className="h-10 w-10 transform rounded-full bg-indigo-600 text-xl text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-indigo-800 lg:h-12 lg:w-12"
          >
            &gt;
          </button>
        </div>
      </div>

      <div
        className={`mx-auto mt-4 max-w-4xl text-start ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <h2 className="mb-4 text-2xl font-bold lg:text-3xl">{currentProject.title}</h2>
        <p className="mb-6 text-base text-slate-700 dark:text-slate-300 lg:text-lg">{currentProject.description}</p>

        <h3 className="mb-4 text-xl font-semibold">Features</h3>
        <ul className="mx-auto space-y-3 text-left text-base lg:text-lg">
          {currentProject.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg
                className="h-6 w-6 flex-shrink-0 text-green-400 sm:h-8 sm:w-8 md:h-10 md:w-10" // Prevents shrinking on smaller screens
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <h3 className="mb-4 mt-8 text-xl font-semibold">Technologies Used</h3>
        <div className="flex items-center justify-center pb-5 pt-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handlePrevTechnology()}
              className="h-10 w-10 transform rounded-full bg-indigo-600 text-xl text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-indigo-800 lg:h-12 lg:w-12"
            >
              &lt;
            </button>
            <div className="relative flex w-full justify-center">
              {loadingTechImage && (
                <div className="absolute flex h-full w-full items-center justify-center bg-opacity-50">
                  <svg
                    className="h-8 w-8 animate-spin text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0116 0"
                    />
                  </svg>
                </div>
              )}
              <Image
                style={{
                  width: "160px",
                  height: "70px",
                  objectFit: "contain",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "15px",
                }}
                src={technologyUsed.image}
                alt={technologyUsed.name}
                className={`w-full rounded-lg object-cover ${
                  !darkMode ? "shadow-lg" : ""
                }`}
                onLoadingComplete={() => setLoadingTechImage(false)}
              />
            </div>
            <button
              onClick={() => handleNextTechnology()}
              className="h-10 w-10 transform rounded-full bg-indigo-600 text-xl text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-indigo-800 lg:h-12 lg:w-12"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
