import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// Novo componente reutilizável para ações do post
function BlogPostActions({ title, date, slug, fontSize, setFontSize, yamlRef, onCopyYAML, contentText }) {
  // PDF
  function handleDownloadPDF() {
    import('jspdf').then(jsPDFModule => {
      const jsPDF = jsPDFModule.default;
      const doc = new jsPDF();
      let y = 15;
      doc.setFontSize(18);
      doc.setTextColor('#E94E1B');
      doc.text(title, 10, y);
      y += 10;
      doc.setFontSize(12);
      doc.setTextColor('#333');
      doc.text(`Autor: Elton Peixoto`, 10, y);
      y += 7;
      if (date) {
        doc.text(`Data: ${date}`, 10, y);
        y += 7;
      }
      doc.setFontSize(10);
      doc.setTextColor('#111');
      // Conteúdo real do artigo
      const lines = (contentText || 'Conteúdo do artigo disponível no site.').split('\n');
      lines.forEach(line => {
        if (y > 270) { doc.addPage(); y = 15; }
        doc.text(line, 10, y); y += 7;
      });
      doc.save(`${slug || 'artigo'}.pdf`);
    });
  }
  // Reactions
  const [reactions, setReactions] = React.useState({ like: 0, love: 0, clap: 0, think: 0 });
  function handleReact(type) {
    setReactions(r => ({ ...r, [type]: r[type] + 1 }));
  }
  return (
    <div className="flex flex-wrap gap-2 items-center mt-4 mb-4">
      <button onClick={() => setFontSize(f => Math.max(0.8, f - 0.1))} className="bg-[#E94E1B] text-white px-2 py-1 rounded text-xs font-semibold hover:bg-orange-600 transition-colors">A-</button>
      <button onClick={() => setFontSize(f => Math.min(1.5, f + 0.1))} className="bg-[#E94E1B] text-white px-2 py-1 rounded text-xs font-semibold hover:bg-orange-600 transition-colors">A+</button>
      {onCopyYAML && <button onClick={onCopyYAML} className="bg-[#E94E1B] text-white px-2 py-1 rounded text-xs font-semibold hover:bg-orange-600 transition-colors">Copiar YAML</button>}
      <a href={`https://github.com/elton-peixoto-lu/articles/blob/main/${slug}.md`} target="_blank" rel="noopener noreferrer" className="bg-[#E94E1B] text-white px-3 py-1 rounded text-xs font-semibold hover:bg-orange-600 transition-colors">Ver no GitHub</a>
      <a href={`https://github.com/elton-peixoto-lu/articles/raw/main/${slug}.md`} download className="bg-[#E94E1B] text-white px-3 py-1 rounded text-xs font-semibold hover:bg-orange-600 transition-colors">Download</a>
      <button onClick={handleDownloadPDF} className="bg-[#E94E1B] text-white px-3 py-1 rounded text-xs font-semibold hover:bg-orange-600 transition-colors">PDF</button>
      <div className="flex gap-2 ml-4">
        <button onClick={() => handleReact('like')} className="hover:scale-125 transition-transform text-2xl" aria-label="Curtir">👍 <span className="text-base">{reactions.like}</span></button>
        <button onClick={() => handleReact('love')} className="hover:scale-125 transition-transform text-2xl" aria-label="Amei">❤️ <span className="text-base">{reactions.love}</span></button>
        <button onClick={() => handleReact('clap')} className="hover:scale-125 transition-transform text-2xl" aria-label="Aplaudir">👏 <span className="text-base">{reactions.clap}</span></button>
        <button onClick={() => handleReact('think')} className="hover:scale-125 transition-transform text-2xl" aria-label="Refletir">🤔 <span className="text-base">{reactions.think}</span></button>
      </div>
    </div>
  );
}

export function BlogPost({slug,title,excerpt, date}){
  // Zoom de fonte
  const [fontSize, setFontSize] = useState(1);
  // Copiar YAML
  const yamlRef = useRef();
  const handleCopy = () => {
    if (yamlRef.current) {
      navigator.clipboard.writeText(yamlRef.current.textContent);
    }
  };
  // Sumário
  const toc = [
    { id: 'intro', label: '1. Introdução' },
    { id: 'mandatory', label: '2. Mandatory Configurations e Tagging Estratégico' },
    { id: 'custodian', label: '3. Uso de Cloud Custodian' },
    { id: 'org', label: '4. Organizações e Baselines' },
    { id: 'scp', label: '5. Controle de Acesso e SCPs' },
    { id: 'cases', label: '6. Casos Reais' },
    { id: 'beneficios', label: '7. Benefícios para o Negócio' },
    { id: 'conclusao', label: '8. Conclusão' },
    { id: 'refs', label: 'Referências' },
  ];
  if(slug==='well-architected-interno'){
    return (
      <article className="mb-10 border-b pb-8">
        <h3 className="text-2xl font-bold text-[#E94E1B] mb-2">{title}</h3>
        <div className="text-sm text-gray-700 mb-2">Autor: <span className="font-semibold text-[#E94E1B]">Elton Peixoto</span></div>
        <BlogPostActions title={title} date={date} slug={slug} fontSize={fontSize} setFontSize={setFontSize} yamlRef={yamlRef} onCopyYAML={handleCopy} />
        <nav className="mb-6 bg-[#FFE5D0] rounded p-3 text-sm max-w-2xl mx-auto">
          <span className="font-bold text-[#E94E1B]">Sumário:</span>
          <ul className="flex flex-wrap gap-3 mt-2">
            {toc.map(t=>(
              <li key={t.id}><a href={`#${t.id}`} className="text-[#E94E1B] hover:underline font-semibold">{t.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="bg-[#FFF3E6] rounded-lg shadow p-6 mb-4 text-left max-w-2xl mx-auto relative overflow-x-auto" style={{fontSize: `${fontSize}em`}}>
          <div className="prose max-w-none text-gray-800">
            <p className="mb-2"><b>Resumo:</b> Este artigo apresenta uma abordagem para implementar um <span className="text-[#E94E1B] font-semibold">Well-Architected Interno</span> em ambientes multi-conta AWS, estendendo o <a href="https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline font-semibold">AWS Well-Architected Framework</a> com políticas e automações que atendem a requisitos de negócio, regulatórios (<a href="https://www.lgpdbrasil.com.br/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">LGPD</a>, GDPR) e fiscais (CNPJ, entidades pagadoras). A estratégia centraliza o <a href="https://cloudcustodian.io/docs/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline font-semibold">Cloud Custodian</a> para enforcement e remediação automática de configurações obrigatórias, com suporte de SCPs, Terraform, tagging estratégico e provisionamento via AWS Organizations.</p>
            <h4 id="intro" className="font-bold text-[#E94E1B] mt-4">1. Introdução</h4>
            <p>Empresas que operam em ambientes multi-cloud enfrentam desafios de governança, compliance, auditoria e controle de custos. O <b>AWS Well-Architected Framework</b> oferece diretrizes genéricas para resiliência e segurança, mas muitas vezes não captura requisitos específicos de negócio, fiscais e regulatórios de cada organização.<br/>Um <b>Well-Architected Interno</b> estende essas diretrizes, incorporando mandatory configurations e automações tailor-made, alinhando a infraestrutura à estratégia corporativa e às normas locais (<a href="https://www.lgpdbrasil.com.br/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">LGPD</a>, GDPR).</p>
            <h4 id="mandatory" className="font-bold text-[#E94E1B] mt-4">2. Mandatory Configurations e Tagging Estratégico</h4>
            <p>A base de um Well-Architected Interno é a imposição de configurações obrigatórias, especialmente o tagging estratégico de recursos com metadados críticos:</p>
            <ul className="list-disc ml-6">
              <li><b>cost_center</b> (CNPJ ou centro financeiro)</li>
              <li><b>squad</b> (time responsável)</li>
              <li><b>service</b> (funcionalidade)</li>
              <li><b>region</b> (localização geográfica)</li>
              <li><b>cnpj</b> e <b>entidade_pagadora</b> (para auditorias fiscais)</li>
            </ul>
            <p>Essa granularidade permite gerar relatórios confiáveis, rastrear despesas por entidade legal e cumprir auditorias internas e externas. Veja as <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">boas práticas de tagging da AWS</a>.</p>
            <h4 id="custodian" className="font-bold text-[#E94E1B] mt-4">3. Uso de Cloud Custodian</h4>
            <p>O <a href="https://cloudcustodian.io/docs/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline font-semibold">Cloud Custodian</a> é a ferramenta central para enforcement de políticas como código, permitindo:</p>
            <ul className="list-disc ml-6">
              <li>Detecção de recursos sem tags obrigatórias.</li>
              <li>Remediação automática, como tagging ou deleção de recursos não utilizados.</li>
              <li>Execução via AWS Lambda, disparadas por EventBridge.</li>
            </ul>
            <p><b>Exemplo de policy (YAML):</b></p>
            <div className="relative mb-2">
              <pre className="bg-gray-100 rounded p-2 text-xs overflow-x-auto" ref={yamlRef}><code>{`policies:\n  - name: enforce-cost-center-tag\n    resource: ec2\n    filters:\n      - \"tag:cost_center\": absent\n    actions:\n      - type: tag\n        key: cost_center\n        value: default-${'account_id'}\n      - type: notify\n        to:\n          - slack\n        transport:\n          type: sqs\n          queue: https://sqs.us-east-1.amazonaws.com/123456789012/alerts`}</code></pre>
            </div>
            <p>Essa policy aplica automaticamente um cost_center padrão e notifica as equipes via SQS + Slack. Mais detalhes estão no artigo <a href="https://aws.amazon.com/blogs/opensource/compliance-as-code-and-auto-remediation-with-cloud-custodian/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">Compliance as Code and Auto-Remediation with Cloud Custodian</a>.</p>
            <h4 id="org" className="font-bold text-[#E94E1B] mt-4">4. Organizações e Baselines</h4>
            <p>O <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">AWS Organizations</a> permite a implantação centralizada de baselines de governança em todas as contas:</p>
            <ul className="list-disc ml-6">
              <li>IAM Roles definidas por código (Terraform/Pulumi) para o Cloud Custodian, garantindo permissões mínimas necessárias e rastreabilidade.</li>
              <li>Service Control Policies (SCPs) que impedem a criação de recursos sem tags ou uso de regiões não autorizadas.</li>
              <li>Módulos reutilizáveis para diferentes tipos de contas (produção, sandbox, regulamentada), alinhados a workloads (por exemplo, streaming de dados, workloads GDPR-sensitive).</li>
            </ul>
            <h4 id="scp" className="font-bold text-[#E94E1B] mt-4">5. Controle de Acesso e SCPs</h4>
            <p>As SCPs definem permissões máximas em cada OU (Organizational Unit):</p>
            <ul className="list-disc ml-6">
              <li>Bloqueio de ações sensíveis (ex.: s3:DeleteBucket, ec2:TerminateInstances)</li>
              <li>Permissões específicas para Lambdas do Custodian via trust relationships, replicadas em toda a Organization</li>
              <li>Restrições finas por tag e condição StringEquals para aws:RequestTag</li>
            </ul>
            <h4 id="cases" className="font-bold text-[#E94E1B] mt-4">6. Casos Reais</h4>
            <ul className="list-disc ml-6">
              <li><b>Capital One:</b> <a href="https://www.capitalone.com/software/blog/cloud-governance/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">Framework interno de governança</a> com Cloud Custodian, SCPs e Terraform para auditar recursos, maior agilidade e menor risco regulatório.</li>
              <li><b>Lyft:</b> <a href="https://www.cloudzero.com/blog/how-top-tech-brands-manage-costs/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">Tagging consistente e automação</a> para reduzir custos em 40% em 6 meses, guardrails com Cloud Custodian e AWS Lambda.</li>
              <li><b>Zalando:</b> <a href="https://engineering.zalando.com/posts/2022/02/transactional-outbox-with-aws-lambda-and-dynamodb.html" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">Data lake em S3</a>, práticas de tagging e governança para multi-petabytes, conformidade GDPR.</li>
            </ul>
            <h4 id="beneficios" className="font-bold text-[#E94E1B] mt-4">7. Benefícios para o Negócio</h4>
            <ul className="list-disc ml-6">
              <li><b>Eficiência de Custos:</b> eliminação de recursos ociosos e otimização de storage (<a href="https://www.cloudzero.com/blog/how-top-tech-brands-manage-costs/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">CloudZero</a>)</li>
              <li><b>Conformidade e Auditoria:</b> relatórios confiáveis para órgãos fiscais e regulatórios</li>
              <li><b>Escalabilidade de Governança:</b> replicação instantânea para novas contas/ambientes</li>
              <li><b>Visibilidade Centralizada:</b> dashboards de compliance e custo para liderança</li>
            </ul>
            <h4 id="conclusao" className="font-bold text-[#E94E1B] mt-4">8. Conclusão</h4>
            <p>Um Well-Architected Interno capacita organizações a traduzir políticas corporativas em infraestrutura concreta e auditável, indo além das recomendações genéricas da AWS e incorporando automatização, compliance e estratégia de negócio em seu DNA operacional.</p>
            <h4 id="refs" className="font-bold text-[#E94E1B] mt-4">Referências</h4>
            <ul className="list-disc ml-6">
              <li><a href="https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">AWS Well-Architected Framework</a></li>
              <li><a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">AWS Cost Allocation and Tagging Best Practices</a></li>
              <li><a href="https://cloudcustodian.io/docs/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">Cloud Custodian Documentation</a></li>
              <li><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">AWS Organizations and SCPs Overview</a></li>
              <li><a href="https://aws.amazon.com/blogs/opensource/compliance-as-code-and-auto-remediation-with-cloud-custodian/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">Compliance as Code and Auto-Remediation with Cloud Custodian</a></li>
              <li><a href="https://www.capitalone.com/software/blog/cloud-governance/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">Capital One – Cloud Governance</a></li>
              <li><a href="https://aws.amazon.com/solutions/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">AWS Solutions</a></li>
              <li><a href="https://engineering.zalando.com/posts/2022/02/transactional-outbox-with-aws-lambda-and-dynamodb.html" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">Zalando Infra Blog</a></li>
              <li><a href="https://www.cloudzero.com/blog/how-top-tech-brands-manage-costs/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">How Top Tech Brands Manage Cloud Costs – CloudZero</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-8">
          <div className="bg-[#FFE5D0] rounded p-4 mb-4 text-sm text-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>
              <b>Licença aberta:</b> Este artigo pode ser copiado e utilizado livremente, desde que cite o autor (<span className="text-[#E94E1B] font-semibold">Elton Peixoto</span>).
            </span>
          </div>
        </div>
      </article>
    );
  }
  if(slug==='resiliencia-incidentes'){
    const contentText = `Resumo: Como preparar sua infraestrutura para falhas e garantir continuidade do negócio.\n\n1. Introdução\nA resiliência em incidentes é fundamental para empresas que dependem de sistemas digitais. Falhas podem ocorrer a qualquer momento, e a capacidade de responder rapidamente faz toda a diferença para minimizar impactos.\n\n2. Práticas de Engenharia de Resiliência\n- Monitoramento proativo: Utilize ferramentas como Prometheus, Grafana e Datadog para identificar anomalias antes que se tornem incidentes críticos.\n- Automação de respostas: Implemente scripts e playbooks para respostas automáticas a eventos recorrentes.\n- Chaos Engineering: Realize testes controlados de falha (ex: Chaos Monkey) para validar a robustez dos sistemas.\n\n3. SRE e Cultura de Incidentes\n- SRE (Site Reliability Engineering): Adote práticas de SRE para balancear inovação e estabilidade.\n- Post-mortem: Documente e analise incidentes para aprendizado contínuo.\n\n4. Ferramentas e Referências\n- Google SRE Book: https://sre.google/sre-book/incident-response/\n- DevOps Blog: https://devops.com/`;
    return (
      <article className="mb-10 border-b pb-8">
        <h3 className="text-2xl font-bold text-[#E94E1B] mb-2">Resiliência em Incidentes</h3>
        <div className="text-sm text-gray-700 mb-2">Autor: <span className="font-semibold text-[#E94E1B]">Elton Peixoto</span></div>
        <BlogPostActions title={title} date={date} slug={slug} fontSize={fontSize} setFontSize={setFontSize} contentText={contentText} />
        <div className="bg-[#FFF3E6] rounded-lg shadow p-6 mb-4 text-left max-w-2xl mx-auto relative overflow-x-auto" style={{fontSize: `${fontSize}em`}}>
          <div className="prose max-w-none text-gray-800">
            <p><b>Resumo:</b> Como preparar sua infraestrutura para falhas e garantir continuidade do negócio.</p>
            <h4 className="font-bold text-[#E94E1B] mt-4">1. Introdução</h4>
            <p>A resiliência em incidentes é fundamental para empresas que dependem de sistemas digitais. Falhas podem ocorrer a qualquer momento, e a capacidade de responder rapidamente faz toda a diferença para minimizar impactos.</p>
            <h4 className="font-bold text-[#E94E1B] mt-4">2. Práticas de Engenharia de Resiliência</h4>
            <ul className="list-disc ml-6">
              <li><b>Monitoramento proativo:</b> Utilize ferramentas como Prometheus, Grafana e Datadog para identificar anomalias antes que se tornem incidentes críticos.</li>
              <li><b>Automação de respostas:</b> Implemente scripts e playbooks para respostas automáticas a eventos recorrentes.</li>
              <li><b>Chaos Engineering:</b> Realize testes controlados de falha (ex: Chaos Monkey) para validar a robustez dos sistemas.</li>
            </ul>
            <h4 className="font-bold text-[#E94E1B] mt-4">3. SRE e Cultura de Incidentes</h4>
            <ul className="list-disc ml-6">
              <li><b>SRE (Site Reliability Engineering):</b> Adote práticas de SRE para balancear inovação e estabilidade.</li>
              <li><b>Post-mortem:</b> Documente e analise incidentes para aprendizado contínuo.</li>
            </ul>
            <h4 className="font-bold text-[#E94E1B] mt-4">4. Ferramentas e Referências</h4>
            <ul className="list-disc ml-6">
              <li><a href="https://sre.google/sre-book/incident-response/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">Google SRE Book</a></li>
              <li><a href="https://devops.com/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">DevOps Blog</a></li>
            </ul>
          </div>
        </div>
      </article>
    );
  }
  if(slug==='automatizacao-devops'){
    const contentText = `Resumo: Estratégias para pipelines eficientes e entregas contínuas.\n\n1. Introdução\nA automação é o coração do DevOps moderno. Automatizar pipelines reduz erros, acelera entregas e libera tempo para inovação.\n\n2. Pipelines de CI/CD\n- Ferramentas: GitHub Actions, GitLab CI, Jenkins, CircleCI.\n- Boas práticas: Versionamento de infraestrutura (IaC), testes automatizados, deploys blue/green e rollback seguro.\n\n3. Infraestrutura como Código (IaC)\n- Terraform e Pulumi: Automatize o provisionamento de ambientes multi-cloud.\n- Governança: Use módulos reutilizáveis e políticas de segurança.\n\n4. Dicas para Eficiência\n- Integre validações de segurança no pipeline.\n- Monitore métricas de build e deploy.\n\n5. Referências\n- DevOps.com: https://devops.com/\n- Terraform Docs: https://www.terraform.io/docs/`;
    return (
      <article className="mb-10 border-b pb-8">
        <h3 className="text-2xl font-bold text-[#E94E1B] mb-2">Automatização DevOps</h3>
        <div className="text-sm text-gray-700 mb-2">Autor: <span className="font-semibold text-[#E94E1B]">Elton Peixoto</span></div>
        <BlogPostActions title={title} date={date} slug={slug} fontSize={fontSize} setFontSize={setFontSize} contentText={contentText} />
        <div className="bg-[#FFF3E6] rounded-lg shadow p-6 mb-4 text-left max-w-2xl mx-auto relative overflow-x-auto" style={{fontSize: `${fontSize}em`}}>
          <div className="prose max-w-none text-gray-800">
            <p><b>Resumo:</b> Estratégias para pipelines eficientes e entregas contínuas.</p>
            <h4 className="font-bold text-[#E94E1B] mt-4">1. Introdução</h4>
            <p>A automação é o coração do DevOps moderno. Automatizar pipelines reduz erros, acelera entregas e libera tempo para inovação.</p>
            <h4 className="font-bold text-[#E94E1B] mt-4">2. Pipelines de CI/CD</h4>
            <ul className="list-disc ml-6">
              <li><b>Ferramentas:</b> GitHub Actions, GitLab CI, Jenkins, CircleCI.</li>
              <li><b>Boas práticas:</b> Versionamento de infraestrutura (IaC), testes automatizados, deploys blue/green e rollback seguro.</li>
            </ul>
            <h4 className="font-bold text-[#E94E1B] mt-4">3. Infraestrutura como Código (IaC)</h4>
            <ul className="list-disc ml-6">
              <li><b>Terraform e Pulumi:</b> Automatize o provisionamento de ambientes multi-cloud.</li>
              <li><b>Governança:</b> Use módulos reutilizáveis e políticas de segurança.</li>
            </ul>
            <h4 className="font-bold text-[#E94E1B] mt-4">4. Dicas para Eficiência</h4>
            <ul className="list-disc ml-6">
              <li>Integre validações de segurança no pipeline.</li>
              <li>Monitore métricas de build e deploy.</li>
            </ul>
            <h4 className="font-bold text-[#E94E1B] mt-4">5. Referências</h4>
            <ul className="list-disc ml-6">
              <li><a href="https://devops.com/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">DevOps.com</a></li>
              <li><a href="https://www.terraform.io/docs/" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">Terraform Docs</a></li>
            </ul>
          </div>
        </div>
      </article>
    );
  }
  return (
    <article className="mb-6 border-b pb-4">
      <h3 className="text-2xl font-bold text-[#E94E1B] mb-2"><Link to={`/blog/${slug}`} className="hover:underline">{title}</Link></h3>
      <div className="text-sm text-gray-700 mb-2">Autor: <span className="font-semibold text-[#E94E1B]">Elton Peixoto</span></div>
      <BlogPostActions title={title} date={date} slug={slug} fontSize={fontSize} setFontSize={setFontSize} />
      <p className="text-gray-700" style={{fontSize: `${fontSize}em`}}>{excerpt}</p>
    </article>
  );
}  
