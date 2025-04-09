<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'
import { ref } from 'vue'

 const height = ref("Height in meters")
 const weight = ref("Weight in kilograms")

const calculate = ref(0)

function calculateBmi(height, weight) {
   calculate.value = weight.value / ( height.value * height.value )
  console.log(calculate.value)
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
