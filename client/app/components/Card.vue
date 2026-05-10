<!-- Motheo Morena u24666981 -->
<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style scoped>
  .base-card {
    position: relative;
    width: 90%;
    height: 90%;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-md);

    padding: 8%;
    border-radius: 14px;

    display: flex;
    flex-direction: column;
    gap: 3%;

    transition: 0.25s ease;
  }

  .base-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }

  .base-card::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 15px;
    border-bottom: 3px solid var(--p2);
    border-right: 3px solid var(--p2);
  }
</style>