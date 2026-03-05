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
        <div className="bg-primary transition-colors duration-300 py-12">
            <div className="max-w-3xl mx-auto p-4 sm:p-8">
                <h1 className="text-4xl font-black mb-8 text-primary tracking-tighter italic">
                    Settings
                </h1>

                {/* Profile Information Form */}
                <div className="glass p-6 sm:p-8 rounded-[2.5rem] border border-primary shadow-xl mb-12">
                    <h2 className="text-2xl font-black mb-6 text-primary tracking-tight">
                        Profile Information
                    </h2>
                    {profileMessage && (
                        <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-3 rounded-xl relative mb-6 font-bold text-sm" role="alert">
                            <span className="block sm:inline">{profileMessage}</span>
                        </div>
                    )}
                    {profileError && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl relative mb-6 font-bold text-sm" role="alert">
                            <span className="block sm:inline">{profileError}</span>
                        </div>
                    )}
                    <form onSubmit={handleProfileSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-widest ml-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full rounded-2xl border border-primary bg-secondary text-primary shadow-sm focus:ring-2 focus:ring-blue-500 outline-none sm:text-sm px-4 py-3 transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-widest ml-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-2xl border border-primary bg-secondary text-primary shadow-sm focus:ring-2 focus:ring-blue-500 outline-none sm:text-sm px-4 py-3 transition-all"
                                required
                            />
                        </div>
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={profileLoading}
                                className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-sm hover:bg-blue-700 transition-all disabled:opacity-50 shadow-lg shadow-blue-500/20 active:scale-95"
                            >
                                {profileLoading ? "SAVING..." : "SAVE PROFILE"}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Change Password Form */}
                <div className="glass p-6 sm:p-8 rounded-[2.5rem] border border-primary shadow-xl">
                    <h2 className="text-2xl font-black mb-6 text-primary tracking-tight">
                        Security
                    </h2>
                    {passwordError && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl relative mb-6 font-bold text-sm" role="alert">
                            <span className="block sm:inline">{passwordError}</span>
                        </div>
                    )}
                    {passwordMessage && (
                        <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-3 rounded-xl relative mb-6 font-bold text-sm" role="alert">
                            <span className="block sm:inline">{passwordMessage}</span>
                        </div>
                    )}
                    <form onSubmit={handlePasswordSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-widest ml-1">
                                Current Password
                            </label>
                            <input
                                type="password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                className="block w-full rounded-2xl border border-primary bg-secondary text-primary shadow-sm focus:ring-2 focus:ring-blue-500 outline-none sm:text-sm px-4 py-3 transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-widest ml-1">
                                New Password
                            </label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="block w-full rounded-2xl border border-primary bg-secondary text-primary shadow-sm focus:ring-2 focus:ring-blue-500 outline-none sm:text-sm px-4 py-3 transition-all"
                                required
                            />
                            <p className="mt-2 text-[10px] text-secondary font-bold uppercase tracking-widest ml-1">
                                Minimum 6 characters
                            </p>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-widest ml-1">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="block w-full rounded-2xl border border-primary bg-secondary text-primary shadow-sm focus:ring-2 focus:ring-blue-500 outline-none sm:text-sm px-4 py-3 transition-all"
                                required
                            />
                        </div>
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={passwordLoading}
                                className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-sm hover:bg-blue-700 transition-all disabled:opacity-50 shadow-lg shadow-blue-500/20 active:scale-95"
                            >
                                {passwordLoading ? "CHANGING..." : "UPDATE PASSWORD"}
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
