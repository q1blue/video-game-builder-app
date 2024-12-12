import React from 'react';
import { Trophy } from 'lucide-react';
import { useAchievements } from './hooks/useAchievements';

export function Achievements() {
  const { achievements } = useAchievements();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Achievements</h2>
      <div className="space-y-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`bg-white/5 rounded-lg p-4 border ${
              achievement.completed
                ? 'border-purple-500/50'
                : 'border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <achievement.icon
                  className={`w-5 h-5 mr-2 ${
                    achievement.completed
                      ? 'text-purple-400'
                      : 'text-gray-400'
                  }`}
                />
                <h3 className="text-white font-medium">{achievement.name}</h3>
              </div>
              <Trophy
                className={`w-4 h-4 ${
                  achievement.completed
                    ? 'text-yellow-400'
                    : 'text-gray-600'
                }`}
              />
            </div>
            <p className="text-sm text-gray-300 mb-2">{achievement.description}</p>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{
                  width: `${(achievement.progress / achievement.total) * 100}%`,
                }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {achievement.progress}/{achievement.total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}