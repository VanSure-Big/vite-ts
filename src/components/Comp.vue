<!--
 * @Author: 
 * @Date: 2021-12-01 11:32:56
 * @LastEditTime: 2021-12-03 14:59:10
 * @FilePath: \vite-ts\src\components\Comp.vue
-->
<template>
  <div>
    <div :style="{ backgroundColor: titleInfo.color, color: 'white' }">
      {{ titleInfo.title }}
    </div>
    <div>{{ double }}</div>
    <input
      type="text"
      v-model="itemName"
      @keydown.enter="addItem(newItem(itemName))"
    />
    <div v-for="(v, index) in items" :key="index">
      <code>id:{{ v.id }}</code>
      <code>姓名：{{ v.name }}</code>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, defineComponent, onMounted } from "vue";
import type {  PropType } from "vue";
import type { TitleInfo, Todo } from "../types";
export default defineComponent({
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true,
    },
  },
  data() {
    // data强类型
    return { items: [] as Todo[], counter: 2, itemName: "" };
  },
  created() {
    this.items.push({
      id: 1,
      name: "zhang",
    });
  },
  methods: {
    newItem(Name: string): Todo {
      return {
        id: this.items.length + 1,
        name:Name,
      };
    },
    addItem(todo: Todo): void {
      this.items.push(todo);
      this.itemName = "";
    },
  },
  computed: {
    double(): number {
      return this.counter * 2;
    },
  },

});
</script>



<style lang="scss" scoped>
</style>