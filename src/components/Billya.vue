<template>
  <div class="hello">
    <h1>{{ totalMoney }}</h1>
    <h2>PHP</h2>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        totalMoney: '1,000,000'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
