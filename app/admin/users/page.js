"use client";
import { useEffect, useState } from "react";
import api from "../../../services/api";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Users</h2>

      {users.map((u) => (
        <div key={u._id} className="card">
          <p>
            <b>{u.name}</b>
          </p>
          <p>{u.email}</p>
          <p className="text-sm text-gray-500">{u.role}</p>
        </div>
      ))}
    </div>
  );
}
