# TikTalent - Complete MVP

Gen Z recruitment via TikTok. Complete Next.js 14 applicatie.

## Features

- ✅ Landing page met TikTok-native design
- ✅ Login systeem met sessies
- ✅ Klant dashboard
- ✅ AI Script Generator (OpenAI GPT-4)
- ✅ Campagne overzicht
- ✅ Analytics dashboard
- ✅ Creator briefing template
- ✅ Client landing page template

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
cp .env.example .env.local
# Vul je OpenAI API key in

# 3. Start development server
npm run dev
```

Open http://localhost:3000

## Demo Login

- **Email:** demo@tiktalent.nl
- **Password:** demo123

## Project Structure

```
tiktalent-v2/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   ├── logout/route.ts
│   │   │   └── session/route.ts
│   │   └── generate-scripts/
│   │       └── route.ts
│   ├── dashboard/
│   │   ├── layout.tsx         # Dashboard sidebar
│   │   ├── page.tsx           # Dashboard overview
│   │   ├── scripts/page.tsx   # Script generator
│   │   ├── campagnes/page.tsx # Campaigns
│   │   └── analytics/page.tsx # Analytics
│   ├── login/
│   │   └── page.tsx           # Login page
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx               # Landing page
├── templates/
│   ├── creator-briefing-template.md
│   └── client-landing-template.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── .env.example
```

## Environment Variables

```env
OPENAI_API_KEY=sk-...
```

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- OpenAI GPT-4

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import in Vercel
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy

## Roadmap

- [ ] Database integratie (Supabase/Planetscale)
- [ ] Echte authenticatie (NextAuth.js)
- [ ] TikTok API integratie voor analytics
- [ ] Stripe voor betalingen
- [ ] Email notificaties

## Support

Questions? Contact tim@tiktalent.nl
