
export type Project = {
  id: number;
  title: string;
  description: [problem: string, solution: string, impact: string];
  technologies: string[];
  images: string[];
};