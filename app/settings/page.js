"use client";

import { useState, useEffect } from "react";
import AuthGuard from "../../components/AuthGuard";
import { useAuth } from "../../context/AuthContext";
import { updateProfile, changePassword } from "../../services/auth.service";

function SettingsContent() {
    const { user, updateUser } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profileMessage, setProfileMessage] = useState("");
    const [profileError, setProfileError] = useState("");
    const [profileLoading, setProfileLoading] = useState(false);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordLoading, setPasswordLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setEmail(user.email || "");
        }
    }, [user]);

    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        setProfileMessage("");
        setProfileError("");
        setProfileLoading(true);
        try {
            const res = await updateProfile({ name, email });
            updateUser(res.data.user);
            setProfileMessage("Profile updated successfully!");
            setTimeout(() => setProfileMessage(""), 3000);
        } catch (err) {
            setProfileError(err.response?.data?.message || "Failed to update profile");
        } finally {
            setProfileLoading(false);
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setPasswordError("");
        setPasswordMessage("");

        if (newPassword.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        }

        setPasswordLoading(true);
        try {
            await changePassword({ oldPassword, newPassword });
            setPasswordMessage("Password changed successfully!");
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setTimeout(() => setPasswordMessage(""), 3000);
        } catch (err) {
            setPasswordError(err.response?.data?.message || "Failed to change password");
        } finally {
            setPasswordLoading(false);
        }
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
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <span className="block sm:inline">{profileMessage}</span>
                        </div>
                    )}
                    {profileError && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <span className="block sm:inline">{profileError}</span>
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
                                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-[var(--text-primary)] px-3 py-2"
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
                                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-[var(--text-primary)] px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={profileLoading}
                                className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors disabled:opacity-50"
                            >
                                {profileLoading ? "Saving..." : "Save Profile"}
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
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <span className="block sm:inline">{passwordError}</span>
                        </div>
                    )}
                    {passwordMessage && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <span className="block sm:inline">{passwordMessage}</span>
                        </div>
                    )}
                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)] opacity-80">
                                Current Password:
                            </label>
                            <input
                                type="password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-[var(--text-primary)] px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)] opacity-80">
                                New Password:
                            </label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-[var(--text-primary)] px-3 py-2"
                                required
                            />
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                Must be at least 6 characters long.
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
                                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-[var(--text-primary)] px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={passwordLoading}
                                className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors disabled:opacity-50"
                            >
                                {passwordLoading ? "Changing..." : "Change Password"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default function Settings() {
    return (
        <AuthGuard>
            <SettingsContent />
        </AuthGuard>
    );
}
