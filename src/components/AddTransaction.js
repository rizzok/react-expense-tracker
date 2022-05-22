import {useContext, useRef, useState} from "react";
import {GlobalContext} from "../context/GlobalState";

export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext)
    const [inputText, setInputText] = useState("")
    const [inputAmount, setInputAmount] = useState("")
    const inputTextRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            description: inputText,
            amount: Number(inputAmount)
        }
        addTransaction(newTransaction)
        setInputText("")
        setInputAmount("")
        inputTextRef.current.focus();
    }

    return (
        <div className="add-transaction">
            <h3>Add new transaction</h3>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="text">Text</label>
                    <input
                        type="text" id="text" name="text" placeholder="Enter text..."
                        onChange={(e) => setInputText(e.target.value)}
                        value={inputText}
                        ref={inputTextRef}
                        autoFocus
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number" id="amount" name="amount" placeholder="Enter amount..."
                        onChange={(e) => setInputAmount(e.target.value)}
                        value={inputAmount}
                    />
                </div>
                <button className="btn-submit" type="submit">Add transaction</button>
            </form>
        </div>
    )
}
