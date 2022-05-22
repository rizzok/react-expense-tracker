import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const balance = transactions.reduce(
        (acc, current) => (acc + current.amount),
        0
    ).toFixed(2);
    console.log(balance)

    return (
        <div className="balance">
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}</h1>
        </div>
    )
}
