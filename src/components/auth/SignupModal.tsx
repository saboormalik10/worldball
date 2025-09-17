"use client";

import React, { useState } from 'react';

interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
    openSigninModal?: () => void;
    onSignup?: (email: string, password: string) => void;
}

const SignupModal: React.FC<SignupModalProps> = ({
    isOpen,
    onClose,
    openSigninModal,
    onSignup
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
    }>({});

    const handleSignInClick = () => {
        onClose();
        if (openSigninModal) {
            openSigninModal();
        }
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password: string) => {
        // Require at least 6 characters
        return password.length >= 6;
    };

    const handleSignup = () => {
        const newErrors: { email?: string; password?: string } = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (!validatePassword(password)) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        // If no errors, proceed with signup
        if (Object.keys(newErrors).length === 0 && onSignup) {
            onSignup(email, password);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="relative w-full h-full md:h-auto md:max-h-[80vh] md:max-w-md md:rounded-2xl bg-[#1e1e1e] p-5 flex flex-col">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Content Container */}
                <div className="flex-grow flex flex-col justify-center items-center">
                    {/* Logo */}
                    <div className="flex justify-center mb-3 mt-5">
                        <div className="w-16 h-16 flex items-center justify-center">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <div className="relative w-34 h-34">
                                    <div className="absolute inset-0 rounded-full"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 relative">
                                            <img src="/images/header/Logo.svg" alt="Logo" style={{ width: "84px", height: "84px", objectFit: "contain" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl text-white text-center font-medium mb-4">Sign Up to WorldBall</h2>

                    {/* Social Login Buttons - Responsive layout */}
                    <div className="flex flex-col md:flex-row gap-2 mb-3 w-full">
                        <button className="flex-1 flex items-center justify-center py-2.5 px-2 rounded-xl bg-[#333333] text-white hover:bg-[#444444] transition-colors text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2 text-blue-500">
                                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                            </svg>
                            Sign Up with Facebook
                        </button>

                        <button className="flex-1 flex items-center justify-center py-2.5 px-2 rounded-xl bg-[#333333] text-white hover:bg-[#444444] transition-colors text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            Sign Up with Apple
                        </button>
                    </div>

                    {/* Google Button (Full Width) */}
                    <div className="mb-4 w-full">
                        <button className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl bg-[#333333] text-white hover:bg-[#444444] transition-colors text-sm">
                            <svg className="mr-2" width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                            </svg>
                            Sign Up with Google
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center mb-4 w-full">
                        <div className="flex-1 h-px bg-gray-600"></div>
                        <div className="px-3 text-gray-400 text-sm">or</div>
                        <div className="flex-1 h-px bg-gray-600"></div>
                    </div>

                    {/* Email Input */}
                    <div className="mb-3 w-full">
                        <label htmlFor="signup-email" className="block text-xs font-medium text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            id="signup-email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) setErrors({ ...errors, email: undefined });
                            }}
                            placeholder="Enter Your Email"
                            className={`w-full px-4 py-3 rounded-xl bg-[#333333] text-white border-none focus:outline-none ${errors.email ? 'ring-1 ring-red-500' : 'focus:ring-1 focus:ring-gray-500'}`}
                        />
                        {errors.email && (
                            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="mb-5 w-full">
                        <label htmlFor="signup-password" className="block text-xs font-medium text-gray-400 mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="signup-password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (errors.password) setErrors({ ...errors, password: undefined });
                                }}
                                placeholder="Enter Your Password"
                                className={`w-full px-4 py-3 rounded-xl bg-[#333333] text-white border-none focus:outline-none ${errors.password ? 'ring-1 ring-red-500' : 'focus:ring-1 focus:ring-gray-500'}`}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                        <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                        )}
                    </div>

                    {/* Sign Up Button */}
                    <button
                        onClick={handleSignup}
                        className="w-full py-3 px-4 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors mb-3"
                    >
                        SIGN UP
                    </button>

                    {/* Sign In Link */}
                    <div className="text-center text-xs">
                        <span className="text-gray-400">Have an account?</span>{' '}
                        <button onClick={handleSignInClick} className="text-red-500 hover:text-red-400">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupModal;