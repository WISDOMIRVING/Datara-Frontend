"use client";

import { useState } from "react";
import AuthGuard from "../../../components/AuthGuard";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../services/api";

function ExamContent() {
    const { refreshWallet, walletBalance } = useAuth();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const examTypes = [
        { id: "waec", name: "WAEC Result Checker", price: 3500 },
        { id: "neco", name: "NECO Result Checker", price: 1200 },
        { id: "nabteb", name: "NABTEB Result Checker", price: 1000 },
    ];

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setError("");
        const f = e.target;

        try {
            const examType = examTypes.find(t => t.id === f.examType.value);
            await api.post("/vtu/exam", {
                examType: f.examType.value,
                quantity: 1,
                amount: examType.price,
            });
            setMessage(`${examType.name} PIN purchased successfully! Check your transaction history for the code.`);
            await refreshWallet();
            f.reset();
        } catch (err) {
            setError(err.response?.data?.message || "Purchase failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 sm:p-8 max-w-2xl mx-auto space-y-8 pb-12">
            <header>
                <h1 className="text-4xl sm:text-6xl font-black text-primary tracking-tighter italic">
                    Exam <span className="text-blue-600">PINs</span>
                </h1>
                <p className="text-secondary font-medium text-sm mt-1 opacity-70">Instant result checker generation</p>
            </header>

            <div className="grid grid-cols-1 gap-8">
                <form onSubmit={submit} className="glass p-6 sm:p-10 rounded-[2.5rem] border border-primary shadow-2xl space-y-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-8xl">🎓</span>
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
                            <label className="block text-xs font-black text-secondary mb-3 uppercase tracking-widest ml-1">Select Exam Body</label>
                            <select
                                name="examType"
                                className="w-full px-6 py-4 rounded-2xl border border-primary bg-secondary/50 text-primary text-lg font-bold outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer"
                                required
                            >
                                {examTypes.map(t => (
                                    <option key={t.id} value={t.id} className="bg-primary">{t.name} — ₦{t.price.toLocaleString()}</option>
                                ))}
                            </select>
                        </div>

                        <div className="bg-blue-500/5 p-6 rounded-2xl border border-blue-500/10">
                            <p className="text-xs text-blue-500 font-bold leading-relaxed mb-1">
                                <span className="p-1 bg-blue-500 text-white rounded text-[8px] mr-2">NOTICE</span>
                                PIN and Serial Number are delivered via transaction history.
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest opacity-40 italic">Instant Delivery</p>
                                <p className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">Balance: ₦{walletBalance?.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50 relative z-10"
                    >
                        {loading ? "GENERATING PIN..." : "PURCHASE PIN NOW"}
                    </button>

                    <p className="text-center text-[10px] text-secondary font-bold uppercase tracking-widest opacity-40 italic">Official examination board gateway</p>
                </form>
            </div>
        </div>
    );
}

export default function Exam() {
    return <AuthGuard><ExamContent /></AuthGuard>;
}
