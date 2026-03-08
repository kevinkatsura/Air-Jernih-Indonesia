export default function Showcase() {
  const images = Array.from({ length: 30 }, (_, i) => `/images/showcase/bg-${i + 1}.webp`);

  return (
    <section id="inspirasi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ Inspirasi Kolam
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Portfolio Inspirasi
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            100% foto asli dari dokumentasi internal tim kami. Kumpulan hasil karya nyata dan inspirasi desain perawatan kolam renang yang telah kami tangani.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4" role="list" aria-label="Galeri inspirasi perawatan dan instalasi kolam renang">
          {images.map((src, idx) => (
            <div key={idx} role="listitem" className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <img
                loading="lazy"
                src={src}
                alt={`Hasil perawatan dan instalasi kolam renang PT Air Jernih Indonesia karya ${idx + 1}`}
                title={`Portofolio Kolam Renang Air Jernih Indonesia #${idx + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#kontak" className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 border-2 border-sky-100 hover:border-sky-300 px-8 py-4 rounded-full font-bold text-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <span>Lihat Lebih Banyak</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-gray-500 mt-4 text-sm">Hubungi kami untuk melihat ratusan portfolio proyek lainnya</p>
        </div>
      </div>
    </section>
  );
}
