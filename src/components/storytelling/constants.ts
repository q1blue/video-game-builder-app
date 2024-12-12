import { Map, Users, Swords, Sparkles, Gem, Star } from 'lucide-react';
import { QuestType, QuestReward } from './types';

export const questTypes: QuestType[] = [
  { id: 'exploration', icon: Map, label: 'Exploration' },
  { id: 'combat', icon: Swords, label: 'Combat' },
  { id: 'alchemy', icon: Sparkles, label: 'Alchemy' },
  { id: 'diplomacy', icon: Users, label: 'Diplomacy' },
];

export const rewards: QuestReward[] = [
  { id: 'crystal', icon: Gem, label: 'Rare Crystal' },
  { id: 'spell', icon: Sparkles, label: 'Ancient Spell' },
  { id: 'artifact', icon: Star, label: 'Mystical Artifact' },
];