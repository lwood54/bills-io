<script lang="typescript">
  import { MaterialApp } from 'svelte-materialify';
  import { Button } from 'svelte-materialify';
  import Bills from './layout/bills.svelte';
  let theme: 'light' | 'dark' = 'light';

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
  }
</script>

<MaterialApp {theme}>
  <main>
    <Bills />
  </main>
  <Button on:click={toggleTheme}>Toggle Theme</Button>
</MaterialApp>

<style type="text/scss">
  @import 'src/theme/_material-theme.scss';

  * {
    font-family: $body-font-family;
  }

  main {
    min-height: 80vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
