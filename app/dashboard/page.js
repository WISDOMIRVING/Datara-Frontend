"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Card from "../../components/Card";
import TransactionHistory from "../../components/TransactionHistory";
import AuthGuard from "../../components/AuthGuard";
import { useAuth } from "../../context/AuthContext";
import { initFundWallet, topUpWallet } from "../../services/wallet.service";
import { buyData as buyDataAPI } from "../../services/vtu.service";

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, walletBalance, refreshWallet, logoutUser } = useAuth();
  const [showFundModal, setShowFundModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [fundLoading, setFundLoading] = useState(false);
  const [fundMessage, setFundMessage] = useState("");
  const [showBuyDataModal, setShowBuyDataModal] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("MTN");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [buyLoading, setBuyLoading] = useState(false);
  const [buyMessage, setBuyMessage] = useState("");

  const dataPlans = {
    MTN: [
      { plan: "1GB", price: 300 },
      { plan: "2GB", price: 600 },
      { plan: "5GB", price: 1500 },
    ],
    Airtel: [
      { plan: "1.5GB", price: 300 },
      { plan: "3GB", price: 600 },
      { plan: "6GB", price: 1500 },
    ],
    Glo: [
      { plan: "1.2GB", price: 270 },
      { plan: "2.5GB", price: 540 },
      { plan: "7GB", price: 1350 },
    ],
    "9mobile": [
      { plan: "1GB", price: 300 },
      { plan: "2GB", price: 600 },
    ],
  };

  // Handle Paystack callback
  useEffect(() => {
    const reference = searchParams.get("reference");
    if (reference) {
      topUpWallet({ reference })
        .then(() => {
          refreshWallet();
          setFundMessage("Wallet funded successfully!");
          setTimeout(() => setFundMessage(""), 5000);
        })
        .catch(() => {
          setFundMessage("Payment verification failed. Please contact support.");
        });
      // Clean URL
      router.replace("/dashboard");
    }
  }, [searchParams, refreshWallet, router]);

  const handleFundWallet = async (e) => {
    e.preventDefault();
    setFundLoading(true);
    setFundMessage("");
    try {
      const res = await initFundWallet(Number(amount));
      // Redirect to Paystack checkout
      window.location.href = res.data.authorization_url;
    } catch (err) {
      setFundMessage(err.response?.data?.message || "Failed to initialize payment");
      setFundLoading(false);
    }
  };

  const handleBuyData = async (e) => {
    e.preventDefault();
    setBuyLoading(true);
    setBuyMessage("");
    try {
      const planParts = selectedPlan.split(" - ₦");
      const planName = planParts[0];
      const planPrice = Number(planParts[1]);
      await buyDataAPI({
        phone: phoneNumber,
        network: selectedNetwork,
        plan: planName,
        amount: planPrice,
      });
      setBuyMessage("Data purchased successfully!");
      await refreshWallet();
      setTimeout(() => {
        setShowBuyDataModal(false);
        setBuyMessage("");
        setPhoneNumber("");
        setSelectedPlan("");
      }, 2000);
    } catch (err) {
      setBuyMessage(err.response?.data?.message || "Purchase failed");
    } finally {
      setBuyLoading(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    router.push("/login");
  };

  const quickActions = [
    { label: "Buy Data", icon: "📶", onClick: () => setShowBuyDataModal(true) },
    { label: "Airtime", icon: "📱", href: "/vtu/airtime" },
    { label: "Cable TV", icon: "📺", href: "/vtu/cable" },
    { label: "Electricity", icon: "💡", href: "/vtu/electricity" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white hidden md:block">
        <div className="p-6 text-2xl font-bold">Datara.</div>
        <nav className="mt-6 px-4 space-y-2">
          <Link href="/dashboard" className="block w-full text-left py-2.5 px-4 rounded bg-blue-800">
            Dashboard
          </Link>
          <button
            onClick={() => setShowBuyDataModal(true)}
            className="block w-full text-left py-2.5 px-4 rounded hover:bg-blue-800 transition"
          >
            Buy Data
          </button>
          <Link href="/vtu/airtime" className="block w-full text-left py-2.5 px-4 rounded hover:bg-blue-800 transition">
            Buy Airtime
          </Link>
          <Link href="/vtu/cable" className="block w-full text-left py-2.5 px-4 rounded hover:bg-blue-800 transition">
            Cable TV
          </Link>
          <Link href="/vtu/electricity" className="block w-full text-left py-2.5 px-4 rounded hover:bg-blue-800 transition">
            Electricity
          </Link>
          <Link href="/settings" className="block w-full text-left py-2.5 px-4 rounded hover:bg-blue-800 transition">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-[var(--text-primary)] opacity-80">
              Welcome, {user?.name}
            </span>
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 hover:underline"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Status Messages */}
        {fundMessage && (
          <div className={`mb-4 px-4 py-3 rounded-lg text-sm font-medium ${fundMessage.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {fundMessage}
          </div>
        )}

        {/* Wallet Card */}
        <div className="bg-gradient-to-r from-blue-900 to-cyan-600 rounded-2xl p-8 text-white shadow-lg mb-8">
          <p className="text-blue-100 mb-1">Wallet Balance</p>
          <h2 className="text-4xl font-bold">
            ₦{walletBalance?.toLocaleString("en-NG", { minimumFractionDigits: 2 }) || "0.00"}
          </h2>
          <button
            onClick={() => setShowFundModal(true)}
            className="mt-4 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            + Fund Wallet
          </button>
        </div>

        {/* Quick Actions */}
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, idx) => {
            const Wrapper = action.href ? Link : "div";
            const wrapperProps = action.href
              ? { href: action.href }
              : { onClick: action.onClick };
            return (
              <Wrapper key={idx} {...wrapperProps}>
                <Card className="cursor-pointer flex flex-col items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-transform">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-xl">
                    {action.icon}
                  </div>
                  <span className="font-medium text-[var(--text-primary)]">
                    {action.label}
                  </span>
                </Card>
              </Wrapper>
            );
          })}
        </div>

        {/* Transaction History */}
        <TransactionHistory />

        {/* Fund Wallet Modal */}
        {showFundModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-gray-800 w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 relative">
              <button
                onClick={() => { setShowFundModal(false); setFundMessage(""); }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">
                Fund Wallet
              </h2>
              <form onSubmit={handleFundWallet}>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Amount (₦)
                  </label>
                  <input
                    type="number"
                    min="100"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none bg-transparent text-[var(--text-primary)]"
                    placeholder="e.g. 5000"
                    required
                  />
                </div>
                {fundMessage && (
                  <p className={`mb-4 text-sm ${fundMessage.includes("success") ? "text-green-600" : "text-red-500"}`}>
                    {fundMessage}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={fundLoading}
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition disabled:opacity-50"
                >
                  {fundLoading ? "Redirecting to Paystack..." : "Proceed to Payment"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Buy Data Modal */}
        {showBuyDataModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-gray-800 w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 relative">
              <button
                onClick={() => { setShowBuyDataModal(false); setBuyMessage(""); }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">
                Buy Data
              </h2>
              <form onSubmit={handleBuyData}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none bg-transparent text-[var(--text-primary)]"
                      placeholder="08012345678"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Network
                    </label>
                    <select
                      value={selectedNetwork}
                      onChange={(e) => setSelectedNetwork(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none bg-transparent text-[var(--text-primary)]"
                    >
                      {Object.keys(dataPlans).map((net) => (
                        <option key={net} value={net}>
                          {net}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Data Plan
                    </label>
                    <select
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none bg-transparent text-[var(--text-primary)]"
                      required
                    >
                      <option value="" disabled>
                        Select a plan
                      </option>
                      {dataPlans[selectedNetwork].map((p) => (
                        <option
                          key={p.plan}
                          value={`${p.plan} - ₦${p.price}`}
                        >{`${p.plan} - ₦${p.price}`}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {buyMessage && (
                  <p className={`mt-4 text-sm ${buyMessage.includes("success") ? "text-green-600" : "text-red-500"}`}>
                    {buyMessage}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={buyLoading}
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition mt-8 disabled:opacity-50"
                >
                  {buyLoading ? "Processing..." : "Purchase Data"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default function Dashboard() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  );
}
