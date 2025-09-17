import React from 'react';

interface JackpotsDesignProps {
  onTitleClick: () => void;
}

const JackpotsDesign: React.FC<JackpotsDesignProps> = ({ onTitleClick }) => {
  const jackpotsDesign = {
    title: "Global Stakes, Global Wins",
    description: "World Ball Lottery brings you global jackpots and unbeatable odds – the best of both worlds.",
    features: [
      { icon: "🌍", title: "Worldwide Jackpots" },
      { icon: "📊", title: "Best Odds" },
      { icon: "🌐", title: "Play Anywhere" },
      { icon: "💰", title: "Bigger Wins" }
    ]
  };

  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden w-full h-full flex flex-col items-center justify-center relative px-5 py-8">
        {/* Grid of lottery balls */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <div className="grid grid-cols-3 gap-x-8 gap-y-12 p-4 mt-2">
            {Array.from({ length: 12 }).map((_, index) => {
              // Gold ball is at position 4 (5th ball)
              const isGold = index === 4;
              return (
                <div
                  key={index}
                  className={`rounded-full shadow-md w-10 h-10 ${isGold ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : 'bg-gradient-to-br from-gray-700 to-gray-900'
                    }`}
                />
              );
            })}
          </div>
        </div>

        {/* Content Container - Centered with text aligned in the center */}
        <div
          className="z-10 w-full text-center mt-auto mb-10 cursor-pointer"
          onClick={onTitleClick}
        >
          <h1 className="text-2xl font-bold mb-2">
            {jackpotsDesign.title}
          </h1>

          <p className="text-white opacity-60 font-medium text-sm leading-relaxed mb-8 px-4">
            {jackpotsDesign.description}
          </p>

          {/* Features in Grid - 2x2 with icons on top and text below for MOBILE */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 max-w-xs mx-auto">
            {jackpotsDesign.features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
                  <span className="text-lg">{feature.icon}</span>
                </div>
                <span className="text-xs font-medium">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Version - Content on LEFT, Balls on RIGHT */}
      <div className="hidden md:flex w-full h-full relative">
        {/* Content Container - LEFT side */}
        <div className="w-1/2 flex flex-col justify-center pl-16 pr-8 z-10">
          <h1
            className="text-white font-bold cursor-pointer w-[512px] h-[120px]"
            style={{ fontSize: '64px', lineHeight: '60px', fontWeight: '700', letterSpacing: '0%' }}
            onClick={onTitleClick}
          >
            {jackpotsDesign.title}
          </h1>

          <p className="text-white opacity-60 font-medium w-[441px] h-[58px] my-6"
            style={{ fontSize: '18px', lineHeight: '160%', fontWeight: '500', letterSpacing: '0%' }}>
            {jackpotsDesign.description}
          </p>

          {/* Features - horizontal layout for DESKTOP with icons on left */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 mt-4">
            {jackpotsDesign.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                  <span className="text-lg">{feature.icon}</span>
                </div>
                <span className="text-white opacity-60 font-medium w-[175px] h-[29px]"
                  style={{ fontSize: '18px', lineHeight: '160%', fontWeight: '500', letterSpacing: '0%' }}>
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lottery balls grid - RIGHT side */}
        <div className="w-1/2 h-full overflow-hidden relative">
          {/* Grid of lottery balls */}
          <div className="grid grid-cols-3 gap-x-16 gap-y-16 p-12">
            {Array.from({ length: 15 }).map((_, index) => {
              // Gold ball is at position 4 (5th ball)
              const isGold = index === 4;
              return (
                <div
                  key={index}
                  className={`rounded-full shadow-md w-14 h-14 ${isGold ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : 'bg-gradient-to-br from-gray-700 to-gray-900'
                    }`}
                />
              );
            })}
          </div>

          {/* Large zero background element */}
          <div className="absolute right-[-100px] bottom-[-100px] text-[500px] font-black text-white/5 select-none">
            0
          </div>
        </div>
      </div>
    </>
  );
};

export default JackpotsDesign;
