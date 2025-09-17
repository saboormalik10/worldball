import React from 'react';

interface OriginalDesignProps {
  onTitleClick: () => void;
}

const OriginalDesign: React.FC<OriginalDesignProps> = ({ onTitleClick }) => {
  const originalContent = {
    title: ["One World.", "One Jackpot.", "Infinite Possibilities."],
    description: "Connecting players worldwide for the\nbiggest jackpots in history."
  };

  return (
    <>
      {/* Mobile Version - Text Content on Top */}
      <div className="md:hidden w-full px-4 py-4 text-center">
        <div
          className="text-white font-bold mb-3 cursor-pointer"
          style={{ fontSize: '28px', lineHeight: '34px', fontWeight: '700' }}
          onClick={onTitleClick}
        >
          {originalContent.title.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        <p className="text-white opacity-60 font-medium text-sm leading-relaxed mb-3" style={{ lineHeight: '160%', fontWeight: '500' }}>
          {originalContent.description}
        </p>
      </div>

      {/* Mobile Version - Ball Animation in the Middle */}
      <div className="md:hidden w-full flex justify-center items-center flex-1 min-h-0 py-2">
        {/* Main circular container */}
        <div className="relative scale-[0.6] mobile:scale-[0.5]">
          {/* Outer ring with lottery balls */}
          <div className="w-72 h-72 rounded-full relative flex items-center justify-center">
            {/* Multiple lottery balls around the circle */}
            {Array.from({ length: 20 }).map((_, index) => {
              const angle = (index * 18) - 90; // 360/20 = 18 degrees per ball
              const radius = 130;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;

              return (
                <div
                  key={index}
                  className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-lg"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                  }}
                />
              );
            })}

            {/* Center black ball */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-800 to-black shadow-2xl flex items-center justify-center relative z-10">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-900 to-black"></div>
            </div>
          </div>

          {/* Golden ball at bottom right */}
          <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg"></div>
        </div>
      </div>

      {/* Desktop Version - Left Side - Ball Animation */}
      <div className="hidden md:flex w-1/2 justify-center items-center relative">
        {/* Large W watermark in background */}
        <div className="absolute -left-32 tablet-range--left-16 top-1/2 transform -translate-y-1/2 text-[300px] tablet-range-text-[150px] font-black text-white/5 select-none">
          W
        </div>
        
        {/* Main circular container */}
        <div className="relative tablet-range-scale-[0.6]">
          {/* Outer ring with lottery balls */}
          <div className="w-80 h-80 tablet-range-w-60 tablet-range-h-60 rounded-full relative flex items-center justify-center">
            {/* Multiple lottery balls around the circle */}
            {Array.from({ length: 20 }).map((_, index) => {
              const angle = (index * 18) - 90; // 360/20 = 18 degrees per ball
              const radius = 130;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute w-6 h-6 tablet-range-w-4 tablet-range-h-4 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-lg"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                  }}
                />
              );
            })}
            
            {/* Center black ball */}
            <div className="w-40 h-40 tablet-range-w-28 tablet-range-h-28 rounded-full bg-gradient-to-br from-gray-800 to-black shadow-2xl flex items-center justify-center relative z-10">
              <div className="w-32 h-32 tablet-range-w-22 tablet-range-h-22 rounded-full bg-gradient-to-br from-gray-900 to-black"></div>
            </div>
          </div>
          
          {/* Golden ball at bottom right */}
          <div className="absolute bottom-8 tablet-range-bottom-4 right-8 tablet-range-right-4 w-8 h-8 tablet-range-w-6 tablet-range-h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg"></div>
        </div>
      </div>
      
      {/* Desktop Version - Right Side - Text Content */}
      <div className="hidden md:block w-1/2 pl-16 tablet-range-pl-8 pr-24 tablet-range-pr-12">
        <div 
          className="text-white font-bold mb-6 tablet-range-mb-3 w-[512px] tablet-range-w-[350px] h-[180px] tablet-range-h-[120px] flex flex-col justify-center tablet-range-text-2xl cursor-pointer" 
          style={{ fontSize: '51px', lineHeight: '60px', fontWeight: '700' }}
          onClick={onTitleClick}
        >
          {originalContent.title.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        <p className="text-white opacity-60 font-medium text-lg tablet-range-text-sm leading-relaxed w-[378px] tablet-range-w-[280px] h-[58px] tablet-range-h-[40px] flex items-center" style={{ lineHeight: '160%', fontWeight: '500' }}>
          {originalContent.description}
        </p>
      </div>
    </>
  );
};

export default OriginalDesign;
