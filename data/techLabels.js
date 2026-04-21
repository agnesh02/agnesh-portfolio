/** Display names for technology keys used in project data */
export const TECH_LABELS = {
  firebase: "Firebase",
  android: "Android",
  mySql: "MySQL",
  html: "HTML",
  css: "CSS",
  php: "PHP",
  ajax: "Ajax",
  python: "Python",
  flutter: "Flutter",
  reactNative: "React Native",
  react: "React",
  mqtt: "MQTT",
  snapAr: "Snap AR",
  ble: "BLE",
  kotlin: "Kotlin",
  java: "Java",
  jni: "JNI",
  cpp: "C / C++",
  modbus: "Modbus",
  sqlite: "SQLite",
  sqflite: "SQFlite",
  gcp: "GCP",
  nextjs: "Next.js",
};

export function formatTechLabel(key) {
  if (!key) return "";
  if (TECH_LABELS[key]) return TECH_LABELS[key];
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}
