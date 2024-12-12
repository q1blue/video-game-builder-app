import React from 'react';
import { Clock, Star } from 'lucide-react';
import { TimelineEvent } from './types';

const timelineEvents: TimelineEvent[] = [
  {
    title: 'The Awakening',
    description: 'The alchemist discovers their quantum powers',
    status: 'completed',
    date: '3 days ago',
  },
  {
    title: 'Crystal Resonance',
    description: 'Ancient crystals begin to resonate with newfound energy',
    status: 'in-progress',
    date: 'Current',
  },
  {
    title: 'The Great Convergence',
    description: 'Preparing for the alignment of quantum realms',
    status: 'upcoming',
    date: 'Next Chapter',
  },
];

export function StoryTimeline() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Story Timeline</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-600/30" />
        <div className="space-y-6">
          {timelineEvents.map((event) => (
            <div key={event.title} className="relative pl-10">
              <div className="absolute left-2 w-5 h-5 rounded-full bg-purple-600 transform -translate-x-1/2 flex items-center justify-center">
                {event.status === 'completed' ? (
                  <Star className="w-3 h-3 text-white" />
                ) : (
                  <Clock className="w-3 h-3 text-white" />
                )}
              </div>
              <div className={`${
                event.status === 'completed' ? 'text-gray-300' : 
                event.status === 'in-progress' ? 'text-purple-300' : 'text-gray-400'
              }`}>
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm">{event.description}</p>
                <p className="text-xs mt-1">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}