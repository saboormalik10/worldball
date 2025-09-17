import React from 'react';

interface PartnerDesignProps {
  onTitleClick: () => void;
}

const PartnerDesign: React.FC<PartnerDesignProps> = ({ onTitleClick }) => {
  const partnerDesign = {
    title: "Become a partner",
    description: "Partner with World Ball Lottery and tap into a rapidly growing market powered by blockchain, automation, and global jackpots.",
    ctaText: "LEARN MORE"
  };

  return (
    <>
      {/* Mobile Version - Updated to match image */}
      <div className="md:hidden w-full h-full flex flex-col justify-between relative px-6 py-8">
        {/* Background with spiral lines */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          {/* Dark subtle spiral lines at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-64">
            {/* Series of curved lines creating a subtle spiral effect */}
            <div className="absolute bottom-28 left-0 w-full h-[0.5px] bg-gray-800"></div>
            <div className="absolute bottom-24 left-0 w-full h-[0.5px] bg-gray-800 transform rotate-[1deg]"></div>
            <div className="absolute bottom-20 left-0 w-full h-[0.5px] bg-gray-800 transform rotate-[2deg]"></div>
            <div className="absolute bottom-16 left-0 w-full h-[0.5px] bg-gray-800 transform rotate-[3deg]"></div>
            <div className="absolute bottom-12 left-0 w-full h-[0.5px] bg-gray-800 transform rotate-[4deg]"></div>
            
            {/* Golden ball positioned at the bottom */}
            <div className="absolute bottom-20 right-16 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="z-10 flex flex-col justify-start h-full">
          <div className="mt-16">
            <h1 
              className="text-white font-bold mb-2 text-left cursor-pointer"
              style={{ 
                fontSize: '24px', 
                lineHeight: '28px', 
                fontWeight: '700'
              }}
              onClick={onTitleClick}
            >
              {partnerDesign.title}
            </h1>

            <p 
              className="text-white mb-6 text-left"
              style={{ 
                fontSize: '14px', 
                lineHeight: '20px', 
                fontWeight: '400',
                opacity: '0.7'
              }}
            >
              {partnerDesign.description}
            </p>

            {/* CTA Button - Updated with exact specifications */}
            <button 
              className="border text-white hover:bg-white/10 transition-colors uppercase w-full"
              style={{
                padding: '12px',
                borderWidth: '1px',
                borderRadius: '24px',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                fontSize: '18px',
                fontFamily: 'Inter',
                fontWeight: '700',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                height: '48px'
              }}
            >
              {partnerDesign.ctaText}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex w-full h-full relative">
        {/* Left side with content - Matches the exact specifications */}
        <div className="w-1/2 flex flex-col justify-center pl-16 tablet-range-pl-8 z-10">
          <h1
            className="text-white font-bold mb-6 tablet-range-mb-3 cursor-pointer tablet-range-text-3xl"
            style={{ 
              width: '512px',
              height: '120px',
              fontSize: '64px', 
              lineHeight: '60px', 
              fontWeight: '700',
              fontFamily: 'Inter',
              letterSpacing: '0%',
              display: 'flex',
              alignItems: 'center'
            }}
            onClick={onTitleClick}
          >
            {partnerDesign.title}
          </h1>

          <p
            className="text-white font-medium mb-10 tablet-range-mb-6 tablet-range-text-sm"
            style={{ 
              width: '512px',
              height: '87px',
              fontSize: '18px', 
              lineHeight: '160%', 
              fontWeight: '500',
              fontFamily: 'Inter',
              opacity: '0.6',
              letterSpacing: '0%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {partnerDesign.description}
          </p>

          {/* CTA Button - Exact specifications */}
          <div>
            <button 
              className="border text-white font-medium hover:bg-white/10 transition-colors uppercase tablet-range-px-4 tablet-range-py-2 tablet-range-text-xs"
              style={{
                width: '246px',
                height: '50px',
                paddingTop: '16px',
                paddingRight: '64px',
                paddingBottom: '16px',
                paddingLeft: '64px',
                gap: '10px',
                borderWidth: '1.5px',
                borderRadius: '32px',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}
            >
              {partnerDesign.ctaText}
            </button>
          </div>
        </div>

        {/* Right side with spiral visual */}
        <div className="w-1/2 h-full overflow-hidden relative">
          {/* Spiral path visualization */}
          <div className="absolute inset-0">
            {/* Creating a spiral effect with multiple curved lines */}
            <div className="absolute top-1/5 left-0 w-[120%] h-2 bg-gray-900 transform rotate-12"></div>
            <div className="absolute top-1/4 left-0 w-[120%] h-2 bg-gray-900 transform rotate-9"></div>
            <div className="absolute top-1/3 left-0 w-[120%] h-2 bg-gray-900 transform rotate-6"></div>
            <div className="absolute top-2/5 left-0 w-[120%] h-2 bg-gray-900 transform rotate-3"></div>
            <div className="absolute top-1/2 left-0 w-[120%] h-2 bg-gray-900 transform rotate-1"></div>
            <div className="absolute top-3/5 left-0 w-[120%] h-2 bg-gray-900 transform -rotate-1"></div>
            <div className="absolute top-7/10 left-0 w-[120%] h-2 bg-gray-900 transform -rotate-3"></div>
            <div className="absolute top-4/5 left-0 w-[120%] h-2 bg-gray-900 transform -rotate-6"></div>
          </div>
          
          {/* Golden ball positioned on the spiral path */}
          <div className="absolute right-1/4 bottom-1/3 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg z-10"></div>
        </div>
      </div>
    </>
  );
};

export default PartnerDesign;
