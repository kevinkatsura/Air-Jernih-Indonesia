"use client";

import { useState } from "react";

const projectFiles = [
  "WhatsApp Image 2026-02-25 at 10.29.38 AM (1).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.38 AM.jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.39 AM (1).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.39 AM (2).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.39 AM.jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.40 AM (1).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.40 AM (2).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.40 AM (3).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.40 AM.jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.41 AM.jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.42 AM (1).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.42 AM.jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.43 AM (1).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.43 AM (2).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.43 AM (3).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.43 AM.jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.44 AM (1).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.44 AM (2).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.44 AM (3).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.44 AM.jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.45 AM (1).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.45 AM (2).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.45 AM.jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.46 AM (1).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.46 AM.jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.48 AM (1).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.48 AM (2).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.48 AM.jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.49 AM (1).jpeg",
  "WhatsApp Image 2026-02-25 at 10.29.49 AM.jpeg"
];

const projects = projectFiles.map((file, i) => ({
  name: `Klien ${i + 1}`,
  location: `Lokasi ${i + 1}`,
  photo: `/assets/projects/${file}`,
  desc: `Proyek kolam renang contoh.`
}));

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const pageSize = 6;
  const totalPages = Math.ceil(projects.length / pageSize);

  const start = page * pageSize;
  const end = Math.min(start + pageSize, projects.length);
  const currentProjects = projects.slice(start, end);

  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section id="galeri" className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🖼️ Galeri Proyek
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Galeri Proyek &amp; Klien
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Beberapa proyek yang telah kami tangani, lengkap dengan foto, nama klien, dan lokasi.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-0">
          <button 
            onClick={prevPage}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 font-bold hover:bg-sky-200 transition sm:mr-4 shrink-0"
            aria-label="Sebelumnya"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full transition-opacity duration-300">
            {currentProjects.map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 flex flex-col">
                <img loading="lazy" src={p.photo} alt={p.name} className="rounded-xl mb-4 object-cover h-40 w-full" />
                <div className="font-heading font-bold text-gray-900 text-lg mb-1">{p.name}</div>
                <div className="text-gray-500 text-sm mb-2">{p.location}</div>
                <div className="text-gray-600 text-sm">{p.desc}</div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={nextPage}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 font-bold hover:bg-sky-200 transition sm:ml-4 shrink-0 mt-4 sm:mt-0"
            aria-label="Berikutnya"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
