<script>
  import { bills } from '../stores/billsStore';

  function handleSubmit(e: any) {
    bills.update((billsStore) => {
      const inputAmount: number = parseInt(e.target.billAmount.value);
      const newTotal: number = billsStore.remainingBalance + inputAmount;
      const newCard = { name: e.target.billName.value, amount: inputAmount };
      const updatedBillsList = [...billsStore.billsList, newCard];
      return { ...billsStore, remainingBalance: newTotal, billsList: updatedBillsList };
    });
    console.log('currentStore: ', $bills);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="billName">Bill Name</label><br />
  <input type="text" id="billName" name="billName" value="Mastercard" /><br />
  <label for="billAmount">Remaining Balance</label><br />
  <input type="text" id="billAmount" name="billAmount" value={45} /><br /><br />
  <input type="submit" value="Submit" />
</form>
