"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { register } from "../../services/auth.service";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        referredBy: ref,
      });
      // Redirect to login page after successful registration
      router.push("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-16 bg-primary transition-colors duration-500 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-md w-full relative z-10">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-primary tracking-tighter italic mb-2">
            Identity <span className="text-blue-600">Registry</span>
          </h1>
          <p className="text-secondary font-medium text-sm opacity-60 uppercase tracking-widest">Join the premium ecosystem</p>
        </header>

        <div className="glass p-8 sm:p-10 rounded-[2.5rem] border border-primary shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-tighter mb-8 animate-shake" role="alert">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[10px] font-black text-secondary mb-2 uppercase tracking-widest ml-1 opacity-70">Legal Identity (Name)</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-secondary/30 border border-primary text-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold placeholder:opacity-20 text-sm"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-secondary mb-2 uppercase tracking-widest ml-1 opacity-70">Electronic Mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-secondary/30 border border-primary text-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold placeholder:opacity-20 text-sm"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black text-secondary mb-2 uppercase tracking-widest ml-1 opacity-70">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-secondary/30 border border-primary text-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold placeholder:opacity-20 text-sm"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-secondary mb-2 uppercase tracking-widest ml-1 opacity-70">Confirm</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-secondary/30 border text-primary rounded-2xl outline-none focus:ring-4 transition-all font-bold placeholder:opacity-20 text-sm ${formData.confirmPassword &&
                    formData.password !== formData.confirmPassword
                    ? "border-red-500/50 focus:ring-red-500/20 focus:border-red-500"
                    : "border-primary focus:ring-blue-500/20 focus:border-blue-500"
                    }`}
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50 mt-4"
            >
              {loading ? "REGISTERING..." : "INITIALIZE ACCOUNT"}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-primary text-center">
            <p className="text-secondary text-sm font-medium opacity-70">
              Already have an identity?{" "}
              <Link href="/login" className="text-blue-500 font-black hover:underline transition-all underline-offset-4">
                Access Gateway
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-[10px] text-secondary font-black opacity-30 uppercase tracking-[0.3em]">
          Global Identity Standard Compliance
        </p>
      </div>
    </div>
  );
}

export default function Register() {
  return (
    <Suspense fallback={null}>
      <RegisterForm />
    </Suspense>
  );
}
