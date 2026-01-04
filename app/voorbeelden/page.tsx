'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const videos = [
  { videoPath: '/voorbeelden/video-1-horeca.mp4', tag: 'Horeca' },
  { videoPath: '/voorbeelden/video-2-events.mp4', tag: 'Events' },
  { videoPath: '/voorbeelden/video-3-horeca.mp4', tag: 'Horeca' },
  { videoPath: '/voorbeelden/video-4-horeca.mp4', tag: 'Horeca' },
  { videoPath: '/voorbeelden/video-5-retail.mp4', tag: 'Retail' },
  { videoPath: '/voorbeelden/video-6-hospitality.mp4', tag: 'Hospitality' },
  { videoPath: '/voorbeelden/cafe-marcella-2.mp4', tag: 'Horeca' },
];

const VideoCard = ({ video }: { video: typeof videos[0] }) => {
  return (
    <div
      className="bg-[#18181b] border border-[#27272a] rounded-xl p-4 hover:border-white/20 transition-all hover:-translate-y-1 max-w-[340px] mx-auto"
    >
      <video
        className="w-full rounded-lg aspect-[9/16] object-cover"
        controls
        playsInline
        preload="metadata"
      >
        <source src={video.videoPath} type="video/mp4" />
        Your browser does not support video.
      </video>
      <div className="mt-4 text-center">
        <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400">
          {video.tag}
        </span>
      </div>
    </div>
  );
};

export default function VoorbeeldenPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
          <div 
            className="md:hidden fixed inset-0 bg-black z-[9999] overflow-hidden"
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#000000'
            }}
          >
            {/* Header: Logo + Close */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800 bg-black">
              <div className="text-2xl font-black flex">
                <span className="text-[#25f4ee]">Tik</span>
                <span className="text-[#fe2c55]">Talent</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-4xl leading-none hover:text-[#fe2c55] transition-colors"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* Navigation - vertically centered */}
            <div className="h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 bg-black">
              <Link
                href="/creators"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-[#25f4ee] transition-colors"
              >
                Creators
              </Link>
              <Link
                href="/brands"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-[#25f4ee] transition-colors"
              >
                Brands
              </Link>
              <a
                href="/#werkwijze"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-[#25f4ee] transition-colors"
              >
                Werkwijze
              </a>
              <a
                href="/#pakketten"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-[#25f4ee] transition-colors"
              >
                Pakketten
              </a>
              <Link
                href="/voorbeelden"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-[#25f4ee] transition-colors"
              >
                Voorbeelden
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-[#25f4ee] transition-colors"
              >
                Inloggen
              </Link>

              {/* CTA button */}
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white px-12 py-4 rounded-lg text-lg font-semibold w-[80%] max-w-md text-center hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)] transition-all"
              >
                Gratis adviesgesprek
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-24 md:pt-32 py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4">
              Zo ziet TikTok recruitment eruit
            </h1>
            <p className="text-base md:text-lg text-zinc-500">
              Echte voorbeelden van bedrijven die Gen Z bereiken via TikTok
            </p>
          </div>
        </div>
      </section>

      {/* TikTok Video Grid */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {videos.map((video, i) => (
              <VideoCard key={i} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Klaar om jouw vacatures viral te maken?</h2>
            <p className="text-zinc-500 text-base md:text-lg mb-6 md:mb-8 max-w-lg mx-auto">
              Start met een pilot van €750 en zie binnen 7 dagen resultaat
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white px-8 py-4 rounded-lg font-semibold hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)] transition-all"
            >
              Start je pilot →
            </Link>
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

