import { createContext, useReducer } from "react";
import { expenseReducer, initialState } from "../reducer/ExpenseReducer.jsx";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(expenseReducer, initialState);

    return (
        <ExpenseContext.Provider value={{ state, dispatch }}>
            {children}
        </ExpenseContext.Provider>
    );
};