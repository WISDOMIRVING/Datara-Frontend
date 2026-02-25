"use client";

import { useState } from "react";
import AuthGuard from "../../../components/AuthGuard";
import { useAuth } from "../../../context/AuthContext";
import { buyData } from "../../../services/vtu.service";

function DataContent() {
  const { refreshWallet } = useAuth();
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
      await buyData({
        network: f.network.value,
        phone: f.phone.value,
        amount: Number(f.amount.value),
      });
      setMessage("Data purchase successful!");
      await refreshWallet();
      f.reset();
    } catch (err) {
      setError(err.response?.data?.message || "Data purchase failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Buy Data</h1>
      <form onSubmit={submit} className="glass p-8 rounded-2xl shadow-md space-y-6">
        {message && <div className="bg-green-100 text-green-700 px-4 py-3 rounded">{message}</div>}
        {error && <div className="bg-red-100 text-red-700 px-4 py-3 rounded">{error}</div>}

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Network</label>
          <select name="network" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none bg-transparent text-[var(--text-primary)]" required>
            <option value="MTN">MTN</option>
            <option value="GLO">GLO</option>
            <option value="AIRTEL">AIRTEL</option>
            <option value="9MOBILE">9MOBILE</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Phone Number</label>
          <input name="phone" placeholder="08012345678" required className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none bg-transparent text-[var(--text-primary)]" />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Amount (₦)</label>
          <input name="amount" type="number" min="1" placeholder="e.g. 300" required className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none bg-transparent text-[var(--text-primary)]" />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition disabled:opacity-50">
          {loading ? "Processing..." : "Buy Data"}
        </button>
      </form>
    </div>
  );
}

export default function Data() {
  return <AuthGuard><DataContent /></AuthGuard>;
}
