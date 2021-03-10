<script>
  import { bills } from '../stores/billsStore';
  let total: number;
  $: total = 0;
</script>

<h1>${total}</h1>
