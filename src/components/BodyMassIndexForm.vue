<script>
export default {
  props: {
    isMetric: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      height: '',
      weight: ''
    };
  },
  methods: {
    calculateBMI() {
      if (this.validateInputs()) {
        this.$emit('stats-entered', { height: this.height, weight: this.weight });
      }
    },
    validateInputs() {
      const heightNum = parseFloat(this.height);
      const weightNum = parseFloat(this.weight);
      const maxHeight = this.isMetric ? 3 : 108; // meters or inches
      const maxWeight = this.isMetric ? 300 : 660; // kg or lbs

      return heightNum > 0 && heightNum <= maxHeight && weightNum > 0 && weightNum <= maxWeight;
    }
  }
};

</script>

<template>
  <div>
    <label v-if="isMetric">Height (m):</label>
    <label v-else>Height (in):</label>
    <input type="number" v-model="height" />
<br/>
    <label v-if="isMetric">Weight (kg):</label>
    <label v-else>Weight (lbs):</label>
    <input type="number" v-model="weight" />
<br/>
    <button @click="calculateBMI">Calculate</button>
  </div>

</template>

<style scoped>

</style>
