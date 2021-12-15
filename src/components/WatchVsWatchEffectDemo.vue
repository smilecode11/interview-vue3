<template>
  <div>{{ name }} - {{ age }}</div>
  <div>{{ iNumber }}</div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  ref,
  reactive,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  name: "watchVsWatchEffctDemo",
  setup() {
    const iNumber = ref(0);
    const person = reactive({
      name: "Chen xin",
      age: 26,
    });
    
    //  监听 ref 值类型响应式数据
    watch(iNumber, (newValue, oldV) => {
      console.log("watch data - ", newValue, oldV);
    });

    //  监听 reactive object 类型响应式数据
    watch(
      () => person.name,
      (newValue, oldV) => {
        console.log("watch data - ", newValue, oldV);
      }
    );

    setTimeout(() => {
      iNumber.value = 250;
      person.name = "chen xin";
    }, 1500);

    //  初始化时, 一定会执行一次 (收集需要监听数据)
    watchEffect(() => {
      console.log("watchEffect person.name - ", person.name);
    });

    return {
      ...toRefs(person),
      iNumber,
    };
  },
});
</script>