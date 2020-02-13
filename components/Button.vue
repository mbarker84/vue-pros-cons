<template>
  <button
    type="button"
    class="p-4 rounded bg-teal-500 text-white font-bold border-none hover:bg-teal-800 focus:bg-teal-800"
    @click="click"
  >{{ title }}</button>
</template>

<script>
export default {
  props: ['title', 'click']
}
</script>
