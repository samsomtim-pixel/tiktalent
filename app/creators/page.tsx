'use client';

import { useState } from 'react';
import Link from 'next/link';

type Gender = 'all' | 'man' | 'vrouw';
type Age = 'all' | '18-21' | '22-25' | '26+';
type Sector = 'all' | 'Horeca' | 'Retail' | 'Tech' | 'Zorg';

interface Creator {
  id: number;
  name: string;
  age: number;
  gender: 'man' | 'vrouw';
  vibe: string;
  sectors: string[];
  available: boolean;
}

const creators: Creator[] = [
  { id: 1, name: 'Lisa van Dijk', age: 22, gender: 'vrouw', vibe: 'Energiek & positief', sectors: ['Horeca', 'Retail'], available: true },
  { id: 2, name: 'Kevin Mensah', age: 24, gender: 'man', vibe: 'Professioneel & betrouwbaar', sectors: ['Tech', 'Kantoor'], available: true },
  { id: 3, name: 'Yasmin Al-Rashid', age: 20, gender: 'vrouw', vibe: 'Grappig & authentiek', sectors: ['Horeca', 'Events'], available: false },
  { id: 4, name: 'Thijs Bakker', age: 23, gender: 'man', vibe: 'Rustig & serieus', sectors: ['Zorg', 'Onderwijs'], available: true },
  { id: 5, name: 'Naomi Osei', age: 21, gender: 'vrouw', vibe: 'Creatief & speels', sectors: ['Retail', 'Beauty'], available: true },
  { id: 6, name: 'Jasper de Vries', age: 25, gender: 'man', vibe: 'Sportief & gemotiveerd', sectors: ['Sport', 'Outdoor'], available: true },
  { id: 7, name: 'Mira Jansen', age: 19, gender: 'vrouw', vibe: 'Trendy & social', sectors: ['Fashion', 'Retail'], available: true },
  { id: 8, name: 'Daan Vermeulen', age: 22, gender: 'man', vibe: 'Tech-savvy & chill', sectors: ['Tech', 'Gaming'], available: true },
  { id: 9, name: 'Aisha Yilmaz', age: 23, gender: 'vrouw', vibe: 'Warm & empathisch', sectors: ['Zorg', 'Horeca'], available: true },
  { id: 10, name: 'Luuk Peters', age: 20, gender: 'man', vibe: 'Enthousiast & jong', sectors: ['Horeca', 'Retail'], available: false },
  { id: 11, name: 'Sophie de Wit', age: 24, gender: 'vrouw', vibe: 'Professioneel & stijlvol', sectors: ['Kantoor', 'Events'], available: true },
  { id: 12, name: 'Omar Hassan', age: 21, gender: 'man', vibe: 'Grappig & energiek', sectors: ['Retail', 'Sport'], available: true },
];

export default function CreatorsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [genderFilter, setGenderFilter] = useState<Gender>('all');
  const [ageFilter, setAgeFilter] = useState<Age>('all');
  const [sectorFilter, setSectorFilter] = useState<Sector>('all');

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAgeRange = (age: number): '18-21' | '22-25' | '26+' => {
    if (age <= 21) return '18-21';
    if (age <= 25) return '22-25';
    return '26+';
  };

  const filteredCreators = creators.filter(creator => {
    if (genderFilter !== 'all' && creator.gender !== genderFilter) return false;
    if (ageFilter !== 'all' && getAgeRange(creator.age) !== ageFilter) return false;
    if (sectorFilter !== 'all' && !creator.sectors.includes(sectorFilter)) return false;
    return true;
  });

  const resetFilters = () => {
    setGenderFilter('all');
    setAgeFilter('all');
    setSectorFilter('all');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-5 flex justify-between items-center">
          {/* Left group: Logo + Creators + Brands */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/" className="text-xl md:text-2xl font-black flex">
              <span className="text-[#25f4ee]">Tik</span>
              <span className="text-[#fe2c55]">Talent</span>
            </Link>
            <Link 
              href="/creators"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors hidden md:block"
            >
              Creators
            </Link>
            <Link 
              href="/brands"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors hidden md:block"
            >
              Brands
            </Link>
          </div>

          {/* Right group: Desktop nav + Mobile hamburger */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="/#werkwijze" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                Werkwijze
              </a>
              <a href="/#pakketten" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                Pakketten
              </a>
              <Link 
                href="/voorbeelden"
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
              >
                Voorbeelden
              </Link>
              <Link 
                href="/login"
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
              >
                Inloggen
              </Link>
              <a 
                href="/#contact" 
                className="bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)] transition-all"
              >
                Gratis adviesgesprek
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - Full Screen */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 z-50 flex flex-col animate-fadeIn">
            {/* Header with logo + close */}
            <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-800">
              <div className="text-xl md:text-2xl font-black flex">
                <span className="text-[#25f4ee]">Tik</span>
                <span className="text-[#fe2c55]">Talent</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-4xl hover:text-[#fe2c55] transition-colors leading-none"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* Navigation links - full screen, centered, large */}
            <nav className="flex-1 flex flex-col justify-center items-center gap-6 md:gap-8 p-8">
              <Link
                href="/creators"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl md:text-3xl font-medium hover:text-[#25f4ee] transition-colors"
              >
                Creators
              </Link>
              <Link
                href="/brands"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl md:text-3xl font-medium hover:text-[#25f4ee] transition-colors"
              >
                Brands
              </Link>
              <a
                href="/#werkwijze"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl md:text-3xl font-medium hover:text-[#25f4ee] transition-colors"
              >
                Werkwijze
              </a>
              <a
                href="/#pakketten"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl md:text-3xl font-medium hover:text-[#25f4ee] transition-colors"
              >
                Pakketten
              </a>
              <Link
                href="/voorbeelden"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl md:text-3xl font-medium hover:text-[#25f4ee] transition-colors"
              >
                Voorbeelden
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl md:text-3xl font-medium hover:text-[#25f4ee] transition-colors"
              >
                Inloggen
              </Link>

              {/* CTA button at bottom */}
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)] transition-all"
              >
                Gratis adviesgesprek
              </a>
            </nav>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-24 md:pt-32 py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4">
              Ons Gen Z Creator Netwerk
            </h1>
            <p className="text-base md:text-lg text-zinc-500">
              20+ handpicked creators die jouw vacatures omzetten in sollicitaties
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <select
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value as Gender)}
              className="bg-[#18181b] border border-[#27272a] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent transition-all"
            >
              <option value="all">Alle genders</option>
              <option value="man">Man</option>
              <option value="vrouw">Vrouw</option>
            </select>

            <select
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value as Age)}
              className="bg-[#18181b] border border-[#27272a] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent transition-all"
            >
              <option value="all">Alle leeftijden</option>
              <option value="18-21">18-21</option>
              <option value="22-25">22-25</option>
              <option value="26+">26+</option>
            </select>

            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value as Sector)}
              className="bg-[#18181b] border border-[#27272a] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent transition-all"
            >
              <option value="all">Alle sectoren</option>
              <option value="Horeca">Horeca</option>
              <option value="Retail">Retail</option>
              <option value="Tech">Tech</option>
              <option value="Zorg">Zorg</option>
            </select>

            <button
              onClick={resetFilters}
              className="ml-auto text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Reset filters
            </button>
          </div>
        </div>
      </section>

      {/* Creator Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredCreators.map((creator) => (
              <div
                key={creator.id}
                className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25f4ee] to-[#fe2c55] flex items-center justify-center text-white font-bold text-lg">
                    {getInitials(creator.name)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{creator.name}</h3>
                    <p className="text-sm text-zinc-500">{creator.age} jaar</p>
                  </div>
                </div>

                {/* Vibe Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#25f4ee]/10 border border-[#25f4ee]/30 rounded-full text-xs text-[#25f4ee]">
                    {creator.vibe}
                  </span>
                </div>

                {/* Sector Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {creator.sectors.map((sector, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-zinc-400"
                    >
                      {sector}
                    </span>
                  ))}
                </div>

                {/* Availability Badge */}
                <div className="mb-4">
                  {creator.available ? (
                    <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-xs text-green-400">
                      Beschikbaar
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-1 bg-zinc-500/10 border border-zinc-500/30 rounded-full text-xs text-zinc-400">
                      Binnenkort
                    </span>
                  )}
                </div>

                {/* Button */}
                <button
                  className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    creator.available
                      ? 'bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)]'
                      : 'bg-[#0f0f0f] border border-[#27272a] text-zinc-500 cursor-not-allowed'
                  }`}
                  disabled={!creator.available}
                >
                  {creator.available ? 'Vraag beschikbaarheid' : 'Binnenkort beschikbaar'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-8 md:py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-black mb-2">Eigen team of custom influencer?</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center max-w-md mx-auto">
            <button className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/5 hover:border-white/40 transition-all">
              Upload eigen content
            </button>
            <button className="bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)] transition-all">
              Vraag custom influencer
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl md:text-2xl font-black flex">
            <span className="text-[#25f4ee]">Tik</span>
            <span className="text-[#fe2c55]">Talent</span>
          </div>
          <p className="text-zinc-500 text-sm">© 2025 TikTalent</p>
        </div>
      </footer>
    </div>
  );
}

