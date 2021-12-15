<template>
  <div class="user-info-demo">
    <input
      type="text"
      :value="name"
      placeholder="输入修改name"
      @input="updateName($event)"
    />
    &nbsp;
    <!-- $emit('update:age', Number($event.target.value)) -->
    <input
      type="number"
      :value="age"
      placeholder="输入修改age"
      @input="updateAge($event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "user-info-demo",
  props: {
    name: String,
    age: Number,
  },
  emits: ["update:name", "update:age"],
  setup(props, context) {
    //   变更名
    const updateName = (event: any) => {
      context.emit("update:name", event.target.value);
    };

    const updateAge = (event: any) => {
      context.emit("update:age", Number(event.target.value));
    };

    return {
      updateName,
      updateAge,
    };
  },
});
</script>