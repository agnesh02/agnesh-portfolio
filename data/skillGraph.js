/**
 * Force graph: core stack + IoT + cloud + persistence + tooling.
 * Trimmed to avoid duplicate/overlapping labels while matching the resume.
 */
export const RAW_SKILL_GRAPH = {
  nodes: [
    {
      id: "center",
      group: 1,
      text: "Core",
      icon: null,
    },
    {
      id: "n1",
      group: 2,
      text: "Kotlin",
      icon: "kotlin",
    },
    {
      id: "n2",
      group: 2,
      text: "Android",
      icon: "android",
    },
    {
      id: "n3",
      group: 2,
      text: "Flutter",
      icon: "flutter",
    },
    {
      id: "n4",
      group: 2,
      text: "React Native",
      icon: "reactNative",
    },
    {
      id: "n5",
      group: 2,
      text: "Next.js",
      icon: "nextjs",
    },
    {
      id: "n6",
      group: 2,
      text: "BLE",
      icon: "ble",
    },
    {
      id: "n7",
      group: 2,
      text: "MQTT",
      icon: "mqtt",
    },
    {
      id: "n8",
      group: 2,
      text: "Modbus",
      icon: "modbus",
    },
    {
      id: "n9",
      group: 2,
      text: "GCP",
      icon: "gcp",
    },
    {
      id: "n10",
      group: 2,
      text: "JNI",
      icon: "jni",
    },
    {
      id: "n13",
      group: 2,
      text: "Java",
      icon: "java",
    },
    {
      id: "n11",
      group: 2,
      text: "SQLite",
      icon: "sqlite",
    },
    {
      id: "n12",
      group: 2,
      text: "Git",
      icon: "git",
    },
  ],
  links: [
    { source: "center", target: "n1" },
    { source: "center", target: "n2" },
    { source: "center", target: "n3" },
    { source: "center", target: "n4" },
    { source: "center", target: "n5" },
    { source: "center", target: "n6" },
    { source: "center", target: "n7" },
    { source: "center", target: "n9" },
    { source: "center", target: "n13" },
    { source: "center", target: "n12" },
    { source: "n2", target: "n1" },
    { source: "n2", target: "n13" },
    { source: "n2", target: "n10" },
    { source: "n13", target: "n10" },
    { source: "n3", target: "n11" },
    { source: "n4", target: "n3" },
    { source: "n5", target: "n4" },
    { source: "n6", target: "n7" },
    { source: "n6", target: "n8" },
    { source: "n7", target: "n8" },
  ],
};
