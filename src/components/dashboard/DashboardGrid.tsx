import React from 'react';
import { QuickActions } from './QuickActions';
import { ActiveRealms } from './ActiveRealms';
import { SystemStatus } from './SystemStatus';
import { RecentUpdates } from './RecentUpdates';
import { Documentation } from './Documentation';
import { QuickStats } from './QuickStats';

export function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <QuickActions />
      <ActiveRealms />
      <SystemStatus />
      <RecentUpdates />
      <Documentation />
      <QuickStats />
    </div>
  );
}