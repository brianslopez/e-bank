import React, {useState} from 'react';
import Transaction from '../Transaction';
import {Link, useParams } from "react-router-dom";

function TransactionList() {
    const { id } = useParams();
    const [transactions] = useState([
        {
            _id: 0,
            accountID: 1,
            type: "Deposit",
            oldBalance: "$0",
            newBalance: "$10,000",
            transactionName: "First Deposit"
        },
        {
            _id: 1,
            accountID: 1,
            type: "Deposit",
            oldBalance: "$10,000",
            newBalance: "$40,000",
            transactionName: "Paycheck"
        },
        {
            _id: 2,
            accountID: 1,
            type: "Withdrawal",
            oldBalance: "$40,000",
            newBalance: "$37,225",
            transactionName: "Pay Rodrigo"
        },
        {
            _id: 3,
            accountID: 0,
            type: "Deposit",
            oldBalance: "$0",
            newBalance: "$73,500",
            transactionName: "First Deposit"
        },
        {
            _id: 4,
            accountID: 2,
            type: "Deposit",
            oldBalance: "$0",
            newBalance: "$15,750",
            transactionName: "First Deposit"
        }
    ]);
    const result = transactions.filter(transaction => transaction.accountID == id);
    
    return (
        <section className="transaction-list">
            <div className ="transactions-container">
                {result.map(transaction => (
                    <Transaction index = {transaction._id} />
                ))}
            </div>
        </section>
    );
}

export default TransactionList;