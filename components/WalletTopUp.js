"use client";

import { useState } from "react";
import { topUpWallet } from "@/services/wallet.service";

export default function WalletTopUp({ onUpdate }) {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTopUp = async () => {
    if (!amount) return setMessage("Enter an amount");
    setLoading(true);
    setMessage("");
    try {
      const res = await topUpWallet(amount);
      if (res.data.authorization_url) {
        window.location.href = res.data.authorization_url;
      } else {
        setMessage("Payment initialized.");
      }
    } catch (err) {
      setMessage(err.response?.data?.error || "Top-up failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-4 p-4 border rounded max-w-md">
      <h3 className="font-semibold mb-2">Top-up Wallet</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="p-2 border rounded mr-2 w-full"
        disabled={loading}
      />
      <button
        onClick={handleTopUp}
        disabled={loading}
        className={`p-2 rounded mt-2 w-full text-white ${loading ? "bg-green-400" : "bg-green-600 hover:bg-green-700"}`}
      >
        {loading ? "Processing..." : "Top-up"}
      </button>
      {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
    </div>
  );
}
