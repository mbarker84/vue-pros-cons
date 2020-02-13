<template>
  <div class="bg-purple-300">
    <div class="container">
      <div>
        <h1 class="title">Page 1</h1>
        <intro :body="introText" />
      </div>
    </div>
  </div>
</template>

<script>
import Intro from '../components/Intro'

export default {
  data() {
    return {
      introText: 'Here is the first page'
    }
  },

  components: {
    Intro
  }
}
</script>

