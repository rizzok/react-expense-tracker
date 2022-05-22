import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export const IncomesExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const incomes = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => (acc + transaction.amount), 0)
        .toFixed(2);
    const expenses = Math.abs(transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => (acc + transaction.amount), 0))
        .toFixed(2);

    return (
        <div className="box inc-exp">
            <div className="inc-exp__income">
                <h4>Income</h4>
                <h2 className="inc-exp__income__amount">${incomes}</h2>
            </div>
            <div className="inc-exp__expense">
                <h4>Expense</h4>
                <h2 className="inc-exp__expense__amount">${expenses}</h2>
            </div>
        </div>
    )
}
