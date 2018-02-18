<template>
  <div class="billya">
    <section class="summary">
      <h1 class="month-period">{{ month }}</h1>
      <h1 class="total-money">{{ currency }} {{ totalMoney }}</h1>
      <h2 class="currency"></h2>
    </section>
    <money-goals></money-goals>
  </div>
</template>

<script>
  import MoneyGoals from './MoneyGoals.vue'

  export default {
    name: 'Billya',
    data () {
      return {
        month: `Jan '17`,
        totalMoney: '1,000,000',
        currency: 'PHP'
      }
    },
    components: {
      MoneyGoals
    }
  }
</script>

<style lang="scss" scoped>
  .summary {
    background: white;
    margin: 1rem;
  }
</style>
