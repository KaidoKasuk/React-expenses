import Expenses from "./components/Expenses/Expense.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import "./components/NewExpense/NewExpense.css";
import { useState, useEffect } from "react";
import Error from "./UI/Error.jsx";
import MainHeader from "./components/Mainheader/MainHeader.jsx";
import "./App.css";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
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
    const addExpense = async (expense) => {
      try {
        console.log(JSON.stringify(expense), "stringifyed expense");

        const response = await fetch("http://localhost:5000/add-expense", {
          method: "POST",
          body: JSON.stringify(expense),
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Failed saving data");
        }
        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
          throw new Error("Failed saving data");
        }
        SetExpenses([expense, ...expenses]);
      } catch (error) {
        setError({
          title: "An error occured!",
          message: "Failed saving expenses data, please try again.",
        });
        setShowError(true);
      }
    };
    addExpense(expense);
  };
  //sisselogimine
  const [loggedIn, setLoggedIn] = useState(() => {
    if (JSON.parse(localStorage.getItem("isLoggedUser")) !== null) {
      return JSON.parse(localStorage.getItem("isLoggedUser")).isLogged;
    } else {
      return false;
    }
  });

  // console.log(loggedIn, "kas on sisse logitud?");

  useEffect(() => {
    const storedLoggedUserData = JSON.parse(
      localStorage.getItem("isLoggedUser"),
    );
    if (storedLoggedUserData !== null) {
      if (storedLoggedUserData.isLogged === true) {
        setLoggedIn(true);
      }
    }
  }, []);

  const loginHandler = (user, password) => {
    const loggedUser = localStorage.setItem(
      "isLoggedUser",
      JSON.stringify({
        username: user,
        isLogged: true,
      }),
    );
    setLoggedIn(true);
  };

  const logOutHandler = () => {
    console.log("logging out");
    localStorage.removeItem("isLoggedUser");
    setLoggedIn(false);
  };
  return (
    <>
      <MainHeader
        isAuthenticated={loggedIn}
        onLogout={logOutHandler}
      ></MainHeader>
      <main>
        {!loggedIn && <Login onLogin={loginHandler}></Login>}
        {loggedIn && <Home></Home>}
      </main>

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
