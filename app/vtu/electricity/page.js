"use client";

import { useState } from "react";
import AuthGuard from "../../../components/AuthGuard";
import { useAuth } from "../../../context/AuthContext";
import { buyElectricity } from "../../../services/vtu.service";

function ElectricityContent() {
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
      await buyElectricity({
        disco: f.disco.value,
        meter: f.meter.value,
        amount: Number(f.amount.value),
      });
      setMessage("Electricity token purchased successfully!");
      await refreshWallet();
      f.reset();
    } catch (err) {
      setError(err.response?.data?.message || "Electricity payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Pay Electricity</h1>
      <form onSubmit={submit} className="glass p-8 rounded-2xl shadow-md space-y-6">
        {message && <div className="bg-green-100 text-green-700 px-4 py-3 rounded">{message}</div>}
        {error && <div className="bg-red-100 text-red-700 px-4 py-3 rounded">{error}</div>}

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Distribution Company</label>
          <select name="disco" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none bg-transparent text-[var(--text-primary)]" required>
            <option value="IKEDC">IKEJA (IKEDC)</option>
            <option value="EKEDC">EKO (EKEDC)</option>
            <option value="PHED">PORT HARCOURT (PHED)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Meter Number</label>
          <input name="meter" placeholder="e.g. 12345678901" required className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none bg-transparent text-[var(--text-primary)]" />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Amount (₦)</label>
          <input name="amount" type="number" min="500" placeholder="e.g. 5000" required className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none bg-transparent text-[var(--text-primary)]" />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition disabled:opacity-50">
          {loading ? "Processing..." : "Pay Bill"}
        </button>
      </form>
    </div>
  );
}

export default function Electricity() {
  return <AuthGuard><ElectricityContent /></AuthGuard>;
}
