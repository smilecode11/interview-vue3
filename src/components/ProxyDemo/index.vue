<!-- 
    Proxy 实现响应式原理
        * 深度监听性能更好, 只有在访问当前属性时, 才会触发响应式
        * 能监听原生数组改变
        * 能监听 add remove
-->

<template>
  <div class="proxy-demo">
    <div>proxy demo</div>
    <div>{{ proxyData.name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "defineProperty-proxy-diff-demo",
  setup() {
    function reactive(target: any) {
      if (typeof target !== "object" || target === null) {
        return target;
      }

      const proxyConf: any = {
        get: function (target: any, prop: string, reciver: any) {
          //  非原型上的属性获取
          if (Reflect.ownKeys(target).includes(prop)) {
            console.log("get", prop, target[prop]);
          }
          const result = Reflect.get(target, prop, reciver);
          //   return result;

          //   深度监听, 性能如何提升
          return reactive(result);
        },
        set: function (target: any, prop: string, nVal: any, reciver: any) {
          //  重复属性设置剔除
          if (target[prop] === nVal) return;

          //  新/老属性 设置区分
          if (Reflect.ownKeys(target).includes(prop)) {
            console.log("老属性赋值", prop);
          } else {
            console.log("新属性设置", prop);
          }

          console.log("set", prop, nVal);
          return Reflect.set(target, prop, nVal, reciver);
        },
        deleteProperty: function (target: any, prop: string) {
          console.log("delete", prop);
          return Reflect.deleteProperty(target, prop);
        },
      };

      return new Proxy(target, proxyConf);
    }

    const data = {
      name: "Chen xin",
      age: 26,
      info: {
        b: {
          c: {
            d: {
              e: {
                f: 112,
              },
            },
          },
        },
      },
    };
    const proxyData = reactive(data);

    proxyData.name = "chen xin";
    proxyData.name1 = "ceshi";
    delete proxyData.name3;

    return {
      proxyData,
    };
  },
});
</script>