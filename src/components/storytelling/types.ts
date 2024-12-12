import { LucideIcon } from 'lucide-react';

export interface QuestType {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface QuestReward {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface TimelineEvent {
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  date: string;
}