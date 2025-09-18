"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HeaderAfterLogin: React.FC = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBalancePopupOpen, setIsBalancePopupOpen] = useState(false);
    console.log({ isBalancePopupOpen })
    const [activeTab, setActiveTab] = useState('FIAT');
    const [activeCurrency, setActiveCurrency] = useState('USD');

    // Define currencies/tokens for each tab
    const currencies = {
        FIAT: [
            { id: 'USD', name: 'USD', fullName: 'US Dollar', symbol: '$', color: '#00B33C', textColor: 'white', balance: '3,234.01' },
            { id: 'RS', name: 'RS', fullName: 'Pakistani Rupee', symbol: '₹', color: '#FFD700', textColor: 'black', balance: '12,339.99' }
        ],
        CRYPTO: [
            { id: 'BTC', name: 'BTC', fullName: 'Bitcoin', symbol: '₿', color: '#F7931A', textColor: 'white', balance: '0.025' },
            { id: 'ETH', name: 'ETH', fullName: 'Ethereum', symbol: 'Ξ', color: '#627EEA', textColor: 'white', balance: '1.543' },
            { id: 'USDT', name: 'USDT', fullName: 'Tether', symbol: '₮', color: '#26A17B', textColor: 'white', balance: '2,500.00' }
        ]
    };

    // Get current currencies based on active tab
    const currentCurrencies = currencies[activeTab as keyof typeof currencies];
    const popupRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleBalancePopup = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        setIsBalancePopupOpen(!isBalancePopupOpen);
    };

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if the click is outside both the popup and the toggle button
            const target = event.target as Node;
            const isOutsidePopup = popupRef.current && !popupRef.current.contains(target);

            // Find the balance button by checking if the clicked element is inside it
            const balanceButton = document.querySelector('[data-balance-toggle]');
            const isOutsideButton = balanceButton && !balanceButton.contains(target);

            if (isOutsidePopup && isOutsideButton) {
                setIsBalancePopupOpen(true);

            }
        };

        if (isBalancePopupOpen) {
            // Use a small delay to prevent immediate closure
            setTimeout(() => {
                document.addEventListener('click', handleClickOutside);
            }, 0);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isBalancePopupOpen]);

    // Prevent click events inside popup from bubbling to document
    const handlePopupClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
    };

    const handleTabClick = (tab: string, e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        setActiveTab(tab);
        // Reset to first currency when switching tabs
        const newCurrencies = currencies[tab as keyof typeof currencies];
        setActiveCurrency(newCurrencies[0].id);
    };

    const handleCurrencyClick = (currency: string, e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        setActiveCurrency(currency);
    };

    const handleWithdrawClick = () => {
        setIsBalancePopupOpen(false);
        router.push('/wallet?modal=withdraw');
    };

    const handleDepositClick = () => {
        setIsBalancePopupOpen(false);
        router.push('/wallet?modal=deposit');
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
                    <button className="text-white text-sm tablet-range-text-xs font-semibold flex items-center uppercase leading-none h-[14px] tablet-range-h-[10px]" style={{ fontWeight: '600' }}>
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

                    <button className="text-white hover:opacity-100 text-sm tablet-range-text-xs font-semibold flex items-center uppercase leading-none h-[14px] tablet-range-h-[10px]" style={{ fontWeight: '600' }}>
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

                {/* User Account Section - Logged In */}
                <div className="hidden md:flex items-center space-x-4 tablet-range-space-x-3">
                    {/* Balance Display with Dropdown */}
                    <div className="relative">
                        <button
                            onClick={(e) => toggleBalancePopup(e)}
                            data-balance-toggle
                            className="flex items-center justify-between bg-[#252525] rounded-full px-3 py-2 hover:bg-[#00a336] transition-colors cursor-pointer min-w-[140px]"
                        >
                            <div className="flex items-center">
                                {(() => {
                                    const selectedCurrency = currentCurrencies.find(c => c.id === activeCurrency) || currentCurrencies[0];
                                    return (
                                        <>
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2`} style={{ backgroundColor: selectedCurrency.color }}>
                                                <span className={`text-xs font-bold`} style={{ color: selectedCurrency.textColor }}>{selectedCurrency.symbol}</span>
                                            </div>
                                            <span className="text-white text-sm font-medium">{selectedCurrency.balance}</span>
                                        </>
                                    );
                                })()}
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 text-white transition-transform ml-2 ${isBalancePopupOpen ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Balance Popup */}
                        {isBalancePopupOpen && (
                            <div
                                ref={popupRef}
                                onClick={handlePopupClick}
                                className="absolute right-0 mt-2 w-64 bg-[#121212] rounded-lg shadow-xl z-50 overflow-hidden p-2"
                                style={{
                                    border: '1px solid rgba(35, 35, 35, 0.8)',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)'
                                }}
                            >
                                {/* Tab Navigation */}
                                <div className="flex mb-1 mt-0.5 mx-0.5 rounded-md overflow-hidden gap-2">
                                    <button
                                        className={`flex-1 py-2.5 text-center text-sm font-medium ${activeTab === 'FIAT'
                                            ? 'bg-[#242424] text-white font-semibold'
                                            : 'bg-[#1B1B1B] text-[#4A4A4A]'
                                            }`}
                                        onClick={(e) => handleTabClick('FIAT', e)}
                                    >
                                        FIAT
                                    </button>
                                    <button
                                        className={`flex-1 py-2.5 text-center text-sm font-medium ${activeTab === 'CRYPTO'
                                            ? 'bg-[#242424] text-white font-semibold'
                                            : 'bg-[#1B1B1B] text-[#4A4A4A]'
                                            }`}
                                        onClick={(e) => handleTabClick('CRYPTO', e)}
                                    >
                                        CRYPTO
                                    </button>
                                </div>
                                <hr className='mt-6 mb-4' style={{ color: "#262626" }} />
                                {/* Currency Options */}
                                <div className="px-3 py-2.5 mx-0.5 rounded-md">
                                    {currentCurrencies.map((currency, index) => (
                                        <div
                                            key={currency.id}
                                            className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${index > 0 ? 'mt-1' : ''} ${activeCurrency === currency.id ? 'bg-[#1D1D1D]' : 'bg-transparent hover:bg-[#1A1A1A]'
                                                }`}
                                            onClick={(e) => handleCurrencyClick(currency.id, e)}
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2`} style={{ backgroundColor: currency.color }}>
                                                    <span className={`text-xs font-bold`} style={{ color: currency.textColor }}>{currency.symbol}</span>
                                                </div>
                                                <span className="text-white text-sm font-medium">{currency.name}</span>
                                                {activeCurrency === currency.id && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00B33C] ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className="text-white text-sm font-medium">{currency.balance}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="p-3.5 space-y-2.5 pb-4">
                                    <button 
                                        className="w-full py-2.5 text-white text-sm font-semibold rounded-full transition-colors"
                                        onClick={handleWithdrawClick}
                                        style={{
                                            background: 'linear-gradient(180deg, #1A1A1A 0%, #131313 100%)',
                                            border: '1px solid rgba(55, 55, 55, 0.5)',
                                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                                        }}>
                                        WITHDRAW
                                    </button>
                                    <button 
                                        className="w-full py-2.5 bg-[#FF0000] text-white text-sm font-semibold rounded-full hover:bg-[#E60000] transition-colors"
                                        onClick={handleDepositClick}
                                    >
                                        DEPOSIT
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Language Selector */}
                    <div className="flex items-center text-white">
                        <span className="text-sm font-medium mr-1">EN</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {/* User Profile Icon */}
                    <button className="flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                            <img src="/images/header/profile.svg" alt="Profile" className="w-5 h-5 svg-icon filter brightness-0 invert" />
                        </div>
                    </button>

                    {/* Shopping Cart */}
                    <button className="flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center">
                            <img src="/images/header/cart.svg" alt="Cart" className="w-5 h-5 svg-icon filter brightness-0 invert" />
                        </div>
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

                    {/* Mobile User Account Options */}
                    <div className="flex flex-col items-center space-y-4 mt-8">
                        {/* Balance Display with Dropdown */}
                        <button
                            onClick={(e) => toggleBalancePopup(e)}
                            data-balance-toggle
                            className="flex items-center bg-[#00B33C] rounded-full px-4 py-2"
                        >
                            {(() => {
                                const selectedCurrency = currentCurrencies.find(c => c.id === activeCurrency) || currentCurrencies[0];
                                return (
                                    <>
                                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mr-2">
                                            <span className="text-[#00B33C] text-xs font-bold">{selectedCurrency.symbol}</span>
                                        </div>
                                        <span className="text-white text-base font-medium mr-1">{selectedCurrency.balance}</span>
                                    </>
                                );
                            })()}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 text-white transition-transform ${isBalancePopupOpen ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Language Selector */}
                        <button className="flex items-center text-white">
                            <span className="text-base font-medium mr-1">EN</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* User Profile and Cart Options */}
                        <div className="flex items-center space-x-4">
                            <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                                <img src="/images/header/profile.svg" alt="Profile" className="w-6 h-6 svg-icon filter brightness-0 invert" />
                            </button>

                            <button className="w-10 h-10 rounded-full bg-transparent border border-white/30 flex items-center justify-center">
                                <img src="/images/header/cart.svg" alt="Cart" className="w-6 h-6 svg-icon filter brightness-0 invert" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Balance Popup */}
            {isBalancePopupOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-70 z-40 flex items-center justify-center">
                    <div
                        ref={popupRef}
                        onClick={handlePopupClick}
                        className="w-[85%] max-w-xs bg-[#121212] rounded-lg shadow-xl overflow-hidden p-0.5"
                        style={{
                            border: '1px solid rgba(35, 35, 35, 0.8)',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        {/* Tab Navigation */}
                        <div className="flex mb-1 mt-0.5 mx-0.5 rounded-md overflow-hidden">
                            <button
                                className={`flex-1 py-2.5 text-center text-sm font-medium ${activeTab === 'FIAT'
                                    ? 'bg-[#242424] text-white font-semibold'
                                    : 'bg-[#1B1B1B] text-[#4A4A4A]'
                                    }`}
                                onClick={(e) => handleTabClick('FIAT', e)}
                            >
                                FIAT
                            </button>
                            <button
                                className={`flex-1 py-2.5 text-center text-sm font-medium ${activeTab === 'CRYPTO'
                                    ? 'bg-[#242424] text-white font-semibold'
                                    : 'bg-[#1B1B1B] text-[#4A4A4A]'
                                    }`}
                                onClick={(e) => handleTabClick('CRYPTO', e)}
                            >
                                CRYPTO
                            </button>
                        </div>

                        {/* Currency Options */}
                        <div className="px-3 py-2.5 bg-[#181818] mx-0.5 rounded-md">
                            {currentCurrencies.map((currency, index) => (
                                <div
                                    key={currency.id}
                                    className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${index > 0 ? 'mt-1' : ''} ${activeCurrency === currency.id ? 'bg-[#1D1D1D]' : 'bg-transparent hover:bg-[#1A1A1A]'
                                        }`}
                                    onClick={(e) => handleCurrencyClick(currency.id, e)}
                                >
                                    <div className="flex items-center">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2`} style={{ backgroundColor: currency.color }}>
                                            <span className={`text-xs font-bold`} style={{ color: currency.textColor }}>{currency.symbol}</span>
                                        </div>
                                        <span className="text-white text-sm font-medium">{currency.name}</span>
                                        {activeCurrency === currency.id && (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00B33C] ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                    <span className="text-white text-sm font-medium">{currency.balance}</span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="p-3.5 space-y-2.5 pb-4">
                            <button 
                                className="w-full py-2.5 text-white text-sm font-semibold rounded-full transition-colors"
                                onClick={handleWithdrawClick}
                                style={{
                                    background: 'linear-gradient(180deg, #1A1A1A 0%, #131313 100%)',
                                    border: '1px solid rgba(55, 55, 55, 0.5)',
                                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                                }}>
                                WITHDRAW
                            </button>
                            <button 
                                className="w-full py-2.5 bg-[#FF0000] text-white text-sm font-semibold rounded-full hover:bg-[#E60000] transition-colors"
                                onClick={handleDepositClick}
                            >
                                DEPOSIT
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HeaderAfterLogin;