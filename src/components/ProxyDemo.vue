<template>
  <div>
    <div>proxy demo</div>
    <span>{{ proxyData.name }} - {{ proxyData.age }}</span
    ><br />
    <button @click="setProxData">set proxData</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "proxy-demo",
  setup() {
    type IProxyData = {
      name: string;
      age: number;
      identity?: number;
      xxx?: any;
    };

    const data: IProxyData = {
      name: "Chen xin",
      age: 26,
    };

    const proxyData = new Proxy(data, {
      get(target, prop, receiver) {
        const result = Reflect.get(target, prop, receiver);
        // 除去原型上的属性, 对对象进行侦听
        const ownKeys = Reflect.ownKeys(target);
        if (ownKeys.includes(prop)) {
          console.log("- proxy get -", prop);
        }
        return result; //   返回结果
      },
      set(target: any, prop, newV, receiver) {
        //   重复属性值设置剔除
        if (newV === target[prop]) return true;
        console.log("- proxy set -", prop, newV);
        const result = Reflect.set(target, prop, newV, receiver);
        return result; //   是否设置成功
      },
      deleteProperty(target, prop) {
        console.log("- proxy deleteProperty -", prop);
        const result = Reflect.deleteProperty(target, prop);
        return result; //   是否删除成功
      },
    });

    const setProxData = () => {
      proxyData.name = "chen xin";
    };

    proxyData.name;
    proxyData.age = 18;
    proxyData.identity = 0;
    delete proxyData.xxx;

    return {
      proxyData,
      setProxData,
    };
  },
});
</script>