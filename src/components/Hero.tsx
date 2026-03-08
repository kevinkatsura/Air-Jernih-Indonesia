export default function Hero() {
  return (
    <section className="gradient-hero min-h-screen pt-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>
      {/* Water Ripple Pattern */}
      <div className="absolute inset-0 water-pattern opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 bg-sky-600/35 border border-sky-400/60 rounded-full px-5 py-2.5 mb-6 whitespace-nowrap">
              <svg className="w-4 h-4 text-cyan-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd" />
              </svg>
              <span className="text-cyan-200 text-sm font-semibold">Spesialis Maintenance Sejak 2005</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              <span id="hero-title">Kolam Keruh?</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300" id="hero-title-2">
                Mesin Sering Bermasalah?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-sky-100 font-medium mb-6" id="hero-subtitle">Serahkan Maintenance Kolam Anda ke Spesialis.</p>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              <strong className="text-white">PT Air Jernih Indonesia</strong> menghadirkan layanan maintenance kolam renang profesional untuk rumah pribadi dan proyek konstruksi.
            </p>

            {/* Offering Points Horizontal Cards */}
            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start mb-10">
              <div className="flex flex-col items-center bg-white/5 rounded-xl shadow-sm px-6 py-4 min-w-[140px]">
                <svg className="w-7 h-7 text-sky-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-white text-base font-semibold text-center">Air Jernih</span>
                <span className="text-xs text-sky-200 mt-1 text-center opacity-70">Kualitas air terbaik setiap hari</span>
              </div>
              <div className="flex flex-col items-center bg-white/5 rounded-xl shadow-sm px-6 py-4 min-w-[140px]">
                <svg className="w-7 h-7 text-cyan-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9.75 3v2.25M14.25 3v2.25M7.5 6.75h9M4.5 21h15M4.5 6.75l1.5 13.5h12l1.5-13.5" />
                </svg>
                <span className="text-white text-base font-semibold text-center">Mesin Tahan</span>
                <span className="text-xs text-cyan-200 mt-1 text-center opacity-70">Performa awet dan handal</span>
              </div>
              <div className="flex flex-col items-center bg-white/5 rounded-xl shadow-sm px-6 py-4 min-w-[140px]">
                <svg className="w-7 h-7 text-sky-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 12v6m0-6a6 6 0 016 6m-6-6a6 6 0 00-6 6" />
                </svg>
                <span className="text-white text-base font-semibold text-center">Risiko Minimal</span>
                <span className="text-xs text-sky-200 mt-1 text-center opacity-70">Kerusakan & masalah berkurang</span>
              </div>
              <div className="flex flex-col items-center bg-white/5 rounded-xl shadow-sm px-6 py-4 min-w-[140px]">
                <svg className="w-7 h-7 text-cyan-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-base font-semibold text-center">Bergaransi</span>
                <span className="text-xs text-cyan-200 mt-1 text-center opacity-70">Jaminan spare part & layanan</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
              <a href="#kontak" className="btn-primary text-white px-7 py-3 rounded-full font-bold text-base inline-flex items-center justify-center gap-2">
                <span id="cta-button">Jadwalkan Inspeksi</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Owner Section */}
            <div className="relative float-animation translate-x-12">
              <div className="flex flex-col items-center">
                {/* Owner Image with Integrated Info */}
                <div className="relative">
                  <img loading="lazy" src="/images/brand/owner.webp" alt="Trisno Aji - CEO" className="w-[720px] h-[720px] object-contain" />
                  {/* Subtle Info Overlay */}
                  <div className="absolute bottom-6 left-0 right-0 p-6">
                    <div className="text-center">
                      <div className="text-[0.65rem] font-black text-[#581c87] tracking-widest mb-0 uppercase leading-none">
                        <strong>CEO</strong>
                      </div>
                      <div className="text-lg font-bold text-white mt-0.5">Trisno Aji</div>
                      <div className="text-xs text-sky-200 opacity-80">PT Air Jernih Indonesia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white" />
        </svg>
      </div>
    </section>
  );
}
