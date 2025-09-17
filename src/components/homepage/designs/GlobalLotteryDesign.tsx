import React from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

interface GlobalLotteryDesignProps {
  onTitleClick: () => void;
  timeRemaining: TimeRemaining;
}

const GlobalLotteryDesign: React.FC<GlobalLotteryDesignProps> = ({ onTitleClick, timeRemaining }) => {
  const globalLotteryDesign = {
    title: "The World's First Global Lottery",
    currentJackpot: "$1,230,999.23",
    ctaText: "PLAY NOW"
  };

  return (
    <>
      {/* Mobile Version - Updated to match the mobile mockup */}
      <div className="md:hidden w-full h-full flex flex-col items-center justify-center relative px-5 py-8">
        {/* Background with subtle watermark */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <div className="absolute left-0 bottom-0 opacity-5 text-[200px] font-black">
            L
          </div>
        </div>

        {/* Content Container - Centered with text aligned in the center */}
        <div className="z-10 w-full flex flex-col items-center justify-center">
          <h1 
            className="text-white font-bold text-center mb-6 cursor-pointer px-4"
            style={{ 
              fontSize: '32px', 
              lineHeight: '38px', 
              fontWeight: '700',
              fontFamily: 'Inter',
              letterSpacing: '0%',
              textAlign: 'center'
            }}
            onClick={onTitleClick}
          >
            {globalLotteryDesign.title}
          </h1>

          <div className="w-full flex flex-col items-center space-y-5 mb-8">
            {/* Current Jackpot */}
            <div className="flex flex-col items-center space-y-2">
              <span className="text-white font-bold text-sm">Current Jackpot:</span>
              <div className="bg-gradient-to-b from-[#393939] via-[#2A2A2A] to-[#2F2F2F] rounded-md px-3 py-1">
                <span className="text-white font-bold text-2xl">{globalLotteryDesign.currentJackpot}</span>
              </div>
            </div>

            {/* Next Draw Timer */}
            <div className="flex flex-col items-center space-y-2">
              <span className="text-white font-bold text-sm">Next Draw:</span>
              <div className="flex space-x-1">
                {Object.entries(timeRemaining).map(([key, value]) => (
                  <div 
                    key={key} 
                    className="flex flex-col items-center justify-center"
                    style={{
                      width: '40px',
                      height: '46px',
                      padding: '4px 5px',
                      gap: '1px',
                      borderRadius: '6px',
                      background: 'linear-gradient(217.28deg, rgba(255, 255, 255, 0.14) 0.16%, rgba(153, 153, 153, 0.14) 99.96%)'
                    }}
                  >
                    <span className="text-white text-lg font-bold">{String(value).padStart(2, '0')}</span>
                    <span className="text-white/60 text-[8px] uppercase">{key}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Play Button - Using 80% width on mobile */}
            <button 
              className="bg-red-600 text-white font-bold uppercase rounded-full hover:bg-red-700 transition-colors mx-auto"
              style={{
                width: '80%', // 80% width for mobile screens
                height: '50px'
              }}
            >
              {globalLotteryDesign.ctaText}
            </button>
          </div>

          {/* Lottery Balls at Bottom */}
          <div className="flex space-x-2 mt-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg flex items-center justify-center text-black font-bold text-xs">
              WORLD
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg flex items-center justify-center text-black font-bold text-xs">
              B
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg flex items-center justify-center text-black font-bold text-xs">
              A
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg flex items-center justify-center text-black font-bold text-xs">
              L
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg flex items-center justify-center text-black font-bold text-xs">
              L
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version - Updated to match the reference image 4 */}
      <div className="hidden md:flex w-full h-full flex-col items-center justify-center relative">
        {/* Main content container - centered */}
        <div className="z-10 w-full flex flex-col items-center justify-center">
          {/* Main Title */}
          <h1 
            className="text-white font-bold cursor-pointer text-center mb-8"
            style={{ 
              width: '1000px',
              height: '64px',
              fontSize: '60px', 
              lineHeight: '64px', 
              fontWeight: '700',
              fontFamily: 'Inter',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
            onClick={onTitleClick}
          >
            {globalLotteryDesign.title}
          </h1>
          
          {/* Jackpot and Timer Row */}
          <div className="flex items-center justify-center mb-6">
            {/* Current Jackpot */}
            <div className="flex items-center mr-4">
              <span 
                className="text-white font-bold mr-3"
                style={{ 
                  fontSize: '18px', 
                  lineHeight: '40px', 
                  fontWeight: '700',
                  fontFamily: 'Inter'
                }}
              >
                Current Jackpot:
              </span>
              <span 
                className="text-white font-bold px-4 py-2 rounded"
                style={{ 
                  fontSize: '28px', 
                  lineHeight: '40px', 
                  fontWeight: '700',
                  fontFamily: 'Inter',
                  borderRadius: '15px',
                  background: 'linear-gradient(180deg, #393939 0%, #2A2A2A 51.42%, #2F2F2F 99.95%)'
                }}
              >
                {globalLotteryDesign.currentJackpot}
              </span>
            </div>
            
            {/* Next Draw Timer */}
            <div className="flex items-center">
              <span 
                className="text-white font-bold mr-3"
                style={{ 
                  fontSize: '18px', 
                  lineHeight: '40px', 
                  fontWeight: '700',
                  fontFamily: 'Inter'
                }}
              >
                Next Draw:
              </span>
              
              {/* Timer Boxes */}
              <div 
                className="flex space-x-1"
                style={{
                  width: '220px',
                  height: '56px',
                  gap: '4px'
                }}
              >
                {Object.entries(timeRemaining).map(([key, value]) => (
                  <div 
                    key={key} 
                    className="flex flex-col items-center justify-center"
                    style={{
                      width: '50px',
                      height: '56px',
                      padding: '5px 6px',
                      gap: '1px',
                      borderRadius: '8px',
                      background: 'linear-gradient(217.28deg, rgba(255, 255, 255, 0.14) 0.16%, rgba(153, 153, 153, 0.14) 99.96%)'
                    }}
                  >
                    <span className="text-white text-xl font-bold">{String(value).padStart(2, '0')}</span>
                    <span className="text-white/60 text-[10px] uppercase">{key}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Play Now Button */}
          <button 
            className="bg-red-600 text-white font-bold uppercase rounded-full mb-12 hover:bg-red-700 transition-colors"
            style={{
              width: '220px',
              height: '50px',
              padding: '14px 40px',
              borderRadius: '25px'
            }}
          >
            {globalLotteryDesign.ctaText}
          </button>
          
          {/* Lottery Balls at Bottom */}
          <div 
            className="flex space-x-4"
            style={{
              width: '800px',
              height: '150px',
              gap: '16px'
            }}
          >
            {/* WORLD BALL - One gold, rest silver */}
            <div 
              className="flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg"
              style={{ width: '150px', height: '150px' }}
            >
              <span className="text-black font-bold text-xl">WORLD</span>
            </div>
            <div 
              className="flex items-center justify-center rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg"
              style={{ width: '150px', height: '150px' }}
            >
              <span className="text-black font-bold text-xl">B</span>
            </div>
            <div 
              className="flex items-center justify-center rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg"
              style={{ width: '150px', height: '150px' }}
            >
              <span className="text-black font-bold text-xl">A</span>
            </div>
            <div 
              className="flex items-center justify-center rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg"
              style={{ width: '150px', height: '150px' }}
            >
              <span className="text-black font-bold text-xl">L</span>
            </div>
            <div 
              className="flex items-center justify-center rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg"
              style={{ width: '150px', height: '150px' }}
            >
              <span className="text-black font-bold text-xl">L</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalLotteryDesign;
