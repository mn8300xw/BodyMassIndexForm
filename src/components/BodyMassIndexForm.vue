<script setup>
import { ref } from 'vue'

defineProps({

})

const height = ref('')
const weight = ref('')

const emit = defineEmits( [
  'stats-entered'
])



function choiceMade() {
  emit('stats-entered', height.value, weight.value)
}


</script>

<template>
  <h2>Enter your height and weight</h2>
  <div>
    <label for="height-1">Height in Meters: </label>

    <input type="number" id="height-1" v-model.number="height" >

    <br>
    <label for="weight-2">Weight in Kilograms</label>

    <input type="number" id="weight-2" v-model.number="weight" >

    <br>
    <label></label>
    <button type="submit" v-on:click="choiceMade">Calculate</button>
  </div>

</template>

<style scoped>

</style>
