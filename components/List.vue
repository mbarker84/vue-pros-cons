<template>
  <div class="list text-left">
    <h2 class="font-bold text-xl">{{ title }}</h2>
    <ul>
      <li :key="item.index" v-for="item in items">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items', 'title']
}
</script>

<style scoped>
.list {
  @screen md {
    @apply pr-4;
    width: 50%;
  }
}
</style>
