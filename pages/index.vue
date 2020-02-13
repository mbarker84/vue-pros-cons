<template>
  <div class="bg-white">
    <div class="container">
      <div class="content">
        <h1 class="title leading-none mb-8 text-center">{{ appTitle }}</h1>
        <main class="App__main">
          <main-input />
          <div class="my-8 flex">
            <list :items="pros" title="Pros" />
            <list :items="cons" title="Cons" />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import MainInput from '../components/Input'
import List from '../components/List'

export default {
  components: {
    MainInput,
    List
  },

  computed: {
    appTitle() {
      return this.$store.state.title
    },

    pros() {
      return this.$store.state.pros
    },

    cons() {
      return this.$store.state.cons
    }
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 500ms cubic-bezier(0.26, 0.07, 0.3, 0.98),
    transform 500ms cubic-bezier(0.26, 0.07, 0.3, 0.98);
}

.page-enter,
.page-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}

.container {
  @apply pt-20;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.content {
  @apply max-w-full;

  width: 40rem;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
