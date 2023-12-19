import React , { useState , useContext} from "react";


import {GlobalContext} from "../context/globalstate"


function AddTransaction() {

  const [description, setDescription] = useState("")

  const [transactionamount, setTransactionAmount] = useState(0)

  const { addtransactions } = useContext(GlobalContext)

  const onsubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: new Date().getTime,
      description,
      transactionamount: +transactionamount
    }
    addtransactions(newTransaction)
  }

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Details of Transactions"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required="required"
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">Transaction Amount</label>
          <input
            type="number"
            id="transactionamount"
            placeholder="Enter Transaction Amount"
            value = {transactionamount} 
            onChange={(e)=>setTransactionAmount(e.target.value)}
            required="required"
          />
        </div>
        <button className="btn">
            Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
