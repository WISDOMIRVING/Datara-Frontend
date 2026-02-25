"use client";

import { useState } from "react";

export default function Settings() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordSuccess, setPasswordSuccess] = useState("");
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("john@example.com");
    const [profileMessage, setProfileMessage] = useState("");

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        setProfileMessage("");
        // Simulate API call to update profile
        console.log("Updating profile with:", { name, email });
        setProfileMessage("Profile updated successfully!");
        setTimeout(() => setProfileMessage(""), 3000);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        setPasswordError("");
        setPasswordSuccess("");

        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        }

        // Simulate API call
        console.log("Changing password");
        setPasswordSuccess("Password changed successfully!");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => setPasswordSuccess(""), 3000);
    };

    return (
        <div className="bg-[var(--bg-primary)] transition-colors duration-300 py-12">
            <div className="max-w-3xl mx-auto p-4 sm:p-8">
                <h1 className="text-3xl font-bold mb-8 text-[var(--text-primary)]">
                    Settings
                </h1>

                {/* Profile Information Form */}
                <div className="glass p-6 sm:p-8 rounded-2xl shadow-md mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">
                        Profile Information
                    </h2>
                    {profileMessage && (
                        <div
                            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                            role="alert"
                        >
                            <span className="block sm:inline">{profileMessage}</span>
                        </div>
                    )}
                    <form onSubmit={handleProfileSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)] opacity-80">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-[var(--text-primary)]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)] opacity-80">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-[var(--text-primary)]"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
                            >
                                Save Profile
                            </button>
                        </div>
                    </form>
                </div>

                {/* Change Password Form */}
                <div className="glass p-6 sm:p-8 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">
                        Change Password
                    </h2>
                    {passwordError && (
                        <div
                            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                            role="alert"
                        >
                            <span className="block sm:inline">{passwordError}</span>
                        </div>
                    )}
                    {passwordSuccess && (
                        <div
                            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                            role="alert"
                        >
                            <span className="block sm:inline">{passwordSuccess}</span>
                        </div>
                    )}
                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)] opacity-80">
                                New Password:
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-[var(--text-primary)]"
                                required
                            />
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                Must be at least 8 characters long.
                            </p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)] opacity-80">
                                Confirm New Password:
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-[var(--text-primary)]"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
                            >
                                Change Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
