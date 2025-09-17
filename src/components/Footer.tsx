import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Desktop Bottom Section - Footer exactly matching the image */}
      <div className="hidden md:flex items-center justify-between px-8 tablet-range-px-4 py-3 tablet-range-py-1.5 flex-shrink-0" style={{ backgroundColor: '#171717' }}>
        {/* Current Jackpot */}
        <div className="flex items-center">
          <span className="text-white font-bold text-lg tablet-range-text-sm mr-4 tablet-range-mr-2" style={{ lineHeight: '60px' }}>Current Jackpot:</span>
          <div className="rounded-md px-4 tablet-range-px-2 py-2 tablet-range-py-1" style={{ background: 'linear-gradient(180deg, #393939 0%, #2A2A2A 51.42%, #2F2F2F 99.95%)' }}>
            <span className="text-white text-xl tablet-range-text-base font-bold">$1,230,999.23</span>
          </div>
        </div>

        {/* Next Draw Timer - exactly like the image */}
        <div className="flex items-center">
          <span className="text-white font-bold text-lg tablet-range-text-sm mr-4 tablet-range-mr-2" style={{ lineHeight: '60px' }}>Next Draw:</span>
          <div className="flex items-center space-x-2 tablet-range-space-x-1">
            <div className="flex flex-col items-center">
              <div 
                className="flex flex-col items-center justify-center rounded-lg tablet-range-w-[28px] tablet-range-h-[33px] tablet-range-px-1 tablet-range-py-1"
                style={{ 
                  background: '#313131',
                  width: '55.79px',
                  height: '65.41px',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                }}
              >
                <span className="font-bold leading-none tablet-range-text-sm" style={{ color: '#FFFFFF', fontSize: '32px', lineHeight: '100%' }}>05</span>
                <span className="uppercase text-white leading-tight tracking-tight tablet-range-text-[8px]" style={{ fontSize: '12px', lineHeight: '120%', letterSpacing: '-5%' }}>DAYS</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div 
                className="flex flex-col items-center justify-center rounded-lg tablet-range-w-[28px] tablet-range-h-[33px] tablet-range-px-1 tablet-range-py-1"
                style={{ 
                  background: '#313131',
                  width: '55.79px',
                  height: '65.41px',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                }}
              >
                <span className="font-bold leading-none tablet-range-text-sm" style={{ color: '#FFFFFF', fontSize: '32px', lineHeight: '100%' }}>23</span>
                <span className="uppercase text-white leading-tight tracking-tight tablet-range-text-[8px]" style={{ fontSize: '12px', lineHeight: '120%', letterSpacing: '-5%' }}>HRS</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div 
                className="flex flex-col items-center justify-center rounded-lg tablet-range-w-[28px] tablet-range-h-[33px] tablet-range-px-1 tablet-range-py-1"
                style={{ 
                  background: '#313131',
                  width: '55.79px',
                  height: '65.41px',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                }}
              >
                <span className="font-bold leading-none tablet-range-text-sm" style={{ color: '#FFFFFF', fontSize: '32px', lineHeight: '100%' }}>32</span>
                <span className="uppercase text-white leading-tight tracking-tight tablet-range-text-[8px]" style={{ fontSize: '12px', lineHeight: '120%', letterSpacing: '-5%' }}>MIN</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div 
                className="flex flex-col items-center justify-center rounded-lg tablet-range-w-[28px] tablet-range-h-[33px] tablet-range-px-1 tablet-range-py-1"
                style={{ 
                  background: '#313131',
                  width: '55.79px',
                  height: '65.41px',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                }}
              >
                <span className="font-bold leading-none tablet-range-text-sm" style={{ color: '#FFFFFF', fontSize: '32px', lineHeight: '100%' }}>14</span>
                <span className="uppercase text-white leading-tight tracking-tight tablet-range-text-[8px]" style={{ fontSize: '12px', lineHeight: '120%', letterSpacing: '-5%' }}>SEC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side text and button */}
        <div className="flex items-center">
          <div className="text-right mr-6 tablet-range-mr-3">
            <p className="text-white opacity-60 text-base tablet-range-text-sm leading-relaxed w-[270px] tablet-range-w-[200px] h-[52px] tablet-range-h-[40px] flex items-center justify-end">
              Connecting players worldwide for<br />
              the biggest jackpots in history.
            </p>
          </div>
          <button
            className="text-white font-bold py-4 tablet-range-py-2 px-16 tablet-range-px-8 rounded-full border-[1.5px] transition-colors w-48 tablet-range-w-32 flex items-center justify-center h-14 tablet-range-h-10 gap-2.5 tablet-range-gap-1 text-center hover:text-black tablet-range-text-sm"
            style={{ backgroundColor: '#ED2606', borderColor: '#ED2606' }}
          >
            PLAY
          </button>
        </div>
      </div>

      {/* Mobile Bottom Section - Footer */}
      <div className="md:hidden mt-auto">
        {/* Current Jackpot */}
        <div className="px-4 pt-4 pb-3 bg-black mobile:px-2 mobile:pt-2 mobile:pb-1.5">
          <div className="flex justify-between items-center mb-3 mobile:mb-1.5">
            <span className="text-gray-500 text-base font-medium mobile:text-xs">Current Jackpot:</span>
            <div className="bg-[#212121] rounded-lg px-4 py-1.5 mobile:px-2 mobile:py-0.5">
              <span className="text-white text-xl font-bold mobile:text-sm">$1,230,999.23</span>
            </div>
          </div>

          {/* Countdown timer and button */}
          <div className="flex justify-between items-center">
            {/* Countdown blocks */}
            <div className="flex space-x-2 mobile:space-x-1">
              <div className="bg-[#1A1A1A] rounded-md text-center px-1 py-2 w-11 mobile:w-7 mobile:py-1 mobile:px-0.5">
                <div className="text-white text-xl font-bold leading-none mobile:text-sm">5</div>
                <div className="text-gray-500 text-[10px] uppercase mt-0.5 mobile:text-[7px] mobile:mt-0">DAYS</div>
              </div>
              
              <div className="bg-[#1A1A1A] rounded-md text-center px-1 py-2 w-11 mobile:w-7 mobile:py-1 mobile:px-0.5">
                <div className="text-white text-xl font-bold leading-none mobile:text-sm">23</div>
                <div className="text-gray-500 text-[10px] uppercase mt-0.5 mobile:text-[7px] mobile:mt-0">HOURS</div>
              </div>
              
              <div className="bg-[#1A1A1A] rounded-md text-center px-1 py-2 w-11 mobile:w-7 mobile:py-1 mobile:px-0.5">
                <div className="text-white text-xl font-bold leading-none mobile:text-sm">32</div>
                <div className="text-gray-500 text-[10px] uppercase mt-0.5 mobile:text-[7px] mobile:mt-0">MINS</div>
              </div>
              
              <div className="bg-[#1A1A1A] rounded-md text-center px-1 py-2 w-11 mobile:w-7 mobile:py-1 mobile:px-0.5">
                <div className="text-white text-xl font-bold leading-none mobile:text-sm">14</div>
                <div className="text-gray-500 text-[10px] uppercase mt-0.5 mobile:text-[7px] mobile:mt-0">SEC</div>
              </div>
            </div>
            
            {/* Play Now button */}
            <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-full text-base mobile:py-1.5 mobile:px-3 mobile:text-xs">
              PLAY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
