export default function Skills() {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Pandas / NumPy', level: 92 },
    { name: 'Machine Learning', level: 88 },
    { name: 'Deep Learning', level: 80 },
    { name: 'MLOps', level: 78 },
    { name: 'SQL', level: 85 },
    { name: 'Data Viz (D3, Plotly)', level: 82 },
    { name: 'Cloud (AWS/GCP/Azure)', level: 70 },
  ];

  return (
    <section id="skills" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_40%,rgba(16,185,129,0.06),transparent_45%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Core skills</h2>
        <p className="text-emerald-100/70 mt-2 max-w-2xl">A blend of research rigor and product engineering. I value interpretable models, robust pipelines, and delightful UX.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {skills.map((s) => (
            <div key={s.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/90">{s.name}</span>
                <span className="text-emerald-300/90 text-sm">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
