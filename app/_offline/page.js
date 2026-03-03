"use client";

import Link from "next/link";

export default function OfflinePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center p-6">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center max-w-md mx-auto">
                {/* Offline icon */}
                <div className="mb-8 inline-flex items-center justify-center w-28 h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                    <svg className="w-14 h-14 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                        <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-black text-white mb-3 tracking-tight">
                    You&apos;re Offline
                </h1>

                {/* Subtitle */}
                <p className="text-blue-200/80 text-lg mb-2">
                    No internet connection detected
                </p>
                <p className="text-blue-300/60 text-sm mb-10 max-w-xs mx-auto">
                    Check your Wi-Fi or mobile data and try again. Previously loaded pages may still be available.
                </p>

                {/* Action buttons */}
                <div className="space-y-4">
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 active:scale-95"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/dashboard"
                        className="block w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 active:scale-95"
                    >
                        Go to Dashboard
                    </Link>
                </div>

                {/* Branding */}
                <div className="mt-16 flex items-center justify-center gap-2 text-blue-300/40">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        D
                    </div>
                    <span className="font-semibold tracking-wide text-sm">DATARA</span>
                </div>
            </div>
        </div>
    );
}
