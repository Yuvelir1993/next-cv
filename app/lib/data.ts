export async function fetchSkills(type: 'dev' | 'ops') {
  const opsSkills = [
    {
      name: 'AWS',
      image_url: '/public/technologies/aws.png',
      personal_experience:
        'Experience with deploying and managing applications using AWS services like EC2, S3, Lambda, and RDS.',
    },
    {
      name: 'Docker',
      image_url: '/public/technologies/docker.png',
      personal_experience:
        'Proficient in containerizing applications using Docker, creating Dockerfiles, and managing containers.',
    },
    {
      name: 'Kubernetes',
      image_url: '/public/technologies/kubernetes.png',
      personal_experience:
        'Skilled in orchestrating containerized applications with Kubernetes, setting up clusters, and managing workloads.',
    },
    {
      name: 'Terraform',
      image_url: '/public/technologies/terraform.png',
      personal_experience:
        'Expert in Infrastructure as Code (IaC) with Terraform, automating cloud infrastructure deployment.',
    },
    {
      name: 'Jenkins',
      image_url: '/public/technologies/jenkins.png',
      personal_experience:
        'Experience with continuous integration and continuous deployment (CI/CD) pipelines using Jenkins.',
    },
  ];

  const devSkills = [
    {
      name: 'Python',
      image_url: '/public/technologies/python.png',
      personal_experience:
        'Experienced in developing applications using Python for web development, data analysis, and scripting.',
    },
    {
      name: 'Golang',
      image_url: '/public/technologies/golang.png',
      personal_experience:
        'Skilled in building high-performance applications using Go, including web servers and microservices.',
    },
    {
      name: 'JavaScript/TypeScript',
      image_url: '/public/technologies/javascript.png',
      personal_experience:
        'Proficient in developing modern web applications using JavaScript and TypeScript, including frameworks like React and Node.js.',
    },
    {
      name: 'Java',
      image_url: '/public/technologies/java.png',
      personal_experience:
        'Experienced in developing enterprise-level applications using Java, including Spring and Hibernate.',
    },
    {
      name: 'Shell Scripting',
      image_url: '/public/technologies/shell.png',
      personal_experience:
        'Proficient in writing shell scripts for automating tasks and managing system operations.',
    },
  ];

  return type === 'ops' ? opsSkills : devSkills;
}
