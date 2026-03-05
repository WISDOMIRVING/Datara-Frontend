import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InstallPrompt from "../components/InstallPrompt";
import MouseGlow from "../components/MouseGlow";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "Datara — Premium VTU & Data Services",
  description:
    "Instant airtime, data, electricity bills and exam pins. Fast, secure and reliable.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Datara",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1e3a8a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="128x128" href="/icons/icon-128x128.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Datara" />
      </head>
      <body className="antialiased font-sans">
        <MouseGlow />
        <AuthProvider>
          <Navbar />
          <main className="pt-16 min-h-screen">{children}</main>
          <Footer />
          <InstallPrompt />
        </AuthProvider>
      </body>
    </html>
  );
}
