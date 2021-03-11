<script lang="typescript">
  import { Card, TextField } from 'svelte-materialify';
  import { bills } from '../stores/billsStore';
</script>

<Card style="width:300px; height: 300px;">
  <h4 class="text-h4">${$bills.remainingBalance}</h4>
</Card>
