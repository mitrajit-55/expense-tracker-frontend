import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://expense-tracker-backend-282s.onrender.com";

function AddExpense({ onExpenseAdded }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const saveExpense = () => {
    if (!title.trim() || !amount) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    axios.post(`${API_BASE_URL}/api/expenses`, {
      title: title.trim(),
      amount: Number(amount),
    })
    .then(() => {
      onExpenseAdded();
      setTitle("");
      setAmount("");
    })
    .catch((err) => {
      console.error("Error saving expense:", err);
      alert("Error saving expense");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={loading}
      />
      <button onClick={saveExpense} disabled={loading}>
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
}

export default AddExpense;
