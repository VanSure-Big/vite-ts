<!--
 * @Author: 
 * @Date: 2021-12-03 15:59:28
 * @LastEditTime: 2021-12-14 10:47:33
 * @FilePath: \vite-ts\src\components\Header.vue
-->
<template>
  <div class="header">hahaha</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
// import { useStore } from "../store";
export default defineComponent({
  setup(props, ctx) {
    // const store = useStore();
    console.log(1);
    console.log(Object.keys(ctx));

    // console.log(store.state.loginModule?.username);
  },
});
</script>

<style lang="scss" scoped>
.header {
  background-color: antiquewhite;
  line-height: 300px;
}
</style>