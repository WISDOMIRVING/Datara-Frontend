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
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
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
              className="p-2 mr-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
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
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
            >
              Pricing
            </Link>
            <Link
              href="/help"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
            >
              Help
            </Link>
            <div className="pt-4 flex flex-col space-y-2 px-3">
              {!isLoading && isAuthenticated ? (
                <>
                  {/* Mobile User Profile */}
                  <Link
                    href="/dashboard"
                    className="flex items-center space-x-3 py-2 px-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                      {getInitials(user?.name)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                        {user?.name || "User"}
                      </p>
                      <p className="text-xs text-gray-500">Go to Dashboard</p>
                    </div>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-center border border-red-600 text-red-600 py-2 rounded-md font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : !isLoading ? (
                <>
                  <Link
                    href="/login"
                    className="w-full text-center border border-blue-900 text-blue-900 py-2 rounded-md font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="w-full text-center bg-blue-900 text-white py-2 rounded-md font-medium"
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
