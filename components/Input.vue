<template>
  <form>
    <label for="#mainInput" class="block py-2 font-bold">Add an item</label>
    <input
      class="p-4 border-color-teal-500 border-2 block w-full"
      type="text"
      id="mainInput"
      v-model="inputValue"
    />
    <div class="flex justify-center">
      <app-button :title="buttonA" class="mx-1 my-4" :click="addToPros" />
      <app-button :title="buttonB" class="mx-1 my-4" :click="addToCons" />
    </div>
  </form>
</template>

<script>
import AppButton from './Button'

export default {
  data() {
    return {
      inputValue: 'test',
      buttonA: 'Add to pros',
      buttonB: 'Add to cons'
    }
  },

  components: {
    AppButton
  },

  computed: {},

  methods: {
    addToPros() {
      this.$store.dispatch('addToPros', { title: this.inputValue })
      this.clearInput()
    },

    addToCons() {
      this.$store.dispatch('addToCons', { title: this.inputValue })
      this.clearInput()
    },

    clearInput() {
      this.inputValue = ''
    }
  }
}
</script>
