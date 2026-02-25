"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "../../components/Card";
import TransactionHistory from "../../components/TransactionHistory";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [showFundModal, setShowFundModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [showBuyDataModal, setShowBuyDataModal] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("MTN");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/login");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [router]);

  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const handleBuyData = (e) => {
    e.preventDefault();
    alert(
      `Purchasing ${selectedPlan} for ${phoneNumber} on ${selectedNetwork}`,
    );
    setShowBuyDataModal(false);
    setPhoneNumber("");
    setSelectedPlan("");
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white hidden md:block">
        <div className="p-6 text-2xl font-bold">Datara.</div>
        <nav className="mt-6 px-4 space-y-2">
          <button className="block w-full text-left py-2.5 px-4 rounded bg-blue-800">
            Dashboard
          </button>
          <button
            onClick={() => setShowBuyDataModal(true)}
            className="block w-full text-left py-2.5 px-4 rounded hover:bg-blue-800 transition"
          >
            Buy Data
          </button>
          <button className="block w-full text-left py-2.5 px-4 rounded hover:bg-blue-800 transition">
            Buy Airtime
          </button>
          <button className="block w-full text-left py-2.5 px-4 rounded hover:bg-blue-800 transition">
            Transactions
          </button>
          <button className="block w-full text-left py-2.5 px-4 rounded hover:bg-blue-800 transition">
            Settings
          </button>
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
              Welcome, {user.name}
            </span>
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 hover:underline"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Wallet Card */}
        <div className="bg-gradient-to-r from-blue-900 to-cyan-600 rounded-2xl p-8 text-white shadow-lg mb-8">
          <p className="text-blue-100 mb-1">Wallet Balance</p>
          <h2 className="text-4xl font-bold">₦{user.balance || "0.00"}</h2>
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
          {["Buy Data", "Airtime", "Cable TV", "Electricity"].map(
            (action, idx) => {
              const props = {};
              if (action === "Buy Data") {
                props.onClick = () => setShowBuyDataModal(true);
              }
              return (
                <Card
                  key={idx}
                  {...props}
                  className="cursor-pointer flex flex-col items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-transform"
                >
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-xl">
                    {["📶", "📱", "📺", "💡"][idx]}
                  </div>
                  <span className="font-medium text-[var(--text-primary)]">
                    {action}
                  </span>
                </Card>
              );
            },
          )}
        </div>

        {/* Transaction History */}
        <TransactionHistory />

        {/* Fund Wallet Modal */}
        {showFundModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-gray-800 w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 relative">
              <button
                onClick={() => setShowFundModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">
                Fund Wallet
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Processing payment of ₦${amount}`);
                  setShowFundModal(false);
                  setAmount("");
                }}
              >
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Amount (₦)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none bg-transparent text-[var(--text-primary)]"
                    placeholder="e.g. 5000"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition"
                >
                  Proceed to Payment
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
                onClick={() => setShowBuyDataModal(false)}
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
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition mt-8"
                >
                  Purchase Data
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
