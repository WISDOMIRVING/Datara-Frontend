"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, logoutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLogout = () => {
    logoutUser();
    router.push("/login");
    router.refresh();
  };

  // Get user initials for avatar
  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  };

  return (
    <nav className="fixed w-full z-50 glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-900 tracking-tighter"
            >
              Datara<span className="text-cyan-500">.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Pricing
            </Link>
            <Link
              href="/testimonials"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Testimony
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Contact
            </Link>
            <Link
              href="/help"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Help
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Premium Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-800 p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              aria-label="Toggle Dark Mode"
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white dark:bg-blue-900 shadow-md flex items-center justify-center transition-transform duration-300 transform ${darkMode ? "translate-x-7" : "translate-x-0"
                  }`}
              >
                {darkMode ? (
                  <svg className="w-3 h-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </div>
              <div className="flex justify-between px-1.5 h-full items-center pointer-events-none">
                <svg className="w-3 h-3 text-blue-900 opacity-40" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <svg className="w-3 h-3 text-cyan-400 opacity-40" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
            {!isLoading && isAuthenticated ? (
              <div className="flex items-center space-x-3">
                {/* User Profile Indicator */}
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 px-3 py-1.5 rounded-full transition"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                    {getInitials(user?.name)}
                  </div>
                  <span className="text-sm font-medium text-blue-900 dark:text-blue-200 max-w-[120px] truncate">
                    {user?.name || "User"}
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-600 font-medium text-sm hover:underline"
                >
                  Logout
                </button>
              </div>
            ) : !isLoading ? (
              <>
                <Link
                  href="/login"
                  className="text-blue-900 font-medium hover:underline"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-900 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition shadow-lg shadow-blue-900/20"
                >
                  Register
                </Link>
              </>
            ) : null}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-800 p-0.5 transition-colors duration-300 mr-3"
              aria-label="Toggle Dark Mode"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-blue-900 shadow-md flex items-center justify-center transition-transform duration-300 transform ${darkMode ? "translate-x-6" : "translate-x-0"
                  }`}
              >
                {darkMode ? (
                  <svg className="w-2.5 h-2.5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-2.5 h-2.5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-lg max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 pt-3 pb-8 space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-900 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-900 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-900 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-900 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Pricing
            </Link>
            <Link
              href="/testimonials"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-900 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Testimony
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-900 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Contact
            </Link>
            <Link
              href="/help"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-900 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Help
            </Link>
            <div className="pt-4 flex flex-col space-y-2.5 border-t border-gray-100 dark:border-gray-800 mt-2">
              {!isLoading && isAuthenticated ? (
                <>
                  {/* Mobile User Profile */}
                  <Link
                    href="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 py-2.5 px-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                      {getInitials(user?.name)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                        {user?.name || "User"}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Go to Dashboard</p>
                    </div>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-center border border-red-500 text-red-500 py-2.5 rounded-lg font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                  >
                    Logout
                  </button>
                </>
              ) : !isLoading ? (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center border border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 py-2.5 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center bg-blue-900 text-white py-2.5 rounded-lg font-medium hover:bg-blue-800 transition"
                  >
                    Register
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
