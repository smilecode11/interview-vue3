<template>
  <div class="ref-demo">
    {{ person.name }} - {{ person.age }} - {{ person.identity }}
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
export default {
  name: "ref-demo",
  setup() {
    const ageRef = ref(18); //  1.值类型响应式
    const identityRef = ref(1);

    const person = reactive({
      name: "Chenxin",
      age: ageRef,  //  2.可用于 reactive
      identity: identityRef.value, //  *如此赋值将会失去去响应式
    });

    setTimeout(() => {
      ageRef.value = 26;    //  3.通过 .value 修改值
      identityRef.value = 99;

      person.name = "chen xin";
    }, 2500);

    return {
      person,
      ageRef,
    };
  },
};
</script>