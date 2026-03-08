export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
            <img loading="lazy" src="/images/brand/logo.webp" alt="Air Jernih Indonesia Logo"
              className="w-12 h-12 rounded-lg object-contain" />
            <div className="flex flex-col justify-center">
              <span className="font-heading font-bold text-gray-900 text-sm sm:text-base md:text-lg leading-tight">Air Jernih
                Indonesia</span>
              <span className="hidden sm:block text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium -mt-0.5">Pool Maintenance Specialist</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            <a href="#masalah" className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium">Masalah</a>
            <a href="#solusi" className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium">Solusi</a>
            <a href="#keunggulan" className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium">Keunggulan</a>
            <a href="#klien" className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium">Klien</a>
            <a href="#galeri" className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium">Galeri</a>
            <a href="#lokasi" className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium">Lokasi</a>
            <a href="#kontak" className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium">Kontak</a>
          </div>
          <a href="https://wa.me/62811877480" target="_blank" rel="noopener noreferrer"
            className="btn-primary text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span id="nav-phone" className="whitespace-nowrap">081-1877-480</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
