"use client";
import api from "../../../services/api";

export default function Data() {
  const submit = async (e) => {
    e.preventDefault();
    const f = e.target;

    await api.post("/vtu/data", {
      network: f.network.value,
      phone: f.phone.value,
      amount: Number(f.amount.value),
    });

    alert("Data purchase successful");
  };

  return (
    <form onSubmit={submit} className="card">
      <h2 className="text-xl font-bold mb-4">Buy Data</h2>

      <select name="network" className="input">
        <option value="MTN">MTN</option>
        <option value="GLO">GLO</option>
        <option value="AIRTEL">AIRTEL</option>
        <option value="9MOBILE">9MOBILE</option>
      </select>

      <input name="phone" placeholder="Phone number" className="input" />
      <input name="amount" placeholder="Amount" className="input" />

      <button className="btn w-full">Buy Data</button>
    </form>
  );
}
