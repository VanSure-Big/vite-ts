<!--
 * @Author: 
 * @Date: 2021-12-01 11:13:06
 * @LastEditTime: 2021-12-14 15:00:34
 * @FilePath: \vite-ts\src\App.vue
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {},
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/">Home</router-link>
  <router-link to="/AddTodo">AddTodo</router-link>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
