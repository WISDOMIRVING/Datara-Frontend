export default function TransactionHistory() {
  const transactions = [
    {
      id: "TRX-9871",
      service: "MTN 1GB Data",
      amount: "₦300",
      date: "Oct 24, 2023",
      status: "Success",
    },
    {
      id: "TRX-9872",
      service: "Airtime Topup",
      amount: "₦500",
      date: "Oct 23, 2023",
      status: "Success",
    },
    {
      id: "TRX-9873",
      service: "Gotv Jinja",
      amount: "₦2,250",
      date: "Oct 21, 2023",
      status: "Pending",
    },
    {
      id: "TRX-9874",
      service: "Airtel 2GB",
      amount: "₦600",
      date: "Oct 20, 2023",
      status: "Failed",
    },
    {
      id: "TRX-9875",
      service: "Electricity Bill",
      amount: "₦5,000",
      date: "Oct 18, 2023",
      status: "Success",
    },
  ];

  return (
    <div className="glass rounded-2xl p-6 overflow-hidden shadow-sm">
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
        Recent Transactions
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[var(--text-primary)] opacity-70 border-b border-gray-200 dark:border-gray-700">
              <th className="py-3 px-4 font-semibold text-sm">
                Transaction ID
              </th>
              <th className="py-3 px-4 font-semibold text-sm">Service</th>
              <th className="py-3 px-4 font-semibold text-sm">Amount</th>
              <th className="py-3 px-4 font-semibold text-sm">Date</th>
              <th className="py-3 px-4 font-semibold text-sm">Status</th>
            </tr>
          </thead>
          <tbody className="text-[var(--text-primary)]">
            {transactions.map((trx, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition"
              >
                <td className="py-3 px-4 text-sm font-medium">{trx.id}</td>
                <td className="py-3 px-4 text-sm">{trx.service}</td>
                <td className="py-3 px-4 text-sm">{trx.amount}</td>
                <td className="py-3 px-4 text-sm opacity-80">{trx.date}</td>
                <td className="py-3 px-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      trx.status === "Success"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : trx.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {trx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
