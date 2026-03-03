import Link from "next/link";
import Image from "next/image";

export default function About() {
    const values = [
        {
            title: "Lightning Fast",
            desc: "All transactions are processed within seconds. Our automated systems ensure 24/7 instant delivery of every service.",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
            color: "from-amber-500 to-orange-500",
            bgLight: "bg-amber-50",
            textColor: "text-amber-600",
        },
        {
            title: "Bank-Level Security",
            desc: "Your data and funds are protected with enterprise-grade encryption. We never store your card information.",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
            ),
            color: "from-blue-600 to-cyan-500",
            bgLight: "bg-blue-50",
            textColor: "text-blue-600",
        },
        {
            title: "Best Prices",
            desc: "We negotiate the best rates with every network provider so you always get more value for your money.",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
            ),
            color: "from-emerald-600 to-teal-500",
            bgLight: "bg-emerald-50",
            textColor: "text-emerald-600",
        },
        {
            title: "24/7 Support",
            desc: "Our dedicated support team is always ready to help you resolve any issues — day or night.",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
            ),
            color: "from-purple-600 to-violet-500",
            bgLight: "bg-purple-50",
            textColor: "text-purple-600",
        },
    ];

    const milestones = [
        { year: "2024", title: "Founded", desc: "Datara was born from a simple idea: make digital services accessible to every Nigerian." },
        { year: "2024", title: "First 1,000 Users", desc: "Crossed 1,000 registered users within our first 3 months of operation." },
        { year: "2025", title: "Multi-Service Launch", desc: "Expanded beyond data to include airtime, cable TV, electricity, and exam pins." },
        { year: "2025", title: "10,000+ Users", desc: "Growing community of thousands trusting Datara for their daily digital needs." },
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* ═══ Hero Section ═══ */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0z\' fill=\'none\'/%3E%3Cpath d=\'M0 0v40M40 0v40M0 0h40M0 40h40\' stroke=\'white\' stroke-width=\'1\'/%3E%3C/svg%3E")' }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-sm font-semibold mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                About Datara
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                                Making Digital{" "}
                                <span className="relative">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                                        Connectivity
                                    </span>
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
                                </span>
                                <br />
                                {" "}Accessible to All
                            </h1>
                            <p className="text-base sm:text-lg text-blue-100/70 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                                We&apos;re building the most reliable VTU platform in Nigeria — making it simple,
                                fast, and affordable for anyone to buy data, airtime, pay bills, and stay connected.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/register"
                                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all active:scale-95 text-center"
                                >
                                    Join Us Today →
                                </Link>
                                <a
                                    href="#story"
                                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center"
                                >
                                    Our Story ↓
                                </a>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="hidden lg:flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl" />
                                <Image
                                    src="/images/about-hero.png"
                                    alt="Datara team collaborating on digital services"
                                    width={560}
                                    height={400}
                                    className="relative rounded-3xl shadow-2xl border border-white/10"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Stats Strip ═══ */}
            <section className="bg-white border-b border-gray-100 relative -mt-8 z-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 sm:p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                { value: "10K+", label: "Happy Users", emoji: "👥" },
                                { value: "₦50M+", label: "Transactions Processed", emoji: "💰" },
                                { value: "99.9%", label: "System Uptime", emoji: "⚡" },
                                { value: "5", label: "Service Categories", emoji: "🎯" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <span className="text-2xl mb-2 block">{stat.emoji}</span>
                                    <p className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight">{stat.value}</p>
                                    <p className="text-[11px] sm:text-xs text-gray-400 font-medium mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Our Story / Mission ═══ */}
            <section id="story" className="py-20 sm:py-28 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image Side */}
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-3xl" />
                            <Image
                                src="/images/about-mission.png"
                                alt="Digital connectivity through mobile payments"
                                width={560}
                                height={420}
                                className="relative rounded-2xl shadow-xl"
                            />
                            {/* Floating stat card */}
                            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-5 border border-gray-100">
                                <p className="text-3xl font-black text-blue-900">40%</p>
                                <p className="text-xs text-gray-500 font-medium">Cheaper than<br />network prices</p>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2">
                            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Our Story</p>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                                Born from a Simple{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Idea
                                </span>
                            </h2>
                            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6">
                                Datara was founded with a clear mission: to make digital connectivity accessible and
                                affordable for every Nigerian. We noticed that millions of people were overpaying for
                                data, airtime, and bill payments — and the existing platforms were slow, unreliable,
                                or overpriced.
                            </p>
                            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
                                So we built something better. A platform that is fast, secure, and offers the best
                                rates in the market. Today, Datara serves thousands of users who trust us for their
                                daily digital needs — from students checking exam results to businesses managing bulk
                                data purchases.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Founded", value: "2024" },
                                    { label: "Headquarters", value: "Nigeria" },
                                    { label: "Team Size", value: "Growing" },
                                    { label: "Services", value: "5+" },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-lg font-black text-blue-900">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Our Values ═══ */}
            <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Content Side */}
                        <div>
                            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">What We Stand For</p>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                                Our Core Values
                            </h2>
                            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-10">
                                Everything we build is guided by four principles that our users can always count on.
                            </p>

                            <div className="space-y-6">
                                {values.map((value, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                            {value.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">{value.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="hidden lg:block relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl" />
                            <Image
                                src="/images/about-values.png"
                                alt="Security, speed, and customer care icons"
                                width={560}
                                height={420}
                                className="relative rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Journey / Timeline ═══ */}
            <section className="py-20 sm:py-28 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 sm:mb-20">
                        <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Our Journey</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            From Startup to Scale
                        </h2>
                        <p className="text-gray-500 max-w-lg mx-auto text-base sm:text-lg">
                            Key milestones in the Datara journey.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 sm:-translate-x-0.5" />

                        <div className="space-y-10 sm:space-y-12">
                            {milestones.map((m, i) => (
                                <div key={i} className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                                    {/* Content card */}
                                    <div className={`flex-1 sm:w-[calc(50%-32px)] ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:text-left"}`}>
                                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-3">{m.year}</span>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{m.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                                        </div>
                                    </div>

                                    {/* Circle on the line */}
                                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100 shadow-md z-10 mt-8" />

                                    {/* Spacer on opposite side (desktop) */}
                                    <div className="hidden sm:block flex-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Why Choose Us / Trust Signals ═══ */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 sm:mb-20">
                        <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Why Datara</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            Why Thousands Trust Us
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
                            We combine technology, reliability, and the best prices to deliver an experience you can count on.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                ),
                                title: "PCI-Compliant Payments",
                                desc: "All transactions are processed through Paystack, a certified PCI DSS Level 1 payment processor.",
                                color: "from-blue-600 to-cyan-500",
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                ),
                                title: "Instant Processing",
                                desc: "Our automated backend processes every purchase within seconds — no manual delays, ever.",
                                color: "from-amber-500 to-orange-500",
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "Zero Hidden Fees",
                                desc: "What you see is what you pay. No service charges, no processing fees, no surprises.",
                                color: "from-emerald-600 to-teal-500",
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                ),
                                title: "Mobile-First Design",
                                desc: "Built as a PWA that works beautifully on any device — even when you're offline.",
                                color: "from-purple-600 to-violet-500",
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 013 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 013 6v3" />
                                    </svg>
                                ),
                                title: "Smart Wallet System",
                                desc: "Fund once, transact endlessly. Your wallet balance is always available for instant purchases.",
                                color: "from-rose-500 to-pink-500",
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>
                                ),
                                title: "Referral Rewards",
                                desc: "Invite friends and earn ₦100 bonus for every referral who funds their wallet.",
                                color: "from-cyan-500 to-blue-500",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300 group"
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg mb-5 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
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
                        Ready to Join the <br className="hidden sm:block" />Datara Community?
                    </h2>
                    <p className="text-base sm:text-xl text-blue-100/70 mb-10 max-w-xl mx-auto leading-relaxed">
                        Create your free account in less than 60 seconds and start enjoying the
                        best VTU rates in Nigeria.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/register"
                            className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl shadow-black/10 hover:-translate-y-0.5 transform text-center"
                        >
                            Create Free Account
                        </Link>
                        <Link
                            href="/services"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
