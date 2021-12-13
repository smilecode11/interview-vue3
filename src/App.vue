<template>
  <!-- <HelloWorld msg="Welcome to Vue3.0" />
  <hr /> -->
  <LifeCyclesDemo v-if="flag" />
  <button @click="flag = !flag">change flag</button>
  <hr />
  <RefDemo />
  <hr />
  <RefTemplateDemo />
  <hr />
  <toRefDemo />
  <hr />
  <toRefsDemo />
  <hr />
  <ComputedDemo />
</template>

<script lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import LifeCyclesDemo from "./components/LifeCyclesDemo.vue";
import RefDemo from "./components/RefDemo.vue";
import RefTemplateDemo from "./components/RefTemplateDemo.vue";
import toRefDemo from "./components/toRefDemo.vue";
import toRefsDemo from "./components/toRefsDemo.vue";
import ComputedDemo from "./components/ComputedDemo.vue";


export default {
  name: "App",
  data() {
    return {
      flag: true,
    };
  },
  components: {
    // HelloWorld,
    LifeCyclesDemo,
    RefDemo,
    RefTemplateDemo,
    toRefDemo,
    toRefsDemo,
    ComputedDemo
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
