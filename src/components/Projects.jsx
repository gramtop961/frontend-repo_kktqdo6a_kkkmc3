import { useEffect, useState } from 'react';

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Projects() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${backend}/api/projects`);
        const data = await res.json();
        setItems(data.projects || []);
      } catch (e) {
        setItems([
          { title: 'Realtime anomaly monitor', tags: ['Time-series', 'Streaming', 'Dash'], summary: 'Detect anomalies on IoT feeds; Kafka + Prophet + fast dashboards.' },
          { title: 'Generative report assistant', tags: ['LLM', 'RAG', 'LangChain'], summary: 'Retrieves domain docs and drafts analyst-ready summaries.' },
          { title: 'Marketing mix modeling', tags: ['Bayesian', 'PyMC'], summary: 'Media ROI attribution with uncertainty-aware recommendations.' }
        ]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black via-black to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected projects</h2>
        <p className="text-emerald-100/70 mt-2 max-w-2xl">Production-minded work across analytics, ML, and interactive data products.</p>

        {loading ? (
          <p className="text-emerald-200/70 mt-10">Loading…</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {items.map((p, idx) => (
              <article key={idx} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:border-emerald-400/40 transition-colors">
                <h3 className="text-white font-medium">{p.title}</h3>
                <p className="mt-2 text-emerald-100/80 text-sm leading-relaxed">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(p.tags || []).map(t => (
                    <span key={t} className="text-xs text-emerald-200/90 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-2 py-0.5">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
