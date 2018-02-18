<template>
  <section class="goal-item">
    <b>{{ item.goal }}</b>
    <span>Spent: {{ item.spent }}</span>
    <span>Limit: {{ item.limit }}</span>
  </section>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  };
</script>

<style scoped lang="scss">
  .goal-item {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
  }
</style>
