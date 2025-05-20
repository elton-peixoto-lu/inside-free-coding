const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(cors());
app.use(express.json());

// Sua chave OpenRouter (NUNCA exponha no frontend)
const OPENROUTER_API_KEY = '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';

// Base de perguntas/respostas simuladas
const faqs = [
  { q: /o que é cloud|o que é computação em nuvem/i, a: "Cloud, ou computação em nuvem, é o uso de servidores remotos para armazenar, gerenciar e processar dados via internet." },
  { q: /quais serviços vocês oferecem/i, a: "Oferecemos consultoria em nuvem, engenharia de dados, observabilidade, automação e gestão de times." },
  { q: /como contratar|comercial/i, a: "Para contratar nossos serviços, basta entrar em contato pelo formulário ou WhatsApp. Nosso time comercial está à disposição!" },
  { q: /suporte|problema|erro/i, a: "Nosso suporte está disponível 24x7. Fale com Elton: +55 11 98309-0297 ou Raiti: 11 95970-6057." },
  { q: /segurança/i, a: "Trabalhamos com as melhores práticas de segurança em cloud, incluindo backups, criptografia e monitoramento contínuo." },
  { q: /backup/i, a: "Oferecemos soluções de backup automatizado e recuperação de desastres para garantir a segurança dos seus dados." },
  { q: /observabilidade/i, a: "Implementamos observabilidade completa: logs, métricas, tracing e alertas para garantir a saúde dos seus sistemas." },
  { q: /engenharia de dados/i, a: "Nossa equipe é especialista em pipelines de dados, ETL, data lakes e analytics em cloud." },
  { q: /gestão de times/i, a: "Ajudamos empresas a estruturar e gerenciar times de tecnologia de alta performance." },
  // Novas perguntas e respostas
  { q: /terraform|infraestrutura como código/i, a: "Utilizamos Terraform para provisionamento e gestão de infraestrutura como código, garantindo agilidade e rastreabilidade." },
  { q: /kubernetes|orquestração de containers/i, a: "Trabalhamos com Kubernetes para orquestração de containers, facilitando o deploy, escalabilidade e resiliência de aplicações." },
  { q: /monitoramento|prometheus|grafana/i, a: "Usamos Prometheus e Grafana para monitoramento avançado, dashboards customizados e alertas em tempo real." },
  { q: /ci\/?cd|integração contínua|deploy contínuo/i, a: "Implementamos pipelines de CI/CD para automação de testes, builds e deploys, usando ferramentas como GitHub Actions, GitLab CI e Jenkins." },
  { q: /aws|amazon web services/i, a: "Temos experiência avançada em AWS, incluindo EC2, S3, RDS, Lambda, IAM, VPC e muito mais." },
  { q: /azure/i, a: "Atuamos também com Microsoft Azure, incluindo App Services, Azure Functions, Cosmos DB, AKS e outros serviços." },
  { q: /google cloud|gcp/i, a: "Trabalhamos com Google Cloud Platform (GCP), BigQuery, Compute Engine, Cloud Functions, Kubernetes Engine e outros." },
  { q: /devops/i, a: "Oferecemos consultoria DevOps completa: automação, integração, entrega contínua, cultura colaborativa e ferramentas modernas." },
  { q: /migração para cloud|migrar para nuvem/i, a: "Realizamos projetos de migração para cloud, desde o planejamento até a execução e otimização de custos." },
  { q: /otimiza(ç|c)ão de custos?|cloud cost|cloud custos?|cloud cust|clod cost|cloud cots|custos? cloud|custos? nuvem|cloud custodian/i, a: "Ajudamos empresas a reduzir custos em cloud com análise de uso, rightsizing, reserva de instâncias e boas práticas de governança. Também trabalhamos com Cloud Custodian para automação de políticas e compliance em nuvem." },
  { q: /cloud custodian/i, a: "Cloud Custodian é uma ferramenta open source para automação de políticas de governança, segurança e compliance em ambientes de nuvem. Nós implementamos e damos suporte a essa solução para nossos clientes." },
  { q: /ferramentas que vocês usam|quais ferramentas/i, a: "Trabalhamos com ferramentas como Terraform, Ansible, Docker, Kubernetes, Prometheus, Grafana, GitHub Actions, Jenkins, AWS, Azure, GCP, Datadog, New Relic, entre outras." },
  { q: /automatização|automação/i, a: "Automatizamos processos de infraestrutura, deploy, monitoramento e resposta a incidentes para aumentar eficiência e confiabilidade." },
  { q: /consultoria/i, a: "Nossa consultoria cobre desde arquitetura de soluções, cloud, DevOps, segurança, observabilidade até gestão de times." },
  { q: /treinamento|workshop/i, a: "Oferecemos treinamentos e workshops personalizados em cloud, DevOps, automação, observabilidade e melhores práticas de TI." },
  { q: /documentação/i, a: "Entregamos documentação detalhada de todos os projetos, facilitando manutenção, auditoria e onboarding de novos membros." },
  { q: /suporte emergencial|plantão/i, a: "Disponibilizamos suporte emergencial e plantão para incidentes críticos, garantindo resposta rápida e eficaz." },
  { q: /prova de conceito|poc/i, a: "Desenvolvemos provas de conceito (PoC) para validar soluções técnicas antes de grandes investimentos." },
  { q: /cloud híbrida|multi-cloud/i, a: "Temos experiência em ambientes multi-cloud e cloud híbrida, integrando diferentes provedores e soluções." },
  { q: /compliance|lgpd|segurança de dados/i, a: "Ajudamos empresas a se adequarem à LGPD e outras normas de compliance, com foco em segurança e privacidade de dados." },
  { q: /ajuda|help|suporte|falar com humano|atendente|preciso de atendimento|preciso falar com alguém|quero falar com uma pessoa/i, a: (pergunta) => {
    const msg = encodeURIComponent(`Olá, preciso de ajuda: ${pergunta}`);
    return {
      type: 'human_support',
      title: '👤 Atendimento Humano',
      message: 'Fale agora com um especialista pelo canal de sua preferência:',
      buttons: [
        { label: '💬 WhatsApp Elton', url: `https://wa.me/5511083090297?text=${msg}` },
        { label: '💬 WhatsApp Raiti', url: `https://wa.me/5511959706057?text=${msg}` },
        { label: '✉️ E-mail', url: `mailto:contato@insidefreecoding.com?subject=Ajuda%20via%20site&body=${msg}` }
      ]
    };
  } },
  { q: /n(ú|u)mero( de contato)?|contato|telefone|whatsapp|n(ú|u)mero suporte|n(ú|u)mero para suporte|n(ú|u)mero do suporte/i, a: "Você pode falar com Elton: +55 11 98309-0297 ou Raiti: 11 95970-6057. Também pode enviar e-mail para contato@insidefreecoding.com." },
];

// Função para normalizar texto (remove acentos, caixa baixa, mantém espaços)
function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9 ]/g, ''); // mantém letras, números e espaço
}

// Função de similaridade simples (levenshtein ou includes)
function isSimilar(a, b) {
  a = normalize(a);
  b = normalize(b);
  // Se for substring direta, já retorna true
  if (a.includes(b) || b.includes(a)) return true;
  // Similaridade por distância de Levenshtein (simples)
  let m = [];
  for(let i=0;i<=b.length;i++){m[i]=[i];}
  for(let j=0;j<=a.length;j++){m[0][j]=j;}
  for(let i=1;i<=b.length;i++){
    for(let j=1;j<=a.length;j++){
      m[i][j]=b.charAt(i-1)==a.charAt(j-1)?m[i-1][j-1]:Math.min(m[i-1][j-1]+1,Math.min(m[i][j-1]+1,m[i-1][j]+1));
    }
  }
  return m[b.length][a.length]<=2; // Permite até 2 erros de digitação
}

function respostaSimulada(pergunta) {
  const perguntaNorm = normalize(pergunta);
  const palavrasPergunta = perguntaNorm.split(' ');
  for (const item of faqs) {
    // Testa regex original
    if (item.q.test(pergunta)) return typeof item.a === 'function' ? item.a(pergunta) : item.a;
    // Testa similaridade com cada palavra-chave da regex
    const palavras = item.q.source.split('|').map(s=>s.replace(/[^a-zA-Z0-9 ]/g, '').trim()).filter(Boolean);
    for (const palavra of palavras) {
      for (const palavraPerg of palavrasPergunta) {
        if (isSimilar(palavraPerg, palavra)) return typeof item.a === 'function' ? item.a(pergunta) : item.a;
      }
    }
  }
  return "Desculpe, não sei responder a essa pergunta, mas posso encaminhar para nosso time especializado.";
}

app.post('/api/ask', async (req, res) => {
  console.log('Requisição recebida em /api/ask');
  let question;
  try {
    question = req.body.question;
  } catch (parseErr) {
    console.error('Erro ao fazer parsing do body:', parseErr);
    res.status(400).json({ answer: 'Erro ao processar a requisição (body inválido).' });
    return;
  }
  const systemPrompt = `
Você é o assistente virtual da Inside Free Coding, uma empresa de engenharia de software, cloud, automação, observabilidade e gestão de times.
Fundada por Elton Tadeu Peixoto Luiz e Raiti Priscila, com mais de 13 anos de experiência em empresas como Nubank, DXC, Tivit, etc.
Serviços: consultoria em nuvem (AWS, Azure, GCP), DevOps, automação, observabilidade, engenharia de dados, gestão de times, treinamentos e compliance.
Contatos de suporte: WhatsApp Elton +55 11 98309-0297, WhatsApp Raiti 11 95970-6057, e-mail contato@insidefreecoding.com.
Se o usuário pedir ajuda, suporte, contato, número, telefone, whatsapp ou atendimento humano, forneça esses contatos diretamente.
Responda sempre de forma clara, profissional e objetiva.
`;
  console.log('Pergunta recebida:', question);

  // Se for atendimento humano, retorna imediatamente
  const sim = respostaSimulada(question);
  if (sim && typeof sim === 'object' && sim.type === 'human_support') {
    return res.json(sim);
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question }
        ]
      })
    });
    console.log('Status HTTP OpenRouter:', response.status);
    const data = await response.json();
    console.log('Resposta bruta OpenRouter:', JSON.stringify(data));
    if (!response.ok) {
      // Fallback para IA simulada
      if (typeof sim === 'object') {
        res.json(sim);
      } else {
        res.status(200).json({ answer: sim });
      }
      return;
    }
    let iaAnswer = data.choices?.[0]?.message?.content;
    if (!iaAnswer || iaAnswer.trim() === '') {
      // Se a IA não respondeu nada, use o agente simulado
      if (typeof sim === 'object') {
        return res.json(sim);
      } else {
        return res.json({ answer: sim });
      }
    }
    if (/ajuda|help|suporte|contato|n(ú|u)mero|telefone|whatsapp/i.test(question)) {
      const msg = encodeURIComponent(`Olá, preciso de ajuda: ${question}`);
      iaAnswer += `\n\nEntre em contato direto:\n` +
        `WhatsApp Elton: https://wa.me/5511983090297?text=${msg}\n` +
        `WhatsApp Raiti: https://wa.me/5511959706057?text=${msg}\n` +
        `E-mail: contato@insidefreecoding.com`;
    }
    res.json({ answer: iaAnswer });
  } catch (e) {
    console.error('Erro no proxy:', e);
    // Fallback para IA simulada
    if (typeof sim === 'object') {
      res.json(sim);
    } else {
      res.status(200).json({ answer: sim });
    }
  }
});

if (require.main === module) {
  // Só sobe o servidor se rodar diretamente: node proxy.js
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log('Proxy rodando na porta', PORT));
}

module.exports = app; 
