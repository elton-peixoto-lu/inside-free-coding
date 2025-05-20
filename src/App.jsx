import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { BlogList } from './components/NewsBlog/BlogList';
import { QuemSomos } from './components/QuemSomos/QuemSomos';
import { Solucoes } from './components/Solucoes/Solucoes';
import { NewsList } from './components/News/NewsList';
import { AnimatePresence, motion } from 'framer-motion';
import QuemSomosPage from './pages/QuemSomosPage';
import LGPD from './pages/LGPD.jsx';
import freedumImg from './assets/freedum.png';

function ContatoModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-center">Entre em Contato</h2>
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" className="h-8 w-8" />
          </a>
          <a href="mailto:insidefreecoding@gmail.com" target="_blank" rel="noopener noreferrer" title="E-mail">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="E-mail" className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/elton-peixoto-914452296/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="https://github.com/elton-peixoto-lu" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" className="h-8 w-8" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="h-8 w-8" />
          </a>
        </div>
        {/* Formulário de contato */}
        <Contact />
      </div>
    </div>
  );
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function AnimatedRoutes({ setModalOpen }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={{ duration: 0.4 }}>
            <Home />
          </motion.div>
        } />
        <Route path="/quem-somos" element={
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={{ duration: 0.4 }}>
            <QuemSomosPage />
          </motion.div>
        } />
        <Route path="/solucoes" element={
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={{ duration: 0.4 }}>
            <Solucoes onContatoClick={() => setModalOpen(true)} />
          </motion.div>
        } />
        <Route path="/news" element={
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={{ duration: 0.4 }}>
            <NewsList />
          </motion.div>
        } />
        <Route path="/blog" element={
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={{ duration: 0.4 }}>
            <BlogList />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={{ duration: 0.4 }}>
            <Contact />
          </motion.div>
        } />
        <Route path="/lgpd" element={<LGPD />} />
      </Routes>
    </AnimatePresence>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#F9C59C] to-[#E94E1B] text-white py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold">Inside Free Coding &copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://www.linkedin.com/in/elton-peixoto-914452296/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80"><svg width="24" height="24" fill="currentColor" className="inline"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
          <a href="https://github.com/elton-peixoto-lu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-80"><svg width="24" height="24" fill="currentColor" className="inline"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.384 0-6.63-5.373-12-12-12z"/></svg></a>
          <a href="https://www.youtube.com/@insidefreecoding" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80"><svg width="24" height="24" fill="currentColor" className="inline"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112c-1.863-.504-9.386-.504-9.386-.504s-7.523 0-9.386.504a2.994 2.994 0 0 0-2.112 2.112c-.504 1.863-.504 5.754-.504 5.754s0 3.891.504 5.754a2.994 2.994 0 0 0 2.112 2.112c1.863.504 9.386.504 9.386.504s7.523 0 9.386-.504a2.994 2.994 0 0 0 2.112-2.112c.504-1.863.504-5.754.504-5.754s0-3.891-.504-5.754zm-13.498 9.314v-7l6.5 3.5-6.5 3.5z"/></svg></a>
        </div>
      </div>
    </footer>
  );
}

function ChatSuporte() {
  const [open, setOpen] = useState(false);
  const [lgpdAccepted, setLgpdAccepted] = useState(false);
  const [antiBotPassed, setAntiBotPassed] = useState(false);
  const [sumInput, setSumInput] = useState('');
  const sumA = 2, sumB = 5;
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Olá! Como posso ajudar você hoje?' }
  ]);
  const [input, setInput] = useState('');

  // Perguntas frequentes
  const faqs = [
    { question: 'Qual o número para suporte?', answer: 'Você pode falar com Elton: +55 11 08309-0297 ou Raiti: 11 95970-6057.' },
    { question: 'Quais os horários de atendimento?', answer: 'Atendemos 24x7 para clientes ativos.' },
    { question: 'Como contratar?', answer: 'Fale com nosso time comercial pelo formulário ou pelos números acima.' },
    { question: 'Quais serviços vocês oferecem?', answer: 'Oferecemos consultoria em nuvem, engenharia de dados, observabilidade e gestão de times.' },
  ];

  // Filtro simples para baixo calão (pode ser expandido)
  function isOffensive(text) {
    const badWords = ['palavrão1', 'palavrão2', 'idiota', 'burro', 'merda', 'bosta', 'porra', 'caralho', 'puta', 'foda', 'desgraça'];
    return badWords.some(w => text.toLowerCase().includes(w));
  }

  // Checa se é FAQ
  function getFaqAnswer(text) {
    const q = text.toLowerCase();
    for (const faq of faqs) {
      if (q.includes(faq.question.toLowerCase().replace(/[?]/g, ''))) {
        return faq.answer;
      }
    }
    return null;
  }

  // Chamada à LLM via backend proxy
  async function askLLM(question) {
    try {
      const response = await fetch('http://localhost:3001/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });
      const data = await response.json();
      return data.answer;
    } catch (e) {
      return 'Erro ao conectar ao assistente.';
    }
  }

  async function handleSend(text) {
    if (!text.trim()) return;
    if (isOffensive(text)) {
      setMessages(msgs => [...msgs, { from: 'user', text }, { from: 'bot', text: 'Por favor, mantenha o respeito. Não posso responder a esse tipo de mensagem.' }]);
      setInput('');
      return;
    }
    setMessages(msgs => [...msgs, { from: 'user', text }]);
    // FAQ
    const faq = getFaqAnswer(text);
    if (faq) {
      // Se a resposta do FAQ contiver contatos, renderiza como humanSupport
      if (typeof faq === 'string' && /Elton|Raiti|98309-0287|95970-8057|983090287|959708057|wa\.me|contato@insidefreecoding\.com|WhatsApp|E-mail/i.test(faq)) {
        const buttons = [];
        const msg = encodeURIComponent('Olá, preciso de ajuda: contato');
        if (/Elton|98309-0287|983090287|wa\.me\/5511983090287/i.test(faq)) {
          buttons.push({ label: '💬 WhatsApp Elton', url: `https://wa.me/5511983090287?text=${msg}` });
        }
        if (/Raiti|95970-8057|959708057|wa\.me\/5511959708057/i.test(faq)) {
          buttons.push({ label: '💬 WhatsApp Raiti', url: `https://wa.me/5511959708057?text=${msg}` });
        }
        if (/contato@insidefreecoding\.com|E-mail|email/i.test(faq)) {
          buttons.push({ label: '✉️ E-mail', url: `mailto:insidefreecoding@gmail.com?subject=Ajuda%20via%20site&body=${msg}` });
        }
        const humanSupport = {
          title: '👤 Atendimento Humano',
          message: 'Fale agora com um especialista pelo canal de sua preferência:',
          buttons
        };
        setTimeout(() => setMessages(msgs => [...msgs, { from: 'bot', humanSupport }]), 500);
      } else {
        setTimeout(() => setMessages(msgs => [...msgs, { from: 'bot', text: faq }]), 500);
      }
      setInput('');
      return;
    }
    // LLM
    setMessages(msgs => [...msgs, { from: 'bot', text: 'Pensando...' }]);
    const answer = await askLLM(text);
    setMessages(msgs => {
      const newMsgs = [...msgs];
      const idx = newMsgs.findIndex(m => m.text === 'Pensando...');
      // Se vier objeto estruturado
      if (answer && typeof answer === 'object' && answer.type === 'human_support') {
        if (idx !== -1) newMsgs[idx] = { from: 'bot', humanSupport: answer };
        else newMsgs.push({ from: 'bot', humanSupport: answer });
      } else if (typeof answer === 'string' && /wa\.me|contato@insidefreecoding\.com|WhatsApp|E-mail|Elton|Raiti/i.test(answer)) {
        // Detecta contatos em texto e extrai para renderização amigável
        const buttons = [];
        const msg = encodeURIComponent('Olá, preciso de ajuda: contato');
        if (/wa\.me\/5511983090287|Elton/i.test(answer) || /98309-0287|983090287/.test(answer)) {
          buttons.push({ label: '💬 WhatsApp Elton', url: `https://wa.me/5511983090287?text=${msg}` });
        }
        if (/wa\.me\/5511959708057|Raiti/i.test(answer) || /95970-8057|959708057/.test(answer)) {
          buttons.push({ label: '💬 WhatsApp Raiti', url: `https://wa.me/5511959708057?text=${msg}` });
        }
        if (/contato@insidefreecoding\.com|E-mail|email/i.test(answer)) {
          buttons.push({ label: '✉️ E-mail', url: `mailto:insidefreecoding@gmail.com?subject=Ajuda%20via%20site&body=${msg}` });
        }
        const humanSupport = {
          title: '👤 Atendimento Humano',
          message: 'Fale agora com um especialista pelo canal de sua preferência:',
          buttons
        };
        if (idx !== -1) newMsgs[idx] = { from: 'bot', humanSupport };
        else newMsgs.push({ from: 'bot', humanSupport });
      } else {
        if (idx !== -1) newMsgs[idx] = { from: 'bot', text: answer };
        else newMsgs.push({ from: 'bot', text: answer });
      }
      return newMsgs;
    });
    setInput('');
  }

  // Modal LGPD
  function LGPDModal() {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative flex flex-col items-center">
          <iframe src="/lgpd" title="LGPD" className="w-full h-64 mb-4 rounded border" />
          <div className="flex gap-4 mt-2">
            <button onClick={() => setLgpdAccepted(true)} className="bg-[#E94E1B] text-white px-4 py-2 rounded font-semibold hover:bg-orange-600">De acordo</button>
            <button onClick={() => { setOpen(false); setLgpdAccepted(false); setAntiBotPassed(false); }} className="bg-gray-200 text-gray-700 px-4 py-2 rounded font-semibold hover:bg-gray-300">Não concordo</button>
          </div>
        </div>
      </div>
    );
  }

  // Modal Anti-bot
  function AntiBotModal() {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative flex flex-col items-center">
          <div className="mb-4 text-center">
            <p className="font-semibold text-[#E94E1B]">Validação de segurança</p>
            <p className="text-sm text-gray-700 mt-2">Quanto é {sumA} + {sumB}?</p>
          </div>
          <input type="text" value={sumInput} onChange={e=>setSumInput(e.target.value)} className="border rounded p-2 text-sm w-full mb-4" placeholder="Digite o resultado" />
          <button onClick={() => {
            if (sumInput.trim() === String(sumA + sumB)) setAntiBotPassed(true);
          }} className="bg-[#E94E1B] text-white px-4 py-2 rounded font-semibold hover:bg-orange-600 w-full">Validar</button>
          <button onClick={() => { setOpen(false); setLgpdAccepted(false); setAntiBotPassed(false); setSumInput(''); }} className="mt-2 text-xs text-gray-500 underline">Cancelar</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#F9C59C] text-[#E94E1B] rounded-full shadow-lg p-4 hover:bg-[#E94E1B] hover:text-white transition-colors flex items-center gap-2"
        aria-label="Abrir chat de suporte"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        Chat
      </button>
      {open && !lgpdAccepted && <LGPDModal />}
      {open && lgpdAccepted && !antiBotPassed && <AntiBotModal />}
      {open && lgpdAccepted && antiBotPassed && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black bg-opacity-30">
          <div className="bg-white rounded-lg shadow-2xl w-80 max-w-full m-6 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold text-[#E94E1B]">Suporte Online</span>
              <button onClick={() => { setOpen(false); setLgpdAccepted(false); setAntiBotPassed(false); setSumInput(''); }} className="text-gray-400 hover:text-gray-700 text-xl">&times;</button>
            </div>
            <div className="flex flex-col gap-2 p-2 border-b">
              <div className="text-xs text-gray-700 mb-1">Perguntas rápidas:</div>
              <div className="flex flex-wrap gap-2">
                {faqs.map((faq, i) => (
                  <button key={i} onClick={() => handleSend(faq.question)} className="bg-[#FFE5D0] text-[#E94E1B] px-2 py-1 rounded text-xs font-semibold border border-[#E94E1B] hover:bg-[#E94E1B] hover:text-white transition-colors">{faq.question}</button>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2" style={{ maxHeight: 300 }}>
              {messages.map((msg, i) => (
                <div key={i} className={msg.from === 'user' ? 'text-right' : 'text-left flex items-start gap-2'}>
                  {msg.from === 'bot' && (
                    <>
                      <img src={freedumImg} alt="Freedum" className="w-8 h-8 rounded-full border-2 border-[#223040] bg-white mr-2" />
                      <div className="flex flex-col items-start">
                        <span className="text-xs font-bold text-[#223040] mb-1">Freedum</span>
                        {msg.humanSupport ? (
                          <div className="inline-block bg-gray-100 text-gray-800 rounded-lg px-3 py-2 mb-1 max-w-xs text-left">
                            <div className="font-bold text-[#E94E1B] mb-1">{msg.humanSupport.title || 'Atendimento Humano'}</div>
                            <div className="mb-2 text-sm">{msg.humanSupport.message}</div>
                            <div className="flex flex-col gap-2">
                              {msg.humanSupport.buttons && msg.humanSupport.buttons.map((btn, idx) => (
                                <a key={idx} href={btn.url} target="_blank" rel="noopener noreferrer" className="bg-[#E94E1B] text-white px-3 py-1 rounded text-sm font-semibold hover:bg-orange-600 transition-colors block text-center">{btn.label}</a>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <span className="inline-block bg-gray-100 text-gray-800 rounded-lg px-3 py-1 mb-1">{msg.text}</span>
                        )}
                      </div>
                    </>
                  )}
                  {msg.from === 'user' && (
                    <span className="inline-block bg-[#E94E1B] text-white rounded-lg px-3 py-1 mb-1">{msg.text}</span>
                  )}
                </div>
              ))}
            </div>
            <form onSubmit={e => { e.preventDefault(); handleSend(input); }} className="flex border-t p-2 gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 border rounded px-2 py-1 focus:outline-none focus:border-[#E94E1B]"
              />
              <button type="submit" className="bg-[#E94E1B] text-white px-3 py-1 rounded hover:bg-orange-600 transition-colors">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar onContatoClick={() => setModalOpen(true)} />
        <main className="flex-1">
          <AnimatedRoutes setModalOpen={setModalOpen} />
          <ContatoModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </main>
        <Footer />
        <ChatSuporte />
      </div>
    </Router>
  );
}
