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
    <button @click="sayHello">say hello</button> &nbsp;
    <button @click="oneEvent($event), twoEvent($event)">many event</button>
  </div>
  <div class="world">
    world
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup(props, context) {
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

    function sayHello() {
      context.emit("onSayHello", "hello");
    }

    function oneEvent(event: Event) {
      console.log("oneEvent", event);
    }

    function twoEvent(event: Event) {
      console.log("twoEvent", event);
    }

    return {
      loginUser,
      sayHello,
      oneEvent,
      twoEvent,
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  emits: ["onSayHello"],
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
