import { LucideIcon } from 'lucide-react';

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  level: number;
  maxLevel: number;
  experience: number;
  requiredExperience: number;
  prerequisites: string[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  progress: number;
  total: number;
  completed: boolean;
  rewards: Reward[];
}

export interface Reward {
  id: string;
  type: 'experience' | 'skill-point' | 'item' | 'title';
  value: number | string;
  icon: LucideIcon;
}

export interface CharacterStats {
  level: number;
  experience: number;
  requiredExperience: number;
  skillPoints: number;
  attributes: {
    strength: number;
    intelligence: number;
    wisdom: number;
    dexterity: number;
    constitution: number;
    charisma: number;
  };
}