<template>
  <div class="grid-container">
    <section class="goal-item">
      <h2 class="goal-name">{{ item.name }}</h2>
      <div><span>Spent: {{ item.spent }}</span></div>
      <div><span>Limit: {{ item.limit }}</span></div>
    </section>
    <section class="percentage">
      Percentage Section
    </section>
  </div>
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
  .grid-container {
    background: white;
    margin-bottom: 1px;
    padding: 0 1rem 1rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "detail detail percentage";
  }

  .goal-item {

    text-align: left;
    grid-area: detail;
  }

  .goal-name {
    margin: 0;
    padding: 1rem 0;
  }

  .percentage {
    grid-area: percentage;
  }
</style>
