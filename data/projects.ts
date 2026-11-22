import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "ZooDex - Learning App for Zoo Visitors enhanced by image recognition",
    description: [
      "Zoo visitors need a way to learn about the animals they encounter during a visit.",
      "We built ZooDex, a mobile app that recognizes animals with computer vision and connects each encounter to interactive learning activities.",
      "Testing the prototype during a real zoo visit gave us a way to evaluate visitor engagement and learning in practice.",
    ],
    technologies: [
      "Python",
      "YOLO Computer Vision",
      "C#",
      "Unity",
      "Mobile Development",
      "Gamification",
      "User-Centered Design",
    ],
    images: [
      "/images/projects/project-1-1.png",
      "/images/projects/project-1-2.png",
      "/images/projects/project-1-3.png",
      "/images/projects/project-1-4.png",
      "/images/projects/project-1-5.png",
      "/images/projects/project-1-6.png",
      "/images/projects/project-1-7.png",
    ],
  },
  {
    id: 2,
    title: "Paris à la Danmark - Live Web page",
    description: [
      "The Paris à la Danmark race needed a public website that could evolve as the organizers' needs changed.",
      "I built the site in Next.js and refined it through ongoing conversations with the organizers.",
      "The event gained a live website that I could maintain and update as new needs came up.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Frontend Development",
      "Web Design",
      "Stakeholder Collaboration",
    ],
    images: [
      "/images/projects/project-2-1.png",
      "/images/projects/project-2-2.png",
      "/images/projects/project-2-3.png",
    ],
  },
  {
    id: 3,
    title: "XR Fire Safety Training - Immersive VR Training Simulation for Healthcare Staff",
    description: [
      "Healthcare staff need a safe way to rehearse how to respond to a fire.",
      "Our interdisciplinary team built an interactive VR simulation based on healthcare fire-response procedures.",
      "The simulation gives staff a controlled environment to practise those procedures in realistic scenarios.",
    ],
    technologies: [
      "Unity",
      "C#",
      "Virtual Reality",
      "XR Development",
      "User-Centered Design",
      "Interdisciplinary Collaboration",
    ],
    images: [
      "/images/projects/project-3-1.png",
      "/images/projects/project-3-2.png",
      "/images/projects/project-3-3.png",
      "/images/projects/project-3-4.png",
      "/images/projects/project-3-5.png",
    ],
  },
  {
    id: 4,
    title: "Automatic Window Opener with Digital Twin",
    description: [
      "An automated window needs to respond to indoor conditions and make its current state visible.",
      "I built a controller that uses temperature and humidity readings to operate the window and feeds sensor data into a digital twin.",
      "The prototype responds to changing conditions and shows the window's state in the digital model.",
    ],
    technologies: [
      "Embedded Control",
      "IoT",
      "Digital Twin",
      "Sensor Integration",
      "Automation Logic",
      "C++",
    ],
    images: [
      "/images/projects/project-4-1.png",
      "/images/projects/project-4-2.png",
    ],
  },
  {
    id: 5,
    title: "Bachelor Project - Physics-Based VR Interaction Prototype",
    description: [
      "My bachelor project explored how movement and interaction based on physical forces could feel responsive in VR.",
      "I built a Unity prototype that used physics to drive movement and interactions.",
      "The prototype made it possible to try the mechanics in VR and assess how they felt in use.",
    ],
    technologies: [
      "Unity",
      "C#",
      "Virtual Reality",
      "Physics-Based Interaction",
      "VR Prototyping",
      "Immersive Design",
    ],
    images: [
      "/images/projects/project-5-1.png",
      "/images/projects/project-5-2.png",
      "/images/projects/project-5-3.png",
      "/images/projects/project-5-4.png",
    ],
  },
];