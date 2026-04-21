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
      img: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    },
    {
      id: "n1",
      group: 2,
      text: "Kotlin",
      img: "https://img.icons8.com/?size=160&id=WloV0S7gH4RH&format=png",
    },
    {
      id: "n2",
      group: 2,
      text: "Android",
      img: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/256/external-Android-notification-and-mailing-smashing-stocks-flat-smashing-stocks.png",
    },
    {
      id: "n3",
      group: 2,
      text: "Flutter",
      img: "https://img.icons8.com/color/512/flutter.png",
    },
    {
      id: "n4",
      group: 2,
      text: "React Native",
      img: "https://img.icons8.com/plasticine/256/react.png",
    },
    {
      id: "n5",
      group: 2,
      text: "Next.js",
      img: "https://img.icons8.com/windows/256/nextjs.png",
    },
    {
      id: "n6",
      group: 2,
      text: "BLE",
      img: "https://img.icons8.com/fluency/256/bluetooth.png",
    },
    {
      id: "n7",
      group: 2,
      text: "MQTT",
      img: "https://hornerautomation.eu/wp-content/uploads/2021/11/mqtt-ver.png",
    },
    {
      id: "n8",
      group: 2,
      text: "Modbus",
      img: "https://img.icons8.com/color/256/data-transfer.png",
    },
    {
      id: "n9",
      group: 2,
      text: "GCP",
      img: "https://img.icons8.com/color/512/google-cloud.png",
    },
    {
      id: "n10",
      group: 2,
      text: "JNI",
      img: "https://img.icons8.com/color/256/java-coffee-cup-logo.png",
    },
    {
      id: "n11",
      group: 2,
      text: "SQLite",
      img: "https://img.icons8.com/color/256/database.png",
    },
    {
      id: "n12",
      group: 2,
      text: "Git",
      img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
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
    { source: "center", target: "n12" },
    { source: "n2", target: "n1" },
    { source: "n2", target: "n10" },
    { source: "n3", target: "n11" },
    { source: "n4", target: "n3" },
    { source: "n5", target: "n4" },
    { source: "n6", target: "n7" },
    { source: "n6", target: "n8" },
    { source: "n7", target: "n8" },
  ],
};
