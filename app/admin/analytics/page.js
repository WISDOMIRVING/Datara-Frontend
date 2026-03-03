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
            .catch(err => console.error(err))
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

    const { overview, salesByService, revenueTrend, recentFunding } = stats;

    return (
        <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6 sm:space-y-8 pb-12">
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl sm:text-4xl font-black text-blue-900 tracking-tight">System Intelligence</h1>
                    <p className="text-gray-500 font-medium text-sm">Real-time performance metrics and growth data</p>
                </div>
                <div className="bg-blue-50 px-3 py-1.5 rounded-lg sm:rounded-xl text-blue-700 font-bold text-xs border border-blue-100 shadow-sm self-start">
                    Updated: {new Date().toLocaleTimeString()}
                </div>
            </header>

            {/* Metric Overview Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white border-0 shadow-2xl">
                    <p className="text-blue-200 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Total Users</p>
                    <p className="text-2xl sm:text-4xl font-black mb-2">{overview.totalUsers.toLocaleString()}</p>
                    <div className="w-full bg-blue-700/50 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-300 h-full w-[70%]"></div>
                    </div>
                </Card>

                <Card className="bg-white border-2 border-blue-50 shadow-sm">
                    <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">System Liability</p>
                    <p className="text-2xl sm:text-4xl font-black text-blue-900">₦{overview.systemLiability.toLocaleString()}</p>
                    <p className="text-[10px] sm:text-xs text-blue-600 font-bold mt-2">Total user wallet balances</p>
                </Card>

                <Card className="bg-white border-2 border-blue-50 shadow-sm">
                    <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">VTU Conversions</p>
                    <p className="text-2xl sm:text-4xl font-black text-blue-900">{overview.totalTransactions.toLocaleString()}</p>
                    <p className="text-[10px] sm:text-xs text-emerald-600 font-bold mt-2">Successful transactions</p>
                </Card>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Revenue Trend Chart */}
                <Card className="p-4 sm:p-6 bg-white border-blue-50 border-2 shadow-xl hover:shadow-2xl transition-shadow">
                    <h3 className="text-base sm:text-xl font-black text-blue-900 mb-4 sm:mb-6 flex items-center gap-2">
                        <span className="p-1.5 sm:p-2 bg-blue-50 rounded-lg">📈</span> Revenue Trend (30d)
                    </h3>
                    <div className="h-56 sm:h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueTrend}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="date" tick={{ fontSize: 9, fill: '#999' }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
                                <YAxis tick={{ fontSize: 9, fill: '#999' }} axisLine={false} tickLine={false} width={45} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '11px' }}
                                    itemStyle={{ fontWeight: 'bold', fontSize: '11px' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#1e3a8a" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
                                <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={1.5} fill="transparent" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Service Distribution */}
                <Card className="p-4 sm:p-6 bg-white border-blue-50 border-2 shadow-xl hover:shadow-2xl transition-shadow">
                    <h3 className="text-base sm:text-xl font-black text-blue-900 mb-4 sm:mb-6 flex items-center gap-2">
                        <span className="p-1.5 sm:p-2 bg-blue-50 rounded-lg">🍕</span> Service Distribution
                    </h3>
                    <div className="h-56 sm:h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={salesByService}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={45}
                                    outerRadius={75}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {salesByService.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend iconType="circle" wrapperStyle={{ fontSize: '11px' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>

            {/* Recent Activity — Mobile Cards + Desktop Table */}
            <Card className="p-0 overflow-hidden bg-white border-blue-50 border-2 shadow-sm">
                <div className="px-4 py-3 sm:p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-base sm:text-xl font-black text-blue-900">Recent Wallet Funding</h3>
                    <button className="text-blue-600 text-xs font-bold hover:underline">View All</button>
                </div>

                {/* Mobile: Card Layout */}
                <div className="sm:hidden divide-y divide-gray-50">
                    {recentFunding.map((log) => (
                        <div key={log._id} className="px-4 py-3">
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="min-w-0 flex-1">
                                    <p className="font-bold text-sm text-blue-950 truncate">{log.walletId?.userId?.name || "N/A"}</p>
                                    <p className="text-[10px] text-gray-400 font-medium truncate">{log.walletId?.userId?.email}</p>
                                </div>
                                <span className="text-emerald-600 font-black text-sm ml-3 flex-shrink-0">
                                    +₦{log.amount?.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <code className="text-[9px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 font-mono">
                                    {log.reason?.split(" (Ref: ")?.[1]?.replace(")", "") || log._id.substring(0, 12)}
                                </code>
                                <span className="text-[10px] font-bold text-gray-400">
                                    {new Date(log.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: Table Layout */}
                <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-gray-50 text-[10px] uppercase font-black tracking-widest text-gray-400">
                            <tr>
                                <th className="px-4 py-3">User</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Reference</th>
                                <th className="px-4 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {recentFunding.map((log) => (
                                <tr key={log._id} className="hover:bg-blue-50/30 transition-colors">
                                    <td className="px-4 py-3">
                                        <p className="font-bold text-xs text-blue-950">{log.walletId?.userId?.name || "N/A"}</p>
                                        <p className="text-[10px] text-gray-400 font-medium">{log.walletId?.userId?.email}</p>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-emerald-600 font-black text-xs">
                                            +₦{log.amount?.toLocaleString()}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <code className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-500 font-mono">
                                            {log.reason?.split(" (Ref: ")?.[1]?.replace(")", "") || log._id.substring(0, 12)}
                                        </code>
                                    </td>
                                    <td className="px-4 py-3 text-xs font-bold text-gray-500 whitespace-nowrap">
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
