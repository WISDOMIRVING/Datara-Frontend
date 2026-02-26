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

  const statusStyle = (status) => {
    if (status === "Success")
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    if (status === "Pending")
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
  };

  return (
    <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
        Recent Transactions
      </h3>

      {/* Mobile: Card Layout */}
      <div className="sm:hidden space-y-3">
        {transactions.map((trx, idx) => (
          <div
            key={idx}
            className="border border-gray-100 dark:border-gray-800 rounded-lg p-3"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-[var(--text-primary)]">
                {trx.service}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusStyle(trx.status)}`}
              >
                {trx.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-[var(--text-primary)]">
                {trx.amount}
              </span>
              <span className="text-xs text-[var(--text-primary)] opacity-50">
                {trx.date}
              </span>
            </div>
            <p className="text-xs text-[var(--text-primary)] opacity-40 mt-1">
              {trx.id}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: Table Layout */}
      <div className="hidden sm:block">
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
                    className={`px-2 py-1 rounded-full text-xs font-bold ${statusStyle(trx.status)}`}
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
