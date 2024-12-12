import React from 'react';

export function SystemStatus() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">System Status</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-gray-200">
          <span>Server Load</span>
          <div className="w-32 bg-gray-700 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
          </div>
        </div>
        <div className="flex items-center justify-between text-gray-200">
          <span>Active Players</span>
          <span className="text-green-400">1,234</span>
        </div>
        <div className="flex items-center justify-between text-gray-200">
          <span>Quest Completion Rate</span>
          <span className="text-blue-400">87%</span>
        </div>
      </div>
    </div>
  );
}