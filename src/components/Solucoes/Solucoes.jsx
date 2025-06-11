import React, { useState, useEffect } from 'react';
import gestaoIncidentesImg from '../../assets/gestao-proativa-incidentes.png';
import respostaIncidentesImg from '../../assets/resposta-agil-incidentes.png';
import automacaoInfraImg from '../../assets/automacao-inteligente-infraestrutura.png';
import confiabilidadeSreImg from '../../assets/confiabilidade-sre.png';
import cloudDevopsImg from '../../assets/cloud-devops-alta-performance.png';
import monitoramento24x7Img from '../../assets/monitoramento-24x7.png';
import sitesAltaPerformanceIaImg from '../../assets/sites-alta-performance-ia.png';
import appsNativosFlutterImg from '../../assets/apps-nativos-flutter.png';

const items = [
  {
    title: 'Gestão Proativa de Incidentes',
    desc: 'Antecipe, detecte e resolva incidentes antes que impactem o negócio.',
    img: gestaoIncidentesImg,
    details: 'Monitoramento contínuo, alertas inteligentes e análise preditiva para evitar falhas antes que causem impacto.',
    definition: 'Gestão Proativa de Incidentes consiste em antecipar possíveis falhas, monitorar continuamente sistemas e agir antes que pequenos problemas se tornem grandes incidentes. Utiliza ferramentas de observabilidade, automação de alertas e análise preditiva.',
    references: [
      { label: 'Google SRE Book – Incident Response', url: 'https://sre.google/sre-book/incident-response/' },
      { label: 'Netflix Tech Blog', url: 'https://netflixtechblog.com/' }
    ],
    success: [
      'O Google reduziu o tempo de resposta a incidentes em larga escala com o uso de SRE, monitoramento proativo e automação de alertas.',
      'A Netflix utiliza monitoramento contínuo e automação para detectar e corrigir falhas antes que impactem os usuários.'
    ]
  },
  {
    title: 'Resposta Ágil a Incidentes',
    desc: 'Ação rápida e coordenada para restaurar serviços críticos com o mínimo de impacto.',
    img: respostaIncidentesImg,
    details: 'Processos bem definidos, playbooks e equipe treinada para resposta eficiente a qualquer incidente.',
    definition: 'Resposta Ágil a Incidentes envolve a criação de playbooks, treinamentos e simulações para garantir que a equipe saiba exatamente como agir em situações críticas, minimizando o impacto ao negócio.',
    references: [
      { label: 'PagerDuty & Box – Case Study', url: 'https://www.pagerduty.com/customers/box/' },
      { label: 'Slack Engineering Blog', url: 'https://slack.engineering/' }
    ],
    success: [
      'A Box reduziu o tempo de resolução de incidentes críticos em 50% com playbooks e resposta coordenada usando PagerDuty.',
      'A Slack utiliza treinamentos regulares e simulações para garantir resposta rápida a incidentes, minimizando impacto ao negócio.'
    ]
  },
  {
    title: 'Automação Inteligente de Infraestrutura',
    desc: 'Reduza erros e ganhe escala com automação de provisionamento, monitoramento e manutenção.',
    img: automacaoInfraImg,
    details: 'Scripts, pipelines e ferramentas para automatizar tarefas repetitivas e garantir consistência.',
    definition: 'Automação Inteligente de Infraestrutura utiliza ferramentas como Terraform, Ansible e CI/CD para provisionar, monitorar e manter ambientes de forma padronizada e eficiente.',
    references: [
      { label: 'HashiCorp Case Studies', url: 'https://www.hashicorp.com/en/case-studies' },
      { label: 'Shopify Engineering Blog', url: 'https://shopify.engineering/' }
    ],
    success: [
      'A Starbucks automatizou o provisionamento e a segurança de mais de 100.000 dispositivos de borda usando HashiCorp Vault e Terraform.',
      'A Shopify automatizou deploys e reduziu erros humanos em 90% com pipelines de CI/CD.'
    ]
  },
  {
    title: 'Consultoria em Confiabilidade e SRE',
    desc: 'Eleve a resiliência dos seus sistemas com práticas de Engenharia de Confiabilidade e SRE.',
    img: confiabilidadeSreImg,
    details: 'Adoção de SLOs, SLIs, blameless postmortems e cultura de confiabilidade.',
    definition: 'Consultoria em Confiabilidade e SRE traz práticas como definição de SLOs, SLIs, postmortems sem culpa e cultura de melhoria contínua para elevar a resiliência dos sistemas.',
    references: [
      { label: 'SLO Engineering Case Studies – Google SRE (Evernote & Home Depot)', url: 'https://landing.google.com/sre/workbook/chapters/slo-engineering-case-studies/' },
      { label: "How Lowe's meets customer demand with Google SRE practices", url: 'https://cloud.google.com/blog/products/devops-sre/how-lowes-leverages-google-sre-practices' }
    ],
    success: [
      'A Home Depot implementou SLOs e cultura SRE, melhorando a confiabilidade e a comunicação entre times de desenvolvimento e operações.',
      "A Lowe's aumentou a velocidade e confiabilidade das entregas adotando práticas SRE do Google Cloud."
    ]
  },
  {
    title: 'Cloud & DevOps de Alta Performance',
    desc: 'Modernize sua infraestrutura com Cloud, CI/CD e cultura DevOps.',
    img: cloudDevopsImg,
    details: 'Migração para cloud, integração contínua, entrega contínua e automação de deploys.',
    definition: 'Cloud & DevOps de Alta Performance envolve adoção de nuvem, pipelines de CI/CD, automação de deploys e cultura colaborativa para acelerar a entrega de valor.',
    references: [
      { label: 'Nubank Engineering Blog', url: 'https://building.nubank.com.br/' },
      { label: 'Netflix Tech Blog', url: 'https://netflixtechblog.com/' }
    ],
    success: [
      'O Nubank reduziu o tempo de deploy de dias para minutos com pipelines de CI/CD e automação em cloud.',
      'A Netflix é referência mundial em cloud, automação e DevOps, acelerando entregas e escalando sistemas globalmente.'
    ]
  },
  {
    title: 'Monitoramento 24x7',
    desc: 'Garanta a saúde e a disponibilidade contínua dos seus sistemas com nosso serviço de Monitoramento 24x7.',
    img: monitoramento24x7Img,
    details: 'Equipe de especialistas e ferramentas automatizadas vigiam sua infraestrutura de TI dia e noite, identificando e respondendo a anomalias antes que elas se transformem em problemas críticos.',
    definition: 'Com visibilidade completa sobre o desempenho, métricas e alertas em tempo real, você tem a tranquilidade de saber que seu negócio está sempre operacional e protegido contra interrupções inesperadas.',
    references: [
      { label: 'Datadog Customer Stories', url: 'https://www.datadoghq.com/customers/' }
    ],
    success: [
      'Empresas globais como Forbes, Toyota, Mercado Libre, Uber Freight e Washington Post utilizam Datadog para monitoramento 24x7, garantindo alta disponibilidade, resposta rápida a incidentes e visibilidade total sobre a infraestrutura e aplicações.'
    ]
  },
  {
    title: 'Sites de Alta Performance com IA',
    desc: 'Desenvolvemos sites de alta performance para o seu negócio, projetados para escalar e se adaptar ao seu crescimento.',
    img: sitesAltaPerformanceIaImg,
    details: 'Integramos inteligência artificial (IA) para oferecer experiências personalizadas aos seus clientes, automatizar processos e gerar insights valiosos.',
    definition: 'Tenha um site que não apenas impressiona, mas também aprende e evolui junto com sua empresa, utilizando IA para personalização, automação e análise avançada.',
    references: [
      { label: 'Netflix Tech Blog', url: 'https://netflixtechblog.com/' },
      { label: 'Shopify Engineering Blog', url: 'https://shopify.engineering/' }
    ],
    success: [
      'A Netflix aumentou o engajamento dos clientes com personalização baseada em IA.',
      'A Shopify usa IA para recomendações e otimização de performance em lojas online.'
    ]
  },
  {
    title: 'Apps Nativos com Flutter',
    desc: 'Desenvolvemos aplicativos nativos para Android e iOS a partir de uma única base de código com Flutter.',
    img: appsNativosFlutterImg,
    details: 'Desenvolvimento mais rápido, custos reduzidos e experiência de usuário consistente e de alta performance em ambas as plataformas.',
    definition: 'Entregamos apps modernos, escaláveis e prontos para conquistar o mercado, utilizando Flutter para garantir agilidade e qualidade.',
    references: [
      { label: 'Flutter Showcase – Nubank', url: 'https://flutter.dev/showcase' },
      { label: 'Flutter Showcase – BMW', url: 'https://flutter.dev/showcase' }
    ],
    success: [
      'O Nubank lançou simultaneamente apps para Android e iOS com Flutter, acelerando o time-to-market.',
      'A BMW reduziu custos e manteve alta performance usando Flutter para apps globais.'
    ]
  }
];

export function Solucoes({ onContatoClick }) {
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const item = items[index];

  return (
    <section id="solucoes" className="py-16 bg-[#223040]" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#F9C59C] drop-shadow">Soluções</h2>
        <div className="relative flex flex-col items-center justify-center">
          <div id={[
            'gestao-incidentes',
            'resposta-incidentes',
            'automacao-infra',
            'confiabilidade-sre',
            'cloud-devops',
          ][index]} className="w-full max-w-md h-64 rounded-xl overflow-hidden shadow-lg mb-4 transition-all duration-700 bg-[#223040] bg-gradient-to-br from-[#223040] to-[#1a2533] relative">
            <img src={item.img} alt={item.title} className="object-cover w-full h-full opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#223040] via-transparent to-transparent opacity-80" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#E94E1B]">{item.title}</h3>
          <p className="text-white mb-4">{item.desc}</p>
          <div className="flex justify-center gap-2 mt-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 shadow-md focus:outline-none
                  ${i === index ? 'bg-[#E94E1B] border-[#E94E1B] shadow-lg scale-110' : 'bg-[#F9C59C] border-[#F9C59C] opacity-80 hover:opacity-100 hover:scale-105'}`}
                aria-label={`Ir para solução ${i + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Menu de cards de soluções */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {items.map((sol, i) => (
            <button
              key={sol.title}
              onClick={() => setModal(sol)}
              className="bg-[#1a2533] border-2 border-[#223040] rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center focus:outline-none hover:border-[#E94E1B] hover:bg-[#223040] group"
            >
              <img src={sol.img} alt={sol.title} className="w-20 h-20 object-cover rounded mb-2 group-hover:opacity-80 transition" />
              <span className="font-semibold text-lg mb-1 text-[#F9C59C] group-hover:text-[#E94E1B]">{sol.title}</span>
              <span className="text-[#F9C59C] text-sm text-center group-hover:text-white">{sol.desc}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => { console.log('Botão Entrar em contato clicado'); onContatoClick && onContatoClick(); }}
            className="bg-[#E94E1B] text-white px-8 py-3 rounded shadow-lg hover:bg-[#F9C59C] hover:text-[#223040] transition-all font-semibold text-lg border-2 border-[#E94E1B] focus:outline-none"
          >
            Entrar em contato
          </button>
        </div>
        {/* Modal de detalhes da solução */}
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#223040] bg-opacity-90">
            <div className="bg-[#1a2533] rounded-lg shadow-2xl max-w-md w-full p-8 relative border-2 border-[#F9C59C]">
              <button onClick={() => setModal(null)} className="absolute top-2 right-2 text-[#F9C59C] hover:text-[#E94E1B] text-2xl">&times;</button>
              <img src={modal.img} alt={modal.title} className="w-24 h-24 object-cover rounded mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center text-[#F9C59C] drop-shadow">{modal.title}</h3>
              <p className="text-[#F9C59C] mb-4 text-center">{modal.details}</p>
              <div className="mb-4 text-left">
                <h4 className="font-semibold text-[#E94E1B] mb-1">Aplique isso em seu negócio:</h4>
                <p className="text-[#F9C59C] text-sm mb-2">{modal.definition}</p>
                <h4 className="font-semibold text-[#E94E1B] mb-1">Referências:</h4>
                <ul className="list-disc list-inside text-sm mb-2">
                  {modal.references.map(ref => (
                    <li key={ref.url}><a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">{ref.label}</a></li>
                  ))}
                </ul>
                <h4 className="font-semibold text-[#E94E1B] mb-1">Casos de sucesso:</h4>
                <ul className="list-disc list-inside text-sm">
                  {modal.success.map((s, i) => <li key={i} className="text-[#F9C59C]">{s}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
