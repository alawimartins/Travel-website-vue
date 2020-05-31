<template>
  <div id="app">
    <TheNavegation/>
    <!-- the key will reload a new component with the new data -->
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import TheNavegation from "@/components/TheNavegation"

export default {
  components: {
    TheNavegation
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}




</style>
