"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
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
  const [activeIndex, setActiveIndex] = useState(0);
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
    setActiveIndex(index);
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
                onClick={handleTitleClick}
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
        )}

        {currentDesign === 1 && (
          <>
            {/* Jackpots Design */}

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
                onClick={handleTitleClick}
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
                  onClick={handleTitleClick}
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
        )}

        {currentDesign === 2 && (
          <>
            {/* How It Works Design */}

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
                  onClick={handleTitleClick}
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
                    onClick={handlePrevStep}
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
                        onClick={() => handleStepDotClick(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === activeStep ? 'bg-white' : 'bg-gray-600'
                          }`}
                        type="button"
                      />
                    ))}
                  </div>

                  {/* Right Button */}
                  <button
                    onClick={handleNextStep}
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
                  onClick={handleTitleClick}
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
        )}

        {currentDesign === 3 && (
          <>
            {/* Become a Partner Design - Updated mobile version to match the image */}
            
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
                    onClick={handleTitleClick}
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
                  onClick={handleTitleClick}
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
        )}

        {currentDesign === 4 && (
          <>
            {/* Global Lottery Design - Updated to match exact specifications from image 5 */}
            
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
                  onClick={handleTitleClick}
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
                  onClick={handleTitleClick}
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
        )}

        {/* Navigation dots - Updated to 5 dots and modified to directly navigate to designs */}
        <div className={`absolute hidden md:flex right-8 tablet-range-right-4 top-1/2 transform -translate-y-1/2 flex-col space-y-5 tablet-range-space-y-3`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
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
      </div>

      {/* Only render Footer when NOT on Global Lottery design */}
      {currentDesign !== 4 && <Footer />}
    </div>
  );
};

export default HomePage;