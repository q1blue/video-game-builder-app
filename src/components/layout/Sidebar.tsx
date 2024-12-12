import React from 'react';
import { Layout, Compass, BookOpen, Wand2, Brain, BarChart3, Settings, Globe, Feather } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { name: 'Dashboard', icon: Layout, id: 'dashboard' },
  { name: 'Epic Storytelling', icon: Feather, id: 'story' },
  { name: 'Game Systems', icon: Compass, id: 'systems' },
  { name: 'World Building', icon: Globe, id: 'world' },
  { name: 'Mystical Systems', icon: Wand2, id: 'mystical' },
  { name: 'AI & NPCs', icon: Brain, id: 'ai' },
  { name: 'Documentation', icon: BookOpen, id: 'docs' },
  { name: 'Analytics', icon: BarChart3, id: 'analytics' },
  { name: 'Settings', icon: Settings, id: 'settings' },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-black/30 backdrop-blur-lg">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-xl font-bold text-white">Crystal Alchemist</h1>
          </div>
          <nav className="flex-1 px-2 mt-5 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`${
                  activeSection === item.id
                    ? 'bg-purple-800/50 text-white'
                    : 'text-gray-300 hover:bg-purple-800/30'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full transition-colors`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}