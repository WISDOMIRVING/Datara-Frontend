import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden pt-20 pb-16 sm:pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-800/50 border border-blue-700 text-cyan-400 text-sm font-semibold mb-6">
                🚀 Best VTU Platform in Nigeria
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-6">
                Seamless Data & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Bill Payments
                </span>
              </h1>
              <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience instant recharge, affordable data plans, and
                zero-stress bill payments. Join thousands of smart users today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/register"
                  className="bg-cyan-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 transition shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="border border-white/30 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
                >
                  View Plans
                </Link>
              </div>
            </div>
            {/* Hero Image Placeholder */}
            <div className="relative lg:h-[500px] w-full flex items-center justify-center perspective-1000 hidden sm:flex">
              <div className="relative w-full max-w-sm lg:max-w-md aspect-square bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-3xl rotate-3 shadow-2xl flex items-center justify-center border-4 border-white/10 backdrop-blur-md transform hover:rotate-0 transition duration-500">
                <div className="absolute inset-0 bg-white/5 rounded-3xl"></div>
                <div className="text-center">
                  <span className="text-9xl drop-shadow-lg filter">📱</span>
                  <p className="mt-4 text-white font-bold text-xl">
                    Mobile App Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Datara?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We combine speed, security, and reliability to give you the best
              VTU experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl mb-6 text-blue-600 group-hover:scale-110 transition">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Instant Delivery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our automated system ensures your data and airtime are delivered
                within seconds of purchase, 24/7.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl mb-6 text-blue-600 group-hover:scale-110 transition">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Secure Payments
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your transactions are protected with industry-standard
                encryption. We prioritize your security.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl mb-6 text-blue-600 group-hover:scale-110 transition">
                📞
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                24/7 Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI assistant and dedicated support team are always ready to
                help you resolve any issues instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-8 rounded-2xl text-center hover:-translate-y-1 transition duration-300">
                <span className="text-5xl block mb-4">📶</span>
                <h4 className="font-bold text-gray-900 text-lg">Cheap Data</h4>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl text-center mt-8 hover:-translate-y-1 transition duration-300">
                <span className="text-5xl block mb-4">📱</span>
                <h4 className="font-bold text-gray-900 text-lg">
                  Airtime Top-up
                </h4>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl text-center hover:-translate-y-1 transition duration-300">
                <span className="text-5xl block mb-4">📺</span>
                <h4 className="font-bold text-gray-900 text-lg">Cable TV</h4>
              </div>
              <div className="bg-yellow-50 p-8 rounded-2xl text-center mt-8 hover:-translate-y-1 transition duration-300">
                <span className="text-5xl block mb-4">💡</span>
                <h4 className="font-bold text-gray-900 text-lg">Electricity</h4>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need in One Place
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stop jumping between apps. Datara brings all your essential bill
                payments and recharge needs into one secure, easy-to-use
                platform. We offer the best rates in the market.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Cheapest Data Plans for MTN, Airtel, Glo & 9mobile",
                  "Instant Airtime Top-up with discounts",
                  "Zero transaction failures guaranteed",
                  "Reseller API available for developers",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-700 font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 text-xs">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="text-blue-600 font-bold hover:text-blue-800 flex items-center group text-lg"
              >
                Explore all services
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA / Testimonial Section */}
      <section className="py-16 sm:py-24 bg-blue-900 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8">
            Join Over 10,000 Happy Users
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Start saving on your data and bill payments today. Registration is
            free, secure, and takes less than a minute.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl mb-12 border border-white/10 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4 text-yellow-400 text-2xl">
              ★★★★★
            </div>
            <p className="text-lg italic mb-6 leading-relaxed">
              "I've been using Datara for my business for over a year now. The
              API is stable, the discounts are amazing, and customer support is
              top-notch. Highly recommended!"
            </p>
            <div className="font-bold text-white">
              Emmanuel C.{" "}
              <span className="text-cyan-400 text-sm font-normal ml-2">
                | Reseller
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl transform hover:-translate-y-1"
            >
              Create Free Account
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
