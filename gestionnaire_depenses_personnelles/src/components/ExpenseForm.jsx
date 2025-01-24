import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext.jsx";

const ExpenseForm = () => {
    const [label, setLabel] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Alimentation");
    const { dispatch } = useContext(ExpenseContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!label || !amount || parseFloat(amount) <= 0) return; // Valide l'entrée

        dispatch({
            type: "ADD_EXPENSE",
            payload: { label, amount, category },
        });

        setLabel("");
        setAmount("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Description :</label>
                <input
                    type="text"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                />
            </div>
            <div>
                <label>Montant :</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div>
                <label>Catégorie :</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {["Alimentation", "Logement", "Transport", "Divertissement", "Santé", "Éducation", "Autres"].map(
                        (cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        )
                    )}
                </select>
            </div>
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default ExpenseForm;