import Link from "next/link";

export default function Services() {
    const services = [
        {
            title: "Data Bundles",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                </svg>
            ),
            desc: "Get the most affordable data plans for all major networks — MTN, Airtel, Glo, and 9mobile. Our SME and corporate data bundles are up to 40% cheaper than buying directly from your network.",
            features: ["SME & Corporate Plans", "All Networks Supported", "Auto-renewal Options", "Bulk Purchase Discounts"],
            color: "from-blue-600 to-cyan-500",
            bgLight: "bg-blue-50",
            textColor: "text-blue-600",
            borderColor: "border-blue-200",
            shadowColor: "shadow-blue-500/10",
            href: "/login",
            action: "Buy Data",
            popular: true,
        },
        {
            title: "Airtime Top-Up",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
            ),
            desc: "Recharge any phone number instantly with our reliable airtime service. Enjoy competitive rates and instant delivery to any Nigerian number, at any time of the day.",
            features: ["Instant Delivery", "All Networks", "24/7 Availability", "Transaction History"],
            color: "from-emerald-600 to-teal-500",
            bgLight: "bg-emerald-50",
            textColor: "text-emerald-600",
            borderColor: "border-emerald-200",
            shadowColor: "shadow-emerald-500/10",
            href: "/login",
            action: "Top Up Now",
            popular: false,
        },
        {
            title: "Cable TV",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            ),
            desc: "Subscribe to your favourite cable TV packages without leaving home. We support DStv, GOtv, StarTimes, and ShowMax — with instant activation and confirmation.",
            features: ["DStv & GOtv", "StarTimes", "Instant Activation", "Subscription Renewal"],
            color: "from-purple-600 to-violet-500",
            bgLight: "bg-purple-50",
            textColor: "text-purple-600",
            borderColor: "border-purple-200",
            shadowColor: "shadow-purple-500/10",
            href: "/login",
            action: "Subscribe",
            popular: false,
        },
        {
            title: "Electricity",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
            desc: "Pay your electricity bills for all distribution companies across Nigeria. Supports both prepaid and postpaid meters with instant token delivery for prepaid customers.",
            features: ["Prepaid & Postpaid", "All Disco Providers", "Instant Token", "Payment Receipt"],
            color: "from-amber-500 to-orange-500",
            bgLight: "bg-amber-50",
            textColor: "text-amber-600",
            borderColor: "border-amber-200",
            shadowColor: "shadow-amber-500/10",
            href: "/login",
            action: "Pay Bill",
            popular: false,
        },
        {
            title: "Exam Pins",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
            ),
            desc: "Purchase WAEC, NECO, and NABTEB scratch cards and result checker pins instantly. No more queuing at banks or struggling with USSD — get your pin in seconds.",
            features: ["WAEC & NECO", "NABTEB", "Result Checker", "Instant Delivery"],
            color: "from-rose-500 to-pink-500",
            bgLight: "bg-rose-50",
            textColor: "text-rose-600",
            borderColor: "border-rose-200",
            shadowColor: "shadow-rose-500/10",
            href: "/login",
            action: "Buy Pin",
            popular: false,
        },
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
            title: "Make a Purchase",
            desc: "Select your service, enter details, and confirm. Delivery is instant.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    const faqs = [
        { q: "How fast is the delivery?", a: "All services are delivered instantly — typically within 5 seconds of payment confirmation. Our automated systems ensure 24/7 availability." },
        { q: "What payment methods do you accept?", a: "We accept bank cards (Visa/Mastercard), bank transfers, and USSD payments through our secure Paystack integration." },
        { q: "Is my money safe?", a: "Absolutely. All payments are processed through Paystack, a PCI DSS-compliant payment processor. Your wallet balance is fully secured." },
        { q: "Can I get a refund?", a: "If a transaction fails, the amount is automatically reversed to your wallet. For disputed transactions, contact our support team." },
        { q: "Do you offer bulk/reseller pricing?", a: "Yes! We offer discounted rates for high-volume users and resellers. Contact our sales team for custom enterprise pricing." },
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* ═══ Hero Section ═══ */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0z\' fill=\'none\'/%3E%3Cpath d=\'M0 0v40M40 0v40M0 0h40M0 40h40\' stroke=\'white\' stroke-width=\'1\'/%3E%3C/svg%3E")' }} />
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-sm font-semibold mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        Premium Digital Services
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                        All Your{" "}
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                                Digital Services
                            </span>
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
                        </span>
                        <br className="hidden sm:block" />
                        {" "}in One Place
                    </h1>
                    <p className="text-base sm:text-lg text-blue-100/70 max-w-2xl mx-auto leading-relaxed mb-10">
                        From data bundles to electricity tokens — Datara provides fast, affordable, and reliable
                        VTU services for millions of Nigerians. Zero downtime. Instant delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/register"
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all active:scale-95 text-center"
                        >
                            Get Started Free →
                        </Link>
                        <a
                            href="#services"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center"
                        >
                            Explore Services ↓
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══ Trust Metrics Bar ═══ */}
            <section className="bg-primary border-b border-primary relative -mt-8 z-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-2xl shadow-xl shadow-gray-200/50 border border-primary p-6 sm:p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                {
                                    value: "10,000+",
                                    label: "Active Users",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                        </svg>
                                    ),
                                    color: "text-blue-600 dark:text-blue-400",
                                    bg: "bg-blue-50 dark:bg-blue-900/20",
                                },
                                {
                                    value: "99.9%",
                                    label: "System Uptime",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                        </svg>
                                    ),
                                    color: "text-emerald-600 dark:text-emerald-400",
                                    bg: "bg-emerald-50 dark:bg-emerald-900/20",
                                },
                                {
                                    value: "< 5 sec",
                                    label: "Avg. Delivery",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                        </svg>
                                    ),
                                    color: "text-amber-600 dark:text-amber-400",
                                    bg: "bg-amber-50 dark:bg-amber-900/20",
                                },
                                {
                                    value: "₦0",
                                    label: "Service Charges",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
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

            {/* ═══ Services Grid ═══ */}
            <section id="services" className="py-20 sm:py-28 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 sm:mb-20">
                        <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">What We Offer</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            Our Services
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
                            Everything you need to stay connected and powered up — all at the best rates in Nigeria.
                        </p>
                    </div>

                    <div className="space-y-8 sm:space-y-10">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className={`bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-2xl ${service.shadowColor} transition-all duration-500 border border-gray-100 overflow-hidden group`}
                            >
                                <div className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                                    {/* Content Side */}
                                    <div className="flex-1 p-6 sm:p-10 lg:p-14">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                                                {service.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                                                    {service.title}
                                                </h3>
                                                {service.popular && (
                                                    <span className="inline-block mt-0.5 px-2 py-0.5 bg-cyan-100 text-cyan-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                                        Most Popular
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
                                            {service.desc}
                                        </p>

                                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                                            {service.features.map((feature, fi) => (
                                                <div key={fi} className="flex items-center gap-2.5">
                                                    <div className={`w-5 h-5 rounded-lg ${service.bgLight} ${service.textColor} flex items-center justify-center flex-shrink-0`}>
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={service.href}
                                            className={`inline-flex items-center gap-2.5 bg-gradient-to-r ${service.color} text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 group/btn`}
                                        >
                                            {service.action}
                                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </Link>
                                    </div>

                                    {/* Visual Accent Side */}
                                    <div className={`hidden lg:flex w-80 xl:w-[360px] items-center justify-center bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                                        {/* Decorative shapes */}
                                        <div className="absolute inset-0">
                                            <div className="absolute top-8 right-8 w-24 h-24 border-2 border-white/10 rounded-2xl rotate-12" />
                                            <div className="absolute bottom-12 left-8 w-16 h-16 border-2 border-white/10 rounded-full" />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-xl" />
                                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
                                            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full" />
                                            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full" />
                                        </div>
                                        {/* Main icon */}
                                        <div className="relative z-10 flex flex-col items-center gap-4">
                                            <div className="w-24 h-24 rounded-3xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                                <div className="text-white scale-[2]">
                                                    {service.icon}
                                                </div>
                                            </div>
                                            <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{service.title}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ How It Works ═══ */}
            <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14 sm:mb-20">
                        <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Getting Started</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            How It Works
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

                    {/* CTA below steps */}
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
            <section className="py-20 sm:py-28 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Common Questions</p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg">
                            Have questions? We&apos;ve got answers.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
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
                        Ready to Get Started?
                    </h2>
                    <p className="text-base sm:text-xl text-blue-100/70 mb-10 max-w-xl mx-auto leading-relaxed">
                        Join thousands of users who save money and time with Datara every day.
                        Create your free account now.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/register"
                            className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl shadow-black/10 hover:-translate-y-0.5 transform text-center"
                        >
                            Create Free Account
                        </Link>
                        <Link
                            href="/pricing"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
