import { useState } from 'react';
import { Trophy, Star, Book, Gem } from 'lucide-react';
import { Achievement } from '../types';

const initialAchievements: Achievement[] = [
  {
    id: 'first_potion',
    name: 'Novice Alchemist',
    description: 'Craft your first potion',
    icon: Trophy,
    progress: 1,
    total: 1,
    completed: true,
    rewards: [
      {
        id: 'exp_reward',
        type: 'experience',
        value: 100,
        icon: Star,
      },
    ],
  },
  {
    id: 'master_spells',
    name: 'Spell Master',
    description: 'Learn 10 different spells',
    icon: Book,
    progress: 7,
    total: 10,
    completed: false,
    rewards: [
      {
        id: 'skill_point_reward',
        type: 'skill-point',
        value: 1,
        icon: Gem,
      },
    ],
  },
];

export function useAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements);

  return {
    achievements,
  };
}