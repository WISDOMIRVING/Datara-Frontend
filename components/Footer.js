import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Datara<span className="text-cyan-400">.</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Fast, reliable, and secure data and airtime services for everyone,
              everywhere.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">
              Support
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/help" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-white transition"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">
              Contact
            </h4>
            <p className="text-gray-400 text-sm">support@datara.com</p>
            <p className="text-gray-400 text-sm">+123 456 7890</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Datara. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
