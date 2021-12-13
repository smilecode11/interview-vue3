<template>
  <div class="teleport-demo">
    <button @click="modalOpen = true">
      Open full screen modal!(with teleport!)
    </button>

    <teleport to="body">
      <div v-if="modalOpen" class="teleport-modal">
        <div>teleport 弹窗(父元素是 body)</div>
        <br />
        <button @click="modalOpen = false">Close</button>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    let modalOpen = ref(false);
    return {
      modalOpen,
    };
  },
});
</script>

<style>
.teleport-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>