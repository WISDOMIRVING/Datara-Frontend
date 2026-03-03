"use client";

import { useState } from "react";
import AuthGuard from "../../../components/AuthGuard";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../services/api";

function ExamContent() {
    const { refreshWallet } = useAuth();
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
        <div className="max-w-lg mx-auto py-12 px-4">
            <h1 className="text-3xl font-black text-[var(--text-primary)] mb-8 tracking-tighter">
                Exam <span className="text-blue-900">Pin</span> Checker
            </h1>
            <form onSubmit={submit} className="glass p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 space-y-6">
                {message && <div className="bg-green-50 text-green-700 px-4 py-3 rounded-xl text-sm font-medium border border-green-100">{message}</div>}
                {error && <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm font-medium border border-red-100">{error}</div>}

                <div>
                    <label className="block text-sm font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wide opacity-70">Select Exam Type</label>
                    <select
                        name="examType"
                        className="w-full px-4 py-4 border border-gray-200 dark:border-gray-700 rounded-2xl outline-none bg-white dark:bg-gray-900 text-[var(--text-primary)] font-medium shadow-sm focus:ring-2 focus:ring-blue-900 transition-all"
                        required
                    >
                        {examTypes.map(t => (
                            <option key={t.id} value={t.id}>{t.name} — ₦{t.price.toLocaleString()}</option>
                        ))}
                    </select>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl border border-blue-100 dark:border-blue-800">
                    <p className="text-xs text-blue-800 dark:text-blue-300 font-medium">
                        Note: Your purchased PIN and Serial Number will be displayed in your <strong>Transaction History</strong> immediately after a successful payment.
                    </p>
                </div>

                <button type="submit" disabled={loading} className="w-full bg-blue-900 text-white py-4 rounded-2xl font-black hover:bg-blue-800 transition-all shadow-lg shadow-blue-100 dark:shadow-none active:scale-[0.98] disabled:opacity-50">
                    {loading ? "GENERATING PIN..." : "PURCHASE PIN NOW"}
                </button>
            </form>
        </div>
    );
}

export default function Exam() {
    return <AuthGuard><ExamContent /></AuthGuard>;
}
