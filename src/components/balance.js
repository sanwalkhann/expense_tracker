import React, { useContext } from "react";
import { GlobalContext } from "../context/globalstate";

function formatAmount(amount) {
  if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(2)}m`;
  } else if (amount >= 10000) {
    return `${(amount / 1000).toFixed(2)}k`;
  } else {
    return amount.toFixed(2);
  }
}

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const transactionamount = transactions.map(
    (transaction) => transaction.transactionamount
  );

  const total = transactionamount.reduce((acc, item) => (acc += item), 0);

  const formattedTotal = formatAmount(total);

  return (
    <div>
      <h4>Current Balance</h4>
      <h1>${formattedTotal}</h1>
    </div>
  );
}

export default Balance;
