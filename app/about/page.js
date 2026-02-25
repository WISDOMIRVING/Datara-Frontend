export default function About() {
    return (
        <>
            <div className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        About Datara
                    </h1>
                    <p className="text-xl text-gray-600 mb-12">
                        We are on a mission to make digital connectivity accessible,
                        affordable, and seamless for everyone.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Team working"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At Datara, we believe that staying connected shouldn't be a
                            hassle. Our platform is built to provide instant access to data
                            bundles, airtime top-ups, and utility bill payments with just a
                            few clicks.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Trust Us?
                        </h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span> 99.9% Service
                                Uptime
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span> Secure Payment
                                Gateways
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span> Transparent
                                Pricing
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span> Dedicated
                                Customer Support
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
