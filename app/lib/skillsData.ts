import { IconType } from 'react-icons';
import { FaAws, FaDocker, FaJenkins, FaPython, FaJsSquare, FaJava, FaTerminal, FaGitAlt } from 'react-icons/fa';
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
      personal_experience: `Good knowledge of Linux basics and shell scripting, which allows to confidently operate in containerized environments. Having experience only with Ubuntu distribution.`,
    },
    {
      name: 'ELK Stack',
      icon: SiElasticsearch,
      personal_experience: `Experience with the ELK Stack (Elasticsearch, Logstash, Kibana, Beats). Enabled in [BOC Group](https://www.boc-group.com/en/) for:
      1️⃣ log data analysis collected from distributed teams Jenkins instances to derive General-level and KPIs measurements. Have experience of building businsess-valuable dashboards and using Elasticsearch queries. Have experience with data pipelines automated tests by creating custom framework driven by declarative 'yml' test cases file. Having experience with automating local end-to-end ELK + Jenkins set up with automatic raw data ingestion and data pipelines tests to enable even unexperienced developers evolve data pipelines.
      2️⃣ microservices-based system for collecting logs.`,
    },
    {
      name: 'Prometheus/Grafana',
      icon: SiPrometheus,
      personal_experience: `Experienced with Prometheus and Grafana for collecting metrics from containers and VMs and building businsess-valuable dashboards.`,
    },
    {
      name: 'OpenTelemetry',
      icon: SiOpentelemetry,
      personal_experience: `Experienced with OpenTelemetry for collecting observability signals in polyglot distributed system.`,
    },
    {
      name: 'Jaeger',
      icon: SiJaeger,
      personal_experience: `Experienced with Jaeger for collecting distributed traces.`,
    },
    {
      name: 'Fluentbit',
      icon: SiFluentbit,
      personal_experience: `Experienced with Fluentbit to collect containers logs for ELK integration.`,
    },
    {
      name: 'SonarQube',
      icon: SiSonarqube,
      personal_experience: `Enabled SonarQube + SonarLint in [BOC Group](https://www.boc-group.com/en/) organization for build/test pipelines executed in different VM environments with all necessary docu/guides for all BOC developers.`,
    },
    {
      name: 'Docker',
      icon: FaDocker,
      personal_experience: `Able to set up dockerized environments for both microservices and single service solutions. Able to debug, troubleshoot and optimize images for efficient resources usage.`,
    },
    {
      name: 'Jenkins',
      icon: FaJenkins,
      personal_experience: `Experienced with CI/CD pipelines using Jenkins. Proficient in modelling and creation pipelines. Experienced in creation and maintaining pipelines-as-a-product for organizational-wide reusing with integration into the whole plugins, libraries and services ecosystem.`,
    },
    {
      name: 'JFrog Artifactory',
      icon: SiJfrog,
      personal_experience: `Experienced with [JFrog Artifactory](https://jfrog.com/artifactory/) for artifact management and repository hosting.`,
    },
    {
      name: 'Rhodecode',
      icon: IoIosGitBranch,
      personal_experience: `Experienced with [Rhodecode](https://rhodecode.com/) sourcecode platform.`,
    },
    {
      name: 'Git',
      icon: FaGitAlt,
      personal_experience: `Experienced with version control using Git, managing branches, and collaborating on code. Integrated git hooks and reusable git scripts into platform layer Gradle plugins and miscellaneous libraries.`,
    },
    {
      name: 'Mercurial',
      icon: SiMercurial,
      personal_experience: `Experienced with Mercurial for version control, similar to Git. Integrated reusable hg scripts into platform layer Gradle plugins and miscellaneous libraries.`,
    },
    {
      name: 'Kafka',
      icon: SiApachekafka,
      personal_experience: `Integrated Apache Kafka into ELK stack for Beats->to->Logstash data streaming. Having understanding of event-driven architecture and basic Kafka capabilities. A bit of experience with basic Kafka cmd tools`,
    },
    {
      name: 'Redis',
      icon: SiRedis,
      personal_experience: `Low experience of Redis usage in microservices-based system.`,
    },
    {
      name: `Terminals (VMs access), PuTTY (hosts access), ...`,
      icon: BsTerminalSplit,
      personal_experience: `Experience with using terminal toolings for remote server access and management.`,
    },
    {
      name: 'Terraform',
      icon: SiTerraform,
      personal_experience: `Experienced with simple AWS infrastructure set ups. Good concepts knowledge.`,
    },
    {
      name: 'Nomad',
      icon: SiNomad,
      personal_experience:
        'Experience with using [Hashicorp Nomad](https://www.nomadproject.io/) for managing End-To-End products deployments like [ADONIS](https://www.boc-group.com/en/adonis/), [ADOIT](https://www.boc-group.com/en/adoit/) or [ADOGRC](https://www.boc-group.com/pl/).',
    },
    {
      name: 'Saltstack',
      icon: GrDocumentConfig,
      personal_experience: `A bit experienced in writing and executing Salt statements. Understanding of main [SaltStack](https://saltproject.io/index.html) concepts and downsides.`,
    },
    {
      name: 'AWS',
      icon: FaAws,
      personal_experience: `Basic knowledge of Cloud Computing Fundamentals. 🚀 Currently, one of the main experience achieving goals for 2024.

      Only prototyping experience with:
      - IAM
      - EC2
      - EC2 Builder
      - ECR
      - S3`,
    },
    {
      name: 'Kubernetes',
      icon: SiKubernetes,
      personal_experience: 'Only basic knowledge of main concepts. 🚀 Currently, one of the main experience achieving goals for 2024.',
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
    { id: 1, title: 'EDU Devstyle - Droga Nowoczesnego Architekta' },
    { id: 2, title: 'EDU Devstyle - Legacy Fighter' },
    { id: 3, title: 'LinuxFoundationX LFS101x' },
    { id: 4, title: 'Advanced CSS Concepts - Microsoft - DEV218x' },
    { id: 5, title: 'Introduction to Bootstrap - Microsoft - DEV203x' },
    {
      id: 6,
      title: 'Introduction to HTML and JavaScript - Microsoft - DEV211.1x',
    },
    {
      id: 7,
      title: 'HTML5 Coding Essentials and Best Practices - W3Cx - HTML5.1x',
    },
    { id: 8, title: 'JavaScript Introduction - W3Cx' },
    { id: 9, title: 'Java Fundamentals: Collections - by Richard Warburton' },
    {
      id: 10,
      title: 'Nature, in Code: Biology in JavaScript - EPFLx - NiC1.0x',
    },
    { id: 11, title: 'Programming for the Web with JavaScript - PennX - SD4x' },
    { id: 12, title: 'Responsive Images by GOOGLE - Udacity' },
    { id: 13, title: 'Small courses on HackerRank and CodeAcademy' },
    { id: 14, title: 'Linux Journey from https://linuxjourney.com/' },
  ];
}

export async function fetchReadBooks() {
  return [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
    { id: 2, title: 'Clean Architecture', author: 'Robert C. Martin' },
    { id: 3, title: 'Modern Operating Systems', author: 'Andrew S. Tanenbaum' },
    {
      id: 4,
      title: 'Working Effectively with Legacy Code',
      author: 'Michael Feathers',
    },
    { id: 5, title: 'Modular JavaScript', author: 'Nicolas Bevacqua' },
    { id: 6, title: 'Moder JavaScript', author: 'Nicolas Bevacqua' },
    { id: 7, title: 'JavaScript. Patterns', author: 'Stoyan Stefanov' },
    {
      id: 8,
      title: 'The philosophy of DevOps. The Art of IT',
      author: 'Jennifer Davis, Catherine Daniels',
    },
    {
      id: 9,
      title: 'The Phoenix Project: A Novel about It, Devops, and Helping Your Business Win',
      author: 'Gene Kim, Kevin Behr, George Spafford',
    },
    { id: 10, title: 'The Unicorn Project', author: 'Gene Kim' },
    {
      id: 11,
      title: 'The Goal: A Process of Ongoing Improvement',
      author: 'Eliyahu M. Goldratt, Jeff Cox',
    },
    {
      id: 12,
      title: 'The Pragmatic Programmer',
      author: 'David Thomas, Andrew Hunt',
    },
    {
      id: 13,
      title: 'Cloud Native Architecture',
      author: 'Shivakumar R. Goniwada',
    },
    { id: 14, title: 'Data Mesh', author: 'Zhamak Dehghani' },
    {
      id: 15,
      title: 'Sistributed Systems',
      author: 'Maarten Van Steen, Andrew S.Tanenbaum',
    },
    { id: 16, title: 'Docker Deep Dive', author: 'Nigel Poulton' },
    { id: 17, title: 'How Linux Works', author: 'Brian Ward' },
    { id: 18, title: 'Practical OpenTelemetry', author: 'Daniel Gomez Blanco' },
    {
      id: 19,
      title: 'The Pragmatic Programmer',
      author: 'David Thomas, Andrew Hunt',
    },
  ];
}
