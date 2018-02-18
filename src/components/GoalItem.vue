<template>
  <section class="goal-item">
    <div><b>{{ item.goal }}</b></div>
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
    margin: 1rem;
  }
</style>
