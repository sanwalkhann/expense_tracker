import React , {useContext} from "react";

import {GlobalContext} from "../context/globalstate";

import Transaction from "./transaction"


function TransactionHistory(){

   const { transactions } = useContext(GlobalContext)

  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction} /> ))}
      
      </ul>
    </div>
  );
}

export default TransactionHistory;
