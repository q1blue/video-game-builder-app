import React from 'react';

const stats = [
  { value: '42', label: 'Active Quests', color: 'purple' },
  { value: '156', label: 'NPCs', color: 'blue' },
  { value: '89%', label: 'System Uptime', color: 'green' },
  { value: '12', label: 'Active Mods', color: 'yellow' },
];

export function QuickStats() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Quick Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className={`text-2xl font-bold text-${stat.color}-300`}>{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}