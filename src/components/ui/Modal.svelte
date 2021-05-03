<script lang="ts">
  export let isOpen: boolean;
  export let title: string;
</script>

{#if isOpen}
  <div class="modal-container">
    <h1>{title}</h1>
    <slot />
  </div>
{/if}

<style>
  .modal-container {
    display: hidden;
  }
</style>
