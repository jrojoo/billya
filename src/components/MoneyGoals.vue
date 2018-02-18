<template>
  <div class="goals-container">
    <goal-item v-for="num in 5"></goal-item>
  </div>
</template>

<script>
  import GoalItem from './GoalItem.vue';

  export default {
    components: { GoalItem }
  };
</script>

<style scoped lang="scss">
</style>
