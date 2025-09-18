"use client";

import React, { useState } from 'react';
import Header from '../components/homepage/HeaderAfterLogin';
import Footer from '../components/Footer';
import {
  OriginalDesign,
  JackpotsDesign,
  HowItWorksDesign,
  PartnerDesign,
  GlobalLotteryDesign,
} from '../components/homepage/designs';
import NavigationDots from '../components/homepage/NavigationDots';
import { useCountdownTimer } from '../components/homepage/hooks/useCountdownTimer';
import { useStepNavigation } from '../components/homepage/hooks/useStepNavigation';

const HomePage: React.FC = () => {
  const [currentDesign, setCurrentDesign] = useState(0); // 0: original, 1: jackpots, 2: how it works, 3: become a partner, 4: global lottery

  // Custom hooks for state management
  const timeRemaining = useCountdownTimer(currentDesign === 4);
  const {
    activeStep,
    handleNextStep,
    handlePrevStep,
    handleStepDotClick,
    resetToFirstStep
  } = useStepNavigation(3); // 3 steps in HowItWorks

  // Handler for dot navigation - now navigates directly to the corresponding design
  const handleDotClick = (index: number) => {
    setCurrentDesign(index); // Set the design to match the dot index
  };

  const handleTitleClick = () => {
    if (currentDesign === 0) {
      setCurrentDesign(1); // Go to jackpots design
    } else if (currentDesign === 1) {
      setCurrentDesign(2); // Go to how it works design
      resetToFirstStep(); // Reset to first step
    } else if (currentDesign === 2) {
      setCurrentDesign(3); // Go to become a partner design
    } else if (currentDesign === 3) {
      setCurrentDesign(4); // Go to global lottery design
    } else {
      setCurrentDesign(0); // Go back to original design
    }
  };

  return (
    <div className="h-screen text-white overflow-hidden flex flex-col" style={{ backgroundColor: '#1e1e1e' }}>
      <Header />

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row items-center flex-1 min-h-0">
        {currentDesign === 0 && (
          <OriginalDesign onTitleClick={handleTitleClick} />
        )}

        {currentDesign === 1 && (
          <JackpotsDesign onTitleClick={handleTitleClick} />
        )}

        {currentDesign === 2 && (
          <HowItWorksDesign 
            onTitleClick={handleTitleClick}
            activeStep={activeStep}
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            onStepDotClick={handleStepDotClick}
          />
        )}

        {currentDesign === 3 && (
          <PartnerDesign onTitleClick={handleTitleClick} />
        )}

        {currentDesign === 4 && (
          <GlobalLotteryDesign 
            onTitleClick={handleTitleClick}
            timeRemaining={timeRemaining}
          />
        )}

        {/* Navigation dots */}
        <NavigationDots currentDesign={currentDesign} onDotClick={handleDotClick} />
      </div>

      {/* Only render Footer when NOT on Global Lottery design */}
      {currentDesign !== 4 && <Footer />}
    </div>
  );
};

export default HomePage;
