'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" 
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`}} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-black flex">
            <span className="text-[#25f4ee]">Tik</span>
            <span className="text-[#fe2c55]">Talent</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#werkwijze" className="text-zinc-500 hover:text-white text-sm font-medium transition-colors hidden sm:block">
              Werkwijze
            </a>
            <a href="#pakketten" className="text-zinc-500 hover:text-white text-sm font-medium transition-colors hidden sm:block">
              Pakketten
            </a>
            <Link 
              href="/login"
              className="text-zinc-500 hover:text-white text-sm font-medium transition-colors"
            >
              Inloggen
            </Link>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)] transition-all"
            >
              Gratis adviesgesprek
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#25f4ee]/10 border border-[#25f4ee]/30 rounded-full text-[13px] text-[#25f4ee] mb-6">
              <span className="w-1.5 h-1.5 bg-[#25f4ee] rounded-full animate-pulse" />
              Nu beschikbaar in Nederland
            </div>
            <h1 className="text-5xl sm:text-7xl font-black leading-[1] mb-6">
              Vind Gen Z talent via{' '}
              <span className="bg-gradient-to-r from-[#25f4ee] to-[#fe2c55] bg-clip-text text-transparent">
                TikTok
              </span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-10 max-w-lg">
              Vergeet Indeed en LinkedIn. 40% van Gen Z zoekt via TikTok. Wij maken virale vacaturecontent die jouw doelgroep wél bereikt.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white px-6 py-3.5 rounded-lg font-semibold hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)] transition-all"
              >
                Start je eerste campagne →
              </a>
              <a 
                href="#werkwijze" 
                className="border border-white/20 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-white/5 hover:border-white/40 transition-all"
              >
                Bekijk hoe het werkt
              </a>
            </div>
          </div>
        </div>

        {/* Phone mockup - hidden on mobile */}
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-[280px] h-[560px] bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-[40px] border-[3px] border-[#333] relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] animate-float">
            <div className="absolute inset-2 bg-[#0a0a0a] rounded-[32px] overflow-hidden">
              <div className="h-full flex flex-col">
                <div className="flex-1 bg-gradient-to-b from-[#1e3a5f] to-[#0f1c2e] flex items-center justify-center relative">
                  <div className="w-[60px] h-[60px] bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1.5" />
                  </div>
                  <div className="absolute bottom-16 left-3 right-16">
                    <div className="font-bold text-sm mb-1">@jouwbedrijf</div>
                    <div className="text-xs text-white/80">Wij zoeken nieuwe collega's! 🚀 #vacature</div>
                  </div>
                </div>
                <div className="h-[50px] bg-black flex justify-around items-center px-5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`${i === 2 ? 'w-9 h-7 bg-white rounded-lg' : 'w-6 h-6 bg-white/30 rounded'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '40%', label: 'van Gen Z zoekt via TikTok' },
              { value: '€0.50', label: 'gemiddelde cost per click' },
              { value: '7x', label: 'hogere engagement dan LinkedIn' },
              { value: '7 dagen', label: 'van briefing tot live campagne' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#25f4ee] to-[#fe2c55] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-zinc-500 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4">Waarom traditionele werving niet meer werkt</h2>
            <p className="text-zinc-500 text-lg">Gen Z zit niet op Indeed. Ze scrollen door TikTok.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-10 rounded-2xl border border-[#fe2c55]/20 bg-gradient-to-b from-[#fe2c55]/5 to-transparent">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#fe2c55]">✕</span> Oude aanpak
              </h3>
              <ul className="space-y-4">
                {[
                  'Saaie vacatureteksten op Indeed',
                  '€5+ per klik op LinkedIn',
                  'Alleen actief werkzoekenden',
                  'Weken wachten op reacties',
                  'Geen zicht op employer brand',
                ].map((item, i) => (
                  <li key={i} className="text-zinc-500 py-3 border-b border-white/5 last:border-0">{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-2xl border border-[#25f4ee]/20 bg-gradient-to-b from-[#25f4ee]/5 to-transparent">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#25f4ee]">✓</span> TikTalent aanpak
              </h3>
              <ul className="space-y-4">
                {[
                  'Authentieke video content die resoneert',
                  '€0.20-0.50 per klik op TikTok',
                  'Bereik ook passief talent',
                  'Eerste sollicitaties binnen 48 uur',
                  'Bouw een sterk werkgeversmerk',
                ].map((item, i) => (
                  <li key={i} className="text-zinc-500 py-3 border-b border-white/5 last:border-0">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="werkwijze" className="py-28 bg-gradient-to-b from-transparent via-[#25f4ee]/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4">Van briefing tot sollicitatie in 7 dagen</h2>
            <p className="text-zinc-500 text-lg">Wij regelen alles: script, creators, productie en ads.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Briefing', desc: 'We bespreken je vacature, doelgroep en tone of voice. Wat maakt werken bij jou uniek?' },
              { num: '02', title: 'Scripts & Creators', desc: 'AI genereert platformoptimized scripts. We matchen Nederlandse creators die bij je merk passen.' },
              { num: '03', title: 'Productie', desc: 'Creators filmen de content. Jij keurt goed. Wij editen en optimaliseren voor maximaal bereik.' },
              { num: '04', title: 'Launch & Track', desc: 'Content gaat live met paid boost. Realtime dashboard toont views, clicks en sollicitaties.' },
            ].map((step, i) => (
              <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl relative hover:bg-white/[0.04] hover:border-[#25f4ee]/30 hover:-translate-y-1 transition-all">
                <div className="absolute top-4 right-6 text-6xl font-black text-white/5">{step.num}</div>
                <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="pakketten" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4">Transparante pakketten</h2>
            <p className="text-zinc-500 text-lg">Geen verborgen kosten. Ad spend inbegrepen.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Try-out', price: '€750', period: 'eenmalig', features: ['2 video\'s', '€100 ad spend', '1 vacature', 'Basis reporting', 'Perfect om te testen'], featured: false },
              { name: 'Starter', price: '€1.250', period: 'per maand', features: ['4 video\'s', '€250 ad spend', '2 vacatures', 'Maandelijkse call', 'Performance dashboard'], featured: false },
              { name: 'Growth', price: '€2.250', period: 'per maand', features: ['8 video\'s', '€500 ad spend', 'Dedicated landing page', 'UTM tracking & funnel', 'Wekelijkse reporting'], featured: true },
              { name: 'Performance', price: '€3.500', period: 'per maand', features: ['12 video\'s', '€1.000 ad spend', 'Dedicated creator', 'A/B testing', 'Cost-per-hire tracking'], featured: false },
            ].map((pkg, i) => (
              <div key={i} className={`p-8 rounded-2xl border relative transition-all hover:border-white/20 ${pkg.featured ? 'bg-gradient-to-b from-[#fe2c55]/10 to-[#fe2c55]/[0.02] border-[#fe2c55]' : 'bg-white/[0.02] border-white/10'}`}>
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fe2c55] text-white px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide">
                    Populair
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-black mb-1">{pkg.price}</div>
                <div className="text-zinc-500 text-sm mb-6">{pkg.period}</div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="text-sm text-zinc-400 flex items-start gap-2">
                      <span className="text-[#25f4ee]">→</span> {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${pkg.featured ? 'bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)]' : 'border border-white/20 text-white hover:bg-white/5'}`}
                >
                  Selecteer
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#fe2c55]/10 to-[#25f4ee]/10 border border-white/10 rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,44,85,0.1)_0%,transparent_50%)] animate-spin-slow" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4">Klaar om Gen Z te bereiken?</h2>
              <p className="text-zinc-500 text-lg mb-8 max-w-lg mx-auto">
                Plan een gratis adviesgesprek. We bespreken je vacatures en laten zien wat mogelijk is.
              </p>
              <a 
                href="mailto:tim@tiktalent.nl" 
                className="inline-block bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white px-8 py-4 rounded-lg font-semibold hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)] transition-all"
              >
                Plan je gesprek →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black flex">
            <span className="text-[#25f4ee]">Tik</span>
            <span className="text-[#fe2c55]">Talent</span>
          </div>
          <p className="text-zinc-500 text-sm">© 2025 TikTalent</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(5deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
