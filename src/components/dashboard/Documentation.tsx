import React from 'react';

const docs = [
  { title: 'API Reference', href: '#' },
  { title: 'Modding Guide', href: '#' },
  { title: 'World Building Tutorial', href: '#' },
];

export function Documentation() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Documentation</h2>
      <div className="space-y-3">
        {docs.map((doc) => (
          <a
            key={doc.title}
            href={doc.href}
            className="block text-blue-300 hover:text-blue-400 transition-colors"
          >
            {doc.title}
          </a>
        ))}
      </div>
    </div>
  );
}