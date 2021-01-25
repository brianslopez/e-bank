import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../../utils/queries';

function AccountList() {

  const { loading, data } = useQuery(GET_ME);
  return (
    <section className="account-list">
      <div className="accounts-container">
          { !loading && data.me.accounts && 
              data.me.accounts.map(account => (
                <article className="account">
                  <div className="account-img">
                      <div>
                          <Link to={`/accounts/${account._id}`} style={{ textDecoration: 'none' }}><h2 className = "account-link">Withdraw/Deposit</h2></Link>
                          <h3>{account.name}</h3>
                          <h4>Balance: ${account.balance}</h4>
                      </div>
                  </div>
                </article>
              ))
          }
      </div>
    </section>
  );
}

export default AccountList;