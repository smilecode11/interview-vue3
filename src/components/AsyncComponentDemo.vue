<template>
  <div class="async-component">Async Component Demo</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "async-component",
  setup() {
    console.log("- Async Component Demo setup -");
  },
});
</script>