import { useState } from "react";
import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Carrot", amount: 10, category: "Groceries" },
    { id: 3, description: "Ps4", amount: 300, category: "Entertainment" },
    { id: 4, description: "Xbox", amount: 200, category: "Entertainment" },
    { id: 5, description: "Electricity", amount: 100, category: "Utilities" },
    { id: 6, description: "Gas", amount: 300, category: "Utilities" },
  ]);

  const visibleExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
        expenses={visibleExpense}
      />
    </div>
  );
}

export default App;
