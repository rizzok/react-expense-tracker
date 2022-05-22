import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)

    const sign = transaction.amount > 0 ? "+" : "-";

    return <div className={
        "box transaction" +
        (transaction.amount > 0 ? " transaction--income" : " transaction--expense")
    }>
        <span>{transaction.description}</span>
        <span className="amount">{sign + "$" + Math.abs(transaction.amount)}</span>
        <button onClick={() => deleteTransaction(transaction.id)} className="btn-delete-transaction">x</button>
    </div>
}
