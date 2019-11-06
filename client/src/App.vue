<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="less">
  #app {
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
  }

  body {
    background-color: #252525;
    margin: 0;

    &.no-scroll {
      overflow: hidden;
    }
  }

</style>
