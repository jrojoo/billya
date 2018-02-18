<template>
  <section class="goal-item">
    <h2 class="goal-name">{{ item.name }}</h2>
    <div><span>Spent: {{ item.spent }}</span></div>
    <div><span>Limit: {{ item.limit }}</span></div>
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
    margin-bottom: 1px;
    padding: 0 1rem 1rem;

    background: white;
    text-align: left;
  }

  .goal-name {
    margin: 0;
    padding: 1rem 0;
  }
</style>
