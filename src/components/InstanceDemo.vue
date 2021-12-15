<template>
  <div class="instance-demo">instance demo</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from "vue";
export default defineComponent({
  name: "InstanceDemo",
  setup() {
    console.log(`this1: `, this);

    const instance: any = getCurrentInstance();
    console.log(`this2: `, instance);
    console.log(`instance: `, instance.data.info);

    //  setup 出在 created 生命周期之前的位置, 我们需要在 onMounted 中才能获取到实例的 data 数据
    onMounted(() => {
      console.log(`onMounted instance: `, instance.data.info);
    });
  },
  data() {
    return {
      info: {
        name: "Chen xin",
        age: 26,
      },
    };
  },
});
</script>