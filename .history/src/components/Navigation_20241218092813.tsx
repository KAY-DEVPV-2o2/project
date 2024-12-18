import React, { useState } from 'react';
import { Menu, X, Code2, Home, Briefcase, Award, Mail } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Projects', icon: Code2, href: '#projects' },
    { name: 'Certifications', icon: Award, href: '#certifications' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-40 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Code2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            K-Devp-V-2o2
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative px-3 py-2 text-sm font-medium transition-colors
                           text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 
                                 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 
                       dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 
                         dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}