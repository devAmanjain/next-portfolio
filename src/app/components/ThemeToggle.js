"use client";
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleToggle = () => {
    console.log("Toggle theme function called"); // Added for debugging
    toggleTheme();
  };
  return (
    <button
     onClick={handleToggle}
    className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary hover:bg-primary-dark transition-colors duration-300 shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-6 w-6 text-surface" />
      ) : (
        <MoonIcon className="h-6 w-6 text-surface" />
      )}
    </button>
  );
};

export default ThemeToggle;
