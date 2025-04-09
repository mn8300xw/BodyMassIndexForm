<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'
import { ref, computed } from 'vue'

const calculate = ref('')


function calculateBmi(height, weight) {
  let formattedNumber = weight / ( height * height )
  calculate.value = formattedNumber.toFixed(2)
}

</script>

<template>
  <h1>Body Mass Index</h1>

  <BodyMassIndexForm

      v-on:stats-entered="calculateBmi">

  </BodyMassIndexForm>

    {{ calculate }}

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
