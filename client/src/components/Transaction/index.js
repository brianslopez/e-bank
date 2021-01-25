import React, {useState} from 'react';

function Transaction({index}) {
    const [transactions] = useState([
        {
            accountID: 1,
            type: "Deposit",
            oldBalance: "$0",
            newBalance: "$10,000",
            transactionName: "First Deposit"
        },
        {
            accountID: 1,
            type: "Deposit",
            oldBalance: "$10,000",
            newBalance: "$40,000",
            transactionName: "Paycheck"
        },
        {
            accountID: 1,
            type: "Withdrawal",
            oldBalance: "$40,000",
            newBalance: "$37,225",
            transactionName: "Pay Rodrigo"
        },
        {
            accountID: 0,
            type: "Deposit",
            oldBalance: "$0",
            newBalance: "$73,500",
            transactionName: "First Deposit"
        },
        {
            accountID: 2,
            type: "Deposit",
            oldBalance: "$0",
            newBalance: "$15,750",
            transactionName: "First Deposit"
        }
    ]);
    
    const t = transactions[index];

    if(t.type == "Deposit"){
        return (
            <div className="transaction-deposit">
                <h1 className="transaction-name">{t.transactionName}</h1>
                <h3 className="transaction-old">{t.oldBalance}</h3>
                <h3 className="transaction-new">{t.newBalance}</h3>
            </div>
        );
    }
    else{
        return (
            <div className="transaction-withdraw">
                <h1 className="transaction-name">{t.transactionName}</h1>
                <h3 className="transaction-old">{t.oldBalance}</h3>
                <h3 className="transaction-new">{t.newBalance}</h3>
            </div>
        );
    }

}

export default Transaction;