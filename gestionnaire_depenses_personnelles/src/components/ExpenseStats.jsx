import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext.jsx";

const ExpenseStats = () => {
    const { state } = useContext(ExpenseContext);

    const total = state.expenses.reduce((sum, expense) => sum + expense.amount, 0);

    const byCategory = state.expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});

    return (
        <div>
            <h2>Statistiques</h2>
            <p>Total : {total} €</p>
            <h3>Par Catégorie :</h3>
            <ul>
                {Object.entries(byCategory).map(([category, amount]) => (
                    <li key={category}>
                        {category} : {amount} €
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseStats;