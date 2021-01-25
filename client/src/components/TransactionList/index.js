import React, {useState} from 'react';
import Transaction from '../Transaction';
import {Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { GET_ACCOUNT } from '../../utils/queries';

function TransactionList() {
    const { id: accountID } = useParams();
    const { loading, data } = useQuery(GET_ACCOUNT, {
        variables: {accountID}
    });

    if(!loading) console.log(data.getAccount.transactions);
    
    return (
        <section className="transaction-list">
            {
                !loading &&                 
                <div className ="transactions-container">
                    {data.getAccount.transactions.map(t => (
                            (t.newbalance > t.oldbalance) ?
                            (<div className="transaction-deposit">
                                <h1 className="transaction-name">{t.name}</h1>
                                <h3 className="transaction-old">{t.oldbalance}</h3>
                                <h3 className="transaction-new">{t.newbalance}</h3>
                            </div>) :
                            (<div className="transaction-withdraw">
                                <h1 className="transaction-name">{t.name}</h1>
                                <h3 className="transaction-old">{t.oldbalance}</h3>
                                <h3 className="transaction-new">{t.newbalance}</h3>
                            </div>)
                ))}
                </div>
            }
        </section>
    );
}

export default TransactionList;