import { IconType } from 'react-icons';
import {
  FaAws,
  FaDocker,
  FaJenkins,
  FaPython,
  FaJsSquare,
  FaJava,
  FaTerminal,
  FaGitAlt,
} from 'react-icons/fa';
import { FaGolang, FaGears, FaHtml5 } from 'react-icons/fa6';
import {
  SiTerraform,
  SiKubernetes,
  SiElasticsearch,
  SiOpentelemetry,
  SiJaeger,
  SiSonarqube,
  SiMercurial,
  SiApachekafka,
  SiRedis,
  SiNomad,
  SiJfrog,
  SiFluentbit,
  SiPrometheus,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { DiGroovy } from 'react-icons/di';
import { IoIosGitBranch } from 'react-icons/io';
import { BsTerminalSplit } from 'react-icons/bs';
import { GrDocumentConfig } from 'react-icons/gr';
import { FcLinux } from 'react-icons/fc';

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
      name: 'Linux',
      icon: FcLinux,
      personal_experience: 'Experience with Linux.',
    },
    {
      name: 'ELK Stack',
      icon: SiElasticsearch,
      personal_experience:
        'Experience with the ELK Stack (Elasticsearch, Logstash, Kibana) for log management and data analysis.',
    },
    {
      name: 'Prometheus/Grafana',
      icon: SiPrometheus,
      personal_experience: 'Experience with Prometheus and Grafana.',
    },
    {
      name: 'OpenTelemetry',
      icon: SiOpentelemetry,
      personal_experience:
        'Experience with OpenTelemetry for observability and monitoring.',
    },
    {
      name: 'Jaeger',
      icon: SiJaeger,
      personal_experience:
        'Experience with Jaeger for distributed tracing and monitoring.',
    },
    {
      name: 'Fluentbit',
      icon: SiFluentbit,
      personal_experience: 'Experience with Fluentbit.',
    },
    {
      name: 'SonarQube',
      icon: SiSonarqube,
      personal_experience:
        'Experience with SonarQube for static code analysis and code quality monitoring.',
    },
    {
      name: 'Docker',
      icon: FaDocker,
      personal_experience:
        'Proficient in containerizing applications using Docker, creating Dockerfiles, and managing containers.',
    },
    {
      name: 'Jenkins',
      icon: FaJenkins,
      personal_experience:
        'Experience with continuous integration and continuous deployment (CI/CD) pipelines using Jenkins.',
    },
    {
      name: 'JFrog Artifactory',
      icon: SiJfrog,
      personal_experience:
        'Experience with JFrog Artifactory for artifact management and repository hosting.',
    },
    {
      name: 'Rhodecode',
      icon: IoIosGitBranch,
      personal_experience:
        'Experience with Rhodecode for code hosting, review, and management.',
    },
    {
      name: 'Git',
      icon: FaGitAlt,
      personal_experience:
        'Experience with version control using Git, managing branches, and collaborating on code.',
    },
    {
      name: 'Mercurial',
      icon: SiMercurial,
      personal_experience:
        'Experience with Mercurial for version control, similar to Git.',
    },
    {
      name: 'Kafka',
      icon: SiApachekafka,
      personal_experience:
        'Experience with Apache Kafka for real-time data streaming and event-driven architecture.',
    },
    {
      name: 'Redis',
      icon: SiRedis,
      personal_experience:
        'Experience with Redis for caching and in-memory data storage.',
    },
    {
      name: 'Terminals (VMs access), PuTTY (hosts access)',
      icon: BsTerminalSplit,
      personal_experience:
        'Experience with using terminal and PuTTY for remote server access and management.',
    },
    {
      name: 'Terraform',
      icon: SiTerraform,
      personal_experience:
        'Experience with using terminal and PuTTY for remote server access and management.',
    },
    {
      name: 'Saltstack',
      icon: GrDocumentConfig,
      personal_experience:
        'Experience with using terminal and PuTTY for remote server access and management.',
    },
    {
      name: 'AWS',
      icon: FaAws,
      personal_experience:
        'Experience with using terminal and PuTTY for remote server access and management.',
    },
    {
      name: 'Nomad',
      icon: SiNomad,
      personal_experience:
        'Experience with using terminal and PuTTY for remote server access and management.',
    },
    {
      name: 'Kubernetes',
      icon: SiKubernetes,
      personal_experience:
        'Experience with using terminal and PuTTY for remote server access and management.',
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
      Experienced in using frameworks/libraries/runtime environments:
      - Gradle
      - Tomcat
      - Jersey
      - TestNG
      - Maven
      - Ant (not a favorite one 😉)`,
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
      - Jest
      - jQuery
      - gulp.js`,
    },
    {
      name: 'Python',
      icon: FaPython,
      personal_experience: `Experienced in writing organizationally-wide libraries and scripting ecosystem, which are reused in build pipelines and local custom development tooling. Experiences in migration old->to->new Python codebases. Having experience of writing [Temporal](https://temporal.io/) workers in Python. Also, used Python as a core language for creation data testing framework for Elasticsearch and KPIs data proceeding derived from multiple data sources. More about my way of thinking of data proceeding you can read in my [Data Mesh](https://medium.com/@plozovikov/data-mesh-d12768970271) article.`,
      related_technologies: `
      Experienced in using frameworks/libraries:
      - Poetry
      - Pytest
      - Pandas
      - Temporal
      - MyPy
      - Ruff`,
    },
    {
      name: 'GoLang',
      icon: FaGolang,
      personal_experience: `Built knowledge on GoLang technology during creation deployment and data proceeding workflows in [Temporal](https://temporal.io/) technology in microservices-based system.`,
    },
    {
      name: 'Bash',
      icon: FaTerminal,
      personal_experience: `Having basic knowledge which allows me doing simple administrative things when working on remote VMs or during containers debugging. Also, used bash scripts for 1-click [ELK stack](https://www.elastic.co/elastic-stack) local dev installation.`,
    },
    {
      name: 'SQL',
      icon: TbSql,
      personal_experience: `Having basic experience of writing queries for MsSQL database import, export and backups which are part of an automated ecosystem.`,
    },
    {
      name: 'Groovy',
      icon: DiGroovy,
      personal_experience: `Gained experience from writing Jenkinsfiles and custom Gradle tasks logic.`,
    },
    {
      name: 'Algorithms',
      icon: FaGears,
      personal_experience: `Having experience in creating algorithms, including working with graphs. One of prominent projects where I implemented those knowledges are [BPMN Process Simulation](https://docs.boc-group.com/adonis/en/docs/16.0/user_manual/sim-000000/) and [BPMN Process Stepper](https://docs.boc-group.com/adonis/en/docs/16.0/user_manual/pst-000000/).`,
    },
    {
      name: 'HTML/CSS/SASS/...',
      icon: FaHtml5,
      personal_experience: `Having experience in creating simple html pages. One of examples is my personal [photo portofilo](https://photolozovikov-main.web.app/) and current CV.`,
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
