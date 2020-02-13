<template>
  <div class="list text-left flex flex-col">
    <h2 class="font-bold text-xl">{{ title }}</h2>
    <transition-group name="list" tag="ul" class="mb-4">
      <li :key="item.title" v-for="item in items" class="list-item">{{ item.title }}</li>
    </transition-group>
    <h3 class="font-bold pt-4 mt-auto">Total: {{ total }}</h3>
  </div>
</template>

<script>
export default {
  props: ['items', 'title'],

  computed: {
    total() {
      return this.items.length
    }
  }
}
</script>

<style scoped>
.list {
  @screen md {
    @apply pr-4;
    width: 50%;
  }
}

.list-item {
  display: block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: opacity 200ms, transform 200ms;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(1rem);
}
</style>
