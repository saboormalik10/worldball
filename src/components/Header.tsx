"use client";

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-4 sm:px-8 md:px-12 tablet-range-px-6 py-4 tablet-range-py-2 flex-shrink-0 relative z-30" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
        <div className="flex items-center">
          <div className="mr-3 tablet-range-mr-1.5">
            <div className="w-8 h-8 tablet-range-w-6 tablet-range-h-6 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-sm tablet-range-text-xs font-bold">W</span>
            </div>
          </div>
          <span className="text-white font-semibold text-base tablet-range-text-sm text-center leading-tight w-[76px] tablet-range-w-[60px] h-[19px] tablet-range-h-[15px] flex items-center justify-center" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: '590' }}>WorldBall</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 tablet-range-space-x-4">
          <button className="text-white opacity-50 hover:opacity-100 text-sm tablet-range-text-xs font-semibold flex items-center uppercase leading-none h-[14px] tablet-range-h-[10px]" style={{ fontWeight: '600' }}>
            <span className="mr-2 tablet-range-mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 tablet-range-h-3 tablet-range-w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="w-[37px] tablet-range-w-[28px]">PLAY</span>
          </button>

          <button className="text-white opacity-50 hover:opacity-100 text-sm tablet-range-text-xs font-semibold flex items-center uppercase leading-none h-[14px] tablet-range-h-[10px]" style={{ fontWeight: '600' }}>
            <span className="mr-2 tablet-range-mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 tablet-range-h-3 tablet-range-w-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </span>
            DRAW RESULTS
          </button>

          <button className="text-white opacity-50 hover:opacity-100 text-sm tablet-range-text-xs font-semibold flex items-center uppercase leading-none h-[14px] tablet-range-h-[10px]" style={{ fontWeight: '600' }}>
            <span className="mr-2 tablet-range-mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 tablet-range-h-3 tablet-range-w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </span>
            LIVE DRAW
          </button>

          <button className="text-white opacity-50 hover:opacity-100 text-sm tablet-range-text-xs font-semibold flex items-center uppercase leading-none h-[14px] tablet-range-h-[10px]" style={{ fontWeight: '600' }}>
            <span className="mr-2 tablet-range-mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 tablet-range-h-3 tablet-range-w-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </span>
            RESOURCES
          </button>

          <button className="text-white opacity-50 hover:opacity-100 text-sm tablet-range-text-xs font-semibold flex items-center uppercase leading-none h-[14px] tablet-range-h-[10px]" style={{ fontWeight: '600' }}>
            <span className="mr-2 tablet-range-mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 tablet-range-h-3 tablet-range-w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            AFFILIATE
          </button>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4 tablet-range-space-x-2">
          <button className="text-white/90 hover:text-white text-sm tablet-range-text-xs font-medium">
            Sign In
          </button>
          <button className="border border-white/40 hover:border-white/60 text-white text-sm tablet-range-text-xs font-medium py-2 tablet-range-py-1 px-6 tablet-range-px-3 rounded-full transition-colors">
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
            <span className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </span>
            PLAY
          </button>
          
          <button className="text-white text-lg font-semibold flex items-center uppercase">
            <span className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </span>
            DRAW RESULTS
          </button>
          
          <button className="text-white text-lg font-semibold flex items-center uppercase">
            <span className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </span>
            LIVE DRAW
          </button>
          
          <button className="text-white text-lg font-semibold flex items-center uppercase">
            <span className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </span>
            RESOURCES
          </button>
          
          <button className="text-white text-lg font-semibold flex items-center uppercase">
            <span className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            AFFILIATE
          </button>
          
          <div className="flex flex-col items-center space-y-4 mt-8">
            <button className="text-white text-lg font-medium">
              Sign In
            </button>
            <button className="border border-white/40 hover:border-white/60 text-white text-lg font-medium py-2 px-10 rounded-full transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
