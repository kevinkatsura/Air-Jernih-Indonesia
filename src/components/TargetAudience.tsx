export default function TargetAudience() {
  return (
    <section id="klien" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-500/20 border border-sky-400/30 text-sky-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            👥 Untuk Siapa Layanan Ini?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Solusi untuk Setiap Kebutuhan
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Homeowners */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/10 card-hover">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Pemilik Rumah Pribadi</h3>
            <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">
              Anda ingin kolam selalu siap pakai tanpa repot mengurus teknis. Nikmati waktu bersama keluarga di kolam yang selalu bersih dan aman.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg> <span>Kolam siap pakai kapan saja</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg> <span>Tidak perlu pusing urusan teknis</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg> <span>Aman untuk seluruh keluarga</span>
              </li>
            </ul>
          </div>
          
          {/* Contractors */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/10 card-hover mt-4 md:mt-0">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">Developer &amp; Kontraktor</h3>
            <p className="text-gray-300 text-lg mb-6">
              Anda membutuhkan partner maintenance after handover untuk mengurangi komplain klien dan menjaga reputasi proyek.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg> Kurangi komplain klien
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg> Jaga reputasi proyek
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg> Partner after handover terpercaya
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
