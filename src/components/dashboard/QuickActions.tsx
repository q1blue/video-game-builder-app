import React from 'react';

export function QuickActions() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
      <div className="space-y-3">
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors">
          Create New Realm
        </button>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors">
          Manage NPCs
        </button>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors">
          Edit Quest Lines
        </button>
      </div>
    </div>
  );
}