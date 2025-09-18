"use client";

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import HeaderAfterLogin from '../../components/homepage/HeaderAfterLogin';



const WalletContent: React.FC = () => {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<'CASHIER' | 'TRANSACTIONS'>('TRANSACTIONS');
    const [activeBalanceTab, setActiveBalanceTab] = useState<'FIAT' | 'CRYPTO'>('FIAT');
    const [activeCurrency, setActiveCurrency] = useState<'USD' | 'RS'>('USD');
    const [currentPage] = useState(1);
    const [tabsDropdownOpen, setTabsDropdownOpen] = useState(false);

    // Currency data
    const currencies = {
        USD: { symbol: '$', color: '#00B33C', textColor: 'white', balance: '3,234.01' },
        RS: { symbol: '₹', color: '#FFD700', textColor: 'black', balance: '12,339.99' }
    };

    // Get selected currency data
    const selectedCurrencyData = currencies[activeCurrency];

    // Modal States
    const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
    const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
    const [modalTab, setModalTab] = useState<'FIAT' | 'CRYPTO'>('FIAT');
    const [modalAmount, setModalAmount] = useState('');
    const [modalCurrency, setModalCurrency] = useState('USD');
    const [isModalDropdownOpen, setIsModalDropdownOpen] = useState(false);
    const [makeRegular, setMakeRegular] = useState(false);

    const tabsDropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (tabsDropdownRef.current && !tabsDropdownRef.current.contains(event.target as Node)) {
                setTabsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Mock transaction data
    const transactions = [
        { id: "9989730963", date: "24.01.2024", currency: "USD", icon: "$", iconBg: "#00B33C", amount: "10.00 USDT", type: "DEPOSIT" },
        { id: "9693730963", date: "24.12.2023", currency: "RS", icon: "₹", iconBg: "#FFD700", amount: "35.23 USDT", type: "WITHDRAW" },
        { id: "9237362638", date: "24.01.2024", currency: "USDT", icon: "₮", iconBg: "#26A17B", amount: "5.03 USDT", type: "WITHDRAW" },
        { id: "8697378733", date: "24.01.2024", currency: "RS", icon: "₹", iconBg: "#FFD700", amount: "35.23 USDT", type: "WITHDRAW" },
        { id: "9692276563", date: "24.01.2024", currency: "USDT", icon: "₮", iconBg: "#26A17B", amount: "5.03 USDT", type: "DEPOSIT" },
        { id: "9637627721", date: "24.01.2024", currency: "USDT", icon: "₮", iconBg: "#26A17B", amount: "10.00 USDT", type: "DEPOSIT" },
        { id: "9337475463", date: "24.01.2024", currency: "USDC", icon: "U", iconBg: "#2775CA", amount: "35.23 USDT", type: "DEPOSIT" },
    ];

    const handleWithdraw = () => {
        setIsWithdrawalModalOpen(false);
    };

    const handleDeposit = () => {
        setIsDepositModalOpen(false);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Only allow numbers and a decimal point
        const value = e.target.value;
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            setModalAmount(value);
        }
    };

    // Handle URL parameters to open appropriate modal
    useEffect(() => {
        const modal = searchParams.get('modal');
        if (modal === 'withdraw') {
            openWithdrawalModal();
        } else if (modal === 'deposit') {
            openDepositModal();
        }
    }, [searchParams]);

    const openWithdrawalModal = () => {
        setModalTab('FIAT');
        setModalAmount('');
        setModalCurrency('USD');
        setIsWithdrawalModalOpen(true);
    };

    const openDepositModal = () => {
        setModalTab('FIAT');
        setModalAmount('');
        setModalCurrency('USD');
        setMakeRegular(false);
        setIsDepositModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#1E1E1E] text-white">
            <HeaderAfterLogin />

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 py-6">
                {/* Tabs Navigation - Desktop */}
                <div className="hidden md:flex items-center mb-6">
                    <button
                        className={`flex items-center gap-2 py-1.5 px-3 rounded-md ${activeTab === 'CASHIER'
                            ? 'bg-[#212121] opacity-100'
                            : 'bg-[#191919] opacity-50'}`}
                        onClick={() => setActiveTab('CASHIER')}
                    >
                        <img
                            src="/images/header/cashier.svg"
                            alt="Cashier"
                            className={`h-5 w-5 svg-icon ${activeTab === 'CASHIER'
                                ? 'filter brightness-0 invert'
                                : 'filter brightness-0 invert opacity-70'}`}
                        />
                        <span className="font-medium uppercase text-sm tracking-wide">CASHIER</span>
                    </button>

                    <button
                        className={`flex items-center gap-2 py-1.5 px-3 ml-6 rounded-md ${activeTab === 'TRANSACTIONS'
                            ? 'bg-[#212121] opacity-100'
                            : 'bg-[#191919] opacity-50'}`}
                        onClick={() => setActiveTab('TRANSACTIONS')}
                    >
                        <img
                            src="/images/header/transactionsicon.svg"
                            alt="Transactions"
                            className={`h-5 w-5 svg-icon ${activeTab === 'TRANSACTIONS'
                                ? 'filter brightness-0 invert'
                                : 'filter brightness-0 invert opacity-70'}`}
                        />
                        <span className="font-medium uppercase text-sm tracking-wide">TRANSACTIONS</span>
                    </button>
                </div>

                {/* Tabs Navigation - Mobile */}
                <div className="md:hidden mb-4 relative" ref={tabsDropdownRef}>
                    <button
                        className="flex items-center justify-between w-full py-2 px-3 bg-[#191919] rounded-md"
                        onClick={() => setTabsDropdownOpen(!tabsDropdownOpen)}
                    >
                        <div className="flex items-center gap-2">
                            <img
                                src={activeTab === 'CASHIER' ? "/images/header/cashier.svg" : "/images/header/transactionsicon.svg"}
                                alt={activeTab}
                                className="h-5 w-5 svg-icon filter brightness-0 invert"
                            />
                            <span className="font-medium uppercase text-sm tracking-wide">{activeTab}</span>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform ${tabsDropdownOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {tabsDropdownOpen && (
                        <div className="absolute left-0 right-0 mt-1 bg-[#1A1A1A] border border-[#232323] rounded-md z-20">
                            <button
                                className="flex items-center gap-2 w-full p-3 hover:bg-[#212121] text-left"
                                onClick={() => {
                                    setActiveTab('CASHIER');
                                    setTabsDropdownOpen(false);
                                }}
                            >
                                <img
                                    src="/images/header/cashier.svg"
                                    alt="Cashier"
                                    className="h-5 w-5 svg-icon filter brightness-0 invert"
                                />
                                <span className="font-medium uppercase text-sm tracking-wide">CASHIER</span>
                            </button>
                            <button
                                className="flex items-center gap-2 w-full p-3 hover:bg-[#212121] text-left"
                                onClick={() => {
                                    setActiveTab('TRANSACTIONS');
                                    setTabsDropdownOpen(false);
                                }}
                            >
                                <img
                                    src="/images/header/transactionsicon.svg"
                                    alt="Transactions"
                                    className="h-5 w-5 svg-icon filter brightness-0 invert"
                                />
                                <span className="font-medium uppercase text-sm tracking-wide">TRANSACTIONS</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Balance Card - Only show when CASHIER tab is active */}
                {activeTab === 'CASHIER' && (
                    <div className="bg-[#121212] rounded-lg overflow-hidden border border-[#232323] p-3 md:w-1/2 md:mx-auto" style={{
                        borderRadius: "10px", border: "1px solid white",
                        borderImageSource: "linear-gradient(180deg, #393939 0%, #2A2A2A 51.42%, #2F2F2F 99.95%)",
                    }}>
                    {/* FIAT/CRYPTO Tabs */}
                    <div className="grid grid-cols-2 p-1.5 gap-1.5">
                        <button
                            className={`py-2.5 text-center text-sm font-medium ${activeBalanceTab === 'FIAT'
                                ? 'bg-[#242424] text-white font-semibold'
                                : 'bg-[#1B1B1B] text-[#4A4A4A]'}`}
                            onClick={() => setActiveBalanceTab('FIAT')}
                        >
                            FIAT
                        </button>
                        <button
                            className={`py-2.5 text-center text-sm font-medium ${activeBalanceTab === 'CRYPTO'
                                ? 'bg-[#242424] text-white font-semibold'
                                : 'bg-[#1B1B1B] text-[#4A4A4A]'}`}
                            onClick={() => setActiveBalanceTab('CRYPTO')}
                        >
                            CRYPTO
                        </button>
                    </div>

                    {/* Available Balance */}
                    <div className="px-4 py-5 text-center">
                        <p className="text-[#909090] text-xs mb-2">Available Balance:</p>
                        <div className="flex items-center justify-center mb-2">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: selectedCurrencyData.color }}>
                                <span className="text-xs font-bold" style={{ color: selectedCurrencyData.textColor }}>{selectedCurrencyData.symbol}</span>
                            </div>
                            <span className="text-white text-2xl font-semibold">{selectedCurrencyData.balance}</span>
                        </div>
                    </div>

                    <hr className="border-t border-[#212121]" />

                    {/* Currency Options */}
                    <div className="px-3 py-3">
                        {Object.entries(currencies).map(([currencyCode, currencyData]) => (
                            <div
                                key={currencyCode}
                                className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${currencyCode !== 'USD' ? 'mt-1' : ''} ${activeCurrency === currencyCode ? 'bg-[#1D1D1D]' : 'bg-transparent hover:bg-[#1A1A1A]'}`}
                                onClick={() => setActiveCurrency(currencyCode as 'USD' | 'RS')}
                            >
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: currencyData.color }}>
                                        <span className="text-xs font-bold" style={{ color: currencyData.textColor }}>{currencyData.symbol}</span>
                                    </div>
                                    <span className="text-white text-sm font-medium">{currencyCode}</span>
                                    {activeCurrency === currencyCode && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00B33C] ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                                <span className="text-white text-sm font-medium">{currencyData.balance}</span>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 px-3.5 pb-3.5">
                        <button
                            className="py-2.5 text-white text-sm font-semibold rounded-full transition-colors"
                            style={{
                                background: 'linear-gradient(180deg, #1A1A1A 0%, #131313 100%)',
                                border: '1px solid rgba(55, 55, 55, 0.5)',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                            }}
                            onClick={openWithdrawalModal}
                        >
                            WITHDRAW
                        </button>
                        <button
                            className="py-2.5 bg-[#FF0000] text-white text-sm font-semibold rounded-full hover:bg-[#E60000] transition-colors"
                            onClick={openDepositModal}
                        >
                            DEPOSIT
                        </button>
                    </div>
                </div>
                )}

                {/* Mobile Transaction History */}
                <div className="md:hidden mt-4 space-y-3">
                    {transactions.map((tx, index) => (
                        <div key={tx.id} className={`${index % 2 === 1 ? '' : 'bg-[#1B1B1B]'} p-4`} style={{ borderRadius: "10px" }}>
                            {/* Top row with currency, amount and action */}
                            <div className="flex items-center justify-between mb-4">
                                {/* Currency with icon */}
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-2.5" style={{ backgroundColor: tx.iconBg }}>
                                        <span className={`text-lg font-bold ${tx.currency === 'RS' ? 'text-black' : 'text-white'}`}>{tx.icon}</span>
                                    </div>
                                    <span className="text-white text-xl font-medium">{tx.currency}</span>
                                </div>

                                {/* Amount */}
                                <div className="text-gray-400 text-lg">{tx.amount}</div>

                                {/* Deposit/Withdraw button */}
                                <button
                                    className={`py-2 px-4 rounded-md text-sm font-medium ${tx.type === 'DEPOSIT'
                                        ? 'bg-[#333333] text-white'
                                        : 'bg-[#333333] text-white'
                                        }`}
                                >
                                    {tx.type}
                                </button>
                            </div>

                            {/* Bottom row with date and ID */}
                            <div className="flex items-center justify-between">
                                {/* Date */}
                                <div className="text-gray-500 text-sm">{tx.date}</div>

                                {/* Transaction ID with copy button */}
                                <div className="flex items-center">
                                    <span className="text-gray-500 text-sm mr-2">{tx.id.substring(0, 10)}...</span>
                                    <button
                                        className="p-1"
                                        onClick={() => navigator.clipboard.writeText(tx.id)}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 3H4C3.45 3 3 3.45 3 4V16C3 16.55 3.45 17 4 17H5V18C5 19.1 5.9 20 7 20H18C19.1 20 20 19.1 20 18V7C20 5.9 19.1 5 18 5H17V4C17 3.45 16.55 3 16 3ZM7 18V5H16V4H5C4.45 4 4 4.45 4 5V16H5V17C5 17.55 5.45 18 6 18H7ZM18 18H7V7H18V18Z"
                                                fill="#888888" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Mobile pagination - simplified */}
                    <div className="flex items-center justify-center mt-6 space-x-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#191919] text-[#909090]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <span className="text-sm text-gray-400">Page {currentPage} of 7</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#191919] text-[#909090]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Desktop Transaction History Table - Only show on screens >= 768px */}

                <div className="mt-4 hidden md:block">

                    {/* Table Header */}
                    <div className="grid grid-cols-5 gap-4 px-4 py-3 bg-[#1A1A1A] rounded-t-lg border-b border-[#2A2A2A]">
                        <div className="text-sm font-medium text-gray-400">Date</div>
                        <div className="text-sm font-medium text-gray-400">ID</div>
                        <div className="text-sm font-medium text-gray-400">Currency</div>
                        <div className="text-sm font-medium text-gray-400">Amount</div>
                        <div className="text-sm font-medium text-gray-400">Status</div>
                    </div>

                    {/* Table Body */}
                    <div className="bg-[#121212] rounded-b-lg">
                        {transactions.map((tx, index) => (
                            <div key={tx.id} className={`grid grid-cols-5 gap-4 px-4 py-4 items-center ${index % 2 === 1 ? 'bg-[#1B1B1B]' : 'bg-transparent'} ${index === transactions.length - 1 ? '' : 'border-b border-[#2A2A2A]'}`}>
                                <div className="text-sm text-gray-300">{tx.date}</div>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-300 mr-2">{tx.id.substring(0, 10)}...</span>
                                    <button onClick={() => navigator.clipboard.writeText(tx.id)}>
                                        <img
                                            src="/images/header/copy.svg"
                                            alt="Copy"
                                            className="h-3 w-3 svg-icon filter brightness-0 invert opacity-70"
                                        />
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: tx.iconBg }}>
                                        <span className={`text-xs font-bold ${tx.currency === 'RS' ? 'text-black' : 'text-white'}`}>{tx.icon}</span>
                                    </div>
                                    <span className="text-sm text-white">{tx.currency}</span>
                                </div>
                                <div className="text-sm text-gray-300">{tx.amount}</div>
                                <div>
                                    <span
                                        className={`text-xs px-3 py-1 rounded-full ${tx.type === 'DEPOSIT'
                                            ? 'bg-[#00B33C]/20 text-[#00B33C]'
                                            : 'bg-gray-700/30 text-gray-300'
                                            } uppercase`}
                                    >
                                        {tx.type}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Pagination */}
                    <div className="flex items-center justify-center mt-6 space-x-4">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#191919] text-[#909090] hover:bg-[#252525] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <span className="text-sm text-gray-400">Page {currentPage} of 7</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#191919] text-[#909090] hover:bg-[#252525] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>

            {/* Withdrawal Modal */}
            {
                isWithdrawalModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
                        <div className="rounded-lg w-full max-w-md m-4 md:m-0 overflow-hidden" style={{ background: 'linear-gradient(251.75deg, #202020 0%, #0C0C0C 100%)' }}>
                            {/* Modal Header */}
                            <div className="flex justify-between items-center px-5 pt-5 pb-3">
                                <h2 className="text-lg font-medium">Withdrawal</h2>
                                <button
                                    onClick={() => setIsWithdrawalModalOpen(false)}
                                    className="text-[#909090] hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="px-5 pb-5">
                                {/* FIAT/CRYPTO Tabs */}
                                <div className="grid grid-cols-2 rounded-md overflow-hidden mb-4 gap-1.5">
                                    <button
                                        className={`py-3 text-center text-sm font-medium ${modalTab === "FIAT"
                                            ? "bg-[#1B1B1B] text-white"
                                            : "bg-[#191919] text-[#4A4A4A]"
                                            }`}
                                        style={{ borderRadius: '8px' }}
                                        onClick={() => setModalTab("FIAT")}
                                    >
                                        FIAT
                                    </button>
                                    <button
                                        className={`py-3 text-center text-sm font-medium ${modalTab === "CRYPTO"
                                            ? "bg-[#1B1B1B] text-white"
                                            : "bg-[#191919] text-[#4A4A4A]"
                                            }`}
                                        style={{ borderRadius: '8px' }}
                                        onClick={() => setModalTab("CRYPTO")}
                                    >
                                        CRYPTO
                                    </button>
                                </div>

                                {/* Currency Selector */}
                                <div className="mb-4">
                                    <label className="block text-[#909090] text-xs mb-1.5">
                                        Choose Currency
                                    </label>
                                    <div className="relative">
                                        <div
                                            className="flex items-center justify-between p-3 bg-[#191919] rounded-md cursor-pointer"
                                            onClick={() => setIsModalDropdownOpen(!isModalDropdownOpen)}
                                        >
                                            <div className="flex items-center">
                                                <div className="w-5 h-5 rounded-full bg-[#00B33C] flex items-center justify-center mr-2">
                                                    <span className="text-white text-xs font-bold">$</span>
                                                </div>
                                                <span className="text-white text-sm">USD</span>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`h-4 w-4 text-white transition-transform ${isModalDropdownOpen ? "rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>

                                        {/* Dropdown Options */}
                                        {isModalDropdownOpen && (
                                            <div className="absolute left-0 right-0 mt-1 bg-[#1A1A1A] border border-[#232323] rounded-md overflow-hidden z-10">
                                                <div
                                                    className="p-2 hover:bg-[#242424] cursor-pointer"
                                                    onClick={() => {
                                                        setModalCurrency("USD");
                                                        setIsModalDropdownOpen(false);
                                                    }}
                                                >
                                                    <div className="flex items-center">
                                                        <div className="w-5 h-5 rounded-full bg-[#00B33C] flex items-center justify-center mr-2">
                                                            <span className="text-white text-xs font-bold">$</span>
                                                        </div>
                                                        <span className="text-white text-sm">USD</span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="p-2 hover:bg-[#242424] cursor-pointer"
                                                    onClick={() => {
                                                        setModalCurrency("RS");
                                                        setIsModalDropdownOpen(false);
                                                    }}
                                                >
                                                    <div className="flex items-center">
                                                        <div className="w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mr-2">
                                                            <span className="text-black text-xs font-bold">₹</span>
                                                        </div>
                                                        <span className="text-white text-sm">RS</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Amount Input */}
                                <div className="mb-4">
                                    <label className="block text-[#909090] text-xs mb-1.5">Amount</label>
                                    <input
                                        type="text"
                                        placeholder="Choose Amount"
                                        value={modalAmount}
                                        onChange={handleAmountChange}
                                        className="w-full p-3 bg-[#191919] rounded-md border border-[#232323] text-white text-sm focus:outline-none focus:border-[#333333]"
                                    />
                                </div>

                                {/* Available Balance */}
                                <div className="text-center mb-6">
                                    <p className="text-[#909090] text-xs">
                                        Available for withdrawal:{" "}
                                        <span className="text-white">$3,234.01</span>
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setIsWithdrawalModalOpen(false)}
                                        className="py-2.5 text-white text-sm font-medium rounded-full border border-[#333333] transition-colors bg-transparent"
                                    >
                                        CANCEL
                                    </button>
                                    <button
                                        onClick={handleWithdraw}
                                        className="py-2.5 bg-[#FF0000] text-white text-sm font-medium rounded-full hover:bg-[#E60000] transition-colors"
                                    >
                                        WITHDRAW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Deposit Modal */}
            {
                isDepositModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
                        <div className="rounded-lg w-full max-w-md m-4 md:m-0 overflow-hidden" style={{ background: 'linear-gradient(251.75deg, #202020 0%, #0C0C0C 100%)' }}>
                            {/* Modal Header */}
                            <div className="flex justify-between items-center px-5 pt-5 pb-3">
                                <h2 className="text-lg font-medium">Deposit</h2>
                                <button
                                    onClick={() => setIsDepositModalOpen(false)}
                                    className="text-[#909090] hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="px-5 pb-5">
                                {/* FIAT/CRYPTO Tabs */}
                                <div className="grid grid-cols-2 rounded-md overflow-hidden mb-4 gap-1.5">
                                    <button
                                        className={`py-3 text-center text-sm font-medium ${modalTab === "FIAT"
                                            ? "bg-[#1B1B1B] text-white"
                                            : "bg-[#191919] text-[#4A4A4A]"
                                            }`}
                                        style={{ borderRadius: '8px' }}
                                        onClick={() => setModalTab("FIAT")}
                                    >
                                        FIAT
                                    </button>
                                    <button
                                        className={`py-3 text-center text-sm font-medium ${modalTab === "CRYPTO"
                                            ? "bg-[#1B1B1B] text-white"
                                            : "bg-[#191919] text-[#4A4A4A]"
                                            }`}
                                        style={{ borderRadius: '8px' }}
                                        onClick={() => setModalTab("CRYPTO")}
                                    >
                                        CRYPTO
                                    </button>
                                </div>

                                {/* Currency Selector */}
                                <div className="mb-4">
                                    <label className="block text-[#909090] text-xs mb-1.5">
                                        Choose Currency
                                    </label>
                                    <div className="relative">
                                        <div
                                            className="flex items-center justify-between p-3 bg-[#191919] rounded-md cursor-pointer"
                                            onClick={() => setIsModalDropdownOpen(!isModalDropdownOpen)}
                                        >
                                            <div className="flex items-center">
                                                <div className="w-5 h-5 rounded-full bg-[#00B33C] flex items-center justify-center mr-2">
                                                    <span className="text-white text-xs font-bold">$</span>
                                                </div>
                                                <span className="text-white text-sm">USD</span>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`h-4 w-4 text-white transition-transform ${isModalDropdownOpen ? "rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>

                                        {/* Dropdown Options */}
                                        {isModalDropdownOpen && (
                                            <div className="absolute left-0 right-0 mt-1 bg-[#1A1A1A] border border-[#232323] rounded-md overflow-hidden z-10">
                                                <div
                                                    className="p-2 hover:bg-[#242424] cursor-pointer"
                                                    onClick={() => {
                                                        setModalCurrency("USD");
                                                        setIsModalDropdownOpen(false);
                                                    }}
                                                >
                                                    <div className="flex items-center">
                                                        <div className="w-5 h-5 rounded-full bg-[#00B33C] flex items-center justify-center mr-2">
                                                            <span className="text-white text-xs font-bold">$</span>
                                                        </div>
                                                        <span className="text-white text-sm">USD</span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="p-2 hover:bg-[#242424] cursor-pointer"
                                                    onClick={() => {
                                                        setModalCurrency("RS");
                                                        setIsModalDropdownOpen(false);
                                                    }}
                                                >
                                                    <div className="flex items-center">
                                                        <div className="w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center mr-2">
                                                            <span className="text-black text-xs font-bold">₹</span>
                                                        </div>
                                                        <span className="text-white text-sm">RS</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Amount Input */}
                                <div className="mb-4">
                                    <label className="block text-[#909090] text-xs mb-1.5">Amount</label>
                                    <input
                                        type="text"
                                        placeholder="Choose Amount"
                                        value={modalAmount}
                                        onChange={handleAmountChange}
                                        className="w-full p-3 bg-[#191919] rounded-md border border-[#232323] text-white text-sm focus:outline-none focus:border-[#333333]"
                                    />
                                </div>

                                {/* Available Balance */}
                                <div className="text-center mb-3">
                                    <p className="text-[#909090] text-xs">
                                        Available for withdrawal:{" "}
                                        <span className="text-white">$3,234.01</span>
                                    </p>
                                </div>

                                {/* Make it Regular - Toggle Switch */}
                                <div className="flex items-center justify-between mb-5 px-1">
                                    <div className="flex items-center">
                                        <div
                                            className={`relative w-10 h-5 rounded-full cursor-pointer transition-colors duration-300 ${makeRegular ? 'bg-[#00B33C]' : 'bg-[#333333]'}`}
                                            onClick={() => setMakeRegular(!makeRegular)}
                                        >
                                            <div
                                                className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${makeRegular ? 'translate-x-5' : 'translate-x-0.5'}`}
                                            ></div>
                                        </div>
                                        <span className="ml-3 text-sm text-gray-400">Make it Regular Every Month</span>
                                    </div>
                                    <div className="bg-[#162c1c] px-2 py-0.5 rounded text-xs font-medium text-[#00B33C]">
                                        Discount 5%
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setIsDepositModalOpen(false)}
                                        className="py-2.5 text-white text-sm font-medium rounded-full border border-[#333333] transition-colors bg-transparent"
                                    >
                                        CANCEL
                                    </button>
                                    <button
                                        onClick={handleDeposit}
                                        className="py-2.5 bg-[#FF0000] text-white text-sm font-medium rounded-full hover:bg-[#E60000] transition-colors"
                                    >
                                        DEPOSIT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

const WalletPage: React.FC = () => {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#1E1E1E] text-white flex items-center justify-center">Loading...</div>}>
            <WalletContent />
        </Suspense>
    );
};

export default WalletPage;