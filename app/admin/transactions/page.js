"use client";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import Card from "../../../components/Card";

export default function AdminTransactions() {
  const [tx, setTx] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/transactions")
      .then(res => {
        setTx(res.data.data || []);
      })
      .catch(err => {
        console.error(err);
        setTx(null); // Signal error state
      })
      .finally(() => setLoading(false));
  }, []);

  const statusStyle = (status) => {
    if (status === "SUCCESS") return "bg-green-100 text-green-700";
    if (status === "FAILED") return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  const handleRefund = async (txId) => {
    if (!confirm("Are you sure you want to refund this transaction and credit the user's wallet?")) return;
    try {
      await api.post("/admin/refund", { transactionId: txId });
      setTx(prev => prev.map(t => t._id === txId ? { ...t, status: "REFUNDED" } : t));
    } catch (err) {
      alert(err.response?.data?.message || "Refund failed");
    }
  };

  if (loading) {
    return (
      <div className="p-8 max-w-4xl mx-auto space-y-4">
        <div className="h-8 w-48 bg-gray-200 animate-pulse rounded"></div>
        <div className="grid gap-4">
          {[1, 2, 3].map(i => <div key={i} className="h-24 bg-gray-100 animate-pulse rounded-xl"></div>)}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto bg-primary min-h-screen">
      <h1 className="text-4xl font-black mb-8 text-primary font-black italic tracking-tighter">
        <span className="text-blue-600 border-b-4 border-blue-600">Transaction</span> Audit
      </h1>

      <div className="grid gap-6">
        {tx === null ? (
          <Card className="text-center py-12 border-primary bg-secondary/30">
            <span className="text-4xl mb-4 block">🚫</span>
            <p className="text-primary font-black uppercase text-xs tracking-widest mb-2">Access Denied or Error</p>
            <p className="text-secondary text-xs font-bold opacity-60">We couldn't load the transaction history. If you just became an admin, please log out and log back in.</p>
          </Card>
        ) : tx.length === 0 ? (
          <p className="text-center py-12 text-secondary opacity-50">No transactions found in history.</p>
        ) : (
          tx.map(t => (
            <Card key={t._id} className="relative group transition-all hover:shadow-2xl border-l-[6px] border-l-blue-600 overflow-hidden bg-secondary/50 border-primary">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center shadow-inner border border-primary">
                    <span className="text-2xl font-black text-blue-600">₦</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-primary leading-tight">{t.serviceType}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                      <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest leading-none">
                        {t.userId?.name || "System"}
                      </p>
                      <p className="text-[9px] text-secondary font-bold truncate opacity-60 leading-none">
                        {t.userId?.email || "internal@datara.system"}
                      </p>
                    </div>
                    <p className="text-[9px] text-secondary font-bold uppercase tracking-widest mt-2 opacity-40">Ref: {t._id}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30"></div>
                      <p className="text-[10px] text-secondary font-medium tracking-tight">
                        {new Date(t.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-10 border-t md:border-t-0 pt-4 md:pt-0 border-primary">
                  <div className="text-right">
                    <p className="text-2xl font-black text-primary tracking-tighter italic">₦{t.amount.toLocaleString()}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase mt-1 tracking-wider ${statusStyle(t.status)}`}>
                      {t.status}
                    </span>
                  </div>

                  {t.status !== "REFUNDED" && (
                    <button
                      onClick={() => handleRefund(t._id)}
                      className="px-5 py-2.5 bg-red-600 text-white rounded-xl text-[10px] font-black hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-500/20"
                    >
                      REFUND
                    </button>
                  )}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

