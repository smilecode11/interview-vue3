<template>
  <div class="life-cycles-options">
    <span>life-cycles-options</span> &nbsp;
    <button
      @click="$emit('onHandleChangeWatchEffectMsg', 'life cycles options')"
    >
      change msg</button
    ><br />
    <span>{{ msg }}</span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onUnmounted,
  onBeforeUnmount,
} from "vue";

export default defineComponent({
  name: "life-cycles-options",
  props: ["msg"],
  setup() {
    
    onBeforeMount(() => {
      console.log("- life-cycles-composition setup onBeforeMount -");
    });

    onMounted(() => {
      console.log("- life-cycles-composition setup onMounted -");
    });
    onBeforeUpdate(() => {
      console.log("- life-cycles-composition setup onBeforeUpdate -");
    });
    onUpdated(() => {
      console.log("- life-cycles-composition setup onUpdated -");
    });
    onUnmounted(() => {
      console.log("- life-cycles-composition setup onUnmounted -");
    });
    onBeforeUnmount(() => {
      console.log("- life-cycles-composition setup onBeforeUnmount -");
    });
  },
  beforeCreate() {
    console.log("- life-cycles-options beforeCreate -");
  },
  created() {
    console.log("- life-cycles-options created -");
  },
  beforeMount() {
    console.log("- life-cycles-options beforeMount -");
  },
  mounted() {
    console.log("- life-cycles-options mounted -");
  },
  beforeUpdate() {
    console.log("- life-cycles-options beforeUpdate -");
  },
  updated() {
    console.log("- life-cycles-options updated -");
  },
  beforeUnmount() {
    console.log("- life-cycles-options beforeUnmount -");
  },
  unmounted() {
    console.log("- life-cycles-options unmounted -");
  },
});
</script>