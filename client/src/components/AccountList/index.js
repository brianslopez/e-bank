import React from 'react';
import Account from '../Account';

function AccountList() {

  return (
    <section className="account-list">
      <div class="accounts-container">
          <Account index = {0}></Account>
          <Account index = {1}></Account>
          <Account index = {2}></Account>
      </div>
    </section>
  );
}

export default AccountList;