'use client';

import { useState } from 'react';

interface Script {
  style: string;
  hook: string;
  script: string;
  visualNotes: string;
  cta: string;
  hashtags: string[];
}

export default function ScriptsPage() {
  const [loading, setLoading] = useState(false);
  const [scripts, setScripts] = useState<Script[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    bedrijf: '',
    branche: '',
    vacature: '',
    salaris: '',
    locatie: '',
    doelgroep: '',
    usps: ['', '', ''],
    toneOfVoice: 'Casual en energiek',
    vermijd: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setScripts([]);

    try {
      const response = await fetch('/api/generate-scripts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          usps: formData.usps.filter(usp => usp.trim() !== ''),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Er ging iets mis');
      }

      setScripts(data.data.scripts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Onbekende fout');
    } finally {
      setLoading(false);
    }
  };

  const updateUSP = (index: number, value: string) => {
    const newUSPs = [...formData.usps];
    newUSPs[index] = value;
    setFormData({ ...formData, usps: newUSPs });
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Scripts Genereren</h1>
        <p className="text-zinc-500">Genereer TikTok recruitment scripts met AI</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Bedrijfsnaam *
                </label>
                <input
                  type="text"
                  required
                  value={formData.bedrijf}
                  onChange={(e) => setFormData({ ...formData, bedrijf: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent"
                  placeholder="FreshFood Logistics"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Branche
                </label>
                <input
                  type="text"
                  value={formData.branche}
                  onChange={(e) => setFormData({ ...formData, branche: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent"
                  placeholder="Logistiek"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Vacature / Functie *
              </label>
              <input
                type="text"
                required
                value={formData.vacature}
                onChange={(e) => setFormData({ ...formData, vacature: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent"
                placeholder="Orderpicker"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Salaris
                </label>
                <input
                  type="text"
                  value={formData.salaris}
                  onChange={(e) => setFormData({ ...formData, salaris: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent"
                  placeholder="€14-16 per uur"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Locatie
                </label>
                <input
                  type="text"
                  value={formData.locatie}
                  onChange={(e) => setFormData({ ...formData, locatie: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent"
                  placeholder="Amsterdam"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Doelgroep
              </label>
              <input
                type="text"
                value={formData.doelgroep}
                onChange={(e) => setFormData({ ...formData, doelgroep: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent"
                placeholder="18-25 jaar, studenten, geen ervaring nodig"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Unique Selling Points
              </label>
              <div className="space-y-2">
                {formData.usps.map((usp, index) => (
                  <input
                    key={index}
                    type="text"
                    value={usp}
                    onChange={(e) => updateUSP(index, e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent"
                    placeholder={`USP ${index + 1} (bijv. flexibele uren)`}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Tone of Voice
              </label>
              <select
                value={formData.toneOfVoice}
                onChange={(e) => setFormData({ ...formData, toneOfVoice: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent"
              >
                <option>Casual en energiek</option>
                <option>Chill en relaxed</option>
                <option>Professioneel maar toegankelijk</option>
                <option>Humoristisch</option>
                <option>Inspirerend</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white py-4 rounded-lg font-semibold hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Scripts genereren...
                </>
              ) : (
                <>✨ Genereer 4 Scripts</>
              )}
            </button>
          </form>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {scripts.length === 0 && !loading && !error && (
            <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-12 text-center">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold mb-2">Geen scripts nog</h3>
              <p className="text-zinc-500">Vul het formulier in en genereer je eerste scripts</p>
            </div>
          )}

          {scripts.map((script, index) => (
            <div
              key={index}
              className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 hover:border-[#3f3f3f] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gradient-to-r from-[#25f4ee] to-[#fe2c55] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {script.style}
                </span>
                <button
                  onClick={() => copyToClipboard(script.script, index)}
                  className="text-zinc-400 hover:text-white text-sm flex items-center gap-1"
                >
                  {copiedIndex === index ? (
                    <span className="text-green-400">✓ Gekopieerd</span>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Kopieer
                    </>
                  )}
                </button>
              </div>

              <div className="mb-4">
                <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Hook</div>
                <p className="text-lg font-semibold text-[#25f4ee]">"{script.hook}"</p>
              </div>

              <div className="mb-4">
                <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Script</div>
                <pre className="text-sm text-zinc-300 whitespace-pre-wrap font-sans leading-relaxed bg-[#0f0f0f] rounded-lg p-4">
                  {script.script}
                </pre>
              </div>

              <div className="mb-4">
                <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Visual Notes</div>
                <p className="text-sm text-zinc-400">{script.visualNotes}</p>
              </div>

              <div className="mb-4">
                <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">CTA</div>
                <p className="text-sm text-[#fe2c55] font-medium">{script.cta}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {script.hashtags.map((tag, i) => (
                  <span key={i} className="text-xs bg-[#0f0f0f] text-zinc-400 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
