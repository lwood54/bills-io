<script lang="ts">
  import CreditAccountsList from '../../components/CreditAccountsList.svelte';
  import AddCredit from '../../components/AddCredit.svelte';
  let isAddOpen = false;

  const handleAddCredit = () => {
    isAddOpen = !isAddOpen;
  };
</script>

<h1>Credit Accounts</h1>
<button on:click={handleAddCredit}>Add Credit Account</button>
<CreditAccountsList />

{#if isAddOpen}
  <AddCredit isOpen={isAddOpen} />
{/if}
