import { useState } from "react"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "House Insurence",
    amount: 294.67,
    date: new Date(2023, 2, 8),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2013, 12, 28),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 799.49,
    date: new Date(2032, 4, 6),
  },
  {
    id: "e4",
    title: "New Desk(Wooden)",
    amount: 450,
    date: new Date(2024, 3, 14),
  },
]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
