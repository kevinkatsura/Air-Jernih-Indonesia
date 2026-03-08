export default function Locations() {
  return (
    <section id="lokasi" className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-sky-500/20 border border-sky-400/30 text-sky-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📍 Lokasi Kantor &amp; Workshop
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Kunjungi Kantor dan Workshop Kami</h2>
          <p className="text-gray-300 mt-2">
            Kami memiliki kantor pusat dan dua lokasi workshop untuk layanan cepat dan dukungan teknis.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="font-bold text-white mb-2">Main Office</h3>
            <p className="text-gray-300 text-sm">
              Talavera Office Suite, Lantai 18.<br />
              Jl. TB Simatupang Kav. 22-23,<br />
              Kel.Cilandak Barat, Kec. Cilandak,<br />
              Jakarta Selatan, DKI Jakarta 12430
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="font-bold text-white mb-2">Workshop Jakarta</h3>
            <p className="text-gray-300 text-sm">
              Jl. Manunggal No 38 RT 06/07 Meruya Selatan,<br />
              Kec. Kembangan, Jakarta Barat
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="font-bold text-white mb-2">Workshop Bandung</h3>
            <p className="text-gray-300 text-sm">
              Jl. Baru Raya 140, Cangkuang Kulon,<br />
              Kec. Dayeuh Kolot, Bandung
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
