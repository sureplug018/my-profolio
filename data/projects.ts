export interface Project {
  image: string;
  name: string;
  description: string;
  stack: string[];
  gitUrl: string;
  siteUrl: string;
}

export const projects: Project[] = [
  {
    image: '/real-sms.jpeg',
    name: 'Portfolio Website',
    description:
      'A personal portfolio showcasing my skills and projects, built with Next.js and Tailwind CSS for a sleek, responsive design.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gitUrl: 'https://github.com/your-username/portfolio',
    siteUrl: 'https://your-portfolio.vercel.app',
  },
  {
    image: '/images/project2.jpg',
    name: 'Task Manager App',
    description:
      'A full-stack task management application with user authentication, allowing users to create, update, and track tasks efficiently.',
    stack: ['Node.js', 'Express', 'MongoDB', 'React'],
    gitUrl: 'https://github.com/your-username/task-manager',
    siteUrl: 'https://task-manager-demo.vercel.app',
  },
];
