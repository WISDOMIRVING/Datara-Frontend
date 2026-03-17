"use client";

import { useEffect, useState } from "react";
import api from "../services/api";

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/wallet/transactions")
      .then(res => {
        setTransactions(res.data.data || []);
      })
      .catch(err => {
        console.error("Failed to fetch transactions:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const statusStyle = (status) => {
    if (status === "SUCCESS")
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    if (status === "PENDING")
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
  };

  if (loading) {
    return (
      <div className="glass rounded-xl sm:rounded-2xl p-6 shadow-sm animate-pulse">
        <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-16 bg-gray-100 dark:bg-gray-800 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-xl p-2 sm:p-3 shadow-sm border border-primary">
      <h3 className="text-sm sm:text-base font-bold text-primary mb-1.5 sm:mb-2">
        Recent Transactions
      </h3>

      {transactions.length === 0 ? (
        <p className="text-sm text-secondary opacity-50 py-8 text-center">
          No transactions yet.
        </p>
      ) : (
        <>
          {/* Mobile: Card Layout */}
          <div className="sm:hidden space-y-3">
            {transactions.map((trx) => (
              <div
                key={trx._id}
                className="border border-primary rounded-lg p-3 bg-secondary/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-primary">
                    {trx.serviceType}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusStyle(trx.status)}`}
                  >
                    {trx.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-primary">
                    ₦{trx.amount.toLocaleString()}
                  </span>
                  <span className="text-xs text-secondary opacity-50">
                    {new Date(trx.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-[10px] text-secondary opacity-40 mt-1 uppercase">
                  ID: {trx._id.slice(-8)}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop: Table Layout */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left border-collapse text-[10px]">
              <thead>
                <tr className="text-secondary opacity-70 border-b border-primary">
                  <th className="py-1.5 px-1.5 font-semibold">ID</th>
                  <th className="py-1.5 px-1.5 font-semibold">Service</th>
                  <th className="py-1.5 px-1.5 font-semibold">Amount</th>
                  <th className="py-1.5 px-1.5 font-semibold">Date</th>
                  <th className="py-1.5 px-1.5 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="text-primary">
                {transactions.map((trx) => (
                  <tr
                    key={trx._id}
                    className="border-b border-primary hover:bg-secondary transition-colors"
                  >
                    <td className="py-1 px-1.5 font-medium uppercase whitespace-nowrap">{trx._id.slice(-8)}</td>
                    <td className="py-1 px-1.5 whitespace-nowrap">{trx.serviceType}</td>
                    <td className="py-1 px-1.5 font-bold whitespace-nowrap">₦{trx.amount.toLocaleString()}</td>
                    <td className="py-1 px-1.5 opacity-80 whitespace-nowrap">{new Date(trx.createdAt).toLocaleDateString()}</td>
                    <td className="py-1 px-1.5">
                      <span
                        className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${statusStyle(trx.status)}`}
                      >
                        {trx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

