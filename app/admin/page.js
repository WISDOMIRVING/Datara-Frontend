import Link from "next/link";

export default function Admin() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="mt-6 space-y-3">
        <Link href="/admin/users" className="btn block text-center">
          View Users
        </Link>

        <Link href="/admin/transactions" className="btn block text-center">
          View Transactions
        </Link>
      </div>
    </div>
  );
}
