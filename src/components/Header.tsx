"use client";

import React, { useState } from 'react';
import SignupModal from './auth/SignupModal';
import SignInModal from './auth/SigninModal';
import EmailVerificationModal from './auth/EmailVerificationModal';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const openSigninModal = () => {
    setIsSigninModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeSigninModal = () => {
    setIsSigninModalOpen(false);
  };

  const handleSignup = (email: string, password: string) => {
    // Here you would typically make an API call to register the user
    // For now, we'll just open the verification modal
    setUserEmail(email);
    setIsSignupModalOpen(false);
    setIsVerificationModalOpen(true);
  };

  const handleVerificationBack = () => {
    setIsVerificationModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const handleVerifyCode = (code: string) => {
    // Here you would typically verify the code with your API
    console.log(`Verifying code: ${code} for email: ${userEmail}`);
    // After successful verification:
    setIsVerificationModalOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-4 sm:px-8 md:px-12 tablet-range-px-6 py-4 tablet-range-py-2 flex-shrink-0 relative z-30" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
        <div className="flex items-center">
          <div className="mr-3 tablet-range-mr-1.5">
            <div className="w-8 h-8 tablet-range-w-6 tablet-range-h-6 rounded-full flex items-center justify-center">
              <img src="/images/header/Logo.svg" alt="Logo" />

            </div>
          </div>
          <span className="text-white font-semibold text-base tablet-range-text-sm text-center leading-tight w-[76px] tablet-range-w-[60px] h-[19px] tablet-range-h-[15px] flex items-center justify-center" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: '590' }}>WorldBall</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 tablet-range-space-x-4">
          <button className="text-white  text-sm tablet-range-text-xs font-semibold flex items-center uppercase leading-none h-[14px] tablet-range-h-[10px]" style={{ fontWeight: '600' }}>
            <span className="mr-2 tablet-range-mr-1 flex items-center">
              <img src="/images/header/play.svg" alt="Play" className="w-6 h-6 tablet-range-w-4 tablet-range-h-4 svg-icon filter brightness-0 invert" />
            </span>
            <span className="w-[37px] hover:opacity-100 opacity-50 tablet-range-w-[28px]">PLAY</span>
          </button>

          <button className="text-white hover:text-white text-sm tablet-range-text-xs font-semibold flex items-center uppercase leading-none h-[14px] tablet-range-h-[10px]" style={{ fontWeight: '600' }}>
            <span className="mr-2 tablet-range-mr-1 flex items-center">
              <img src="/images/header/drawresult.svg" alt="Draw Results" className="w-6 h-6 tablet-range-w-4 tablet-range-h-4 svg-icon filter brightness-0 invert" />
            </span>
          <span className='opacity-50 hover:opacity-100'>DRAW RESULTS</span> 
          </button>

          <button className="text-white  hover:opacity-100 text-sm tablet-range-text-xs font-semibold flex items-center uppercase leading-none h-[14px] tablet-range-h-[10px]" style={{ fontWeight: '600' }}>
            <span className="mr-2 tablet-range-mr-1 flex items-center">
              <img src="/images/header/livedraw.svg" alt="Live Draw" className="w-6 h-6 tablet-range-w-4 tablet-range-h-4 svg-icon filter brightness-0 invert" />
            </span>
            <span className='opacity-50 hover:opacity-100'>LIVE DRAW</span>
          </button>

          <button className="text-white hover:opacity-100 text-sm tablet-range-text-xs font-semibold flex items-center uppercase leading-none h-[14px] tablet-range-h-[10px]" style={{ fontWeight: '600' }}>
            <span className="mr-2 tablet-range-mr-1 flex items-center">
              <img src="/images/header/resources.svg" alt="Resources" className="w-6 h-6 tablet-range-w-4 tablet-range-h-4 svg-icon filter brightness-0 invert" />
            </span>
           <span className='opacity-50 hover:opacity-100'>RESOURCES</span>
          </button>

          <button className="text-white hover:opacity-100 text-sm tablet-range-text-xs font-semibold flex items-center uppercase leading-none h-[14px] tablet-range-h-[10px]" style={{ fontWeight: '600' }}>
            <span className="mr-2 tablet-range-mr-1 flex items-center">
              <img src="/images/header/affilitate.svg" alt="Affiliate" className="w-6 h-6 tablet-range-w-4 tablet-range-h-4 svg-icon filter brightness-0 invert" />
            </span>
            <span className='opacity-50 hover:opacity-100'>AFFILIATE</span>
          </button>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4 tablet-range-space-x-2">
          <button 
            className="text-white/90 hover:text-white text-sm tablet-range-text-xs font-medium"
            onClick={openSigninModal}
          >
            Sign In
          </button>
          <button 
            className="border border-white/40 hover:border-white/60 text-white text-sm tablet-range-text-xs font-medium py-2 tablet-range-py-1 px-6 tablet-range-px-3 rounded-full transition-colors"
            onClick={openSignupModal}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-5 flex flex-col justify-between transition-transform duration-300 ${isMobileMenuOpen ? 'transform' : ''}`}>
            <span className={`bg-white h-0.5 w-full rounded-full transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`bg-white h-0.5 w-full rounded-full transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white h-0.5 w-full rounded-full transform transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-95 z-20 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ height: isMobileMenuOpen ? '100%' : '0' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-16">
          <button className="text-white text-lg font-semibold flex items-center uppercase">
            <span className="mr-3 flex items-center">
              <img src="/images/header/play.svg" alt="Play" className="w-6 h-6 svg-icon" />
            </span>
            PLAY
          </button>

          <button className="text-white text-lg font-semibold flex items-center uppercase">
            <span className="mr-3 flex items-center">
              <img src="/images/header/drawresult.svg" alt="Draw Results" className="w-6 h-6 svg-icon" />
            </span>
            DRAW RESULTS
          </button>

          <button className="text-white text-lg font-semibold flex items-center uppercase">
            <span className="mr-3 flex items-center">
              <img src="/images/header/livedraw.svg" alt="Live Draw" className="w-6 h-6 svg-icon" />
            </span>
            LIVE DRAW
          </button>

          <button className="text-white text-lg font-semibold flex items-center uppercase">
            <span className="mr-3 flex items-center">
              <img src="/images/header/resources.svg" alt="Resources" className="w-6 h-6 svg-icon" />
            </span>
            RESOURCES
          </button>

          <button className="text-white text-lg font-semibold flex items-center uppercase">
            <span className="mr-3 flex items-center">
              <img src="/images/header/affilitate.svg" alt="Affiliate" className="w-6 h-6 svg-icon" />
            </span>
            AFFILIATE
          </button>

          <div className="flex flex-col items-center space-y-4 mt-8">
            <button 
              className="text-white text-lg font-medium"
              onClick={openSigninModal}
            >
              Sign In
            </button>
            <button 
              className="border border-white/40 hover:border-white/60 text-white text-lg font-medium py-2 px-10 rounded-full transition-colors"
              onClick={openSignupModal}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Auth Modals */}
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={closeSignupModal} 
        openSigninModal={openSigninModal}
        onSignup={handleSignup}
      />
      
      <SignInModal 
        isOpen={isSigninModalOpen} 
        onClose={closeSigninModal} 
        openSignupModal={openSignupModal}
      />

      <EmailVerificationModal 
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
        onBack={handleVerificationBack}
        email={userEmail}
        onVerify={handleVerifyCode}
      />
    </>
  );
};

export default Header;