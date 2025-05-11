<script>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue';

export default {
  components: {
    BodyMassIndexForm
  },
  data() {
    return {
      isMetric: true,
      bmi: null
    };
  },
  methods: {
    calculateBMI({ height, weight }) {
      const heightNum = parseFloat(height);
      const weightNum = parseFloat(weight);
      this.bmi = this.isMetric ? weightNum / (heightNum * heightNum) : (weightNum / (heightNum * heightNum)) * 730;
    },
    clearInputs() {
      this.bmi = null;
    }
  }
};
</script>

<template>
  <div>
    <h1>Body Mass Index Calculator</h1>
    <label>
      <input type="checkbox" v-model="isMetric" @change="clearInputs" />
      Use metric units
    </label>
    <BodyMassIndexForm :isMetric="isMetric" @stats-entered="calculateBMI" />
    <div v-if="bmi">Your BMI: {{ bmi.toFixed(2) }}</div>
  </div>

</template>

<style scoped>

</style>
