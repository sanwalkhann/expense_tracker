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

function AccountSummary() {
  const { transactions } = useContext(GlobalContext);

  const transactionamount = transactions.map(
    (transaction) => transaction.transactionamount
  );

  const income = transactionamount
    .filter((transaction) => transaction > 0)
    .reduce((acc, transaction) => (acc += transaction), 0);

  const expense = Math.abs(
    transactionamount
      .filter((transaction) => transaction < 0)
      .reduce((acc, transaction) => (acc += transaction), 0)
  );

  const formattedIncome = formatAmount(income);
  const formattedExpense = formatAmount(expense);

  return (
    <div className="acc-summ-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${formattedIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${formattedExpense}</p>
      </div>
    </div>
  );
}

export default AccountSummary;
