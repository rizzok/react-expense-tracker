import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transaction";

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <div className="transaction-list">
            <h3>History</h3>
            <hr/>
            {transactions.map((transaction) => (
                <Transaction transaction={transaction} key={transaction.id}/>
            ))}
        </div>
    )
}
