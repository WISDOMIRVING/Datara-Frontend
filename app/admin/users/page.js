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
      .catch(err => {
        console.error(err);
        setUsers(null);
      })
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
    <div className="p-4 sm:p-8 max-w-5xl mx-auto bg-primary min-h-screen">
      <h1 className="text-4xl font-black mb-8 text-primary tracking-tighter italic">
        User <span className="text-blue-600">Management</span>
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users === null ? (
          <div className="col-span-full">
            <Card className="text-center py-12 border-primary bg-secondary/30">
              <span className="text-4xl mb-4 block">🔒</span>
              <p className="text-primary font-black uppercase text-xs tracking-widest mb-2">Unauthorized or Connection Issue</p>
              <p className="text-secondary text-xs font-bold opacity-60">We couldn't load the user list. If you just became an admin, please log out and log back in to refresh your access.</p>
            </Card>
          </div>
        ) : users.length === 0 ? (
          <p className="col-span-full text-center py-12 text-secondary opacity-50">No users found.</p>
        ) : (
          users.map((u) => (
            <Card key={u._id} className="relative overflow-hidden bg-secondary/50 border-primary group hover:border-blue-500/30 transition-all">
              {u.isLocked && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-tighter z-10">
                  Locked
                </div>
              )}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-primary ${u.isLocked ? "bg-gray-500" : "bg-gradient-to-br from-blue-600 to-blue-900"}`}>
                  {u.name[0].toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-black text-lg text-primary truncate leading-tight">{u.name}</p>
                  <p className="text-xs text-secondary truncate mb-2">{u.email}</p>
                  <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${u.role === "ADMIN" ? "bg-purple-500/10 text-purple-500 ring-1 ring-purple-500/20" : "bg-blue-500/10 text-blue-500 ring-1 ring-blue-500/20"}`}>
                    {u.role}
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-primary">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-secondary uppercase font-black tracking-widest mb-1 opacity-50">Wallet Balance</p>
                    <p className="text-2xl font-black text-primary tracking-tighter">
                      ₦{(u.balance || 0).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleToggleLock(u._id)}
                    className={`px-4 py-2.5 rounded-xl text-[10px] font-black transition-all active:scale-95 shadow-lg border ${u.isLocked
                      ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20"
                      : "bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20"
                      }`}
                  >
                    {u.isLocked ? "UNLOCK" : "LOCK"}
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

