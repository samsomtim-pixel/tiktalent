'use client';

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
        <p className="text-zinc-500">Inzicht in je campagne performance</p>
      </div>

      {/* Period selector */}
      <div className="flex gap-2 mb-8">
        {['7 dagen', '30 dagen', '90 dagen', 'Alles'].map((period, i) => (
          <button
            key={period}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              i === 1
                ? 'bg-[#fe2c55] text-white'
                : 'bg-[#18181b] border border-[#27272a] text-zinc-400 hover:text-white hover:border-[#3f3f3f]'
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Totale views', value: '63.4K', change: '+18%', positive: true },
          { label: 'Totale clicks', value: '2,282', change: '+12%', positive: true },
          { label: 'Click-through rate', value: '3.6%', change: '+0.4%', positive: true },
          { label: 'Sollicitaties', value: '50', change: '+24%', positive: true },
        ].map((stat, i) => (
          <div key={i} className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
            <div className="text-zinc-500 text-sm mb-1">{stat.label}</div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className={`text-xs ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
              {stat.change} vs vorige periode
            </div>
          </div>
        ))}
      </div>

      {/* Charts placeholder */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
          <h3 className="font-bold mb-4">Views over tijd</h3>
          <div className="h-64 flex items-center justify-center text-zinc-500">
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <p>Grafiek komt hier</p>
              <p className="text-sm">(Integratie met Recharts)</p>
            </div>
          </div>
        </div>
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
          <h3 className="font-bold mb-4">Sollicitaties per campagne</h3>
          <div className="h-64 flex items-center justify-center text-zinc-500">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p>Grafiek komt hier</p>
              <p className="text-sm">(Integratie met Recharts)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top performing content */}
      <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
        <h3 className="font-bold mb-4">Best presterende content</h3>
        <div className="space-y-4">
          {[
            { title: 'POV: Je eerste dag als orderpicker', views: '12.3K', ctr: '4.2%', applications: 8 },
            { title: 'Mythbusting: Warehouse werk is niet saai', views: '11.2K', ctr: '3.8%', applications: 7 },
            { title: 'Day in the life: Barista bij ons', views: '10.8K', ctr: '3.5%', applications: 6 },
            { title: 'Waarom ik hier werk (employee story)', views: '10.5K', ctr: '3.9%', applications: 6 },
          ].map((video, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-[#0f0f0f] rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#25f4ee] to-[#fe2c55] flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div className="font-medium">{video.title}</div>
              </div>
              <div className="flex items-center gap-8 text-sm">
                <div className="text-right">
                  <div className="text-zinc-500">Views</div>
                  <div className="font-medium">{video.views}</div>
                </div>
                <div className="text-right">
                  <div className="text-zinc-500">CTR</div>
                  <div className="font-medium">{video.ctr}</div>
                </div>
                <div className="text-right">
                  <div className="text-zinc-500">Sollicitaties</div>
                  <div className="font-medium text-[#25f4ee]">{video.applications}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
