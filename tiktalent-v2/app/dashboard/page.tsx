'use client';

import Link from 'next/link';

export default function DashboardPage() {
  // Demo data - later vervangen met echte data
  const stats = [
    { label: 'Actieve campagnes', value: '2', change: '+1 deze maand' },
    { label: 'Video\'s gemaakt', value: '12', change: '+4 deze week' },
    { label: 'Totale views', value: '45.2K', change: '+12% vs vorige week' },
    { label: 'Sollicitaties', value: '28', change: '+8 deze week' },
  ];

  const recentCampaigns = [
    { id: 1, name: 'Orderpicker Schiphol', status: 'active', videos: 4, views: '23.5K', applications: 15 },
    { id: 2, name: 'Barista Amsterdam', status: 'active', videos: 4, views: '21.7K', applications: 13 },
    { id: 3, name: 'Bezorger Utrecht', status: 'ended', videos: 4, views: '18.2K', applications: 22 },
  ];

  const recentScripts = [
    { id: 1, title: 'POV: Je eerste dag als orderpicker', date: '2 uur geleden' },
    { id: 2, title: 'Mythbusting: Horeca werk', date: '1 dag geleden' },
    { id: 3, title: 'Day in the life: Bezorger', date: '3 dagen geleden' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-zinc-500">Welkom terug! Hier is een overzicht van je campagnes.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
            <div className="text-zinc-500 text-sm mb-1">{stat.label}</div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-xs text-[#25f4ee]">{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Campaigns */}
        <div className="lg:col-span-2 bg-[#18181b] border border-[#27272a] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Campagnes</h2>
            <Link href="/dashboard/campagnes" className="text-sm text-[#25f4ee] hover:underline">
              Bekijk alle →
            </Link>
          </div>
          <div className="space-y-4">
            {recentCampaigns.map((campaign) => (
              <div key={campaign.id} className="flex items-center justify-between p-4 bg-[#0f0f0f] rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${campaign.status === 'active' ? 'bg-green-500' : 'bg-zinc-500'}`} />
                  <div>
                    <div className="font-medium">{campaign.name}</div>
                    <div className="text-sm text-zinc-500">{campaign.videos} video's</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{campaign.views} views</div>
                  <div className="text-sm text-zinc-500">{campaign.applications} sollicitaties</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & Recent Scripts */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Snel starten</h2>
            <div className="space-y-3">
              <Link
                href="/dashboard/scripts"
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#fe2c55]/10 to-[#fe2c55]/5 border border-[#fe2c55]/30 rounded-lg hover:border-[#fe2c55]/50 transition-all"
              >
                <span className="text-2xl">✨</span>
                <div>
                  <div className="font-medium">Nieuwe scripts genereren</div>
                  <div className="text-sm text-zinc-500">AI-powered content</div>
                </div>
              </Link>
              <Link
                href="/dashboard/campagnes/new"
                className="flex items-center gap-3 p-4 bg-[#0f0f0f] border border-[#27272a] rounded-lg hover:border-[#3f3f3f] transition-all"
              >
                <span className="text-2xl">🎬</span>
                <div>
                  <div className="font-medium">Nieuwe campagne</div>
                  <div className="text-sm text-zinc-500">Start een vacature campagne</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Recent Scripts */}
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Recente scripts</h2>
            <div className="space-y-3">
              {recentScripts.map((script) => (
                <div key={script.id} className="p-3 bg-[#0f0f0f] rounded-lg">
                  <div className="font-medium text-sm mb-1 truncate">{script.title}</div>
                  <div className="text-xs text-zinc-500">{script.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
