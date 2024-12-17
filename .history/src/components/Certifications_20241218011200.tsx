import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Responsive Web Design',
    url: 'https://www.freecodecamp.org/certification/K-Devp-V-2o2/responsive-web-design',
    description: 'Mastery in creating responsive and mobile-first web designs',
  },
  {
    title: 'JavaScript Algorithms and Data Structures (BETA)',
    url: 'https://www.freecodecamp.org/certification/K-Devp-V-2o2/javascript-algorithms-and-data-structures-v8',
    description: 'Advanced problem-solving and algorithm implementation',
  },
  {
    title: 'Legacy JavaScript Algorithms and Data Structures',
    url: 'https://www.freecodecamp.org/certification/K-DEVPV-2O2/javascript-algorithms-and-data-structures',
    description: 'Fundamental JavaScript concepts and programming paradigms',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 
                       text-transparent bg-clip-text mb-4">
            Certifications
          </h2>
          <p className="text-gray-400">Professional achievements and technical expertise</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm 
                       hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <Award className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400">{cert.description}</p>
                <div className="mt-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                  View Certificate →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}