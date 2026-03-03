import Link from "next/link";

export default function Admin() {
  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">Admin Dashboard</h1>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/admin/analytics" className="btn bg-blue-900 text-white flex flex-col items-center justify-center p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform">
          <span className="text-3xl mb-2">📊</span>
          <span className="font-bold">System Analytics</span>
        </Link>

        <Link href="/admin/users" className="btn bg-white text-blue-900 border-2 border-blue-900 flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform">
          <span className="text-3xl mb-2">👥</span>
          <span className="font-bold">Managed Users</span>
        </Link>

        <Link href="/admin/transactions" className="btn bg-white text-blue-900 border-2 border-blue-900 flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform">
          <span className="text-3xl mb-2">💸</span>
          <span className="font-bold">Transactions</span>
        </Link>
      </div>

    </div>
  );
}
