import React, { useState, useEffect } from 'react';

const items = [
  {
    title: 'Gestão Proativa de Incidentes',
    desc: 'Antecipe, detecte e resolva incidentes antes que impactem o negócio.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    details: 'Monitoramento contínuo, alertas inteligentes e análise preditiva para evitar falhas antes que causem impacto.',
    definition: 'Gestão Proativa de Incidentes consiste em antecipar possíveis falhas, monitorar continuamente sistemas e agir antes que pequenos problemas se tornem grandes incidentes. Utiliza ferramentas de observabilidade, automação de alertas e análise preditiva.',
    references: [
      { label: 'Artigo SRE Google', url: 'https://sre.google/sre-book/incident-response/' },
      { label: 'Blog DevOps', url: 'https://devops.com/' }
    ],
    success: [
      'Empresa X reduziu o tempo de resposta em 40% após implementar monitoramento proativo.',
      'Startup Y evitou downtime crítico com alertas inteligentes.'
    ]
  },
  {
    title: 'Resposta Ágil a Incidentes',
    desc: 'Ação rápida e coordenada para restaurar serviços críticos com o mínimo de impacto.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    details: 'Processos bem definidos, playbooks e equipe treinada para resposta eficiente a qualquer incidente.',
    definition: 'Resposta Ágil a Incidentes envolve a criação de playbooks, treinamentos e simulações para garantir que a equipe saiba exatamente como agir em situações críticas, minimizando o impacto ao negócio.',
    references: [
      { label: 'Incident Response Playbooks', url: 'https://www.pagerduty.com/resources/learn/incident-response-playbook/' }
    ],
    success: [
      'Empresa Z restaurou serviços críticos em minutos após adotar playbooks de resposta.',
      'Equipe ABC reduziu o impacto de incidentes com treinamentos regulares.'
    ]
  },
  {
    title: 'Automação Inteligente de Infraestrutura',
    desc: 'Reduza erros e ganhe escala com automação de provisionamento, monitoramento e manutenção.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    details: 'Scripts, pipelines e ferramentas para automatizar tarefas repetitivas e garantir consistência.',
    definition: 'Automação Inteligente de Infraestrutura utiliza ferramentas como Terraform, Ansible e CI/CD para provisionar, monitorar e manter ambientes de forma padronizada e eficiente.',
    references: [
      { label: 'Terraform Docs', url: 'https://www.terraform.io/docs' },
      { label: 'Ansible Docs', url: 'https://docs.ansible.com/' }
    ],
    success: [
      'Empresa Q acelerou o provisionamento de ambientes de horas para minutos.',
      'Redução de erros humanos em 90% após automação de deploys.'
    ]
  },
  {
    title: 'Consultoria em Confiabilidade e SRE',
    desc: 'Eleve a resiliência dos seus sistemas com práticas de Engenharia de Confiabilidade e SRE.',
    img: 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=400&q=80',
    details: 'Adoção de SLOs, SLIs, blameless postmortems e cultura de confiabilidade.',
    definition: 'Consultoria em Confiabilidade e SRE traz práticas como definição de SLOs, SLIs, postmortems sem culpa e cultura de melhoria contínua para elevar a resiliência dos sistemas.',
    references: [
      { label: 'SRE Fundamentals', url: 'https://sre.google/sre-book/service-level-objectives/' }
    ],
    success: [
      'Empresa W aumentou a disponibilidade de 99,5% para 99,99% após consultoria SRE.',
      'Redução de incidentes recorrentes com postmortems blameless.'
    ]
  },
  {
    title: 'Cloud & DevOps de Alta Performance',
    desc: 'Modernize sua infraestrutura com Cloud, CI/CD e cultura DevOps.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    details: 'Migração para cloud, integração contínua, entrega contínua e automação de deploys.',
    definition: 'Cloud & DevOps de Alta Performance envolve adoção de nuvem, pipelines de CI/CD, automação de deploys e cultura colaborativa para acelerar a entrega de valor.',
    references: [
      { label: 'DevOps na Prática', url: 'https://devops.com/devops-best-practices/' }
    ],
    success: [
      'Empresa M reduziu o tempo de deploy de dias para minutos com CI/CD.',
      'Adoção de cloud permitiu escalar sistemas globalmente.'
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
