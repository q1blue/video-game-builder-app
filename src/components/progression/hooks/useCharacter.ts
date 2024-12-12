import { useState } from 'react';
import { CharacterStats } from '../types';

const initialStats: CharacterStats = {
  level: 1,
  experience: 0,
  requiredExperience: 1000,
  skillPoints: 0,
  attributes: {
    strength: 10,
    intelligence: 10,
    wisdom: 10,
    dexterity: 10,
    constitution: 10,
    charisma: 10,
  },
};

export function useCharacter() {
  const [stats, setStats] = useState<CharacterStats>(initialStats);

  const levelUp = () => {
    if (!canLevelUp) return;

    setStats((prev) => ({
      ...prev,
      level: prev.level + 1,
      experience: prev.experience - prev.requiredExperience,
      requiredExperience: Math.floor(prev.requiredExperience * 1.5),
      skillPoints: prev.skillPoints + 3,
    }));
  };

  const canLevelUp = stats.experience >= stats.requiredExperience;

  return {
    stats,
    levelUp,
    canLevelUp,
  };
}