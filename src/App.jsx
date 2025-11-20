import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-black py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} • Built with data and design</p>
          <div className="text-sm text-white/60">Available for freelance and full-time roles</div>
        </div>
      </footer>
    </div>
  );
}

export default App
