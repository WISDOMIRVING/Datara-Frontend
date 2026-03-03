"use client";

import { useState, useEffect } from "react";

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        // Check if already installed
        if (window.matchMedia("(display-mode: standalone)").matches) {
            setIsInstalled(true);
            return;
        }

        // Check if user dismissed the prompt recently
        const dismissed = localStorage.getItem("pwa-install-dismissed");
        if (dismissed) {
            const dismissedTime = parseInt(dismissed, 10);
            const threeDays = 3 * 24 * 60 * 60 * 1000;
            if (Date.now() - dismissedTime < threeDays) {
                return;
            }
        }

        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            // Show after a slight delay so it doesn't appear instantly on load
            setTimeout(() => setShowPrompt(true), 3000);
        };

        window.addEventListener("beforeinstallprompt", handler);

        window.addEventListener("appinstalled", () => {
            setIsInstalled(true);
            setShowPrompt(false);
            setDeferredPrompt(null);
        });

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
        };
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
            setShowPrompt(false);
        }
        setDeferredPrompt(null);
    };

    const handleDismiss = () => {
        setShowPrompt(false);
        localStorage.setItem("pwa-install-dismissed", Date.now().toString());
    };

    if (isInstalled || !showPrompt) return null;

    return (
        <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 animate-slideUp">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-5 shadow-2xl shadow-blue-900/40 border border-white/10 backdrop-blur-xl">
                <button
                    onClick={handleDismiss}
                    className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition text-sm"
                    aria-label="Dismiss"
                >
                    ✕
                </button>

                <div className="flex items-start gap-4">
                    {/* App icon */}
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                        D
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-base mb-1">
                            Install Datara
                        </h3>
                        <p className="text-blue-200/70 text-xs leading-relaxed mb-4">
                            Add to your home screen for instant access, faster loading, and offline support.
                        </p>

                        <button
                            onClick={handleInstall}
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2.5 px-6 rounded-xl font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95"
                        >
                            Install App
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
        </div>
    );
}
