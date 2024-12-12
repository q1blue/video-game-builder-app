import React, { useState } from 'react';
import { Map, Users, Gem, Star, Swords, Sparkles } from 'lucide-react';
import { QuestType, QuestReward } from './types';
import { questTypes, rewards } from './constants';

interface Quest {
  title: string;
  type: string;
  difficulty: string;
  rewards: string[];
}

export function QuestBuilder() {
  const [quest, setQuest] = useState<Quest>({
    title: '',
    type: 'exploration',
    difficulty: 'normal',
    rewards: [],
  });

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Quest Builder</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Quest Title</label>
          <input
            type="text"
            value={quest.title}
            onChange={(e) => setQuest({ ...quest, title: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white"
            placeholder="Enter quest title..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Quest Type</label>
          <div className="grid grid-cols-2 gap-2">
            {questTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setQuest({ ...quest, type: type.id })}
                className={`flex items-center p-2 rounded-md ${
                  quest.type === type.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-purple-600/30'
                }`}
              >
                <type.icon className="w-4 h-4 mr-2" />
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Rewards</label>
          <div className="grid grid-cols-3 gap-2">
            {rewards.map((reward) => (
              <button
                key={reward.id}
                onClick={() => {
                  const newRewards = quest.rewards.includes(reward.id)
                    ? quest.rewards.filter((r) => r !== reward.id)
                    : [...quest.rewards, reward.id];
                  setQuest({ ...quest, rewards: newRewards });
                }}
                className={`flex items-center p-2 rounded-md ${
                  quest.rewards.includes(reward.id)
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-purple-600/30'
                }`}
              >
                <reward.icon className="w-4 h-4 mr-2" />
                {reward.label}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors">
          Create Quest Line
        </button>
      </div>
    </div>
  );
}