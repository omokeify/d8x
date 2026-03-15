export function FooterSection() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-8 justify-between">
          <div>
            <p className="font-semibold text-white mb-4">D8X</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="https://d8x.gitbook.io/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">Docs</a>
              <a href="https://github.com/D8-X" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">GitHub</a>
              <a href="https://twitter.com/d8x_exchange" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">Twitter</a>
              <a href="https://d8x.trade/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">Trade</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-4 text-white/50 text-sm">
          © {new Date().getFullYear()} D8X
        </div>
      </div>
    </footer>
  );
}
