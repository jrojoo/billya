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
            name: 'Meal',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },
          {
            name: 'Transportation',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },

          {
            name: 'Expenses',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e4) + 1 ),
          },
          {
            name: 'Goal',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },

          {
            name: 'Goal',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },
          {
            name: 'Goal',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },

          {
            name: 'Meal',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },
          {
            name: 'Transportation',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },

          {
            name: 'Expenses',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e4) + 1 ),
          },
          {
            name: 'Goal',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },

          {
            name: 'Goal',
            limit: Math.floor( (Math.random() * 10e10) + 1 ),
            spent: Math.floor( (Math.random() * 10e10) + 1 ),
          },
          {
            name: 'Goal',
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
