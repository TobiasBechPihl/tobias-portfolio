import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 3,
    title: "XR Fire Safety Training — Immersive VR Training Simulation",
    description: [
      "A VR training simulation built in Unity and C# where healthcare staff practise fire emergency procedures in a realistic, controlled environment.",
      "Developed with subject matter experts to translate practical emergency protocols into scenario-based training, focusing on intuitive interaction and accessibility across different technical backgrounds.",
      "Enables safe, repeatable practice of high-stakes procedures and decision-making without real-world risk or operational disruption.",
    ],
    technologies: [
      "Unity",
      "C#",
      "Virtual Reality",
      "XR",
      "Instructional Design",
      "SME Collaboration",
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
    id: 6,
    title: "SOP AI Management, Training & Role/Team Tracking",
    description: [
      "A workflow and toolset in development for managing SOPs and training material with AI support, quality assurance (QA), and visibility into individual roles and team training status.",
      "Connects structured procedures and learning needs with QA validation of AI-generated content and tracking of competencies and training progress across roles and teams.",
      "Designed to reduce ambiguity and error risk in procedures while clarifying who is trained and ready for specific tasks.",
    ],
    technologies: [
      "AI Workflows",
      "QA & Validation",
      "SOP / Training Material",
      "Role & Training Tracking",
    ],
    images: [],
  },
  {
    id: 1,
    title: "ZooDex — AI-Assisted Learning App & Thesis Project (12/12)",
    description: [
      "An interactive learning application developed as a master's thesis (12/12) in collaboration with Terrariet, combining computer vision with educational activities and gamification.",
      "Integrated a Python-based computer vision system with a Unity/C# application, worked with dataset preparation and model training, and ran real-world user testing evaluating recognition reliability, usability, and learning outcomes.",
      "Demonstrates both cross-system integration and practical, honest evaluation of where technology holds up and where interaction and feedback need to support it.",
    ],
    technologies: [
      "Python",
      "YOLO / Computer Vision",
      "C#",
      "Unity",
      "Gamification",
      "User Evaluation",
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
    id: 4,
    title: "Automatic Window Opener with Digital Twin",
    description: [
      "An automation and digital twin project linking physical sensors and control logic with a digital representation of system state.",
      "Built around environmental sensor inputs, control logic, and state synchronization between physical hardware and a digital model to monitor and regulate system behaviour.",
      "Shows hands-on understanding of hardware-software integration, state logic, and digital monitoring.",
    ],
    technologies: [
      "C++",
      "Digital Twin",
      "Sensors & Actuators",
      "Automation Logic",
      "System Integration",
    ],
    images: [
      "/images/projects/project-4-1.png",
      "/images/projects/project-4-2.png",
    ],
  },
  {
    id: 5,
    title: "Bachelor Project — Physics-Based VR Interaction Prototype",
    description: [
      "A VR prototype exploring physics-based interaction and locomotion in a virtual environment.",
      "Investigated how physical principles, movement, and interaction response shape presence and control in VR through iterative prototyping.",
      "Builds a strong foundation for interaction feel, simulation responsiveness, and intuitive spatial control.",
    ],
    technologies: [
      "Unity",
      "C#",
      "Virtual Reality",
      "Physics Interaction",
      "Iterative Prototyping",
    ],
    images: [
      "/images/projects/project-5-1.png",
      "/images/projects/project-5-2.png",
      "/images/projects/project-5-3.png",
      "/images/projects/project-5-4.png",
    ],
  },
  {
    id: 2,
    title: "Paris à la Danmark — Live Web Platform",
    description: [
      "A live web platform designed, built, and maintained for the Paris à la Danmark cycling event.",
      "Translated stakeholder requirements into a working web application with ongoing feature updates, bug fixes, and operational maintenance.",
      "Demonstrates practical ownership of a live product, stakeholder communication, and reliable day-to-day iteration.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Web Development",
      "Stakeholder Collaboration",
    ],
    images: [
      "/images/projects/project-2-1.png",
      "/images/projects/project-2-2.png",
      "/images/projects/project-2-3.png",
    ],
  },
];
