<template>
  <div class="show-components">
    <div class="show-components-header">
      <h2 class="show-components-header-title"></h2>
    </div>
    <div class="show-components-item-wrapper">
      <slot></slot>
    </div>
    <div class="show-components-code-wrapper">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShowComponents',
  };
</script>

<style lang="scss" scoped>
  .show-components {

  }
</style>
