import Layout from "../components/Layout";
import Card from "../components/Card";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Buy Data",
      icon: "📶",
      desc: "Cheap data plans for MTN, Glo, Airtel, and 9mobile.",
      action: "Buy Data",
    },
    {
      title: "Buy Airtime",
      icon: "📱",
      desc: "Instant airtime top-up with discounts on every purchase.",
      action: "Top Up",
    },
    {
      title: "Cable TV",
      icon: "📺",
      desc: "Pay for DSTV, GOTV, and Startimes subscriptions instantly.",
      action: "Subscribe",
    },
    {
      title: "Electricity",
      icon: "💡",
      desc: "Pay your electricity bills (Prepaid/Postpaid) with zero stress.",
      action: "Pay Bill",
    },
  ];

  return (
    <Layout>
      <div className="bg-[var(--bg-primary)] py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[var(--text-primary)]">
              Our Services
            </h1>
            <p className="mt-4 text-[var(--text-primary)] opacity-80">
              Everything you need to stay connected and powered up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-3xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--text-primary)] opacity-70 mb-8 flex-grow">
                  {service.desc}
                </p>
                <Link
                  href="/login"
                  className="w-full bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition"
                >
                  {service.action}
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
