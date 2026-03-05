"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Testimonials() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Data", "Airtime", "Cable TV", "Electricity", "Resellers"];

    const reviews = [
        {
            name: "Emmanuel C.",
            role: "Data Reseller",
            location: "Lagos, Nigeria",
            text: "I've been using Datara for my business for over a year now. The API is stable, the discounts are amazing, and customer support is top-notch. I've grown my reselling business by 300% since joining.",
            rating: 5,
            category: "Resellers",
            gradient: "from-blue-600 to-cyan-500",
            verified: true,
            date: "2 weeks ago",
        },
        {
            name: "Aisha M.",
            role: "University Student",
            location: "Abuja, Nigeria",
            text: "As a student, every naira counts. Datara gives me the cheapest data plans I've found anywhere. Plus, delivery is literally instant! I can stream lectures without worrying about costs.",
            rating: 5,
            category: "Data",
            gradient: "from-emerald-500 to-teal-500",
            verified: true,
            date: "1 month ago",
        },
        {
            name: "Chinedu O.",
            role: "Business Owner",
            location: "Port Harcourt, Nigeria",
            text: "I use Datara to manage airtime and data for my team of 50+ staff. The bulk purchase feature and wallet system save us so much time and money every single month.",
            rating: 5,
            category: "Airtime",
            gradient: "from-purple-600 to-violet-500",
            verified: true,
            date: "3 weeks ago",
        },
        {
            name: "Funke A.",
            role: "Content Creator",
            location: "Ibadan, Nigeria",
            text: "Cable TV subscriptions used to be such a hassle. With Datara, I renew my DStv in seconds right from my phone. No queues, no stress. The convenience is unmatched!",
            rating: 5,
            category: "Cable TV",
            gradient: "from-rose-500 to-pink-500",
            verified: true,
            date: "1 week ago",
        },
        {
            name: "Tunde B.",
            role: "Real Estate Agent",
            location: "Lekki, Lagos",
            text: "Paying electricity bills for multiple properties used to be a nightmare. Datara lets me handle all of them in one place. The token delivery is instant and I never have to visit a vendor again.",
            rating: 5,
            category: "Electricity",
            gradient: "from-amber-500 to-orange-500",
            verified: true,
            date: "5 days ago",
        },
        {
            name: "Grace I.",
            role: "Stay-at-Home Mom",
            location: "Enugu, Nigeria",
            text: "I started as a customer, now I'm a reseller! Datara made it so easy to earn extra income from home. The support team walked me through everything. Best decision I've made.",
            rating: 5,
            category: "Resellers",
            gradient: "from-blue-500 to-indigo-500",
            verified: true,
            date: "2 months ago",
        },
        {
            name: "Yusuf D.",
            role: "IT Consultant",
            location: "Kano, Nigeria",
            text: "The API documentation is clear and integration was seamless. I've built Datara into 3 of my client apps. Zero downtime in 8 months. This is enterprise-grade reliability.",
            rating: 5,
            category: "Resellers",
            gradient: "from-teal-500 to-cyan-500",
            verified: true,
            date: "1 month ago",
        },
        {
            name: "Blessing N.",
            role: "Nurse",
            location: "Benin City, Nigeria",
            text: "I work long shifts and can't always go to a vendor. Datara means I can buy data and airtime right from the ward in seconds. It's been a lifesaver for staying connected with family.",
            rating: 4,
            category: "Data",
            gradient: "from-sky-500 to-blue-500",
            verified: true,
            date: "3 weeks ago",
        },
        {
            name: "Segun L.",
            role: "Music Producer",
            location: "Lagos, Nigeria",
            text: "I need reliable internet for uploading tracks and streaming sessions. Datara's data plans are not only cheap but come through instantly. No buffering, no interruptions.",
            rating: 5,
            category: "Data",
            gradient: "from-violet-500 to-purple-500",
            verified: true,
            date: "4 days ago",
        },
    ];

    const filteredReviews =
        activeCategory === "All"
            ? reviews
            : reviews.filter((r) => r.category === activeCategory);

    const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* ═══ Hero Section ═══ */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-36">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0z\' fill=\'none\'/%3E%3Cpath d=\'M0 0v40M40 0v40M0 0h40M0 40h40\' stroke=\'white\' stroke-width=\'1\'/%3E%3C/svg%3E")' }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-sm font-semibold mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                Real Stories, Real People
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
                                What Our{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                                    Customers
                                </span>{" "}
                                Say
                            </h1>
                            <p className="text-base sm:text-lg text-blue-100/70 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Don&apos;t just take our word for it — hear directly from the thousands of
                                Nigerians who trust Datara for their daily digital needs.
                            </p>

                            {/* Rating summary inline */}
                            <div className="flex items-center gap-4 justify-center lg:justify-start">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-white font-bold text-lg">{avgRating}</span>
                                <span className="text-blue-200/60 text-sm">from {reviews.length} reviews</span>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="hidden lg:flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
                                <Image
                                    src="/images/testimony-hero.png"
                                    alt="Happy Datara customers sharing their experiences"
                                    width={540}
                                    height={420}
                                    className="relative rounded-3xl shadow-2xl border border-white/10"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Rating Breakdown ═══ */}
            <section className="relative -mt-8 z-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-2xl shadow-xl shadow-gray-200/50 border border-primary p-6 sm:p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                {
                                    value: avgRating, label: "Average Rating", icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    ), color: "text-amber-600 bg-amber-50 dark:bg-amber-900/20"
                                },
                                {
                                    value: `${reviews.length}+`, label: "Happy Users", icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                        </svg>
                                    ), color: "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
                                },
                                {
                                    value: "100%", label: "Would Recommend", icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                        </svg>
                                    ), color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20"
                                },
                                {
                                    value: "24/7", label: "Support Available", icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                        </svg>
                                    ), color: "text-purple-600 bg-purple-50 dark:bg-purple-900/20"
                                },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-3 sm:gap-4">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${stat.color} flex items-center justify-center flex-shrink-0`}>
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className="text-xl sm:text-2xl font-black text-primary tracking-tight leading-none">{stat.value}</p>
                                        <p className="text-[10px] sm:text-xs text-muted font-medium mt-0.5">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Featured Testimonial ═══ */}
            <section className="py-20 sm:py-28 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-3">Featured Story</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
                            Customer Spotlight
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-3xl" />
                            <Image
                                src="/images/testimony-featured.png"
                                alt="Featured customer success story"
                                width={560}
                                height={420}
                                className="relative rounded-2xl shadow-xl"
                            />
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-5 border border-gray-100">
                                <p className="text-3xl font-black text-blue-900">300%</p>
                                <p className="text-xs text-gray-500 font-medium">Business<br />Growth</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <div className="bg-primary rounded-2xl p-8 sm:p-10 shadow-sm border border-primary relative">
                                {/* Large quote mark */}
                                <div className="absolute -top-6 left-8">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-serif shadow-lg">
                                        &ldquo;
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 mb-4 mt-2">
                                    {[...Array(5)].map((_, j) => (
                                        <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                                    &ldquo;I started as a regular user buying data for myself. Within 3 months, I saw the
                                    reseller opportunity and jumped on it. Datara&apos;s API and pricing made it possible
                                    to build a data reselling business from scratch. My revenue has grown 300% and I now
                                    serve over 500 customers. The platform is incredibly reliable — zero failed transactions
                                    in 8 months.&rdquo;
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-lg font-bold shadow-md">
                                        E
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">Emmanuel C.</p>
                                        <p className="text-sm text-gray-500">Data Reseller · Lagos, Nigeria</p>
                                    </div>
                                    <div className="ml-auto flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Verified
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Category Filter + Reviews Grid ═══ */}
            <section className="py-20 sm:py-28 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 dark:bg-cyan-900/10 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10 sm:mb-14">
                        <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-3">Community Voices</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-5 tracking-tight">
                            More Reviews From Real Users
                        </h2>
                        <p className="text-secondary max-w-lg mx-auto text-base sm:text-lg">
                            Filter by service category to find reviews most relevant to you.
                        </p>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10 sm:mb-14">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Reviews Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filteredReviews.map((review, i) => (
                            <div
                                key={i}
                                className="bg-primary p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-primary group relative overflow-hidden"
                            >
                                {/* Accent top bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${review.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                                {/* Quote icon */}
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white text-lg font-serif mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                                    &ldquo;
                                </div>

                                {/* Stars */}
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, j) => (
                                        <svg key={j} className={`w-4 h-4 ${j < review.rating ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Review text */}
                                <p className="text-secondary text-sm leading-relaxed mb-5 italic">
                                    &ldquo;{review.text}&rdquo;
                                </p>

                                {/* Reviewer info */}
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white text-sm font-bold shadow-sm`}>
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <p className="text-sm font-bold text-primary truncate">{review.name}</p>
                                            {review.verified && (
                                                <svg className="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </div>
                                        <p className="text-xs text-muted">{review.role} · {review.location}</p>
                                    </div>
                                    <span className="text-[10px] text-muted font-medium flex-shrink-0">{review.date}</span>
                                </div>

                                {/* Category badge */}
                                <div className="mt-4 pt-4 border-t border-primary">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                                        {review.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Trust Badges ═══ */}
            <section className="py-16 sm:py-20 bg-gradient-to-b from-secondary to-primary">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                            Why Customers Trust Us
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                ), label: "PCI Compliant", color: "text-blue-600 dark:text-blue-400"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                ), label: "Instant Delivery", color: "text-amber-500"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ), label: "99.9% Uptime", color: "text-emerald-600 dark:text-emerald-400"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                    </svg>
                                ), label: "24/7 Support", color: "text-purple-600 dark:text-purple-400"
                            },
                        ].map((badge, i) => (
                            <div key={i} className="text-center p-5 rounded-2xl bg-primary shadow-sm border border-primary hover:shadow-md transition-shadow">
                                <div className={`${badge.color} mx-auto mb-3`}>{badge.icon}</div>
                                <p className="text-sm font-bold text-secondary">{badge.label}</p>
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.03] rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/[0.05] rounded-full" />
                </div>

                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                        Join the Growing List <br className="hidden sm:block" />of Happy Customers
                    </h2>
                    <p className="text-base sm:text-xl text-blue-100/70 mb-10 max-w-xl mx-auto leading-relaxed">
                        Start your Datara journey today and experience why thousands of Nigerians
                        choose us for their data, airtime, and bill payments.
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
