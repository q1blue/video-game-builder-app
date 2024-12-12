import React from 'react';
import { CharacterStats } from './CharacterStats';
import { SkillTree } from './SkillTree';
import { Achievements } from './Achievements';

export function ProgressionDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CharacterStats />
      <Achievements />
      <div className="lg:col-span-2">
        <SkillTree />
      </div>
    </div>
  );
}