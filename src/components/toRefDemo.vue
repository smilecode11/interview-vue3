<template>
  <div class="toRef-demo">toRef demo: {{ state.name }} - {{ state.age }} - {{ageRef}}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef } from "vue";
export default defineComponent({
  name: "toRef-demo",
  setup() {
    const state = reactive({
      name: "Chen xin",
      age: 18,
    });

    const ageRef = toRef(state, "age");

    setTimeout(() => {
      state.name = "chen xin";
      ageRef.value = 26;
    }, 1500);

    setTimeout(() => {
      state.age = 18;
    }, 3000);

    return {
      state,
      ageRef
    };
  },
});
</script>