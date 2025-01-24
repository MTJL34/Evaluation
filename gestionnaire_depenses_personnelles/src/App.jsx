import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import ExpenseStats from "./components/ExpenseStats.jsx";

const App = () => {
    return (
        <div>
            <h1>Gestionnaire de Dépenses</h1>
            <ExpenseForm />
            <ExpenseStats />
            <ExpenseList />
        </div>
    );
};

export default App;