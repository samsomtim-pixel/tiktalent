'use client';

import Link from 'next/link';

export default function CampagnesPage() {
  const campaigns = [
    {
      id: 1,
      name: 'Orderpicker Schiphol',
      status: 'active',
      startDate: '15 dec 2024',
      videos: 4,
      views: '23.5K',
      clicks: 892,
      applications: 15,
      costPerApplication: '€16.50',
    },
    {
      id: 2,
      name: 'Barista Amsterdam',
      status: 'active',
      startDate: '20 dec 2024',
      videos: 4,
      views: '21.7K',
      clicks: 756,
      applications: 13,
      costPerApplication: '€19.20',
    },
    {
      id: 3,
      name: 'Bezorger Utrecht',
      status: 'ended',
      startDate: '1 nov 2024',
      endDate: '30 nov 2024',
      videos: 4,
      views: '18.2K',
      clicks: 634,
      applications: 22,
      costPerApplication: '€11.40',
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Campagnes</h1>
          <p className="text-zinc-500">Beheer je TikTok recruitment campagnes</p>
        </div>
        <Link
          href="/dashboard/campagnes/new"
          className="bg-gradient-to-r from-[#fe2c55] to-[#ff6b6b] text-white px-5 py-3 rounded-lg font-semibold hover:shadow-[0_10px_40px_rgba(254,44,85,0.3)] transition-all"
        >
          + Nieuwe campagne
        </Link>
      </div>

      {/* Campaigns Table */}
      <div className="bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#27272a]">
              <th className="text-left p-4 text-sm font-medium text-zinc-500">Campagne</th>
              <th className="text-left p-4 text-sm font-medium text-zinc-500">Status</th>
              <th className="text-right p-4 text-sm font-medium text-zinc-500">Video's</th>
              <th className="text-right p-4 text-sm font-medium text-zinc-500">Views</th>
              <th className="text-right p-4 text-sm font-medium text-zinc-500">Clicks</th>
              <th className="text-right p-4 text-sm font-medium text-zinc-500">Sollicitaties</th>
              <th className="text-right p-4 text-sm font-medium text-zinc-500">Cost/sollicitatie</th>
              <th className="text-right p-4 text-sm font-medium text-zinc-500"></th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="border-b border-[#27272a] last:border-0 hover:bg-white/[0.02]">
                <td className="p-4">
                  <div className="font-medium">{campaign.name}</div>
                  <div className="text-sm text-zinc-500">
                    {campaign.startDate} {campaign.endDate && `- ${campaign.endDate}`}
                  </div>
                </td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                    campaign.status === 'active' 
                      ? 'bg-green-500/10 text-green-400' 
                      : 'bg-zinc-500/10 text-zinc-400'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      campaign.status === 'active' ? 'bg-green-400' : 'bg-zinc-400'
                    }`} />
                    {campaign.status === 'active' ? 'Actief' : 'Beëindigd'}
                  </span>
                </td>
                <td className="p-4 text-right">{campaign.videos}</td>
                <td className="p-4 text-right">{campaign.views}</td>
                <td className="p-4 text-right">{campaign.clicks}</td>
                <td className="p-4 text-right font-medium text-[#25f4ee]">{campaign.applications}</td>
                <td className="p-4 text-right">{campaign.costPerApplication}</td>
                <td className="p-4 text-right">
                  <button className="text-zinc-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
