"use client";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
    AreaChart,
    Area
} from "recharts";
import Card from "../../../components/Card";

const COLORS = ["#1e3a8a", "#3b82f6", "#60a5fa", "#93c5fd"];

export default function AdminAnalytics() {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/admin/stats")
            .then((res) => setStats(res.data.data))
            .catch(err => {
                console.error(err);
                setStats(null);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="p-4 sm:p-8 max-w-6xl mx-auto space-y-6 animate-pulse">
                <div className="h-8 w-48 bg-gray-200 rounded"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map(i => <div key={i} className="h-28 bg-gray-100 rounded-2xl"></div>)}
                </div>
                <div className="h-64 bg-gray-100 rounded-2xl"></div>
            </div>
        );
    }

    if (!stats) {
        return (
            <div className="p-8 text-center bg-primary min-h-screen">
                <Card className="max-w-md mx-auto p-12 border-primary bg-secondary/30">
                    <span className="text-6xl mb-6 block italic">📉</span>
                    <h2 className="text-2xl font-black text-primary tracking-tighter mb-4 italic">No Data <span className="text-blue-600">Available</span></h2>
                    <p className="text-secondary text-sm font-medium mb-8 leading-relaxed">We couldn't retrieve the system intelligence data. Please ensure you are logged in as an administrator.</p>
                    <button onClick={() => window.location.reload()} className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl active:scale-95 transition-all tracking-widest uppercase text-xs">Refresh Dashboard</button>
                </Card>
            </div>
        );
    }

    const { overview, salesByService, revenueTrend, recentFunding } = stats;

    return (
        <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6 sm:space-y-8 pb-12 bg-primary min-h-screen">
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h1 className="text-3xl sm:text-5xl font-black text-primary tracking-tighter italic">
                        System <span className="text-blue-600">Intelligence</span>
                    </h1>
                    <p className="text-secondary font-medium text-sm opacity-70">Real-time performance metrics and growth data</p>
                </div>
                <div className="bg-blue-500/10 px-4 py-2 rounded-xl text-blue-500 font-black text-[10px] border border-blue-500/20 shadow-sm self-start tracking-widest uppercase">
                    UPDATED: {new Date().toLocaleTimeString()}
                </div>
            </header>

            {/* Metric Overview Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <Card className="bg-gradient-to-br from-blue-600 to-blue-900 text-white border-0 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-blue-100 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1 opacity-80">Total Users</p>
                    <p className="text-3xl sm:text-5xl font-black mb-3 italic tracking-tighter">{overview.totalUsers.toLocaleString()}</p>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden backdrop-blur-md">
                        <div className="bg-white h-full w-[70%] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                    </div>
                </Card>

                <Card className="bg-secondary/50 border-primary shadow-xl group hover:border-blue-500/30 transition-all">
                    <p className="text-secondary text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1 opacity-60">System Liability</p>
                    <p className="text-3xl sm:text-4xl font-black text-primary tracking-tighter italic">₦{overview.systemLiability.toLocaleString()}</p>
                    <p className="text-[10px] sm:text-xs text-blue-500 font-black mt-3 tracking-wide uppercase">TOTAL WALLET BALANCES</p>
                </Card>

                <Card className="bg-secondary/50 border-primary shadow-xl group hover:border-blue-500/30 transition-all">
                    <p className="text-secondary text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1 opacity-60">VTU Conversions</p>
                    <p className="text-3xl sm:text-4xl font-black text-primary tracking-tighter italic">{overview.totalTransactions.toLocaleString()}</p>
                    <p className="text-[10px] sm:text-xs text-emerald-500 font-black mt-3 tracking-wide uppercase">SUCCESSFUL TRANSACTIONS</p>
                </Card>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Revenue Trend Chart */}
                <Card className="p-4 sm:p-6 bg-secondary/30 border-primary shadow-2xl overflow-hidden relative">
                    <h3 className="text-lg sm:text-2xl font-black text-primary mb-6 flex items-center gap-3 tracking-tight italic">
                        <span className="p-2 bg-blue-500/10 rounded-xl text-xl">📈</span> Revenue Trend (30d)
                    </h3>
                    <div className="h-56 sm:h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueTrend}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="date" tick={{ fontSize: 9, fill: 'currentColor', opacity: 0.5 }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
                                <YAxis tick={{ fontSize: 9, fill: 'currentColor', opacity: 0.5 }} axisLine={false} tickLine={false} width={45} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-primary)', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)', fontSize: '11px', color: 'var(--text-primary)' }}
                                    itemStyle={{ fontWeight: 'bold', fontSize: '11px' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                                <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} fill="transparent" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Service Distribution */}
                <Card className="p-4 sm:p-6 bg-secondary/30 border-primary shadow-2xl relative overflow-hidden">
                    <h3 className="text-lg sm:text-2xl font-black text-primary mb-6 flex items-center gap-3 tracking-tight italic">
                        <span className="p-2 bg-blue-500/10 rounded-xl text-xl">🍕</span> Service Distribution
                    </h3>
                    <div className="h-56 sm:h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={salesByService}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={8}
                                    dataKey="value"
                                >
                                    {salesByService.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="stroke-primary" strokeWidth={2} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-primary)', fontSize: '11px', color: 'var(--text-primary)' }}
                                />
                                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-primary)' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>

            {/* Recent Activity — Mobile Cards + Desktop Table */}
            <Card className="p-0 overflow-hidden bg-secondary/30 border-primary shadow-2xl">
                <div className="px-6 py-5 border-b border-primary flex justify-between items-center bg-secondary/50">
                    <h3 className="text-xl font-black text-primary tracking-tight italic">Recent Wallet Funding</h3>
                    <button className="text-blue-500 text-xs font-black uppercase tracking-widest hover:underline">View All</button>
                </div>

                {/* Mobile: Card Layout */}
                <div className="sm:hidden divide-y divide-primary">
                    {recentFunding.map((log) => (
                        <div key={log._id} className="px-5 py-4 hover:bg-secondary/50 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                                <div className="min-w-0 flex-1">
                                    <p className="font-black text-sm text-primary truncate leading-tight">{log.walletId?.userId?.name || "N/A"}</p>
                                    <p className="text-[10px] text-secondary font-bold truncate opacity-60 uppercase tracking-tighter">{log.walletId?.userId?.email}</p>
                                </div>
                                <span className="text-emerald-500 font-black text-base ml-4 flex-shrink-0 italic">
                                    +₦{log.amount?.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <code className="text-[9px] bg-blue-500/10 px-2 py-0.5 rounded-lg text-blue-500 font-black tracking-tighter ring-1 ring-blue-500/20">
                                    {log.reason?.split(" (Ref: ")?.[1]?.replace(")", "") || log._id.substring(0, 12)}
                                </code>
                                <span className="text-[10px] font-black text-secondary opacity-40 uppercase tracking-widest">
                                    {new Date(log.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: Table Layout */}
                <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-secondary/50 text-[10px] uppercase font-black tracking-[0.2em] text-secondary opacity-60">
                            <tr>
                                <th className="px-6 py-4">User Identity</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">System Reference</th>
                                <th className="px-6 py-4">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary">
                            {recentFunding.map((log) => (
                                <tr key={log._id} className="hover:bg-blue-500/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <p className="font-black text-sm text-primary group-hover:text-blue-500 transition-colors">{log.walletId?.userId?.name || "N/A"}</p>
                                        <p className="text-[10px] text-secondary font-bold opacity-60 uppercase tracking-tighter">{log.walletId?.userId?.email}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-emerald-500 font-black text-sm italic">
                                            +₦{log.amount?.toLocaleString()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <code className="text-[10px] bg-blue-500/10 px-3 py-1 rounded-xl text-blue-500 font-black ring-1 ring-blue-500/20">
                                            {log.reason?.split(" (Ref: ")?.[1]?.replace(")", "") || log._id.substring(0, 12)}
                                        </code>
                                    </td>
                                    <td className="px-6 py-4 text-[10px] font-black text-secondary opacity-40 uppercase tracking-widest whitespace-nowrap">
                                        {new Date(log.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
