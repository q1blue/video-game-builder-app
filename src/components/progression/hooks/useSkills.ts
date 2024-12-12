import { useState } from 'react';
import { Book, Brain, Flask, Shield, Sword, Wand2 } from 'lucide-react';
import { Skill } from '../types';

const initialSkills: Skill[] = [
  {
    id: 'alchemy',
    name: 'Alchemy',
    description: 'Master the art of potion crafting and transmutation',
    icon: Flask,
    level: 1,
    maxLevel: 10,
    experience: 0,
    requiredExperience: 100,
    prerequisites: [],
  },
  {
    id: 'combat',
    name: 'Combat',
    description: 'Develop martial prowess and battle techniques',
    icon: Sword,
    level: 1,
    maxLevel: 10,
    experience: 0,
    requiredExperience: 100,
    prerequisites: [],
  },
  {
    id: 'magic',
    name: 'Magic',
    description: 'Learn to harness and control magical energies',
    icon: Wand2,
    level: 1,
    maxLevel: 10,
    experience: 0,
    requiredExperience: 100,
    prerequisites: ['alchemy'],
  },
  {
    id: 'defense',
    name: 'Defense',
    description: 'Master defensive techniques and protection spells',
    icon: Shield,
    level: 1,
    maxLevel: 10,
    experience: 0,
    requiredExperience: 100,
    prerequisites: ['combat'],
  },
];

export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);

  const upgradeSkill = (skillId: string) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === skillId && canUpgradeSkill(skillId)
          ? {
              ...skill,
              level: skill.level + 1,
              experience: 0,
              requiredExperience: skill.requiredExperience * 1.5,
            }
          : skill
      )
    );
  };

  const canUpgradeSkill = (skillId: string) => {
    const skill = skills.find((s) => s.id === skillId);
    if (!skill) return false;

    const prereqsMet = skill.prerequisites.every((prereqId) => {
      const prereq = skills.find((s) => s.id === prereqId);
      return prereq && prereq.level >= 3;
    });

    return (
      skill.level < skill.maxLevel &&
      skill.experience >= skill.requiredExperience &&
      prereqsMet
    );
  };

  return {
    skills,
    upgradeSkill,
    canUpgradeSkill,
  };
}