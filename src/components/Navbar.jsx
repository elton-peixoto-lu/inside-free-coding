import React, { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const solucoesSubmenu = [
  { label: 'Gestão Proativa de Incidentes', anchor: 'gestao-incidentes' },
  { label: 'Resposta Ágil a Incidentes', anchor: 'resposta-incidentes' },
  { label: 'Automação Inteligente de Infraestrutura', anchor: 'automacao-infra' },
  { label: 'Consultoria em Confiabilidade e SRE', anchor: 'confiabilidade-sre' },
  { label: 'Cloud & DevOps de Alta Performance', anchor: 'cloud-devops' },
];

export default function Navbar({ onContatoClick }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const submenuTimeout = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmenuClick(anchor) {
    navigate('/solucoes');
    setTimeout(() => {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, location.pathname === '/solucoes' ? 100 : 400);
    setSubmenuOpen(false);
    setMobileMenuOpen(false);
  }

  function handleMouseEnter() {
    clearTimeout(submenuTimeout.current);
    setSubmenuOpen(true);
  }
  function handleMouseLeave() {
    submenuTimeout.current = setTimeout(() => setSubmenuOpen(false), 180);
  }

  return (
    <header className="bg-gradient-to-r from-[#F9C59C] to-[#E94E1B] py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <img src="/logo.png" alt="Logo IFC" className="h-16 cursor-pointer" />
        </Link>
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8 text-white relative">
          <Link to="/" className="hover:opacity-80 transition duration-300 hover:shadow-lg hover:scale-105 focus:outline-none">HOME</Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="hover:opacity-80 transition duration-300 hover:shadow-lg hover:scale-105 focus:outline-none"
              onClick={() => { setSubmenuOpen((v) => !v); navigate('/solucoes'); }}
            >
              SOLUÇÕES
            </button>
            {submenuOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-white text-gray-800 rounded shadow-lg z-50 py-2 animate-fade-in">
                {solucoesSubmenu.map((item) => (
                  <button
                    key={item.anchor}
                    onClick={() => handleSubmenuClick(item.anchor)}
                    className="block w-full text-left px-4 py-2 hover:bg-[#F9C59C] hover:text-[#E94E1B] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Link to="/news" className="hover:opacity-80 transition duration-300 hover:shadow-lg hover:scale-105 focus:outline-none">NEWS</Link>
          <Link to="/blog" className="hover:opacity-80 transition duration-300 hover:shadow-lg hover:scale-105 focus:outline-none">BLOG</Link>
          <Link to="/quem-somos" className="hover:opacity-80 transition duration-300 hover:shadow-lg hover:scale-105 focus:outline-none">NOS CONHEÇA</Link>
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-[#E94E1B] hover:border-[#E94E1B] focus:outline-none"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-gradient-to-b from-[#F9C59C] to-[#E94E1B] shadow-lg z-50 animate-fade-in">
            <nav className="flex flex-col items-center py-4 space-y-2 text-white">
              <Link to="/" className="w-full text-center py-2 hover:bg-[#E94E1B]" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
              <div className="w-full">
                <button
                  className="w-full text-center py-2 hover:bg-[#E94E1B]"
                  onClick={() => setSubmenuOpen((v) => !v)}
                >
                  SOLUÇÕES
                </button>
                {submenuOpen && (
                  <div className="bg-white text-[#E94E1B] rounded shadow py-2 mt-1">
                    {solucoesSubmenu.map((item) => (
                      <button
                        key={item.anchor}
                        onClick={() => handleSubmenuClick(item.anchor)}
                        className="block w-full text-left px-4 py-2 hover:bg-[#F9C59C] hover:text-[#E94E1B] transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/news" className="w-full text-center py-2 hover:bg-[#E94E1B]" onClick={() => setMobileMenuOpen(false)}>NEWS</Link>
              <Link to="/blog" className="w-full text-center py-2 hover:bg-[#E94E1B]" onClick={() => setMobileMenuOpen(false)}>BLOG</Link>
              <Link to="/quem-somos" className="w-full text-center py-2 hover:bg-[#E94E1B]" onClick={() => setMobileMenuOpen(false)}>NOS CONHEÇA</Link>
              <button
                onClick={() => { setMobileMenuOpen(false); onContatoClick && onContatoClick(); }}
                className="w-full text-center py-2 bg-[#223040] text-white rounded hover:bg-[#E94E1B] mt-2"
              >
                ENTRAR EM CONTATO
              </button>
            </nav>
          </div>
        )}
        {/* Botão desktop */}
        <button
          onClick={onContatoClick}
          className="hidden md:block bg-[#223040] hover:bg-[#E94E1B] text-white font-semibold py-2 px-4 rounded-lg shadow-md border-2 border-[#223040] transition-colors"
        >
          ENTRAR EM CONTATO
        </button>
      </div>
    </header>
  );
}
