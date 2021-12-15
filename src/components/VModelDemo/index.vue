<template>
  <div class="vmodel-demo">{{ name }} - {{ age }}</div>
  <UserInfoVue v-model:name="name" v-model:age="age" />
</template>

<script lang="ts">
import UserInfoVue from "./UserInfo.vue";
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "VModelDemo",
  setup() {
    const userInfo = reactive({
      name: "Chen xin",
      age: 26,
    });

    return {
      ...toRefs(userInfo),
    };
  },
  components: {
    UserInfoVue,
  },
});
</script>