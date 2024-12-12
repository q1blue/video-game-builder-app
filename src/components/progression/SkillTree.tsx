import React from 'react';
import { Book, Brain, Flask, Shield, Sword, Wand2 } from 'lucide-react';
import { Skill } from './types';
import { useSkills } from './hooks/useSkills';

export function SkillTree() {
  const { skills, upgradeSkill, canUpgradeSkill } = useSkills();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Skill Tree</h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white/5 rounded-lg p-4 border border-white/10"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <skill.icon className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-white font-medium">{skill.name}</h3>
              </div>
              <span className="text-purple-300">
                {skill.level}/{skill.maxLevel}
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-3">{skill.description}</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{
                  width: `${(skill.experience / skill.requiredExperience) * 100}%`,
                }}
              />
            </div>
            <button
              onClick={() => upgradeSkill(skill.id)}
              disabled={!canUpgradeSkill(skill.id)}
              className={`w-full py-2 px-4 rounded-md transition-colors ${
                canUpgradeSkill(skill.id)
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              Upgrade Skill
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}