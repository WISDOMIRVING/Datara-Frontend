"use client";
import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
    const [activeNetwork, setActiveNetwork] = useState("MTN");

    const networks = [
        { name: "MTN", color: "from-yellow-500 to-amber-500", bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
        { name: "Airtel", color: "from-red-500 to-rose-500", bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
        { name: "Glo", color: "from-emerald-500 to-green-500", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
        { name: "9mobile", color: "from-lime-500 to-green-500", bg: "bg-lime-50", text: "text-lime-700", border: "border-lime-200" },
    ];

    const plans = {
        MTN: [
            { plan: "500MB", price: "₦150", validity: "30 Days", type: "SME" },
            { plan: "1GB", price: "₦300", validity: "30 Days", type: "SME" },
            { plan: "2GB", price: "₦600", validity: "30 Days", type: "SME" },
            { plan: "3GB", price: "₦900", validity: "30 Days", type: "SME" },
            { plan: "5GB", price: "₦1,500", validity: "30 Days", type: "SME" },
            { plan: "10GB", price: "₦3,000", validity: "30 Days", type: "Corporate" },
            { plan: "15GB", price: "₦4,500", validity: "30 Days", type: "Corporate" },
            { plan: "20GB", price: "₦6,000", validity: "30 Days", type: "Corporate" },
        ],
        Airtel: [
            { plan: "500MB", price: "₦150", validity: "30 Days", type: "SME" },
            { plan: "1GB", price: "₦300", validity: "30 Days", type: "SME" },
            { plan: "2GB", price: "₦600", validity: "30 Days", type: "SME" },
            { plan: "5GB", price: "₦1,500", validity: "30 Days", type: "Corporate" },
            { plan: "10GB", price: "₦3,000", validity: "30 Days", type: "Corporate" },
            { plan: "15GB", price: "₦4,500", validity: "30 Days", type: "Corporate" },
        ],
        Glo: [
            { plan: "500MB", price: "₦135", validity: "30 Days", type: "SME" },
            { plan: "1GB", price: "₦270", validity: "30 Days", type: "SME" },
            { plan: "2GB", price: "₦540", validity: "30 Days", type: "SME" },
            { plan: "3GB", price: "₦810", validity: "30 Days", type: "SME" },
            { plan: "5GB", price: "₦1,350", validity: "30 Days", type: "Corporate" },
            { plan: "10GB", price: "₦2,700", validity: "30 Days", type: "Corporate" },
        ],
        "9mobile": [
            { plan: "500MB", price: "₦150", validity: "30 Days", type: "SME" },
            { plan: "1GB", price: "₦300", validity: "30 Days", type: "SME" },
            { plan: "2GB", price: "₦600", validity: "30 Days", type: "SME" },
            { plan: "5GB", price: "₦1,500", validity: "30 Days", type: "Corporate" },
            { plan: "10GB", price: "₦3,000", validity: "30 Days", type: "Corporate" },
        ],
    };

    const comparisons = [
        { plan: "1GB (30 Days)", network: "₦500 – ₦1,000", datara: "₦270 – ₦300", saving: "Up to 70%" },
        { plan: "2GB (30 Days)", network: "₦1,000 – ₦2,000", datara: "₦540 – ₦600", saving: "Up to 70%" },
        { plan: "5GB (30 Days)", network: "₦2,500 – ₦3,500", datara: "₦1,350 – ₦1,500", saving: "Up to 57%" },
        { plan: "10GB (30 Days)", network: "₦5,000 – ₦6,000", datara: "₦2,700 – ₦3,000", saving: "Up to 55%" },
    ];

    const steps = [
        {
            step: "01",
            title: "Create Account",
            desc: "Sign up for free in under 60 seconds with just your email address.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            ),
        },
        {
            step: "02",
            title: "Fund Your Wallet",
            desc: "Add money securely via Paystack — cards, bank transfer, or USSD.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 013 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 013 6v3" />
                </svg>
            ),
        },
        {
            step: "03",
            title: "Buy Data Instantly",
            desc: "Select network & plan, confirm, and receive your data in seconds.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    const faqs = [
        { q: "Why are your prices so much cheaper?", a: "We purchase data in bulk directly from network providers at wholesale rates, and pass the savings directly to you. Our automated platform keeps operational costs low, allowing us to maintain the best prices in the market." },
        { q: "Is the data quality the same as buying from the network?", a: "Absolutely! The data you receive is the exact same quality. It comes directly from your network provider (MTN, Airtel, Glo, or 9mobile) — we simply offer it at a better price." },
        { q: "What is the difference between SME and Corporate data?", a: "SME data plans are standard data bundles ideal for personal use. Corporate plans are premium bundles designed for heavier usage and typically offer better value per GB for higher volumes." },
        { q: "How fast is data delivery after purchase?", a: "Data is delivered instantly — typically within 5 seconds of payment confirmation. Our system is fully automated and operates 24/7, so there are never any manual delays." },
        { q: "What payment methods do you accept?", a: "We accept bank cards (Visa, Mastercard, Verve), bank transfers, and USSD payments. All transactions are processed securely through Paystack." },
        { q: "Can I get a refund if delivery fails?", a: "Yes. If a data delivery fails for any reason, the full amount is automatically reversed to your Datara wallet within 5 minutes. For any disputes, our 24/7 support team is ready to help." },
    ];

    const activeNetworkData = networks.find((n) => n.name === activeNetwork);

    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* ═══ Hero Section ═══ */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0z\' fill=\'none\'/%3E%3Cpath d=\'M0 0v40M40 0v40M0 0h40M0 40h40\' stroke=\'white\' stroke-width=\'1\'/%3E%3C/svg%3E")' }} />
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-sm font-semibold mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        Affordable Data Plans
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                        Save Up to{" "}
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                                70% on Data
                            </span>
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
                        </span>
                        <br className="hidden sm:block" />
                        {" "}Every Single Time
                    </h1>
                    <p className="text-base sm:text-lg text-blue-100/70 max-w-2xl mx-auto leading-relaxed mb-10">
                        Get the cheapest data plans for MTN, Airtel, Glo, and 9mobile — with instant delivery,
                        zero hidden fees, and the most competitive prices in Nigeria.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/register"
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all active:scale-95 text-center"
                        >
                            Start Saving Now →
                        </Link>
                        <a
                            href="#pricing"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center"
                        >
                            View Plans ↓
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══ Stats Strip ═══ */}
            <section className="bg-primary border-b border-primary relative -mt-8 z-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-2xl shadow-xl shadow-gray-200/50 border border-primary p-6 sm:p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                {
                                    value: "Up to 70%",
                                    label: "Cheaper Than Network",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                        </svg>
                                    ),
                                    color: "text-emerald-600 dark:text-emerald-400",
                                    bg: "bg-emerald-50 dark:bg-emerald-900/20",
                                },
                                {
                                    value: "< 5 sec",
                                    label: "Instant Delivery",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                        </svg>
                                    ),
                                    color: "text-amber-600 dark:text-amber-400",
                                    bg: "bg-amber-50 dark:bg-amber-900/20",
                                },
                                {
                                    value: "4",
                                    label: "Networks Supported",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                                        </svg>
                                    ),
                                    color: "text-blue-600 dark:text-blue-400",
                                    bg: "bg-blue-50 dark:bg-blue-900/20",
                                },
                                {
                                    value: "₦0",
                                    label: "Hidden Fees",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                        </svg>
                                    ),
                                    color: "text-purple-600 dark:text-purple-400",
                                    bg: "bg-purple-50 dark:bg-purple-900/20",
                                },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-3 sm:gap-4">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color} flex-shrink-0`}>
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className="text-xl sm:text-2xl font-black text-primary tracking-tight leading-none">{stat.value}</p>
                                        <p className="text-[11px] sm:text-xs text-muted font-medium mt-0.5">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Pricing Grid with Network Tabs ═══ */}
            <section id="pricing" className="py-20 sm:py-28 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 sm:mb-20">
                        <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Data Plans</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            Choose Your Plan
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
                            Select your network and pick the data plan that suits you best. All plans come with instant delivery.
                        </p>
                    </div>

                    {/* Network Tabs */}
                    <div className="flex justify-center mb-10 sm:mb-14">
                        <div className="inline-flex bg-white rounded-2xl shadow-sm border border-gray-100 p-1.5 gap-1">
                            {networks.map((network) => (
                                <button
                                    key={network.name}
                                    onClick={() => setActiveNetwork(network.name)}
                                    className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 ${activeNetwork === network.name
                                        ? `bg-gradient-to-r ${network.color} text-white shadow-lg`
                                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    {network.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Plans Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {plans[activeNetwork].map((item, idx) => (
                            <div
                                key={idx}
                                className={`bg-white rounded-2xl border ${activeNetworkData.border} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group relative`}
                            >
                                {/* Type badge */}
                                <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-lg ${activeNetworkData.bg} ${activeNetworkData.text} text-[10px] font-bold uppercase tracking-wider`}>
                                    {item.type}
                                </div>

                                <div className="p-6 sm:p-7 flex flex-col items-center text-center">
                                    {/* Network icon */}
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeNetworkData.color} flex items-center justify-center text-white shadow-lg mb-5 group-hover:scale-110 transition-transform`}>
                                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                                        </svg>
                                    </div>

                                    {/* Plan size */}
                                    <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-1">{item.plan}</h3>
                                    <p className="text-gray-400 text-xs font-medium mb-4">{item.validity}</p>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <span className={`text-3xl font-black ${activeNetworkData.text}`}>{item.price}</span>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6 w-full">
                                        {["Instant Delivery", "24/7 Available", "Auto-renewal"].map((feature, fi) => (
                                            <div key={fi} className="flex items-center gap-2 text-left">
                                                <div className={`w-4 h-4 rounded-md ${activeNetworkData.bg} ${activeNetworkData.text} flex items-center justify-center flex-shrink-0`}>
                                                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-xs text-gray-500 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href="/login"
                                        className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${activeNetworkData.color} text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95`}
                                    >
                                        Purchase
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* More plans note */}
                    <p className="text-center text-gray-400 text-sm mt-8">
                        Need a custom or bulk plan?{" "}
                        <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
                            Contact our sales team
                        </Link>
                    </p>
                </div>
            </section>

            {/* ═══ Price Comparison Section ═══ */}
            <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14 sm:mb-20">
                        <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Price Comparison</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            See How Much You Save
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
                            Compare our rates against buying directly from your network provider.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                            <div className="px-4 sm:px-6 py-4">Data Plan</div>
                            <div className="px-4 sm:px-6 py-4">Network Price</div>
                            <div className="px-4 sm:px-6 py-4">Datara Price</div>
                            <div className="px-4 sm:px-6 py-4 text-right">You Save</div>
                        </div>

                        {/* Table Body */}
                        {comparisons.map((row, i) => (
                            <div
                                key={i}
                                className={`grid grid-cols-4 items-center text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                                    } hover:bg-blue-50/50 transition-colors border-b border-gray-50 last:border-0`}
                            >
                                <div className="px-4 sm:px-6 py-4 sm:py-5 font-bold text-gray-900">{row.plan}</div>
                                <div className="px-4 sm:px-6 py-4 sm:py-5 text-gray-400 line-through">{row.network}</div>
                                <div className="px-4 sm:px-6 py-4 sm:py-5 font-bold text-blue-700">{row.datara}</div>
                                <div className="px-4 sm:px-6 py-4 sm:py-5 text-right">
                                    <span className="inline-flex items-center px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">
                                        {row.saving}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Savings highlight */}
                    <div className="mt-8 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-emerald-100 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-gray-900 mb-1">Average Savings of 40%+</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Our users save an average of ₦2,000+ every month compared to buying data directly from their network provider.
                                The more you buy, the more you save.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ How It Works ═══ */}
            <section className="py-20 sm:py-28 bg-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14 sm:mb-20">
                        <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Getting Started</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            How to Purchase
                        </h2>
                        <p className="text-gray-500 max-w-lg mx-auto text-base sm:text-lg">
                            Three simple steps. No hidden fees. No complicated setup.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative">
                        {/* Connector line (desktop only) */}
                        <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-[2px]">
                            <div className="w-full h-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-full" />
                        </div>

                        {steps.map((step, idx) => (
                            <div key={idx} className="relative text-center group">
                                <div className="relative z-10 inline-flex flex-col items-center">
                                    <div className="w-[104px] h-[104px] rounded-[28px] bg-gradient-to-br from-blue-900 to-blue-700 text-white flex flex-col items-center justify-center mb-7 shadow-2xl shadow-blue-900/25 group-hover:shadow-blue-900/40 group-hover:scale-105 transition-all duration-300 border border-blue-600/30">
                                        <span className="text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-1">Step</span>
                                        <span className="text-3xl font-black leading-none">{step.step}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-14">
                        <Link
                            href="/register"
                            className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 active:scale-95"
                        >
                            Start Now — It&apos;s Free
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══ FAQ Section ═══ */}
            <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14">
                        <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Common Questions</p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg">
                            Have questions about our pricing? We&apos;ve got answers.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 list-none">
                                    <span className="font-bold text-gray-900 text-base sm:text-lg pr-4">{faq.q}</span>
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 group-open:bg-blue-100 flex items-center justify-center transition-colors">
                                        <svg className="w-4 h-4 text-gray-500 group-open:text-blue-600 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                                    <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA Section ═══ */}
            <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.05] rounded-full" />
                </div>

                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                        Ready to Start{" "}
                        <br className="hidden sm:block" />
                        Saving on Data?
                    </h2>
                    <p className="text-base sm:text-xl text-blue-100/70 mb-10 max-w-xl mx-auto leading-relaxed">
                        Join thousands of Nigerians who save money every month with Datara.
                        Create your free account in under 60 seconds.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/register"
                            className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl shadow-black/10 hover:-translate-y-0.5 transform text-center"
                        >
                            Create Free Account
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center"
                        >
                            Talk to Sales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
