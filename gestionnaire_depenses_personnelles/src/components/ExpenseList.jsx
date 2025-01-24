import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext.jsx";

const ExpenseList = () => {
    const { state, dispatch } = useContext(ExpenseContext);

    return (
        <div>
            <h2>Liste des Dépenses</h2>
            {state.expenses.length === 0 && <p>Aucune dépense enregistrée.</p>}
            <ul>
                {state.expenses.map((expense) => (
                    <li key={expense.id}>
                        <strong>{expense.label}</strong> - {expense.amount}€ (
                        {expense.category})
                        <button
                            onClick={() =>
                                dispatch({ type: "REMOVE_EXPENSE", payload: expense.id })
                            }
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;