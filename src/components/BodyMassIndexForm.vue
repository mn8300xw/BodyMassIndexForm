<script setup>
import {useBMIStore} from '../Store/BMIStore'
import {storeToRefs} from "pinia";
import {ref} from "vue";

const BMIStore = useBMIStore()

const { bmi } = storeToRefs(BMIStore); // Destructure state properties for reactivity

const height = ref('')
const weight = ref('')



</script>

<template>
  <h1>Body Mass Index</h1>
  <h2>Enter your height and weight</h2>
  <div>
    <label for="height-1">Height in Meters: </label>
    <input type="number" id="height-1" v-model="height" >
    <br>
    <label for="weight-2">Weight in Kilograms</label>
    <input type="number" id="weight-2" v-model="weight" >
    <br><br>
    <label for="submitButton"></label>
  <button type="submit" id="submitButton" v-on:click="bmi">Calculate BMI</button>
    <p>Your BMI is:{{  bmi }} </p>
  </div>

</template>

<style scoped>

</style>
