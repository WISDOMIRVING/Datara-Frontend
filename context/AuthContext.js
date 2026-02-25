"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getMe } from "../services/auth.service";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [walletBalance, setWalletBalance] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const hydrate = async () => {
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
        if (!token) {
            setIsLoading(false);
            setIsAuthenticated(false);
            return;
        }

        try {
            const res = await getMe();
            setUser(res.data.user);
            setWalletBalance(res.data.wallet?.balance || 0);
            setIsAuthenticated(true);
        } catch {
            // Token expired or invalid
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        hydrate();
    }, []);

    const loginUser = (token, userData) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        setIsAuthenticated(true);
    };

    const logoutUser = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setWalletBalance(0);
        setIsAuthenticated(false);
    };

    const updateUser = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const refreshWallet = async () => {
        try {
            const res = await getMe();
            setWalletBalance(res.data.wallet?.balance || 0);
        } catch {
            // Silently fail
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                walletBalance,
                isLoading,
                isAuthenticated,
                loginUser,
                logoutUser,
                updateUser,
                refreshWallet,
                hydrate,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
