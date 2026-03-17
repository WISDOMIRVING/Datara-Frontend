"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Card from "../../components/Card";
import TransactionHistory from "../../components/TransactionHistory";
import AuthGuard from "../../components/AuthGuard";
import { useAuth } from "../../context/AuthContext";
import { initFundWallet, topUpWallet } from "../../services/wallet.service";
import { buyData as buyDataAPI, buyAirtime as buyAirtimeAPI } from "../../services/vtu.service";

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
  const [showBuyAirtimeModal, setShowBuyAirtimeModal] = useState(false);
  const [airtimeNetwork, setAirtimeNetwork] = useState("MTN");
  const [airtimeAmount, setAirtimeAmount] = useState("");
  const [airtimePhone, setAirtimePhone] = useState("");
  const [airtimeLoading, setAirtimeLoading] = useState(false);
  const [airtimeMessage, setAirtimeMessage] = useState("");

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

  const handleBuyAirtime = async (e) => {
    e.preventDefault();
    setAirtimeLoading(true);
    setAirtimeMessage("");
    try {
      await buyAirtimeAPI({
        phone: airtimePhone,
        amount: Number(airtimeAmount),
        network: airtimeNetwork
      });
      setAirtimeMessage("Airtime purchased successfully!");
      await refreshWallet();
      setTimeout(() => {
        setShowBuyAirtimeModal(false);
        setAirtimeMessage("");
        setAirtimePhone("");
        setAirtimeAmount("");
      }, 2000);
    } catch (err) {
      setAirtimeMessage(err.response?.data?.message || "Purchase failed");
    } finally {
      setAirtimeLoading(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    router.push("/login");
  };

  const quickActions = [
    { label: "Buy Data", icon: "📶", onClick: () => setShowBuyDataModal(true) },
    { label: "Airtime", icon: "📱", onClick: () => setShowBuyAirtimeModal(true) },
    { label: "Cable TV", icon: "📺", href: "/vtu/cable" },
    { label: "Electricity", icon: "💡", href: "/vtu/electricity" },
    { label: "Exam Pins", icon: "🎓", href: "/vtu/exam" },
  ];

  return (
    <div className="min-h-screen bg-primary transition-colors duration-500 flex relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Sidebar — desktop only */}
      <aside className="w-64 glass border-r border-primary hidden md:flex md:flex-col relative z-20">
        <div className="p-6">
          <Link href="/" className="text-2xl font-black text-primary tracking-tighter italic">
            Datara<span className="text-blue-600">.</span>
          </Link>
        </div>

        <nav className="mt-4 px-6 space-y-3 flex-1">
          <Link href="/dashboard" className="flex items-center gap-4 py-2.5 px-4 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-all font-black text-xs tracking-widest uppercase italic border border-blue-400/20">
            <span className="text-lg">🏠</span> Dashboard
          </Link>
          <button
            onClick={() => setShowBuyDataModal(true)}
            className="w-full flex items-center gap-4 py-2.5 px-4 rounded-2xl text-secondary dark:text-secondary hover:bg-secondary/50 transition-all font-black text-xs tracking-widest uppercase"
          >
            <span className="text-lg">📶</span> Buy Data
          </button>
          <button
            onClick={() => setShowBuyAirtimeModal(true)}
            className="w-full flex items-center gap-4 py-2.5 px-4 rounded-2xl text-secondary dark:text-secondary hover:bg-secondary/50 transition-all font-black text-xs tracking-widest uppercase"
          >
            <span className="text-lg">📱</span> Airtime
          </button>
          <Link href="/vtu/cable" className="flex items-center gap-4 py-2.5 px-4 rounded-2xl text-secondary dark:text-secondary hover:bg-secondary/50 transition-all font-black text-xs tracking-widest uppercase text-left">
            <span className="text-lg">📺</span> Cable TV
          </Link>
          <Link href="/vtu/electricity" className="flex items-center gap-4 py-2.5 px-4 rounded-2xl text-secondary dark:text-secondary hover:bg-secondary/50 transition-all font-black text-xs tracking-widest uppercase text-left">
            <span className="text-lg">💡</span> Electricity
          </Link>
          <Link href="/settings" className="flex items-center gap-4 py-2.5 px-4 rounded-2xl text-secondary dark:text-secondary hover:bg-secondary/50 transition-all font-black text-xs tracking-widest uppercase text-left">
            <span className="text-lg">⚙️</span> Settings
          </Link>
        </nav>

        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 font-black text-[10px] tracking-widest uppercase transition-all hover:text-white group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Safely Exit
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-3 py-6 md:p-8 pb-24 md:pb-8 relative z-10 overflow-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl font-black shadow-2xl ring-4 ring-blue-500/10 flex-shrink-0 animate-pulse">
              {user?.name
                ? user.name.trim().split(" ").length >= 2
                  ? (user.name.trim().split(" ")[0][0] + user.name.trim().split(" ")[1][0]).toUpperCase()
                  : user.name.trim()[0].toUpperCase()
                : "U"}
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-primary tracking-tighter italic">
                Welcome <span className="text-blue-600">{user?.name?.split(" ")[0] || "User"}</span>
              </h1>
              <p className="text-xs md:text-sm text-secondary dark:text-secondary/70 font-black uppercase tracking-widest opacity-60 dark:opacity-40 mt-1 italic">
                {user?.email || "Control Center Authentication Verified"}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowFundModal(true)}
              className="px-8 py-4 bg-primary border border-primary text-primary rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-secondary/50 transition-all shadow-xl active:scale-95 flex items-center gap-3"
            >
              <span className="text-lg">💳</span> Fund
            </button>
            <Link
              href="/settings"
              className="p-4 bg-primary border border-primary text-primary rounded-2xl font-black hover:bg-secondary/50 transition-all shadow-xl active:scale-95"
            >
              ⚙️
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
          {/* Wallet Card */}
          <div className="lg:col-span-2 glass rounded-2xl p-6 md:p-8 border-primary shadow-2xl relative overflow-hidden group bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-7xl">💰</span>
            </div>

            <p className="text-blue-200 dark:text-blue-200 text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-100 dark:opacity-70 italic">Available Liquidity</p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-xl md:text-2xl font-black text-white italic">₦</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter italic leading-none">
                {walletBalance?.toLocaleString("en-NG", { minimumFractionDigits: 2 }) || "0.00"}
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 relative z-10">
              <button
                onClick={() => setShowFundModal(true)}
                className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-blue-50 transition-all shadow-2xl active:scale-95"
              >
                DEPOSIT FUNDS
              </button>
              <div className="px-8 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest">Global Payouts Ready</span>
              </div>
            </div>
          </div>

          {/* Refer & Earn */}
          <div className="glass rounded-2xl p-6 border-primary shadow-2xl border border-blue-600/20 relative overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-primary mb-2 italic">Refer & Earn</h3>
              <p className="text-secondary dark:text-secondary/60 text-sm font-medium opacity-100 dark:opacity-60 leading-relaxed mb-6">Earn ₦100 for every active user you onboard.</p>

              <div className="bg-secondary/50 dark:bg-secondary/50 p-4 rounded-2xl border border-primary flex flex-col items-center mb-4">
                <span className="text-[10px] text-secondary dark:text-secondary font-black uppercase tracking-widest opacity-80 dark:opacity-50 mb-1">Your Code</span>
                <span className="text-xl font-black text-blue-600 tracking-widest">{user?.referralCode || "------"}</span>
              </div>
            </div>

            <button
              onClick={() => {
                const link = `${window.location.origin}/register?ref=${user?.referralCode}`;
                navigator.clipboard.writeText(link);
                alert("Referral link copied!");
              }}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
            >
              PROBATE IDENTITY
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-xs font-black text-secondary dark:text-secondary uppercase tracking-[0.4em] mb-6 flex items-center gap-4 opacity-80 dark:opacity-100">
            Instant Services <div className="h-px bg-primary flex-1 opacity-20 dark:opacity-20"></div>
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {quickActions.map((action, idx) => {
              const Wrapper = action.href ? Link : "button";
              const wrapperProps = action.href
                ? { href: action.href }
                : { onClick: action.onClick, type: "button" };
              return (
                <Wrapper key={idx} {...wrapperProps} className="group">
                  <div className="glass p-3 rounded-2xl border-primary flex flex-col items-center justify-center gap-2 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95 h-full">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-500">
                      {action.icon}
                    </div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest text-center">
                      {action.label}
                    </span>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

        {/* Transaction History Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-black text-primary tracking-tighter italic">Ledger <span className="text-blue-600">History</span></h3>
            <p className="text-[10px] text-secondary dark:text-secondary font-black uppercase tracking-widest opacity-60 dark:opacity-30">Real-time Propagation Enabled</p>
          </div>
          <div className="glass rounded-2xl border-primary shadow-2xl overflow-hidden p-2">
            <TransactionHistory />
          </div>
        </div>

        {/* Fund Wallet Modal Upgrade */}
        {showFundModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-xl animate-fade-in">
            <div className="glass w-full max-w-md p-10 rounded-2xl border-primary shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                <span className="text-8xl">🏧</span>
              </div>

              <button
                onClick={() => { setShowFundModal(false); setFundMessage(""); }}
                className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-primary hover:bg-secondary transition-all font-bold"
              >
                ✕
              </button>

              <h2 className="text-3xl font-black mb-8 text-primary italic tracking-tighter">
                Fund <span className="text-blue-600">Wallet</span>
              </h2>

              <form onSubmit={handleFundWallet} className="space-y-8 relative z-10">
                <div>
                  <label className="block text-[10px] font-black text-secondary dark:text-secondary mb-3 uppercase tracking-widest ml-1 opacity-100 dark:opacity-70 italic">Amount (₦)</label>
                  <input
                    type="number"
                    min="100"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-8 py-5 border border-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-secondary/30 dark:bg-secondary/30 text-primary text-2xl font-black tracking-tight italic"
                    placeholder="0.00"
                    required
                  />
                </div>

                {fundMessage && (
                  <div className={`p-4 rounded-xl text-xs font-black uppercase tracking-tighter border ${fundMessage.includes("success") ? "bg-green-500/10 border-green-500/20 text-green-500" : "bg-red-500/10 border-red-500/20 text-red-500"}`}>
                    {fundMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={fundLoading}
                  className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50"
                >
                  {fundLoading ? "DISPATCHING..." : "REACH GATEWAY"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Buy Data Modal Upgrade */}
        {showBuyDataModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-xl animate-fade-in">
            <div className="glass w-full max-w-md p-6 sm:p-8 rounded-2xl border-primary shadow-2xl relative overflow-hidden">
              <button
                onClick={() => { setShowBuyDataModal(false); setBuyMessage(""); }}
                className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-primary hover:bg-secondary transition-all font-bold"
              >
                ✕
              </button>

              <h2 className="text-3xl font-black mb-1 text-primary italic tracking-tighter">
                Data <span className="text-blue-600">Bundles</span>
              </h2>
              <p className="text-[10px] text-secondary font-black uppercase tracking-widest opacity-40 italic mb-8">Instant Propagation Engine</p>

              <form onSubmit={handleBuyData} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-[10px] font-black text-secondary dark:text-secondary mb-3 uppercase tracking-widest ml-1 opacity-100 dark:opacity-70">Identity Number</label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-6 py-4 border border-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-secondary/30 dark:bg-secondary/30 text-primary font-bold"
                    placeholder="08012345678"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-secondary dark:text-secondary mb-3 uppercase tracking-widest ml-1 opacity-100 dark:opacity-70">Carrier</label>
                    <select
                      value={selectedNetwork}
                      onChange={(e) => setSelectedNetwork(e.target.value)}
                      className="w-full px-4 py-4 border border-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-secondary/30 dark:bg-secondary/30 text-primary font-bold appearance-none cursor-pointer"
                    >
                      {Object.keys(dataPlans).map((net) => (
                        <option key={net} value={net} className="bg-primary text-primary">{net}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-secondary dark:text-secondary mb-3 uppercase tracking-widest ml-1 opacity-100 dark:opacity-70">Plan Selection</label>
                    <select
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-full px-4 py-4 border border-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-secondary/30 dark:bg-secondary/30 text-primary font-bold appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled className="bg-primary">Select</option>
                      {dataPlans[selectedNetwork].map((p) => (
                        <option key={p.plan} value={`${p.plan} - ₦${p.price}`} className="bg-primary">{p.plan} - ₦{p.price}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {buyMessage && (
                  <div className={`p-4 rounded-xl text-xs font-black uppercase tracking-tighter border ${buyMessage.includes("success") ? "bg-green-500/10 border-green-500/20 text-green-500" : "bg-red-500/10 border-red-500/20 text-red-500"}`}>
                    {buyMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={buyLoading}
                  className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50 mt-4"
                >
                  {buyLoading ? "ACTIVATING..." : "PROVISION BUNDLE"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Buy Airtime Modal Upgrade */}
        {showBuyAirtimeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-xl animate-fade-in">
            <div className="glass w-full max-w-md p-6 sm:p-8 rounded-2xl border-primary shadow-2xl relative overflow-hidden">
              <button
                onClick={() => { setShowBuyAirtimeModal(false); setAirtimeMessage(""); }}
                className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-primary hover:bg-secondary transition-all font-bold"
              >
                ✕
              </button>

              <h2 className="text-3xl font-black mb-1 text-primary italic tracking-tighter">
                Airtime <span className="text-blue-600">Refill</span>
              </h2>
              <p className="text-[10px] text-secondary font-black uppercase tracking-widest opacity-40 italic mb-8">Direct Carrier Recharge</p>

              <form onSubmit={handleBuyAirtime} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-[10px] font-black text-secondary dark:text-secondary mb-3 uppercase tracking-widest ml-1 opacity-100 dark:opacity-70">Identity Number</label>
                  <input
                    type="tel"
                    value={airtimePhone}
                    onChange={(e) => setAirtimePhone(e.target.value)}
                    className="w-full px-6 py-4 border border-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-secondary/30 dark:bg-secondary/30 text-primary font-bold"
                    placeholder="08012345678"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-secondary dark:text-secondary mb-3 uppercase tracking-widest ml-1 opacity-100 dark:opacity-70">Carrier</label>
                    <select
                      value={airtimeNetwork}
                      onChange={(e) => setAirtimeNetwork(e.target.value)}
                      className="w-full px-4 py-4 border border-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-secondary/30 dark:bg-secondary/30 text-primary font-bold appearance-none cursor-pointer"
                    >
                      {Object.keys(dataPlans).map((net) => (
                        <option key={net} value={net} className="bg-primary text-primary">{net}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-secondary dark:text-secondary mb-3 uppercase tracking-widest ml-1 opacity-100 dark:opacity-70">Refill Amount (₦)</label>
                    <input
                      type="number"
                      min="50"
                      value={airtimeAmount}
                      onChange={(e) => setAirtimeAmount(e.target.value)}
                      className="w-full px-4 py-4 border border-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-secondary/30 dark:bg-secondary/30 text-primary font-bold"
                      placeholder="500"
                      required
                    />
                  </div>
                </div>

                {airtimeMessage && (
                  <div className={`p-4 rounded-xl text-xs font-black uppercase tracking-tighter border ${airtimeMessage.includes("success") ? "bg-green-500/10 border-green-500/20 text-green-500" : "bg-red-500/10 border-red-500/20 text-red-500"}`}>
                    {airtimeMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={airtimeLoading}
                  className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50 mt-4"
                >
                  {airtimeLoading ? "PROCESSING..." : "FINALIZE RECHARGE"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary border-t border-primary md:hidden z-40">
        <div className="flex items-center justify-around py-1">
          <Link href="/dashboard" className="flex flex-col items-center gap-0.5 px-2 py-1 text-blue-600 dark:text-blue-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[10px] font-medium">Home</span>
          </Link>
          <button onClick={() => setShowBuyDataModal(true)} className="flex flex-col items-center gap-0.5 px-2 py-1 text-secondary">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
            </svg>
            <span className="text-[10px] font-medium">Data</span>
          </button>
          <button onClick={() => setShowFundModal(true)} className="flex flex-col items-center gap-0.5 px-2 py-1">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg -mt-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-blue-600 dark:text-blue-400">Fund</span>
          </button>
          <button onClick={() => setShowBuyAirtimeModal(true)} className="flex flex-col items-center gap-0.5 px-2 py-1 text-secondary">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="text-[10px] font-medium">Airtime</span>
          </button>
          <Link href="/settings" className="flex flex-col items-center gap-0.5 px-2 py-1 text-secondary">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-[10px] font-medium">Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <AuthGuard>
      <Suspense fallback={null}>
        <DashboardContent />
      </Suspense>
    </AuthGuard>
  );
}
