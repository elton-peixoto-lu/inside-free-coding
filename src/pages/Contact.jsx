import React, { useState } from 'react';

export function Contact() {
  const [sumInput, setSumInput] = useState('');
  const [wordInput, setWordInput] = useState('');
  const [consent, setConsent] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const sumA = 2, sumB = 7;
  function canSubmit() {
    return (
      nome.trim() &&
      email.trim() &&
      mensagem.trim() &&
      sumInput.trim() === String(sumA + sumB) &&
      wordInput.trim().toLowerCase() === 'cloud' &&
      consent
    );
  }
  return (
    <section id="contato" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contato</h2>
        <form action="https://formspree.io/f/xvgaleve" method="POST" className="space-y-4">
          <input type="text" name="nome" placeholder="Nome" className="w-full border p-2 rounded" required value={nome} onChange={e=>setNome(e.target.value)} />
          <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded" required value={email} onChange={e=>setEmail(e.target.value)} />
          <textarea name="mensagem" placeholder="Mensagem" className="w-full border p-2 rounded h-32" required value={mensagem} onChange={e=>setMensagem(e.target.value)}></textarea>
          <div className="flex flex-col sm:flex-row gap-2">
            <input type="text" value={sumInput} onChange={e=>setSumInput(e.target.value)} className="border rounded p-2 text-sm w-full sm:w-1/3" placeholder={`Quanto é ${sumA} + ${sumB}?`} required />
            <input type="text" value={wordInput} onChange={e=>setWordInput(e.target.value)} className="border rounded p-2 text-sm w-full sm:w-1/3" placeholder="Digite a palavra 'cloud'" required />
          </div>
          <label className="flex items-center gap-2 text-xs text-gray-700 mt-2">
            <input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} required />
            Li e concordo em <a href="/lgpd" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">compartilhar meus dados</a>.
          </label>
          <button type="submit" className="bg-[#E94E1B] text-white py-2 px-6 rounded" disabled={!canSubmit()}>Enviar</button>
        </form>
      </div>
    </section>
  );
}
