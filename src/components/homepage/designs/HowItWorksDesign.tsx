import React from 'react';

interface HowItWorksDesignProps {
  onTitleClick: () => void;
  activeStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
  onStepDotClick: (index: number) => void;
}

const HowItWorksDesign: React.FC<HowItWorksDesignProps> = ({ 
  onTitleClick, 
  activeStep, 
  onNextStep, 
  onPrevStep, 
  onStepDotClick 
}) => {
  const howItWorksDesign = {
    title: "How It Works",
    steps: [
      {
        icon: "⭕️",
        title: "Sign Up",
        description: "Create your account using trusted blockchain technology for complete transparency and security."
      },
      {
        icon: "▶️",
        title: "Play Now",
        description: "Buy a tickets or subscribe for automatic entries—never miss a draw again. Choose your numbers manually or let our system pick them for you."
      },
      {
        icon: "🔔",
        title: "Get Notified",
        description: "Receive instant alerts when jackpots go live and updates if you win—no fear of missing out."
      }
    ],
    ctaText: "LEARN MORE"
  };

  return (
    <>
      {/* Mobile Version - Redesigned to match image 6 */}
      <div className="md:hidden w-full h-full flex flex-col relative px-5 py-8">
        {/* Background with stairs effect */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          {/* Abstract stair shapes - just like in the image */}
          <div className="absolute left-0 bottom-1/3 w-full h-16 bg-gray-900 transform -rotate-6"></div>
          <div className="absolute left-0 bottom-1/2 w-full h-16 bg-gray-900 transform -rotate-6"></div>
          <div className="absolute left-0 bottom-2/3 w-full h-16 bg-gray-900 transform -rotate-6"></div>

          {/* Gold ball at the bottom of the screen */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg z-10"></div>
        </div>

        {/* Content Container - Placed at top with title and one step visible at a time */}
        <div className="z-10 w-full flex flex-col h-full">
          {/* Title at top */}
          <h1 
            className="text-3xl text-center font-bold mb-6 cursor-pointer" 
            onClick={onTitleClick}
          >
            {howItWorksDesign.title}
          </h1>

          {/* One step visible at a time */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 mr-2">
                <span>{howItWorksDesign.steps[activeStep].icon}</span>
              </div>
              <h3 className="font-bold text-base">{howItWorksDesign.steps[activeStep].title}</h3>
            </div>
            <p className="text-white opacity-60 text-sm leading-relaxed mt-2">
              {howItWorksDesign.steps[activeStep].description}
            </p>
          </div>

          <div className="relative flex justify-center items-center mt-2 mb-4" style={{ minHeight: 40 }}>
            {/* Left Button */}
            <button
              onClick={onPrevStep}
              className="w-8 h-8 flex items-center justify-center absolute left-0"
              disabled={activeStep === 0}
              type="button"
            >
              <span className="text-xl">&lt;</span>
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {howItWorksDesign.steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onStepDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === activeStep ? 'bg-white' : 'bg-gray-600'
                    }`}
                  type="button"
                />
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={onNextStep}
              className="w-8 h-8 flex items-center justify-center absolute right-0"
              disabled={activeStep === howItWorksDesign.steps.length - 1}
              type="button"
            >
              <span className="text-xl">&gt;</span>
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-6">
            <button className="border border-white/30 rounded-full w-full py-3 text-sm font-medium hover:bg-white/10 transition-colors">
              {howItWorksDesign.ctaText}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex w-full h-full relative">
        {/* Left side with visual elements */}
        <div className="w-1/2 h-full overflow-hidden relative">
          {/* Abstract stair shapes */}
          <div className="absolute left-0 top-1/3 w-full h-28 bg-gray-900 transform -rotate-6"></div>
          <div className="absolute left-0 top-1/2 w-full h-28 bg-gray-900 transform -rotate-6"></div>
          <div className="absolute left-0 top-2/3 w-full h-28 bg-gray-900 transform -rotate-6"></div>

          {/* Large R letter in background */}
          <div className="absolute left-16 bottom-4 text-[350px] font-black text-white/5 select-none">
            R
          </div>

          {/* Gold ball */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg z-10"></div>
        </div>

        {/* Right side with content */}
        <div className="w-1/2 flex flex-col justify-center pl-16 pr-20 z-10">
          <h1
            className="text-white font-bold w-[512px] h-[60px] mb-10 cursor-pointer"
            style={{ fontSize: '64px', lineHeight: '60px', fontWeight: '700', letterSpacing: '0%' }}
            onClick={onTitleClick}
          >
            {howItWorksDesign.title}
          </h1>

          {/* Steps - Matching the 1.png layout with icon and title on the same row */}
          <div className="space-y-8 mb-12">
            {howItWorksDesign.steps.map((step, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 mr-3">
                    <span>{step.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                </div>
                <p
                  className="text-white opacity-60 w-[512px] h-[42px]"
                  style={{ fontSize: '14px', lineHeight: '150%', fontWeight: '500', letterSpacing: '0%' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <button className="border border-white/30 rounded-full px-8 py-3 text-base font-medium hover:bg-white/10 transition-colors">
              {howItWorksDesign.ctaText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorksDesign;
