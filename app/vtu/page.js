"use client";
import api from "../../services/api";

export default function VTU() {
  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;

    await api.post("/vtu/airtime", {
      phone: form.phone.value,
      amount: Number(form.amount.value),
    });

    alert("Transaction sent!");
  };

  return (
    <form onSubmit={submit} className="card">
      <h2 className="text-xl font-bold mb-4">Buy Airtime</h2>

      <input name="phone" placeholder="Phone number" className="input" />
      <input name="amount" placeholder="Amount" className="input" />

      <button className="btn w-full mt-4">Buy</button>
    </form>
  );
}
