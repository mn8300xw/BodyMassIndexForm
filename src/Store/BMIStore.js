import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useBMIStore = defineStore('bmiCalculator', () => {


    const bmi = ref(null);

    const calculateBMI = ({ height, weight }) => {
        bmi.value = weight / (height * height);
    };

    return {
        bmi,
        calculateBMI
    };

})