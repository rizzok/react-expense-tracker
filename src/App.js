import './App.css';
import {Header} from "./Components/Header";
import {Balance} from "./Components/Balance";
import {Expense} from "./Components/Expense";
import {History} from "./Components/History";
import {Transaction} from "./Components/Transaction";

function App() {
  return (
    <div>
        <Header />
        <Balance />
        <Expense />
        <History />
        <Transaction />
    </div>
  );
}

export default App;
