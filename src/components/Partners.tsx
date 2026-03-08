export default function Partners() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 mt-16 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">Mitra Resmi Brand Terpercaya</h3>
        <p className="text-gray-400">Kami memastikan penggunaan equipment original dan bergaransi</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        <a href="http://www.haywardindonesia.com/" target="_blank" rel="noopener noreferrer"
          className="text-center partner-logo cursor-pointer block">
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-2 mx-auto">
            <img loading="lazy" src="/images/partners/hayward.png" alt="Hayward Logo"
              className="object-contain h-16 w-auto flex-shrink-0" style={{ maxWidth: '72px', maxHeight: '64px' }} />
          </div>
          <span className="text-gray-400 text-sm hover:text-sky-600">PT Hayward Indonesia</span>
        </a>
        <a href="https://waterco.co.id/" target="_blank" rel="noopener noreferrer"
          className="text-center partner-logo cursor-pointer block">
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-2 mx-auto">
            <img loading="lazy" src="/images/partners/waterco.png" alt="Waterco Logo"
              className="object-contain h-16 w-auto flex-shrink-0" style={{ maxWidth: '72px', maxHeight: '64px' }} />
          </div>
          <span className="text-gray-400 text-sm hover:text-blue-600">PT Waterco Indonesia</span>
        </a>
        <a href="https://www.fluidra.co.id/" target="_blank" rel="noopener noreferrer"
          className="text-center partner-logo cursor-pointer block">
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-2 mx-auto">
            <img loading="lazy" src="/images/partners/fluida.png" alt="Fluidra Logo" className="object-contain h-16 w-auto flex-shrink-0"
              style={{ maxWidth: '72px', maxHeight: '64px' }} />
          </div>
          <span className="text-gray-400 text-sm hover:text-indigo-600">PT Fluidra Indonesia</span>
        </a>
      </div>
    </div>
  );
}
