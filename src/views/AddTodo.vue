<!--
 * @Author: 
 * @Date: 2021-12-14 14:57:04
 * @LastEditTime: 2021-12-14 17:21:24
 * @FilePath: \vite-ts\src\views\AddTodo.vue
-->
<template>
  <div>AddTodo</div>
  <div>
    <div @click="clicks">1232132131</div>
  </div>
</template>

<script lang="ts">
import { getTodo } from "../api";

export default {
  setup() {
    const clicks = () => {
      getTodo().then(res=>console.log(res)
      )
    };

    return { clicks };
  },
};
</script>

<style lang="scss" scoped>
</style>