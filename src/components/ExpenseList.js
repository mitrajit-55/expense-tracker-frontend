import React from "react";
import axios from "axios";

const API_BASE_URL = "https://expense-tracker-backend-282s.onrender.com";

function ExpenseList({ expenses, onExpenseDeleted }) {
  const deleteExpense = (id) => {
    axios
      .delete(`${API_BASE_URL}/api/expenses/${id}`)
      .then(onExpenseDeleted)
      .catch((err) => {
        console.error("Error deleting expense:", err);
        alert("Error deleting expense");
      });
  };

  return (
    <div>
      <h2>All Expenses</h2>
      <ul>
        {expenses.map((exp) => (
          <li key={exp.id}>
            {exp.title} - ₹{exp.amount}{" "}
            <button onClick={() => deleteExpense(exp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
