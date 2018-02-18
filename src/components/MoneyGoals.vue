<template>
  <div class="goals-container">
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
  };
</script>

<style scoped lang="scss">
</style>
