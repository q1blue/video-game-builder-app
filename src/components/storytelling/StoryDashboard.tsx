import React from 'react';
import { StoryGenerator } from './StoryGenerator';
import { QuestBuilder } from './QuestBuilder';
import { StoryTimeline } from './StoryTimeline';

export function StoryDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <StoryGenerator />
      <QuestBuilder />
      <div className="lg:col-span-2">
        <StoryTimeline />
      </div>
    </div>
  );
}