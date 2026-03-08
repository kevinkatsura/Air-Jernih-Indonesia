"use client";

import { useState } from "react";

import projects from "@/data/clients.json";

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const pageSize = 5;
  const totalPages = Math.ceil((projects.length + 1) / pageSize); // +1 accounts for the Many More card

  const start = page * pageSize;
  const isLastPage = page === totalPages - 1;
  const end = Math.min(start + (isLastPage ? pageSize - 1 : pageSize), projects.length);
  const currentProjects = projects.slice(start, end);

  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section id="galeri" className="py-20 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
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

        <div className="flex flex-row items-center justify-center w-full">
          <button
            onClick={prevPage}
            className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 font-bold hover:bg-sky-200 transition mr-4 shrink-0"
            aria-label="Sebelumnya"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full transition-opacity duration-300">
            {currentProjects.map((p, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                <img loading="lazy" src={p.image} alt={p.altText} title={p.name} className="rounded-xl mb-3 object-cover h-48 w-full shadow-sm" />
                <div className="px-2 pb-1">
                  <div className="font-heading font-bold text-gray-900 text-lg mb-1 leading-tight">{p.name}</div>
                  <div className="text-gray-500 font-medium text-sm flex items-center gap-1">
                    {p.location}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Show 'Many More' card on the last page */}
            {page === totalPages - 1 && (
              <a href="#inspirasi" className="bg-sky-50 rounded-2xl p-6 shadow-sm border-2 border-dashed border-sky-200 flex flex-col items-center justify-center h-full hover:bg-sky-100 hover:border-sky-300 transition-colors duration-300 group min-h-[250px]">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-sky-600 group-hover:scale-110 transition-transform shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="font-heading font-bold text-sky-900 text-xl text-center mb-2">Lihat Lebih Banyak</div>
                <div className="text-sky-600 font-medium text-sm text-center">
                  Eksplorasi portfolio inspirasi kami
                </div>
              </a>
            )}
          </div>

          <button
            onClick={nextPage}
            className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 font-bold hover:bg-sky-200 transition ml-4 shrink-0"
            aria-label="Berikutnya"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex sm:hidden items-center justify-center gap-6 mt-8">
          <button
            onClick={prevPage}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-600 font-bold hover:bg-sky-200 transition shrink-0"
            aria-label="Sebelumnya"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="text-gray-500 font-semibold text-sm">
             {page + 1} / {totalPages}
          </div>

          <button
            onClick={nextPage}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-600 font-bold hover:bg-sky-200 transition shrink-0"
            aria-label="Berikutnya"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
