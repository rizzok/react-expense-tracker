export const Transaction = () => {
    return (
        <div className="transaction">
            <h3>Add new transaction</h3>
            <hr/>
            <form>
                <div>
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" name="text" placeholder="Enter text..."/>
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" placeholder="Enter amount..."/>
                </div>
                <button>Add transaction</button>
            </form>
        </div>
    )
}
