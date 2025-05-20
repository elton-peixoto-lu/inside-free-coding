import React from 'react';
import logo from '../components/logo.png';

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
        backgroundImage: `url(${logo}), url(${logo})`,
        backgroundSize: '120px 120px',
        backgroundPosition: '0 0, 60px 60px',
        backgroundRepeat: 'repeat',
        opacity: 1
      }}
    >
      <div className="absolute inset-0 bg-white opacity-80 pointer-events-none z-0" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-[#E94E1B]">Quem Somos</h2>
        <div className="bg-[#FFF3E6] text-[#E94E1B] italic px-6 py-4 rounded shadow font-medium text-base leading-snug max-w-2xl mx-auto mb-10">
          A Inside Free Coding nasceu para entregar engenharia de software de verdade: soluções robustas, responsáveis e enxutas, criadas por engenheiros que dominam o ciclo completo — da arquitetura à operação.<br /><br />
          Fundada por <b>Elton Tadeu Peixoto Luiz</b> e <b>Raiti Priscila</b>, engenheiros de software com experiência em empresas como Nubank, GrooveTech Code3, DXC, Tivit, Stefanini, Softvaro e Keggo, unimos conhecimento técnico profundo, visão de negócio e paixão por resolver problemas complexos.<br /><br />
          Mais de 13 anos de atuação prática, construindo sistemas escaláveis, confiáveis e seguros.<br /><br />
          Participando e engajando times 24x7, construindo resiliência, promovendo observabilidade e gerenciando equipes para garantir operações contínuas e resultados excepcionais.
        </div>
        {/* Nos Conheça */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch">
            <div className="flex-1 bg-white text-[#E94E1B] rounded-lg shadow p-6 transition-colors duration-300 hover:bg-[#FFF3E6] text-center font-semibold">
              Engenharia de software não é só código: é arquitetura, automação, confiabilidade e entrega contínua. Na Inside Free Coding, aplicamos práticas modernas de engenharia para transformar desafios em soluções escaláveis e seguras. Atuamos lado a lado com times 24x7, construindo resiliência, promovendo observabilidade e gerenciando equipes para garantir operações ininterruptas.
            </div>
            <div className="flex-1 bg-white text-[#E94E1B] rounded-lg shadow p-6 transition-colors duration-300 hover:bg-[#FFF3E6] text-center font-semibold">
              Fundada por <span className="font-semibold text-[#E94E1B]">Elton Tadeu Peixoto Luiz</span> e <span className="font-semibold text-[#E94E1B]">Raiti Priscila</span>, engenheiros de software apaixonados por tecnologia, automação e excelência. Nossa experiência em grandes empresas nos permite entregar resultados sólidos, com foco em valor real para o cliente. Lideramos times, promovemos cultura de engenharia e garantimos resiliência operacional 24x7.
            </div>
            <div className="flex-1 bg-white text-[#E94E1B] rounded-lg shadow p-6 transition-colors duration-300 hover:bg-[#FFF3E6] text-center flex items-center justify-center font-semibold">
              Mais de 13 anos de experiência prática em engenharia de software, cloud, automação e confiabilidade. Construímos sistemas que escalam, resistem a falhas e facilitam o crescimento do seu negócio, sempre engajando times, promovendo observabilidade e entregando resultados consistentes.
            </div>
          </div>
        </div>
        {/* Nossos Diferenciais */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-[#E94E1B]">Nossos Diferenciais</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {diferenciais.map((d, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded-lg shadow p-4 border border-gray-100">
                <span className="text-2xl text-[#E94E1B]">{d.icon}</span>
                <span className="text-gray-800">{d.text}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Tecnologias que dominamos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-[#E94E1B]">Tecnologias que dominamos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {tecnologias.map((t, i) => (
              <div key={i}>
                <span className="font-semibold text-[#E94E1B]">{t.categoria}:</span>
                {t.subtitulos ? (
                  <ul className="list-disc list-inside ml-4 text-gray-800">
                    {t.subtitulos.map((sub, j) => <li key={j}>{sub}</li>)}
                  </ul>
                ) : (
                  <ul className="list-disc list-inside ml-4 text-gray-800">
                    {t.itens.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Cloud Custodian */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-[#E94E1B] flex items-center gap-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline text-[#E94E1B]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
            Cloud Custodian
          </h3>
          <div className="bg-[#FFF3E6] rounded-lg shadow p-6 text-gray-800 text-base">
            <p className="mb-2">
              <b>Cloud Custodian</b> é uma ferramenta open source líder em automação de políticas de governança, segurança e compliance em ambientes de nuvem (AWS, Azure, GCP). Permite definir regras (em YAML) para identificar, corrigir e automatizar ações sobre recursos cloud, garantindo conformidade, economia e segurança.
            </p>
            <ul className="list-disc ml-6 mb-2">
              <li>Automação de políticas de compliance e segurança</li>
              <li>Eliminação automática de recursos não conformes</li>
              <li>Redução de custos com desligamento de recursos ociosos</li>
              <li>Auditoria e inventário de ambientes cloud</li>
              <li>Alertas e notificações em tempo real</li>
            </ul>
            <p className="mb-0">
              Na Inside Free Coding, implementamos e personalizamos Cloud Custodian para clientes que buscam governança robusta, automação de compliance e redução de riscos em cloud. Nossa experiência garante políticas eficientes, documentação clara e integração com pipelines de DevOps.
            </p>
          </div>
        </div>
        {/* Nossos valores */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-[#E94E1B]">Nossos valores</h3>
          <ul className="list-disc list-inside max-w-xl mx-auto text-gray-800">
            {valores.map((v, i) => <li key={i} className="text-[#E94E1B]">{v}</li>)}
          </ul>
        </div>
        {/* Cards dos profissionais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-start mt-12">
          {people.map((p) => (
            <div
              key={p.name}
              className="group w-64 mx-auto flex flex-col items-center cursor-pointer transition-all duration-300"
            >
              <div className="relative w-64 h-64 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-end">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:filter-none group-hover:scale-105 filter grayscale blur-sm"
                />
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-[#E94E1B] text-lg font-bold py-2 text-center group-hover:bg-[#FFF3E6] group-hover:text-[#E94E1B] transition-all">{p.name}</div>
              </div>
              {/* Detalhes expandem ao hover */}
              <div className="relative z-10 w-full p-4 bg-white bg-opacity-95 rounded-b-xl shadow transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-2 overflow-hidden">
                <div className="mb-2 text-sm text-[#E94E1B] font-semibold">{p.short}</div>
                <p className="text-gray-800 text-sm mb-3">{p.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-2">
                  {p.tecnologias.slice(0, 6).map((tech, i) => (
                    <span key={i} className="bg-[#FFE5D0] text-[#E94E1B] px-2 py-1 rounded text-xs font-semibold">{tech}</span>
                  ))}
                  {p.tecnologias.length > 6 && <span className="text-xs text-gray-500">+{p.tecnologias.length - 6} mais</span>}
                </div>
                <div className="flex justify-center gap-4 mt-2">
                  <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] hover:underline">LinkedIn</a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
