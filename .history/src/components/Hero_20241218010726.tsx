import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] 
                    bg-cover bg-center opacity-10"
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Khurram Iqbal
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl mb-8 text-gray-300">
          Generative AI & FullStack & Chatbot Developer
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
          Building the future with code, one project at a time. Specialized in creating innovative solutions
          using cutting-edge technologies and AI-driven development.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <SocialLink href="https://github.com/KAY-DEVPV-2o2" icon={Github} />
          <SocialLink href="https://linkedin.com" icon={Linkedin} />
          <SocialLink href="https://twitter.com" icon={Twitter} />
        </div>

        <a
          href="https://www.freecodecamp.org/K-Devp-V-2O2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r 
                   from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 
                   transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
        >
          View My Work
        </a>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: React.ElementType }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-gray-800/50 hover:bg-purple-600/50 transition-colors duration-300
               hover:text-white text-gray-400 backdrop-blur-sm"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}
