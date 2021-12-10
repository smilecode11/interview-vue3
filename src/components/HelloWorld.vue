<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="user-wrapper">
      <span v-if="loginUser.name">{{ loginUser.name }}</span>
      <br />
      <span v-if="loginUser.age">{{ loginUser.age }}</span>
      <br />
      <span v-if="loginUser.identity">{{ loginUser.identity }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    // 登录用户信息
    interface IUser {
      name: string;
      age?: number;
      identity?: string | number;
    }
    const loginUser: IUser = {
      name: "Chenxin",
      age: 26,
      identity: "superAdmin",
    };

    // 其它数据

    return {
      loginUser,
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
