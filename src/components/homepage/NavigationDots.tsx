import React from 'react';

interface NavigationDotsProps {
  currentDesign: number;
  onDotClick: (index: number) => void;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ currentDesign, onDotClick }) => {
  return (
    <div className={`absolute hidden md:flex right-8 tablet-range-right-4 top-1/2 transform -translate-y-1/2 flex-col space-y-5 tablet-range-space-y-3`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 tablet-range-w-1.5 tablet-range-h-1.5 rounded-full transition-colors cursor-pointer ${
            index === currentDesign 
              ? 'bg-white ring-1 ring-gray-400 ring-opacity-50' 
              : 'bg-gray-600 hover:bg-gray-500'
          }`}
          style={{
            outline: index === currentDesign ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
            outlineOffset: 3,
          }}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
