import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Only one fetch function, shared by both add and delete
  const fetchExpenses = () => {
    axios
      .get("http://localhost:8080/api/expenses")
      .then((res) => setExpenses(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // pass both the expenses and fetch function
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <div className="expense-header">
          <h2>My Expenses</h2>
          <AddExpense onExpenseAdded={fetchExpenses} />
        </div>
        <div className="expense-list">
          <ExpenseList expenses={expenses} onExpenseDeleted={fetchExpenses} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
