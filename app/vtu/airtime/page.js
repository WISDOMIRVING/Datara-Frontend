"use client";

import { useState } from "react";
import AuthGuard from "../../../components/AuthGuard";
import { useAuth } from "../../../context/AuthContext";
import { buyAirtime } from "../../../services/vtu.service";

function AirtimeContent() {
  const { refreshWallet, walletBalance } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    const f = e.target;

    try {
      await buyAirtime({
        phone: f.phone.value,
        amount: Number(f.amount.value),
      });
      setMessage("Airtime sent successfully!");
      await refreshWallet();
      f.reset();
    } catch (err) {
      setError(err.response?.data?.message || "Airtime purchase failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-2xl mx-auto space-y-8 pb-12">
      <header>
        <h1 className="text-4xl sm:text-6xl font-black text-primary tracking-tighter italic">
          Airtime <span className="text-blue-600">Top-up</span>
        </h1>
        <p className="text-secondary font-medium text-sm mt-1 opacity-70">Instant recharge for all Nigerian networks</p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        <form onSubmit={submit} className="glass p-6 sm:p-10 rounded-[2.5rem] border border-primary shadow-2xl space-y-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-8xl">📱</span>
          </div>

          {message && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-6 py-4 rounded-2xl font-bold text-sm animate-bounce" role="alert">
              {message}
            </div>
          )}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded-2xl font-bold text-sm" role="alert">
              {error}
            </div>
          )}

          <div className="space-y-6 relative z-10">
            <div>
              <label className="block text-xs font-black text-secondary mb-3 uppercase tracking-widest ml-1">Phone Identity</label>
              <input
                name="phone"
                placeholder="08012345678"
                required
                className="w-full px-6 py-4 rounded-2xl border border-primary bg-secondary/50 text-primary text-lg font-bold outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:opacity-30"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-secondary mb-3 uppercase tracking-widest ml-1">Credits Amount (₦)</label>
              <input
                name="amount"
                type="number"
                min="50"
                placeholder="Enter amount"
                required
                className="w-full px-6 py-4 rounded-2xl border border-primary bg-secondary/50 text-primary text-lg font-bold outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:opacity-30"
              />
              <div className="flex justify-between items-center mt-2 px-1">
                <p className="text-[10px] text-secondary font-medium uppercase tracking-wider opacity-60">Min: ₦50.00</p>
                <p className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">Balance: ₦{walletBalance?.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50 relative z-10"
          >
            {loading ? "PROCESSING..." : "ACTIVATE TOP-UP"}
          </button>

          <p className="text-center text-[10px] text-secondary font-bold uppercase tracking-widest opacity-40">Secure Transaction Encryption Enabled</p>
        </form>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['MTN', 'Airtel', 'Glo', '9mobile'].map(net => (
            <div key={net} className="bg-secondary/30 border border-primary p-4 rounded-2xl flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <span className="font-black text-xs tracking-tighter italic text-primary">{net}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Airtime() {
  return <AuthGuard><AirtimeContent /></AuthGuard>;
}
