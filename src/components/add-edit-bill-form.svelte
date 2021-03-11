<script>
  import { Button, Card, CardActions, CardText, TextField } from 'svelte-materialify';
  import { bills } from '../stores/billsStore';

  let billName: string;
  let billAmount: string;

  function handleSubmit() {
    bills.update((billsStore) => {
      const amountAsNum: number = parseInt(billAmount);
      const newTotal: number = billsStore.remainingBalance + amountAsNum;
      const newCard = { name: billName, amount: amountAsNum };
      const updatedBillsList = [...billsStore.billsList, newCard];
      return { ...billsStore, remainingBalance: newTotal, billsList: updatedBillsList };
    });
    console.log('currentStore: ', $bills);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <Card style="max-width:300px;">
    <CardText>
      <TextField dense filled bind:value={billName}>Bill Name</TextField>
    </CardText>
    <CardText>
      <TextField dense filled bind:value={billAmount}>Bill Amount</TextField>
    </CardText>
    <CardActions>
      <Button type="submit" small block class="light-blue lighten-3">Submit</Button>
    </CardActions>
  </Card>
</form>

<style type="text/scss">
</style>
