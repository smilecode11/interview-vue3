<template>
  <div><span ref="node">ref template demo</span> <br /></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "ref-template",
  setup() {
    const node = ref<null | HTMLElement>(null);

    onMounted(() => {
      //   console.log(node.value && node.value.innerHTML);
      console.log(node.value?.innerHTML);
    });

    return {
      node,
    };
  },
});
</script>