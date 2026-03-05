"use client";

import { useState } from "react";
import { login } from "../../services/auth.service";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const { loginUser, hydrate } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");
    setLoading(true);
    try {
      const res = await login(form);
      loginUser(res.data.token, res.data.user);
      await hydrate();
      setMessage("Login successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 bg-primary transition-colors duration-500 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-md w-full relative z-10">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-primary tracking-tighter italic mb-2">
            Welcome <span className="text-blue-600">Back</span>
          </h1>
          <p className="text-secondary font-medium text-sm opacity-60 uppercase tracking-widest">Access your premium gateway</p>
        </header>

        <div className="glass p-8 sm:p-10 rounded-[2.5rem] border border-primary shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="block text-[10px] font-black text-secondary mb-3 uppercase tracking-widest ml-1 opacity-70">Electronic Mail</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-secondary/30 border border-primary text-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold placeholder:opacity-20"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-[10px] font-black text-secondary uppercase tracking-widest ml-1 opacity-70">Secret Access Key</label>
                <Link
                  href="/forgot-password"
                  className="text-[10px] font-black text-blue-500 hover:underline uppercase tracking-widest transition-all"
                >
                  Retrieve Key
                </Link>
              </div>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-secondary/30 border border-primary text-primary rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold placeholder:opacity-20"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? "AUTHENTICATING..." : "AUTHORIZE LOGIN"}
            </button>
          </form>

          {message && (
            <div className={`mt-8 p-4 rounded-xl text-center text-xs font-black uppercase tracking-tighter border ${message.includes("successful") ? "bg-green-500/10 border-green-500/20 text-green-500" : "bg-red-500/10 border-red-500/20 text-red-500"}`}>
              {message}
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-primary text-center">
            <p className="text-secondary text-sm font-medium opacity-70">
              New to the platform?{" "}
              <Link href="/register" className="text-blue-500 font-black hover:underline transition-all underline-offset-4">
                Identity Registry
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-[10px] text-secondary font-black opacity-30 uppercase tracking-[0.3em]">
          Secure Session Monitoring Enabled
        </p>
      </div>
    </div>
  );
}
