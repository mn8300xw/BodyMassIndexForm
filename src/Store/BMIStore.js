import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useBMIStore = defineStore('bmiCalculator', () => {

    const bmi = ref(calculateBmi)

    function calculateBmi(height, weight) {
       return weight / (height * height)
    }


  return {
        calculateBmi,
      bmi
    }
})