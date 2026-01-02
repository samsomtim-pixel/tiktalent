'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login mislukt');
      }

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er ging iets mis');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex justify-center mb-8">
          <div className="text-3xl font-black">
            <span className="text-[#25f4ee]">Tik</span>
            <span className="text-[#fe2c55]">Talent</span>
          </div>
        </Link>

        {/* Login Card */}
        <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-center mb-2">Welkom terug</h1>
          <p className="text-zinc-500 text-center mb-8">Log in op je dashboard</p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                E-mailadres
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent transition-all"
                placeholder="jouw@email.nl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Wachtwoord
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-zinc-400">
                <input type="checkbox" className="rounded border-zinc-600 bg-transparent" />
                Onthoud mij
              </label>
              <a href="#" className="text-[#25f4ee] hover:underline">
                Wachtwoord vergeten?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white py-3.5 rounded-lg font-semibold hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Inloggen...' : 'Inloggen'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#27272a] text-center">
            <p className="text-zinc-500 text-sm">
              Nog geen account?{' '}
              <a href="#contact" className="text-[#25f4ee] hover:underline">
                Neem contact op
              </a>
            </p>
          </div>
        </div>

        {/* Demo login hint */}
        <div className="mt-6 p-4 bg-[#25f4ee]/10 border border-[#25f4ee]/30 rounded-lg">
          <p className="text-sm text-[#25f4ee] text-center">
            <strong>Demo:</strong> Gebruik demo@tiktalent.nl / demo123
          </p>
        </div>
      </div>
    </div>
  );
}
