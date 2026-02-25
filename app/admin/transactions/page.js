"use client";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

export default function AdminTransactions() {
  const [tx, setTx] = useState([]);

  useEffect(() => {
    api.get("/admin/transactions").then(res => setTx(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Transactions</h2>

      {tx.map(t => (
        <div key={t._id} className="card">
          <p><b>{t.serviceType}</b></p>
          <p>₦{t.amount}</p>
          <p>Status: {t.status}</p>
          <p className="text-xs text-gray-500">
            {new Date(t.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
