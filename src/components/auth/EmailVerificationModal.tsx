"use client";

import React, { useState, useEffect, useRef } from 'react';

interface EmailVerificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onBack: () => void;
    email: string;
    onVerify: (code: string) => void;
}

const EmailVerificationModal: React.FC<EmailVerificationModalProps> = ({
    isOpen,
    onClose,
    onBack,
    email,
    onVerify
}) => {
    const [verificationCode, setVerificationCode] = useState<string[]>(Array(6).fill(''));
    const [countdown, setCountdown] = useState(37);
    const [isResendActive, setIsResendActive] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null));

    // Handle countdown timer for resend functionality
    useEffect(() => {
        if (!isOpen) return;

        let timer: NodeJS.Timeout;
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        } else {
            setIsResendActive(true);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isOpen, countdown]);

    // Reset states when modal opens
    useEffect(() => {
        if (isOpen) {
            setVerificationCode(Array(6).fill(''));
            setCountdown(37);
            setIsResendActive(false);
            // Focus first input when modal opens
            setTimeout(() => {
                if (inputRefs.current[0]) {
                    inputRefs.current[0].focus();
                }
            }, 100);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleCodeChange = (index: number, value: string) => {
        if (value.length > 1) value = value[0];
        if (!/^[0-9]*$/.test(value)) return;

        const newCode = [...verificationCode];
        newCode[index] = value;
        setVerificationCode(newCode);

        // Auto focus to next input if current input is filled
        if (value !== '' && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        // Handle backspace to move to previous input
        if (e.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain').trim();

        if (!/^\d+$/.test(pastedData)) return;

        const pastedCodeArray = pastedData.substring(0, 6).split('');
        const newCode = [...verificationCode];

        pastedCodeArray.forEach((char, index) => {
            if (index < 6) newCode[index] = char;
        });

        setVerificationCode(newCode);

        // Focus on appropriate input after paste
        if (pastedCodeArray.length < 6) {
            inputRefs.current[pastedCodeArray.length]?.focus();
        }
    };

    const handleResend = () => {
        if (!isResendActive) return;
        // Reset countdown and resend code
        setCountdown(37);
        setIsResendActive(false);
        // Additional resend logic would go here
    };

    const handleVerify = () => {
        const code = verificationCode.join('');
        if (code.length === 6) {
            onVerify(code);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="relative w-full h-full md:h-auto md:max-h-[80vh] md:max-w-md md:rounded-2xl bg-[#1e1e1e] p-5 flex flex-col">
                {/* Header with Back and Close buttons */}
                <div className="flex justify-between items-center">
                    <button
                        onClick={onBack}
                        className="text-gray-400 hover:text-white flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <span className="ml-1">Back</span>
                    </button>

                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Content Container */}
                <div className="flex-grow flex flex-col justify-center items-center px-2">
                    {/* Logo */}
                    <div className="mb-6 mt-2">
                        <div className="w-16 h-16 relative">
                            <div className="absolute inset-0 bg-white rounded-full"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 relative">
                                    <div className="absolute top-0 left-0 w-5 h-10 bg-black rounded-l-full"></div>
                                    <div className="absolute top-0 right-0 w-5 h-10 bg-black rounded-r-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl text-white text-center font-medium mb-3">Please Check Your Email</h2>

                    {/* Email Message */}
                    <p className="text-gray-400 text-center mb-6 text-sm">
                        We&apos;ve sent a code to {email}
                    </p>

                    {/* Verification Code Input */}
                    <div className="flex justify-center gap-2 mb-6 w-full max-w-xs">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                            <div key={index} className="w-12 h-12">
                                <input
                                    ref={(el) => { inputRefs.current[index] = el; }}
                                    type="text"
                                    maxLength={1}
                                    value={verificationCode[index]}
                                    onChange={(e) => handleCodeChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={index === 0 ? handlePaste : undefined}
                                    className="w-full h-full rounded-xl bg-[#333333] text-white border-none focus:outline-none focus:ring-1 focus:ring-gray-500 text-center text-xl"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Verify Button */}
                    <button
                        onClick={handleVerify}
                        disabled={verificationCode.join('').length !== 6}
                        className={`w-full py-3 px-4 rounded-full ${verificationCode.join('').length === 6
                            ? 'bg-red-600 hover:bg-red-700'
                            : 'bg-gray-600 cursor-not-allowed'
                            } text-white font-semibold transition-colors mb-5`}
                    >
                        VERIFY EMAIL
                    </button>

                    {/* Resend Message */}
                    <div className="text-center text-xs">
                        <span className="text-gray-400">Didn&apos;t receive an email? </span>
                        {isResendActive ? (
                            <button onClick={handleResend} className="text-red-500 hover:text-red-400">
                                Resend
                            </button>
                        ) : (
                            <span className="text-gray-500">
                                Resend in {countdown}sec
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailVerificationModal;