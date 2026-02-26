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
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 sm:p-8">
                {/* Progress indicator */}
                <div className="flex items-center justify-center gap-2 mb-6">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-2">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-500"
                                    }`}
                            >
                                {step > s ? "✓" : s}
                            </div>
                            {s < 3 && (
                                <div
                                    className={`w-8 h-0.5 ${step > s ? "bg-blue-600" : "bg-gray-200"
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-center mb-2 text-gray-800">
                    {stepTitles[step]}
                </h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                    {stepDescriptions[step]}
                </p>

                {/* Step 1: Enter Email */}
                {step === 1 && (
                    <form onSubmit={handleSendOtp} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                                className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send OTP Code"}
                        </button>
                    </form>
                )}

                {/* Step 2: Enter OTP */}
                {step === 2 && (
                    <form onSubmit={handleVerifyOtp} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Verification Code
                            </label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) =>
                                    setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                                }
                                placeholder="Enter 6-digit code"
                                required
                                maxLength={6}
                                className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:border-blue-500 text-center text-xl tracking-widest font-mono text-gray-900"
                            />
                            <p className="text-xs text-gray-400 mt-2">
                                Sent to {email}.{" "}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setStep(1);
                                        setOtp("");
                                        setError("");
                                        setMessage("");
                                    }}
                                    className="text-blue-600 hover:underline"
                                >
                                    Change email
                                </button>
                            </p>
                        </div>
                        <button
                            type="submit"
                            disabled={loading || otp.length !== 6}
                            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            {loading ? "Verifying..." : "Verify Code"}
                        </button>
                        <button
                            type="button"
                            onClick={handleSendOtp}
                            disabled={loading}
                            className="w-full text-blue-600 text-sm hover:underline disabled:opacity-50"
                        >
                            Resend Code
                        </button>
                    </form>
                )}

                {/* Step 3: New Password */}
                {step === 3 && (
                    <form onSubmit={handleResetPassword} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-2">New Password</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                minLength={6}
                                className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                minLength={6}
                                className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            {loading ? "Resetting..." : "Reset Password"}
                        </button>
                    </form>
                )}

                {/* Messages */}
                {error && (
                    <p className="mt-4 text-center text-sm text-red-500">{error}</p>
                )}
                {message && (
                    <p className="mt-4 text-center text-sm text-green-600">{message}</p>
                )}

                <p className="mt-6 text-center text-gray-500 text-sm">
                    <Link href="/login" className="text-blue-600 hover:underline">
                        ← Back to Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
