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

const iconMap: { [key: string]: React.ElementType } = {
  AWS: FaAws,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  Jenkins: FaJenkins,
  Python: FaPython,
  Golang: FaGolang,
  JavaScript: FaJsSquare,
  Java: FaJava,
  Bash: FaTerminal,
};

export const getIcon = (name: string): React.ElementType | null => {
  return iconMap[name] || null;
};
