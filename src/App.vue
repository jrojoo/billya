<template>
  <div id="app">
    <header class="app-header">
      <span class="app-name">Billya</span>
    </header>
    <main class="main-container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped lang="scss">
  .app-header {
    background-color: #c71610;
    padding: 1rem;
  }

  .app-name {
    color: #ffffff;
  }

  .main-container {
    text-align: center;
  }
</style>

<style>
  html, body {
    margin: 0;
    padding: 0;
    background: #eeeeee;
  }

  * {
    box-sizing: border-box;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 5vw;
  }
</style>
