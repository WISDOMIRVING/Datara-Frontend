"use client";
import api from "../../../services/api";

export default function Airtime() {
  const submit = async (e) => {
    e.preventDefault();
    const f = e.target;

    await api.post("/vtu/airtime", {
      phone: f.phone.value,
      amount: Number(f.amount.value),
    });

    alert("Airtime sent successfully");
  };

  return (
    <form onSubmit={submit} className="card">
      <h2 className="text-xl font-bold mb-4">Buy Airtime</h2>
      <input name="phone" placeholder="Phone number" className="input" />
      <input name="amount" placeholder="Amount" className="input" />
      <button className="btn w-full">Buy Airtime</button>
    </form>
  );
}
