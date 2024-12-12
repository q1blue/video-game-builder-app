import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { DashboardGrid } from './components/dashboard/DashboardGrid';
import { StoryDashboard } from './components/storytelling/StoryDashboard';

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardGrid />;
      case 'story':
        return <StoryDashboard />;
      default:
        return <DashboardGrid />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800">
      <div className="flex h-screen overflow-hidden">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {renderContent()}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}