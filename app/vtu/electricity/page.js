"use client";
import api from "../../../services/api";

export default function Electricity() {
  const submit = async (e) => {
    e.preventDefault();
    const f = e.target;

    await api.post("/vtu/electricity", {
      disco: f.disco.value,
      meter: f.meter.value,
      amount: Number(f.amount.value),
    });

    alert("Electricity token purchased");
  };

  return (
    <form onSubmit={submit} className="card">
      <h2 className="text-xl font-bold mb-4">Pay Electricity</h2>

      <select name="disco" className="input">
        <option value="IKEDC">IKEJA</option>
        <option value="EKEDC">EKO</option>
        <option value="PHED">PH</option>
      </select>

      <input name="meter" placeholder="Meter number" className="input" />
      <input name="amount" placeholder="Amount" className="input" />

      <button className="btn w-full">Pay Bill</button>
    </form>
  );
}
