const NAV_ITEMS = [
  { label: 'FEATURES', href: '#features' },
  { label: 'WHITELABELING', href: '#whitelabeling' },
  { label: 'FAQ', href: '#faq' },
  { label: 'DOCS', href: 'https://d8x.gitbook.io/', external: true },
];

export function HeaderSection() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="text-white font-semibold tracking-wider">D8X</a>
        <nav className="hidden lg:flex items-center">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="relative px-6 py-5 text-xs font-medium tracking-wider text-white/70 hover:text-white transition-colors border-r border-white/10"
              >
                <span className="text-orange-500">{String(i + 1).padStart(2, '0')}.</span>{' '}
                {item.label}
              </a>
            ))}
        </nav>
      </div>
    </header>
  );
}
