<!--
 * @Author: 
 * @Date: 2021-12-01 11:32:56
 * @LastEditTime: 2021-12-14 10:47:06
 * @FilePath: \vite-ts\src\components\CompSetup.vue
-->
<template>
  <div>
    <div :style="{ backgroundColor: titleInfo.color, color: 'white' }">
      {{ titleInfo.title }}
    </div>
    <!-- <div>{{ double }}</div> -->
    <!-- <div>{{ testList }}</div> -->
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
<script lang="ts" setup>
import { reactive, ref, computed, onMounted, onBeforeMount,watch } from "vue";
import type { PropType } from "vue";
import type { TitleInfo, Todo } from "../types";
// import { useStore } from "../store";
// const store = useStore();
// console.log(store);

defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    required: true,
  },
});
const itemName = ref("");
watch(itemName, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});
const items = reactive([] as Todo[]);
const newItem = (Name: string): Todo => {
  console.log(items.length);
  return {
    id: items.length + 1,
    name: Name,
  };
};

const addItem = (todo: Todo): void => {
  items.push(todo);
  itemName.value = "";
};
// const double = computed(() => {
//   store.state.counter * 2;
// });

onBeforeMount(() => {});
onMounted(() => {});
</script>

<style lang="scss" scoped>
</style>