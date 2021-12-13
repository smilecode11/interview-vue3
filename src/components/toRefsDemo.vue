<template>
  <div class="toRefs-demo">
    toRefs demo: {{ state.name }} - {{ state.age }} - {{ name }} - {{ age }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "toRefs-demo",
  setup() {
    const state = reactive({
      name: "Chen xin",
      age: 18,
    });

    const stateWithRefs = toRefs(state);

    setTimeout(() => {
      state.age = 26;
    }, 1500);

    setTimeout(() => {
      stateWithRefs.name.value = "chen xin";
    }, 3000);

    return {
      state,
      ...stateWithRefs,
    };
  },
});
</script>