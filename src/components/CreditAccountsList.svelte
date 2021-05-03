<script lang="ts">
  import { onMount } from 'svelte';

  function getAccounts() {
    const accounts: Account[] = localStorage.accounts
      ? JSON.parse(localStorage.getItem('accounts') || '')
      : [];
    console.log('accounts in table: ');
    console.table(accounts);
  }

  onMount(() => {
    getAccounts();
  });
</script>

<ul>
  <li>
    <p>Account Name</p>
    <!-- <p>{name}</p> -->
  </li>
</ul>

<style>
</style>
