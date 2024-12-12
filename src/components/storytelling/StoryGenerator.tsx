import React, { useState } from 'react';
import { Sparkles, BookOpen, Scroll, Swords } from 'lucide-react';

const storyElements = [
  { id: 'alchemical', title: 'Alchemical Transformation', icon: Sparkles },
  { id: 'quantum', title: 'Quantum Realm Discovery', icon: BookOpen },
  { id: 'astral', title: 'Astral Projection Training', icon: Scroll },
  { id: 'battle', title: 'Epic Battle with Chaos Entity', icon: Swords },
];

export function StoryGenerator() {
  const [selectedElement, setSelectedElement] = useState('');
  const [generatedPlot, setGeneratedPlot] = useState('');

  const generatePlot = () => {
    setGeneratedPlot('A mystical journey begins as the alchemist discovers ancient crystals pulsing with quantum energy...');
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Epic Story Generator</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {storyElements.map((element) => (
            <button
              key={element.id}
              onClick={() => setSelectedElement(element.id)}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                selectedElement === element.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-purple-600/30'
              }`}
            >
              <element.icon className="w-5 h-5 mr-2" />
              <span className="text-sm">{element.title}</span>
            </button>
          ))}
        </div>
        
        <button
          onClick={generatePlot}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Generate Plot Points
        </button>

        {generatedPlot && (
          <div className="mt-4 p-4 bg-white/5 rounded-lg">
            <p className="text-gray-200">{generatedPlot}</p>
          </div>
        )}
      </div>
    </div>
  );
}