import { useState } from 'react';

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function submit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus({ ok: true, message: data.message || 'Thanks! I will reply shortly.' });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ ok: false, message: 'Something went wrong. Please try again later.' });
    }
  }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s collaborate</h2>
        <p className="text-emerald-100/70 mt-2">Tell me about your project, challenge, or idea.</p>

        <form onSubmit={submit} className="mt-8 grid gap-4">
          <input name="name" required placeholder="Name" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40" />
          <input name="email" required type="email" placeholder="Email" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40" />
          <input name="subject" placeholder="Subject" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40" />
          <textarea name="message" required rows="5" placeholder="Message" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40" />
          <button className="mt-2 inline-flex justify-center rounded-lg bg-emerald-500 text-black font-medium px-5 py-3 hover:bg-emerald-400 transition-colors">Send message</button>
        </form>

        {status && (
          <p className={`mt-4 text-sm ${status.ok ? 'text-emerald-300' : 'text-red-300'}`}>{status.message}</p>
        )}
      </div>
    </section>
  );
}
