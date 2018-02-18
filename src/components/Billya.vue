<template>
  <div class="billya">
    <h1 class="total-money">{{ currency }} {{ totalMoney }}</h1>
    <h2 class="currency"></h2>
    <money-goals></money-goals>
  </div>
</template>

<script>
  import MoneyGoals from './MoneyGoals.vue'

  export default {
    name: 'Billya',
    data () {
      return {
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

</style>
