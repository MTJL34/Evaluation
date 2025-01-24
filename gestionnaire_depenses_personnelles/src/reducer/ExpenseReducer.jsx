export const initialState = {
    expenses: [],
    total: 0, 
};

export const expenseReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE": {
            const { label, amount, category } = action.payload;
            const updatedExpenses = [
                ...state.expenses,
                { id: Date.now(), label, amount: parseFloat(amount), category },
            ];
            return {
                ...state,
                expenses: updatedExpenses,
            };
        }

        case "REMOVE_EXPENSE": {
            const updatedExpenses = state.expenses.filter(
                (expense) => expense.id !== action.payload
            );
            return {
                ...state,
                expenses: updatedExpenses,
            };
        }

        default:
            return state;
    }
};