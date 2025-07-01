import React, { useState, useRef, useEffect } from 'react';
import CalenderIcon from '../../../Icons/svgIcons/CalenderIcon';

export default function YearSelection() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const years = Array.from({ length: 16 }, (_, i) => 2015 + i);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0E253C] shadow-sm border border-gray-200 hover:shadow-md transition"
      >
        <span className="text-semi-xs font-semibold text-blue-900">{selectedYear}</span>
        <CalenderIcon />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full max-h-64 overflow-auto rounded-md bg-white border border-gray-200 shadow-md">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                setSelectedYear(year);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                selectedYear === year ? 'bg-gray-100 font-semibold text-[#5F33D6]' : 'text-gray-800'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
