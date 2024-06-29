import { IconType } from 'react-icons';
import {
  FaAws,
  FaDocker,
  FaJenkins,
  FaPython,
  FaJsSquare,
  FaJava,
  FaTerminal,
} from 'react-icons/fa';

import { FaGolang } from 'react-icons/fa6';
import { SiTerraform, SiKubernetes } from 'react-icons/si';

export interface Skill {
  name: string;
  icon?: IconType;
  image_url?: string;
  personal_experience: string;
}

export const fetchSkills = async (type: 'dev' | 'ops'): Promise<Skill[]> => {
  const opsSkills: Skill[] = [
    {
      name: 'AWS',
      icon: FaAws,
      personal_experience:
        'Experience with deploying and managing applications using AWS services like EC2, S3, Lambda, and RDS.',
    },
    {
      name: 'Docker',
      icon: FaDocker,
      personal_experience:
        'Proficient in containerizing applications using Docker, creating Dockerfiles, and managing containers.',
    },
    {
      name: 'Kubernetes',
      icon: SiKubernetes,
      personal_experience:
        'Skilled in orchestrating containerized applications with Kubernetes, setting up clusters, and managing workloads.',
    },
    {
      name: 'Terraform',
      icon: SiTerraform,
      personal_experience:
        'Expert in Infrastructure as Code (IaC) with Terraform, automating cloud infrastructure deployment.',
    },
    {
      name: 'Jenkins',
      icon: FaJenkins,
      personal_experience:
        'Experience with continuous integration and continuous deployment (CI/CD) pipelines using Jenkins.',
    },
  ];

  const devSkills: Skill[] = [
    {
      name: 'Java',
      icon: FaJava,
      personal_experience: `Main experience gained from:
      1) Developing REST APIs for BOC products like https://www.adonis-community.com/en/. 
      Experienced in migration java - based solutions from old jdk-8/11 to new jdk-17/21 and running them on different Tomcat environments like Tomcat 9 and Tomcat 10.1 with all necessary javax/jakarta adaptations and ensuring backwards compatibility of codebases to still be able support old versions.
      2) Decent experience gained in creation platform-layer Gradle plugins for multiple teams reused in the whole organization for building and testing modules/libraries and products themselves. 
      Experienced in smooth gradual builds migration from old-based Gradle 6.5 + jdk 8/11 build to new-based Gradle 8.7 + jdk 17/21 - based modules/libraries/products builds on the organization level. 
      Experienced in using frameworks/libraries: Jersey, TestNG, Maven, Ant (not a favorite one ;)), Gradle`,
    },
    {
      name: 'JavaScript',
      icon: FaJsSquare,
      personal_experience:
        'Good knowledge: JavaScript, TypeScript, including frameworks like React and Node.js',
    },
    {
      name: 'Python',
      icon: FaPython,
      personal_experience:
        'Good knowledge: Experienced in developing applications using Python for web development, data analysis, and scripting.',
    },
    {
      name: 'Golang',
      icon: FaGolang,
      personal_experience:
        'Good knowledge: Skilled in building high-performance applications using Go, including web servers and microservices.',
    },
    {
      name: 'Bash',
      icon: FaTerminal,
      personal_experience:
        'Good knowledge: Proficient in writing shell scripts for automating tasks and managing system operations.',
    },
  ];

  return type === 'ops' ? opsSkills : devSkills;
};

export async function fetchPassedCourses() {
  return [
    { id: 1, title: 'Advanced Python Programming', date: '2023-01-15' },
    {
      id: 2,
      title: 'Docker Mastery: The Complete Toolset',
      date: '2023-02-20',
    },
    {
      id: 3,
      title: 'JavaScript Algorithms and Data Structures',
      date: '2023-03-10',
    },
  ];
}

export async function fetchReadBooks() {
  return [
    {
      id: 1,
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      author: 'Robert C. Martin',
      date: '2022-12-01',
    },
    {
      id: 2,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
      date: '2023-01-10',
    },
    {
      id: 3,
      title: 'The Pragmatic Programmer: Your Journey to Mastery',
      author: 'Andrew Hunt, David Thomas',
      date: '2023-02-05',
    },
  ];
}
