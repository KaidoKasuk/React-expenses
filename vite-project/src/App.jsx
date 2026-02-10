import Expenses from "./components/Expenses/Expense.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import "./components/NewExpense/NewExpense.css";
import { useState, useEffect } from "react";
import Error from "./UI/Error.jsx";

function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [expenses, SetExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:5000/expenses");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        SetExpenses(responseData.expenses);
      } catch (error) {
        setError({
          title: "An error occured!",
          message: "Failed fetching expenses data, please try again later.",
        });
        setShowError(true);
      }
      setIsFetching(false);
    };
    getExpenses();
  }, []);

  console.log(error);
  const errorHandler = () => {
    (setError(null), setShowError(false));
  };

  const addExpenseHandler = (expense) => {
    SetExpenses((previousExpeses) => {
      return [expense, ...previousExpeses];
    });
  };
  return (
    <>
      <div className="App">
        {showError && (
          <Error
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
        <NewExpense onAddExpense={addExpenseHandler} />

        <Expenses expenses={expenses} isLoading={isFetching} />
      </div>
    </>
  );
}

export default App;
