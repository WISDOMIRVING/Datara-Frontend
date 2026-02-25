"use client";

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children, adminOnly = false }) {
    const { isAuthenticated, isLoading, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
        if (!isLoading && adminOnly && user?.role !== "ADMIN") {
            router.push("/dashboard");
        }
    }, [isLoading, isAuthenticated, user, adminOnly, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
            </div>
        );
    }

    if (!isAuthenticated) return null;
    if (adminOnly && user?.role !== "ADMIN") return null;

    return children;
}
