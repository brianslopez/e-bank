import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Account({index}) {

    const [accounts] = useState([
        {
            name: "Savings Account",
            balance: '$73,500'
        },
        {
            name: "Checking Account",
            balance: "$37,225"
        },
        {
            name: "Daughter's College Fund",
            balance: "$15,750"
        }
      ]);
    
    const account = accounts[index];

    return (
        
            <article className="account">
                <div className={`account-img account-${index}`}>
                    <div>
                        <Link to={`/accounts/${index}`} style={{ textDecoration: 'none' }}><h2 className = "account-link">Withdraw/Deposit</h2></Link>
                        <h3>{account.name}</h3>
                        <h4>Balance: {account.balance}</h4>
                    </div>
                </div>
            </article>
    );
}

export default Account;