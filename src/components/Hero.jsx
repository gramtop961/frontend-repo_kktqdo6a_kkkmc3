import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 sm:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/50 px-3 py-1 text-xs text-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Open to opportunities • Data Science • MLOps • Visualization
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Building data-driven products that feel magical
          </h1>

          <p className="mt-6 text-emerald-100/80 text-lg leading-relaxed">
            I’m a data scientist with a strong engineering mindset. I blend analytics, machine learning, and interactive visuals to turn raw data into usable, elegant experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-black font-medium px-4 py-2 hover:bg-emerald-400 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 text-white font-medium px-4 py-2 hover:bg-white/10 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
