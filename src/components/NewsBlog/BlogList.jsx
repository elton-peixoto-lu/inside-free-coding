import React, { useState } from 'react';
import { BlogPost } from './BlogPost';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    slug: 'resiliencia-incidentes',
    title: 'Resiliência em Incidentes',
    excerpt: 'Como preparar sua infra para falhas...',
    date: '2024-05-01'
  },
  {
    id: 2,
    slug: 'automatizacao-devops',
    title: 'Automatização DevOps',
    excerpt: 'Estratégias para pipelines eficientes...',
    date: '2024-04-15'
  },
  {
    id: 3,
    slug: 'well-architected-interno',
    title: 'Adoção de um Well-Architected Interno para Governança em Ambientes Multi-Cloud',
    excerpt: 'Como implementar um Well-Architected Interno em ambientes multi-conta AWS, estendendo o AWS Well-Architected Framework com políticas, automações e Cloud Custodian para compliance, auditoria e governança avançada.',
    date: '2024-06-20'
  }
];

export function BlogList() {
  const [open, setOpen] = useState(null);
  return (
    <section id="blog" className="py-16 min-h-[60vh] bg-white flex flex-col items-center">
      <div className="w-full max-w-3xl px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#E94E1B]">Blog</h2>
        <div className="space-y-4">
          {posts.map((p) => (
            <div key={p.id} className="bg-[#FFF3E6] rounded-lg shadow p-4">
              <button
                className="w-full text-left focus:outline-none"
                onClick={() => setOpen(open === p.id ? null : p.id)}
                aria-expanded={open === p.id}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-xl font-bold text-[#E94E1B]">{p.title}</span>
                  <span className="text-xs text-gray-500">{p.date}</span>
                </div>
                <div className="text-gray-800 text-sm mt-1">{p.excerpt}</div>
              </button>
              {open === p.id && (
                <div className="mt-4">
                  <BlogPost {...p} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/" className="bg-[#E94E1B] text-white px-6 py-2 rounded shadow hover:bg-orange-600 transition-colors">Voltar para Home</Link>
        </div>
      </div>
    </section>
  );
}  
