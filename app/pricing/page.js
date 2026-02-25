import Card from "../../components/Card";
import Link from "next/link";

export default function Pricing() {
    const plans = [
        { network: "MTN", plan: "1GB", price: "₦300", validity: "30 Days" },
        { network: "MTN", plan: "2GB", price: "₦600", validity: "30 Days" },
        { network: "MTN", plan: "5GB", price: "₦1,500", validity: "30 Days" },
        { network: "MTN", plan: "10GB", price: "₦3,000", validity: "30 Days" },
        { network: "Airtel", plan: "1GB", price: "₦300", validity: "30 Days" },
        { network: "Airtel", plan: "2GB", price: "₦600", validity: "30 Days" },
        { network: "Glo", plan: "1GB", price: "₦270", validity: "30 Days" },
        { network: "Glo", plan: "2GB", price: "₦540", validity: "30 Days" },
        { network: "9mobile", plan: "1GB", price: "₦300", validity: "30 Days" },
        { network: "9mobile", plan: "2GB", price: "₦600", validity: "30 Days" },
    ];

    return (
        <div className="bg-[var(--bg-primary)] py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-[var(--text-primary)]">
                        Data Plans & Pricing
                    </h1>
                    <p className="mt-4 text-[var(--text-primary)] opacity-80">
                        Choose the best data plan that suits your needs. Instant delivery
                        guaranteed.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((item, idx) => (
                        <Card
                            key={idx}
                            className="flex flex-col items-center text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                {item.network}
                            </div>
                            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-2xl mb-4">
                                📶
                            </div>
                            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                                {item.plan}
                            </h3>
                            <p className="text-xl font-semibold text-cyan-500 mb-2">
                                {item.price}
                            </p>
                            <p className="text-[var(--text-primary)] opacity-60 mb-6 text-sm">
                                {item.validity}
                            </p>
                            <Link
                                href="/login"
                                className="w-full bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition"
                            >
                                Purchase
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
