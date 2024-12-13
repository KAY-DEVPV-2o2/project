import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import Navigation from './Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-opacity-20 backdrop-blur-sm bg-white dark:bg-gray-800 
                   hover:ring-2 ring-purple-500 transition-all duration-300"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-purple-600" />
          )}
        </button>
      </div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}