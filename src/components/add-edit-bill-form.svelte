<script>
  import { bills } from '../stores/billsStore';

  function handleSubmit(e: any) {
    bills.update((billsStore) => {
      console.log('currentStore: ', billsStore);
      const newCard = { name: e.target.billName.value, amount: e.target.billAmount.value };
      const updatedBillsList = [...billsStore.billsList, newCard];
      return { ...billsStore, billsList: updatedBillsList };
    });
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="billName">Bill Name</label><br />
  <input type="text" id="billName" name="billName" value="Mastercard" /><br />
  <label for="billAmount">Remaining Balance</label><br />
  <input type="text" id="billAmount" name="billAmount" value={45} /><br /><br />
  <input type="submit" value="Submit" />
</form>
