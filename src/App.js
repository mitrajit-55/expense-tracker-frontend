import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Backend API base URL (Render deployment)
  const API_BASE_URL = "https://expense-tracker-backend-282s.onrender.com";

  // Fetch expenses from the backend
  const fetchExpenses = () => {
    axios
      .get(`${API_BASE_URL}/api/expenses`)
      .then((res) => setExpenses(res.data))
      .catch((err) => console.error("Error fetching expenses:", err));
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

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
