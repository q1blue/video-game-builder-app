import React from 'react';
import { useCharacter } from './hooks/useCharacter';

export function CharacterStats() {
  const { stats, levelUp, canLevelUp } = useCharacter();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Character Stats</h2>
        <div className="text-right">
          <p className="text-sm text-gray-300">Level {stats.level}</p>
          <p className="text-xs text-gray-400">
            {stats.experience}/{stats.requiredExperience} XP
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
        <div
          className="bg-purple-600 h-2 rounded-full"
          style={{
            width: `${(stats.experience / stats.requiredExperience) * 100}%`,
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.entries(stats.attributes).map(([attr, value]) => (
          <div key={attr} className="bg-white/5 rounded-lg p-3">
            <p className="text-gray-300 capitalize">{attr}</p>
            <p className="text-2xl font-bold text-purple-300">{value}</p>
          </div>
        ))}
      </div>

      {canLevelUp && (
        <button
          onClick={levelUp}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Level Up
        </button>
      )}
    </div>
  );
}