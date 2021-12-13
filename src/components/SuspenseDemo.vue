<template>
  <div>suspense demo</div>
  <Suspense>
    <template>
      <AsyncComponentDemo />
    </template>
    <!-- #fallback 就是一个具名插槽 
        Suspense 内部有两个 slot, 其中一个就是 fallback
    -->
    <template #fallback>
      <div>Loading AysncComponent...</div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
export default defineComponent({
  setup() {
    console.log("- suspense demo setup -");
  },
  components: {
    AsyncComponentDemo: defineAsyncComponent(
      () => import("./AsyncComponentDemo.vue")
    ),
  },
});
</script>