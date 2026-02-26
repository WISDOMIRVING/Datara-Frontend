import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "Datara VTU App",
  description:
    "Buy airtime, data, electricity bills and exam pins in real-time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 overflow-x-hidden">
        <AuthProvider>
          <Navbar />
          <main className="pt-16 min-h-screen overflow-x-hidden">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
