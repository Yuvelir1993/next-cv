export async function fetchSkills() {
  return [
    {
      name: 'AWS',
      image_url: '/public/technologies/aws.png',
      personal_experience: 'Experience with deploying and managing applications using AWS services like EC2, S3, Lambda, and RDS.',
    },
    {
      name: 'Docker',
      image_url: '/public/technologies/docker.png',
      personal_experience: 'Proficient in containerizing applications using Docker, creating Dockerfiles, and managing containers.',
    },
    {
      name: 'Kubernetes',
      image_url: '/public/technologies/kubernetes.png',
      personal_experience: 'Skilled in orchestrating containerized applications with Kubernetes, setting up clusters, and managing workloads.',
    },
    {
      name: 'Terraform',
      image_url: '/public/technologies/terraform.png',
      personal_experience: 'Expert in Infrastructure as Code (IaC) with Terraform, automating cloud infrastructure deployment.',
    },
    {
      name: 'Jenkins',
      image_url: '/public/technologies/jenkins.png',
      personal_experience: 'Experience with continuous integration and continuous deployment (CI/CD) pipelines using Jenkins.',
    },
  ];
}