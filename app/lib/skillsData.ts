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
      name: 'Python',
      icon: FaPython,
      personal_experience:
        'Experienced in developing applications using Python for web development, data analysis, and scripting.',
    },
    {
      name: 'Golang',
      icon: FaGolang,
      personal_experience:
        'Skilled in building high-performance applications using Go, including web servers and microservices.',
    },
    {
      name: 'JavaScript',
      icon: FaJsSquare,
      personal_experience:
        'Proficient in developing modern web applications using JavaScript and TypeScript, including frameworks like React and Node.js.',
    },
    {
      name: 'Java',
      icon: FaJava,
      personal_experience:
        'Experienced in developing enterprise-level applications using Java, including Spring and Hibernate.',
    },
    {
      name: 'Bash',
      icon: FaTerminal,
      personal_experience:
        'Proficient in writing shell scripts for automating tasks and managing system operations.',
    },
  ];

  return type === 'ops' ? opsSkills : devSkills;
};
