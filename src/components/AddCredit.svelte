<script lang="ts">
  import { getParsedDetails } from '../helpers';

  import type { Accounts, CreditInputDetails } from './types';

  import Modal from './ui/Modal.svelte';
  export let isOpen: boolean;

  let creditAccount: CreditInputDetails = {
    name: '',
    balance: 0,
    interest: 0,
    payment: 0,
  };

  function handleSubmit() {
    const accounts: Accounts = localStorage.accounts
      ? JSON.parse(localStorage.getItem('accounts') || '')
      : [];
    const parsedDetails = getParsedDetails(creditAccount);
    const combinedPayload = {
      ...creditAccount,
      ...parsedDetails,
    };
    console.table(combinedPayload);
    accounts.push(combinedPayload);
    localStorage.setItem('accounts', JSON.stringify(accounts));
    handleReset();
  }

  function handleReset() {
    creditAccount = {
      name: '',
      balance: 0,
      interest: 0,
      payment: 0,
    };
  }
</script>

<Modal title="Add Credit Account" {isOpen}>
  <form>
    <div class="credit-input">
      <label for="name">Account Name</label>
      <input
        type="text"
        aria-label="name"
        placeholder="account name"
        bind:value={creditAccount.name}
      />
    </div>
    <div class="credit-input">
      <label for="balance">Balance</label>
      <input
        type="number"
        aria-label="balance"
        placeholder="balance"
        bind:value={creditAccount.balance}
      />
    </div>
    <div class="credit-input">
      <label for="interest">Interest Rate</label>
      <input
        type="number"
        aria-label="interest"
        placeholder="interest rate %"
        bind:value={creditAccount.interest}
      />%
    </div>
    <div class="credit-input">
      <label for="payment-amount">Payment Amount</label>
      $<input
        type="number"
        aria-label="payment-amount"
        placeholder="payment amount"
        bind:value={creditAccount.payment}
      />
    </div>
    <button on:click|preventDefault={handleSubmit}>Add</button>
  </form>
</Modal>
