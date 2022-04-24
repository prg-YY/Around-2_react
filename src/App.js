import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "House Insurence",
      amount: 294.67,
      date: new Date(2023, 2, 8),
    },
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2013, 12, 28),
    },
    {
      id: "e1",
      title: "New TV",
      amount: 799.49,
      date: new Date(2032, 4, 6),
    },
    {
      id: "e1",
      title: "New Desk(Wooden)",
      amount: 450,
      date: new Date(2024, 3, 14),
    },
  ]

  const addExpenseHandler = (expense) => {
    console.log("In App.js")
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
