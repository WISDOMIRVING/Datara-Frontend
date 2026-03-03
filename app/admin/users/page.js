"use client";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import Card from "../../../components/Card";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/users")
      .then((res) => setUsers(res.data.data || []))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleToggleLock = async (userId) => {
    try {
      const res = await api.post("/admin/status", { userId });
      setUsers(prev => prev.map(u => u._id === userId ? { ...u, isLocked: res.data.isLocked } : u));
    } catch (err) {
      alert(err.response?.data?.message || "Action failed");
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
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-[var(--text-primary)]">User Management</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.length === 0 ? (
          <p className="col-span-full text-center py-12 text-gray-500">No users found.</p>
        ) : (
          users.map((u) => (
            <Card key={u._id} className="relative overflow-hidden">
              {u.isLocked && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-tighter">
                  Locked
                </div>
              )}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner ${u.isLocked ? "bg-gray-400" : "bg-blue-900"}`}>
                  {u.name[0].toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-lg text-[var(--text-primary)] truncate">{u.name}</p>
                  <p className="text-xs text-gray-500 truncate mb-2">{u.email}</p>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${u.role === "ADMIN" ? "bg-purple-100 text-purple-700 font-black" : "bg-blue-50 text-blue-700"}`}>
                    {u.role}
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Wallet Balance</p>
                    <p className="text-2xl font-black text-blue-900 dark:text-blue-400 tracking-tight">
                      ₦{(u.balance || 0).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleToggleLock(u._id)}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition-all active:scale-95 shadow-sm border ${u.isLocked
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100"
                        : "bg-red-50 text-red-600 border-red-100 hover:bg-red-100"
                      }`}
                  >
                    {u.isLocked ? "UNLOCK ACCOUNT" : "LOCK ACCOUNT"}
                  </button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

