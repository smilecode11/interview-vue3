<template>
  <div class="mouse-position">
    <div>mouse position demo</div>
    <span>x:{{ uX }} - y:{{ uY }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useMousePosition from "./useMousePosition";
export default defineComponent({
  name: "mouse-position-demo",
  setup() {
    let { x: uX, y: uY } = useMousePosition();

    return {
      uX,
      uY,
    };
  },
});
</script>