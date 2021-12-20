<!--
 * @Author: 
 * @Date: 2021-12-14 14:35:50
 * @LastEditTime: 2021-12-14 14:53:05
 * @FilePath: \vite-ts\src\views\home.vue
-->
<template>
  <div>
    home
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <HeaderVue />
    <CompVue :titleInfo="{ color: '#2c3e50', title: '父亲' }" />
    <Compsetup :titleInfo="{ color: '#2c3e50', title: '母亲' }" />
    <A />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
import CompVue from "../components/Comp.vue";
import Compsetup from "../components/CompSetup.vue";
import HeaderVue from "../components/Header.vue";
import A from "../components/a.vue";
</script>

<style scoped>
</style>