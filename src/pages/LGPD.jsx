import React from 'react';

export default function LGPD() {
  return (
    <section className="py-16 min-h-[60vh] bg-white flex flex-col items-center">
      <div className="max-w-2xl px-4">
        <h1 className="text-3xl font-bold mb-6 text-[#E94E1B]">Política de Privacidade e LGPD</h1>
        <div className="bg-[#FFF3E6] rounded-lg shadow p-6 text-gray-800 text-base">
          <p className="mb-4">Sua privacidade é importante para nós. Esta página explica como coletamos, usamos e protegemos seus dados, em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
          <h2 className="text-xl font-bold text-[#E94E1B] mt-4 mb-2">Quais dados coletamos?</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Nome e email para newsletter e comentários</li>
            <li>Dados de navegação (cookies, analytics)</li>
            <li>Informações fornecidas voluntariamente em formulários</li>
          </ul>
          <h2 className="text-xl font-bold text-[#E94E1B] mt-4 mb-2">Como usamos seus dados?</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Envio de novidades, conteúdos e comunicações relevantes</li>
            <li>Melhoria da experiência do usuário</li>
            <li>Respeito ao consentimento e possibilidade de descadastro a qualquer momento</li>
          </ul>
          <h2 className="text-xl font-bold text-[#E94E1B] mt-4 mb-2">Seus direitos</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Acessar, corrigir ou excluir seus dados</li>
            <li>Solicitar informações sobre o uso dos seus dados</li>
            <li>Revogar consentimento a qualquer momento</li>
          </ul>
          <h2 className="text-xl font-bold text-[#E94E1B] mt-4 mb-2">Contato</h2>
          <p>Para dúvidas ou solicitações, envie um email para <a href="mailto:contato@insidefreecoding.com" className="text-[#E94E1B] underline">contato@insidefreecoding.com</a>.</p>
        </div>
      </div>
    </section>
  );
} 
