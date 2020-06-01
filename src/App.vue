<template>
  <div id="app">
    <TheNavegation/>
    <!-- the key will reload a new component with the new data -->
    <transition name="slide">
      <router-view :key="$route.path" />
    </transition>
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

html {
  scroll-behavior: smooth;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-to,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
}


</style>
