import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import BudgetForm from "../components/BudgetForm";
import GoalForm from "../components/GoalForm";
import ExpenseList from "../components/ExpenseList";
import BudgetList from "../components/BudgetList";
import GoalList from "../components/GoalList";
import Reports from "../components/Reports";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <ExpenseForm />
          <BudgetForm />
          <GoalForm />
        </div>
        <div>
          <ExpenseList />
          <BudgetList />
          <GoalList />
          <Reports />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;