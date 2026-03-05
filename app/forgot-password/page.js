"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    forgotPassword,
    verifyOtp,
    resetPassword,
} from "../../services/auth.service";

export default function ForgotPassword() {
    const router = useRouter();
    const [step, setStep] = useState(1); // 1: email, 2: OTP, 3: new password
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");
        try {
            const res = await forgotPassword({ email });
            setMessage(res.data.message);
            setStep(2);
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");
        try {
            const res = await verifyOtp({ email, otp });
            setMessage(res.data.message);
            setStep(3);
        } catch (err) {
            setError(err.response?.data?.message || "Invalid OTP");
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (newPassword.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setLoading(true);
        try {
            const res = await resetPassword({ email, otp, newPassword });
            setMessage(res.data.message);
            setTimeout(() => router.push("/login"), 2000);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to reset password");
        } finally {
            setLoading(false);
        }
    };

    const stepTitles = [
        "",
        "Forgot Password",
        "Enter OTP Code",
        "Create New Password",
    ];

    const stepDescriptions = [
        "",
        "Enter the email address you used to register. We'll send you a verification code.",
        "We've sent a 6-digit code to your email. Enter it below.",
        "Choose a new password for your account.",
    ];

    return (
        <div className="min-h-[90vh] flex items-center justify-center px-4 py-16 bg-primary transition-colors duration-500 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-md w-full relative z-10">
                <header className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-black text-primary tracking-tighter italic mb-2">
                        Security <span className="text-blue-600">Recovery</span>
                    </h1>
                    <p className="text-secondary font-medium text-sm opacity-60 uppercase tracking-widest leading-relaxed px-4">{stepDescriptions[step]}</p>
                </header>

                <div className="glass p-8 sm:p-10 rounded-[2.5rem] border border-primary shadow-2xl relative overflow-hidden backdrop-blur-xl">
                    {/* Progress indicator */}
                    <div className="flex items-center justify-center gap-4 mb-10">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center gap-4">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-black transition-all duration-500 ${step >= s
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-110"
                                        : "bg-secondary/30 text-secondary border border-primary"
                                        }`}
                                >
                                    {step > s ? "✓" : s}
                                </div>
                                {s < 3 && (
                                    <div
                                        className={`w-8 h-1 rounded-full transition-all duration-700 ${step > s ? "bg-blue-600" : "bg-secondary/20"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step 1: Enter Email */}
                    {step === 1 && (
                        <form onSubmit={handleSendOtp} className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-black text-secondary mb-3 uppercase tracking-widest ml-1 opacity-70">Registry Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    required
                                    className="w-full px-6 py-4 bg-secondary/30 border border-primary text-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold placeholder:opacity-20 text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50"
                            >
                                {loading ? "DISPATCHING..." : "SEND SECURITY CODE"}
                            </button>
                        </form>
                    )}

                    {/* Step 2: Enter OTP */}
                    {step === 2 && (
                        <form onSubmit={handleVerifyOtp} className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-black text-secondary mb-3 uppercase tracking-widest ml-1 opacity-70">6-Digit Access Code</label>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) =>
                                        setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                                    }
                                    placeholder="000000"
                                    required
                                    maxLength={6}
                                    className="w-full px-6 py-5 bg-secondary/30 border border-primary text-center text-3xl tracking-[0.3em] font-black text-blue-500 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:opacity-10"
                                />
                                <div className="mt-4 text-center">
                                    <p className="text-[10px] text-secondary font-bold opacity-60 uppercase tracking-wider">
                                        SENT TO: <span className="text-primary">{email}</span>
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setStep(1);
                                            setOtp("");
                                            setError("");
                                            setMessage("");
                                        }}
                                        className="text-[10px] font-black text-blue-500 hover:underline uppercase tracking-widest mt-2"
                                    >
                                        Correction Identity?
                                    </button>
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={loading || otp.length !== 6}
                                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50"
                            >
                                {loading ? "VALIDATING..." : "VERIFY CODE"}
                            </button>
                            <button
                                type="button"
                                onClick={handleSendOtp}
                                disabled={loading}
                                className="w-full text-secondary text-[10px] font-black uppercase tracking-widest hover:text-primary transition-all underline underline-offset-4 opacity-50 hover:opacity-100"
                            >
                                Dispatch New Code
                            </button>
                        </form>
                    )}

                    {/* Step 3: New Password */}
                    {step === 3 && (
                        <form onSubmit={handleResetPassword} className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-black text-secondary mb-3 uppercase tracking-widest ml-1 opacity-70">New Secret Key</label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    minLength={6}
                                    className="w-full px-6 py-4 bg-secondary/30 border border-primary text-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold placeholder:opacity-20 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-secondary mb-3 uppercase tracking-widest ml-1 opacity-70">Confirm New Key</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    minLength={6}
                                    className="w-full px-6 py-4 bg-secondary/30 border border-primary text-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold placeholder:opacity-20 text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50"
                            >
                                {loading ? "UPDATING..." : "RE-ESTABLISH ACCESS"}
                            </button>
                        </form>
                    )}

                    {/* Messages */}
                    {error && (
                        <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-center text-xs font-black uppercase tracking-tighter">
                            {error}
                        </div>
                    )}
                    {message && !error && (
                        <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl text-center text-xs font-black uppercase tracking-tighter">
                            {message}
                        </div>
                    )}

                    <div className="mt-8 pt-8 border-t border-primary text-center">
                        <Link href="/login" className="text-secondary text-xs font-black uppercase tracking-widest hover:text-blue-500 transition-all flex items-center justify-center gap-2 opacity-60 hover:opacity-100">
                            <span>←</span> RETURN TO GATEWAY
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
