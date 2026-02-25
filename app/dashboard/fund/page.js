"use client";
import { useState } from "react";
import api from "../../../services/api";

export default function FundWallet() {
  const [amount, setAmount] = useState("");

  const fund = async () => {
    const res = await api.post("/wallet/topup", { amount });
    window.location.href = res.data.authorization_url;
  };

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">Fund Wallet</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input"
      />
      <button className="btn w-full mt-2" onClick={fund}>
        Fund Wallet
      </button>
    </div>
  );
}
