import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { solucoes } from '../data/solucoes';

export function Home() {
  const [index, setIndex] = React.useState(0);
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const testimonials = [
    'A Inside Free Coding transformou nossa operação em cloud. Atendimento ágil e soluções robustas!',
    'Equipe extremamente competente, entregaram automação e governança sem complicação.',
    'Conseguimos escalar com segurança e performance graças ao trabalho deles!',
    'O suporte e a documentação são impecáveis. Recomendo para qualquer empresa que quer crescer direito.'
  ];
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % solucoes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  function handleTitleClick(anchor) {
    navigate('/solucoes');
    setTimeout(() => {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, location.pathname === '/solucoes' ? 100 : 400);
  }

  return (
    <main>
      {/* Carrossel de Soluções */}
      <section className="py-16 bg-[#FFE5D0] min-h-[60vh] flex flex-col items-center justify-center">
        <div className="w-full max-w-md h-64 rounded-xl overflow-hidden shadow-lg mb-4 transition-all duration-700 bg-[#223040] bg-gradient-to-br from-[#223040] to-[#1a2533] relative">
          <img src={solucoes[index].img} alt={solucoes[index].title} className="object-cover w-full h-full opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#223040] via-transparent to-transparent opacity-80" />
        </div>
        <button
          onClick={() => handleTitleClick(solucoes[index].anchor)}
          className="text-xl font-semibold mb-2 text-[#E94E1B] hover:underline focus:outline-none bg-transparent"
        >
          {solucoes[index].title}
        </button>
        <p className="text-gray-700 mb-4 text-center">{solucoes[index].desc}</p>
        <div className="flex justify-center gap-2 mt-2">
          {solucoes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 shadow-md focus:outline-none
                ${i === index ? 'bg-[#223040] border-[#E94E1B] shadow-lg scale-110' : 'bg-[#223040] border-[#F9C59C] opacity-60 hover:opacity-100 hover:scale-105'}`}
              aria-label={`Ir para solução ${i + 1}`}
            />
          ))}
        </div>
      </section>
      {/* Depoimentos de Clientes */}
      <section className="py-12 bg-[#223040] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-6 text-[#F9C59C]">O que dizem nossos clientes</h2>
        <div className="w-full max-w-xl px-4">
          <div className="bg-[#1a2533] rounded-lg shadow-xl p-8 text-center min-h-[120px] flex items-center justify-center border border-[#F9C59C]">
            <span className="italic text-lg text-[#F9C59C] transition-opacity duration-700" key={testimonialIndex}>
              {testimonials[testimonialIndex]}
            </span>
          </div>
        </div>
      </section>
      {/* News Preview com padrão xadrez de logos */}
      <section
        id="news-preview"
        className="py-16 bg-white mt-16 relative overflow-hidden"
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
          <h2 className="text-3xl font-bold mb-4 text-[#223040] drop-shadow">News</h2>
          <p className="text-gray-800 mb-6">Fique por dentro das novidades, lançamentos, cases de sucesso e melhores práticas em SRE, Engenharia de Incidentes, Cloud, DevOps, automação, confiabilidade e tudo que oferecemos para transformar a infraestrutura do seu negócio.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button
              onClick={() => navigate('/news')}
              className="bg-[#223040] text-[#F9C59C] px-6 py-2 rounded shadow-lg hover:bg-[#E94E1B] hover:text-white transition-all font-semibold transform hover:scale-105 hover:shadow-xl focus:outline-none border-2 border-[#F9C59C]"
            >
              Ver todas as notícias
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
