import React from "react";
import axios from "axios";

function ExpenseList({ expenses, onExpenseDeleted }) {
  const deleteExpense = (id) => {
    axios
      .delete(`http://localhost:8080/api/expenses/${id}`)
      .then(onExpenseDeleted);
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
