<template>
  <HelloWorld :msg="hellowordMsg" @onSayHello="sayHello" />
  <!-- <hr />
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
  <hr />
  <ElementPluseDemo />
  <hr />
  <AsyncComponentDemo />
  <hr />
  <TeleportDemo />
  <hr />
  <SuspenseDemo />
  <hr />
  <MousePositionDemo v-if="mflag" />
  <button @click="mflag = !mflag">change mouse position demo flag</button>
  <hr />
  <ProxyDemo />
  <hr/> 
  <ProxyDemo2 /> 
  -->
  <hr />
  <VModelDemo />
  <hr />
  <WatchVsWatchEffectDemo />
  <hr />
  <InstanceDemo />
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
// import LifeCyclesDemo from "./components/LifeCyclesDemo.vue";
// import RefDemo from "./components/RefDemo.vue";
// import RefTemplateDemo from "./components/RefTemplateDemo.vue";
// import toRefDemo from "./components/toRefDemo.vue";
// import toRefsDemo from "./components/toRefsDemo.vue";
// import ComputedDemo from "./components/ComputedDemo.vue";
// import ElementPluseDemo from "./components/ElementPluseDemo.vue";
// import TeleportDemo from "./components/TeleportDemo.vue";
// import SuspenseDemo from "./components/SuspenseDemo.vue";
// import MousePositionDemo from "./components/MousePosition/index.vue";
// import ProxyDemo from "./components/ProxyDemo.vue";
// import ProxyDemo2 from "./components/ProxyDemo/index.vue";
import VModelDemo from "./components/VModelDemo/index.vue";
import WatchVsWatchEffectDemo from "./components/WatchVsWatchEffectDemo.vue";
import InstanceDemo from "./components/InstanceDemo.vue";

import { defineComponent /* defineAsyncComponent */ } from "vue";
export default defineComponent({
  name: "App",
  data() {
    return {
      flag: true,
      mflag: true,
      hellowordMsg: "Welcome to Vue3.0",
    };
  },
  methods: {
    sayHello(info: string) {
      this.hellowordMsg = info;
    },
  },
  components: {
    HelloWorld,
    // LifeCyclesDemo,
    // RefDemo,
    // RefTemplateDemo,
    // toRefDemo,
    // toRefsDemo,
    // ComputedDemo,
    // ElementPluseDemo,
    // AsyncComponentDemo: defineAsyncComponent(
    //   () => import("./components/AsyncComponentDemo.vue")
    // ),
    // TeleportDemo,
    // SuspenseDemo,
    // MousePositionDemo,
    // ProxyDemo,
    // ProxyDemo2,
    VModelDemo,
    WatchVsWatchEffectDemo,
    InstanceDemo,
  },
});
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
