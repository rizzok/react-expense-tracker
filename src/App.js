import './App.css';
import {Header} from "./components/Header";
import {Balance} from "./components/Balance";
import {IncomesExpenses} from "./components/IncomesExpenses";
import {TransactionList} from "./components/TransactionList";
import {AddTransaction} from "./components/AddTransaction";
import {GlobalProvider} from "./context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <Header />
            <Balance />
            <IncomesExpenses />
            <TransactionList />
            <AddTransaction />
        </GlobalProvider>
    );
}

export default App;
