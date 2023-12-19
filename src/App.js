
import './App.css';
import Header from "./components/header";
import Balance from "./components/balance"
import AccountSummary from "./components/accountsummary"
import TransactionHistory from "./components/transactionhistory";
import AddTransaction from "./components/addtransactions"
import GlobalProvider from "./context/globalstate"

function App() {
  return (
    <GlobalProvider>
      {/* Headerr */}
      <Header />

      {/* Balance */}
      <div className="container">
        <Balance />
        {/* Account Summary */}
        <AccountSummary />
        {/* Transaction History */}

        

        {/* Add Transactions */}

        <AddTransaction />
        <TransactionHistory />
      </div>

      
    </GlobalProvider>
  );
}

export default App;
