import React from 'react';

const people = [
  {
    name: 'Elton Tadeu Peixoto Luiz',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    short: 'Engenheiro de Software, Fundador',
    bio: 'Mais de 13 anos em tecnologia. Experiência em Nubank, GrooveTech Code3, DXC, Tivit, Stefanini, Softvaro, Keggo. Foco em cloud, automação, engenharia de plataforma e confiabilidade.',
    linkedin: 'https://www.linkedin.com/in/eltonpeixoto/',
    github: 'https://github.com/eltonpeixoto',
    tecnologias: [
      'Python', 'Go', 'Java', 'Shell Script',
      'AWS', 'Terraform', 'Pulumi',
      'Grafana', 'Prometheus', 'Zabbix', 'Dynatrace',
      'Kubernetes', 'Tekton',
      'CI/CD', 'Bitbucket Pipelines', 'GitHub Workflows',
      'Gestão de times 24x7', 'Gestão de crises', 'Engenharia de plataformas',
      'Implantação de ferramentas de observabilidade'
    ]
  },
  {
    name: 'Raiti',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    short: 'Engenheiro de Confiabilidade e DevOps',
    bio: 'Focado em resiliência, automação, inovação em infraestrutura e liderança técnica em comunidades. Mentor e produtor de conhecimento aplicado ao dia a dia.',
    linkedin: 'https://www.linkedin.com/in/raiti/',
    github: 'https://github.com/raiti',
    tecnologias: [
      'Clojure', 'Python', 'Go',
      'AWS', 'Terraform',
      'Prometheus', 'Grafana', 'Dynatrace',
      'Kubernetes', 'Tekton',
      'CI/CD', 'Bitbucket Pipelines', 'GitHub Workflows',
      'Gestão de times 24x7', 'Gestão de crises', 'Engenharia de plataformas',
      'Implantação de ferramentas de observabilidade'
    ]
  },
];

const diferenciais = [
  { icon: '🛠', text: 'Pipelines otimizados: Integrações com Bitbucket Pipelines, AWS ECR e ECS, com foco em automação de deploys zero-downtime.' },
  { icon: '🌐', text: 'Governança em nuvem: Visualização de organizações AWS e unidades com ferramentas de topologia e compliance.' },
  { icon: '🚀', text: 'Eficiência com segurança: Soluções que aceleram times de produto sem comprometer práticas de segurança ou compliance.' },
  { icon: '👥', text: 'Cultura técnica sólida: Liderança ativa em comunidades técnicas, mentoria e produção de conhecimento aplicado ao dia a dia.' },
];

const tecnologias = [
  { categoria: 'Linguagens', itens: ['Python', 'Go', 'Clojure', 'Java', 'Shell Script'] },
  { categoria: 'Cloud', itens: ['AWS (ECS, ECR, Lambda, S3, CloudFormation, CodeCommit, CodePipeline)', 'Azure', 'GCP'] },
  { categoria: 'Infraestrutura como Código', itens: ['Terraform', 'Pulumi'] },
  { categoria: 'Observabilidade', itens: ['Grafana', 'Prometheus', 'Zabbix', 'Dynatrace', 'Implantação de ferramentas de observabilidade'] },
  { categoria: 'Orquestração', itens: ['Kubernetes', 'Tekton'] },
  { categoria: 'DevOps', itens: ['CI/CD', 'GitHub Workflows', 'Bitbucket Pipelines'] },
  {
    categoria: 'Engenharia de Plataformas',
    subtitulos: [
      'IDP (Internal Developer Platform)',
      'Automação de ambientes',
      'Self-service para times de produto',
      'Catálogo de serviços',
      'Observabilidade integrada',
      'Gestão de permissões e acesso',
      'Provisionamento automatizado',
    ]
  },
  { categoria: 'Gestão', itens: ['Gestão de times 24x7', 'Gestão de crises'] },
];

const valores = [
  'Clareza acima de complexidade',
  'Autonomia com responsabilidade',
  'Código que ensina e resolve',
  'Governança como cultura, não como obstáculo',
];

export default function QuemSomosPage() {
  return (
    <section
      className="py-16 min-h-[70vh] bg-white relative overflow-hidden"
      style={{
        backgroundImage: `url('/logo.png'), url('/logo.png')`,
        backgroundSize: '120px 120px',
        backgroundPosition: '0 0, 60px 60px',
        backgroundRepeat: 'repeat',
        opacity: 1
      }}
    >
      <div className="absolute inset-0 bg-white opacity-80 pointer-events-none z-0" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-[#E94E1B]">Sobre Nós</h2>
        <div className="bg-[#FFF3E6] text-[#E94E1B] italic px-6 py-4 rounded shadow font-medium text-base leading-snug max-w-2xl mx-auto mb-10">
          Somos uma equipe apaixonada por tecnologia, inovação e excelência em engenharia de software. Nosso objetivo é entregar soluções robustas, eficientes e escaláveis, sempre com foco nas necessidades dos nossos clientes. Acreditamos em colaboração, aprendizado contínuo e no poder da tecnologia para transformar negócios e impactar positivamente a sociedade.<br /><br />
          Nossa missão é simplificar o complexo, promover autonomia e entregar resultados que realmente fazem a diferença. Estamos prontos para enfrentar desafios e construir o futuro junto com você.
        </div>
      </div>
    </section>
  );
} 
