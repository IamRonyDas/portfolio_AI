const userData = {
  name: "ABHISHEK DAS",
  roles: ["Fullstack Developer", "Android Developer"],
  tagline: "Building scalable software and robust mobile experiences.",
  imagePath: "https://placehold.co/300x300/1f2937/ffffff?text=AD", // Placeholder for the uploaded image
  contact: {
    phone: "+91-7001685944",
    email: "asisdas751@gmail.com",
    linkedin: "https://www.linkedin.com/in/abhishek-das-62401a21b/",
    leetcode: "https://leetcode.com/u/Abhishek_Das_0205/",
    github: "https://github.com/IamRonyDas",
    location: "Kolkata, India"
  },
  skills: {
    languages: ["Java", "Kotlin", "C++", "JavaScript", "Dart"],
    backend: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "Microservices", "MongoDB", "SQL", "Redis", "Kafka", "AWS", "Docker", "Jenkins"],
    frontend: ["React.js", "Next.js", "Flutter", "HTML", "CSS"],
    fundamentals: ["Data Structures", "OOP", "SOLID Principles", "Design Patterns", "System Design"],
    tools: ["JIRA", "Git", "Postman", "JUnit4", "Mockito", "Ngrok"],
  },
  experience: [
    {
      title: "Software Developer Intern",
      company: "Credflow",
      duration: "Aug 2025 - Present",
      description: [
        "Developed backend APIs handling 5000+ req/min, ensuring high availability under load.",
        "Implemented an IP-based rate limiter (10 req/min), reducing spam attempts by 90%.",
        "Optimized MongoDB aggregation queries, reducing API latency from 2.5s to 800ms.",
        "Streamlined API testing using Postman + Ngrok, improving debugging speed.",
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Visteon Corporation",
      duration: "Jan 2025 - Jun 2025",
      description: [
        "Worked on Bluetooth connectivity module for TATA and Skoda infotainment systems, resolving 10+ critical defects and achieving 99% stability.",
        "Enhanced unit test coverage from 70% to 95% using JUnit4 and Mockito, reducing regression issues by 30%.",
        "Contributed to maintaining Android background services.",
      ]
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Sniphat",
      duration: "Feb 2024 - May 2024",
      description: [
        "Built and deployed a cross-platform mobile app (Flutter/Dart), scaling to 5,000+ monthly active users within 3 months.",
        "Integrated QR onboarding, image cropping, and document scanning features, improving user engagement by 25%.",
      ]
    },
  ],
  projects: [
  {
    name: "Smart Job Application Tracker",
    stack: "Next.js, MongoDB, JWT, Redis, Gemini API",
    description: [
      "Full-stack platform with JWT-secured authentication",
      "IP-based Redis rate limiter for the AI Resume Reviewer (Gemini API)",
      "Delivers feedback and salary insights within 2 seconds",
      "Monitors application statuses"
    ],
    code: "https://github.com/IamRonyDas/Smart-Application-Tracker",
    demo: "https://www.youtube.com/watch?v=LfZ8K46grB8"
  },
  {
    name: "Realtime Chat Application",
    stack: "Next.js, Redis, Kafka, Socket.IO, Docker",
    description: [
      "Realtime chat with Redis Adapter ensuring <100ms latency",
      "Kafka event streaming for 5000+ concurrent users",
      "Admin Dashboard with Redis caching"
    ],
    code: "https://github.com/IamRonyDas/Scalable-Chat-App",
    demo: "https://www.youtube.com/watch?v=qjpjUYtaVFc&t=20s"
  },
  {
    name: "AI News App (Android)",
    stack: "Kotlin, MVVM, Gemini API, Retrofit",
    description: [
      "MVVM architecture with NewsAPI integration",
      "Gemini API generates AI-powered summaries",
      "Search, swipe-to-refresh & in-app WebView"
    ],
    code: "https://github.com/IamRonyDas/News-App-AI"
  },
  {
    name: "Carbon Footprint Tracker",
    stack: "Next.js, Redis, Kafka, Socket.IO, Docker",
    description: [
      "Full-stack platform with JWT-secured authentication",
      "Tracks and analyzes personal carbon footprint",
      "Uses gemini API for personalized reduction tips",
      "Take input images and generate carbon footprint reports using huggingface API"
    ],
    code: "https://github.com/IamRonyDas/AI_Carbon_Footprint_Tracker",
    demo: "https://www.youtube.com/watch?v=qjpjUYtaVFc&t=20s"
  },
],



  achievements: [
    "Achieved Global Rank 274 in TCS CodeVita Season 11 among 1.36L+ participants.",
    "Ranked in the Top 4% Worldwide on LeetCode with a Knight badge, Max Rating 1907.",
    "Led a 3-member team to win the annual college fest hackathon with an AI-powered tourist app.",
    "Secured Global Rank 67 in CodeChef Starters 109; attained a maximum rating of 1707.",
    "Secured 1st position in college-level coding competitions organised by Geeks for Geeks.",
  ]
};
export default userData;