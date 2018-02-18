<template>
  <div class="goals-container" ref="goals-container">
    <template v-for="item in goals">
      <goal-item :item="item"></goal-item>
    </template>
  </div>
</template>

<script>
  import GoalItem from './GoalItem.vue';

  export default {
    components: { GoalItem },
    data () {
      return {
        goals: [
          {
            goal: 'Meal',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },
          {
            goal: 'Transportation',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },

          {
            goal: 'Expenses',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e4) + 1 ),
          },
          {
            goal: 'Goal',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },

          {
            goal: 'Goal',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },
          {
            goal: 'Goal',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },
        ],
      };
    },
    mounted () {
    }
  };
</script>

<style scoped lang="scss">
  .goals-container {
    height: 70vh;
    overflow: auto;
  }
</style>
