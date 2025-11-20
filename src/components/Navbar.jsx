import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/60 border-b border-emerald-500/20' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 grid place-items-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_20px_4px_rgba(16,185,129,0.6)]"></span>
          </div>
          <span className="text-white font-semibold tracking-tight">Data Portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-emerald-100/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <button className="md:hidden p-2 rounded-lg border border-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-xl border border-white/10 bg-black/60 p-4 flex flex-col">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-emerald-100/90 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
