"use client";
import api from "../../../services/api";

export default function Cable() {
  const submit = async (e) => {
    e.preventDefault();
    const f = e.target;

    await api.post("/vtu/cable", {
      provider: f.provider.value,
      iuc: f.iuc.value,
      amount: Number(f.amount.value),
    });

    alert("Cable subscription successful");
  };

  return (
    <form onSubmit={submit} className="card">
      <h2 className="text-xl font-bold mb-4">Cable Subscription</h2>

      <select name="provider" className="input">
        <option value="DSTV">DSTV</option>
        <option value="GOTV">GOTV</option>
        <option value="STARTIMES">STARTIMES</option>
      </select>

      <input
        name="iuc"
        placeholder="IUC / Smartcard number"
        className="input"
      />
      <input name="amount" placeholder="Amount" className="input" />

      <button className="btn w-full">Subscribe</button>
    </form>
  );
}
