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
  related_technologies?: string;
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
  1️⃣ Developing REST APIs for BOC products like [ADONIS](https://www.boc-group.com/en/adonis/) or [ADOIT](https://www.boc-group.com/en/adoit/).
        Experienced in migration java-based solutions from old jdk-8/11 to new jdk-17/21 and running them on different Tomcat environments like Tomcat 9 and Tomcat 10.1 with all necessary javax/jakarta adaptations and ensuring backwards compatibility of codebases to still be able support old versions.
  2️⃣ Decent experience gained in creation platform-layer Gradle plugins for multiple teams reused in the whole organization for building and testing modules/libraries and products themselves.
        Experienced in smooth gradual builds migration from old-based Gradle 6.5 + jdk 8/11 build to new-based Gradle 8.7 + jdk 17/21 - based modules/libraries/products builds on the organization level.`,
      related_technologies: `
      Experienced in using frameworks/libraries:
      - Jersey
      - TestNG
      - Maven
      - Ant (not a favorite one 😉)
      - Gradle`,
    },
    {
      name: 'JavaScript',
      icon: FaJsSquare,
      personal_experience: `Most experience is derived from writing server-side logic and front-end components for products like [ADONIS](https://www.boc-group.com/en/adonis/) or [ADOIT](https://www.boc-group.com/en/adoit/) and their customization plugins. One of such plugins is a [BPMN Process Simulation](https://docs.boc-group.com/adonis/en/docs/16.0/user_manual/sim-000000/) and [BPMN Process Stepper](https://docs.boc-group.com/adonis/en/docs/16.0/user_manual/pst-000000/). Also, were using modern Js/Ts + React tech stack for creating organizationally-platform level test results dashboard for build pipelines tests results, integrated into multiple teams pipelines. This CV is also created using such tech stack as well. Also a bit experienced with TypeScript, but considering it as a preferred way to write Js-based code.`,
      related_technologies: `
      Experienced in using frameworks/libraries:
      - Ext.js
      - Next.js
      - React
      - Node.js
      - Jest`,
    },
    {
      name: 'Python',
      icon: FaPython,
      personal_experience: `Most knowledge derived from writing organizationally-wide libraries ecosystem, which were reused in build pipelines and local custom development tooling set ups. Having experience of writing [Temporal](https://temporal.io/) workers in Python. Also, used Python as a core language for creation data testing framework for Elasticsearch and KPIs data proceeding derived from multiple data sources. More about my way of thinking of data proceeding you can read in my [Data Mesh](https://medium.com/@plozovikov/data-mesh-d12768970271) article.`,
      related_technologies: `
      Experienced in using frameworks/libraries:
      - Poetry
      - Pytest
      - Pandas
      - Temporal`,
    },
    {
      name: 'GoLang',
      icon: FaGolang,
      personal_experience: `Built knowledge on GoLang technology during creation deployment and data proceeding workflows in [Temporal](https://temporal.io/) technology in microservices-based system.`,
    },
    {
      name: 'Bash',
      icon: FaTerminal,
      personal_experience:
        `Having basic knowledge which allows me doing simple administrative things when working on remote VMs or during containers debugging. Also, used bash scripts for 1-click [ELK stack](https://www.elastic.co/elastic-stack) local dev installation.`,
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
