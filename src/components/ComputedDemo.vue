<template>
  <div class="computed-demo">
    <div>Computed Demo</div>
    <div>computed: {{ tempVal.value }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "computed-demo",
  data() {
    return {
      tempVal: {
        value: null,
      },
    };
  },
  async mounted() {
    //#region 对 computed 实现的理解伪代码
    //    错误理解
    /* computed((getter) => {
      let value;
      watchEffect(() => {
        value = getter();
      });
      return value;
    }); */

    //  正确理解, 引用数据类型数据响应
    /* computed((getter) => {
      let ref = {
        value: null,
      };
      watchEffect(() => {
        ref.value = getter();
      });
      return ref;
    }); */

    let tempVal = {
      value: null,
    };

    function aRefFunc(getter: Function) {
      console.log("- aRefFunc running -");
      let ref = {
        value: null,
      };
      setTimeout(() => {
        ref.value = getter();
      }, 1500);
      return ref;
    }

    tempVal = aRefFunc(() => 100);
    console.log("- tempVal - ", tempVal);

    await new Promise((resolve: Function) =>
      setTimeout(() => {
        resolve();
      }, 1500)
    );
    console.log("- sleep with 1500 -");
    console.log("- tempVal - ", tempVal);
    this.tempVal = tempVal;

    //#endregion
  },
});
</script>
