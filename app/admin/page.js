import Link from "next/link";

export default function Admin() {
  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto bg-primary min-h-[50vh] rounded-3xl border border-primary mt-8 shadow-xl">
      <h1 className="text-2xl sm:text-4xl font-black text-primary tracking-tighter italic">
        Admin <span className="text-blue-600">Dashboard</span>
      </h1>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link href="/admin/analytics" className="group bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center p-8 rounded-[2rem] shadow-2xl hover:scale-[1.02] transition-all relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="text-4xl mb-3 filter drop-shadow-lg">📊</span>
          <span className="font-black tracking-wider uppercase text-sm">System Analytics</span>
        </Link>

        <Link href="/admin/users" className="group bg-secondary text-primary border-2 border-primary flex flex-col items-center justify-center p-8 rounded-[2rem] shadow-xl hover:scale-[1.02] hover:border-blue-500/50 transition-all">
          <span className="text-4xl mb-3 filter drop-shadow-lg">👥</span>
          <span className="font-black tracking-wider uppercase text-sm">Managed Users</span>
        </Link>

        <Link href="/admin/transactions" className="group bg-secondary text-primary border-2 border-primary flex flex-col items-center justify-center p-8 rounded-[2rem] shadow-xl hover:scale-[1.02] hover:border-blue-500/50 transition-all">
          <span className="text-4xl mb-3 filter drop-shadow-lg">💸</span>
          <span className="font-black tracking-wider uppercase text-sm">Transactions</span>
        </Link>
      </div>
    </div>
  );
}
