export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img loading="lazy" src="/images/brand/logo.webp" alt="Air Jernih Indonesia Logo"
              className="w-12 h-12 rounded-lg object-contain bg-white pb-[2px] pt-[2px]" />
            <span className="font-heading font-bold text-white">PT Air Jernih Indonesia</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 PT Air Jernih Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
