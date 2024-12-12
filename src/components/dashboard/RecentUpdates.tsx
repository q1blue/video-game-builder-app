import React from 'react';

const updates = [
  {
    title: 'New Alchemy System',
    description: 'Enhanced potion crafting mechanics',
  },
  {
    title: 'Quest System Update',
    description: 'Added branching storylines',
  },
  {
    title: 'NPC AI Improvements',
    description: 'Enhanced emotional responses',
  },
];

export function RecentUpdates() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Recent Updates</h2>
      <div className="space-y-3">
        {updates.map((update) => (
          <div key={update.title} className="text-gray-200">
            <p className="font-medium">{update.title}</p>
            <p className="text-sm text-gray-400">{update.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}