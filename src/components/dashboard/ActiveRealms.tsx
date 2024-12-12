import React from 'react';

const realms = [
  { name: 'Crystal Caves', status: 'Active', color: 'green' },
  { name: 'Ethereal Forest', status: 'Maintenance', color: 'yellow' },
  { name: 'Quantum Nexus', status: 'Development', color: 'blue' },
];

export function ActiveRealms() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Active Realms</h2>
      <div className="space-y-3">
        {realms.map((realm) => (
          <div key={realm.name} className="flex items-center justify-between text-gray-200">
            <span>{realm.name}</span>
            <span className={`px-2 py-1 bg-${realm.color}-500/20 text-${realm.color}-300 rounded-full text-xs`}>
              {realm.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}