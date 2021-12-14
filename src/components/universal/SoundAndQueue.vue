<template>
  <div class="soundAndQueue">
    <span v-if="value === 0"><VolumeMute /></span>
    <span v-else-if="value > 0 && value < 20"><VolumeLow /></span>
    <span v-else-if="value > 20 && value < 70"><VolumeMedium /></span>
    <span v-else-if="value > 70 && value < 101"><VolumeHigh /></span>
    <div class="sliderContainer">
      <vue-slider v-model="value" class="my-vue-slider"></vue-slider>
    </div>
    <!-- TODO: IMPLEMENT SPEED CHOOSER -->
    <select style="width='5em' margin-left='9em'">
      <option value="0.5">0.5x</option>
      <option value="1.0">1.0x</option>
      <option value="1.5">1.5x</option>
      <option value="2.0">2.0x</option>
    </select>
  </div>
</template>
<script>
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
import "vue-slider-component/dist-css/vue-slider-component.css";
import "vue-slider-component/theme/material.css";

import VolumeMute from "vue-material-design-icons/VolumeMute.vue";
import VolumeLow from "vue-material-design-icons/VolumeLow.vue";
import VolumeMedium from "vue-material-design-icons/VolumeMedium.vue";
import VolumeHigh from "vue-material-design-icons/VolumeHigh.vue";

export default {
  data() {
    return {
      value: 0,
    };
  },
  components: {
    VueSlider,
    VolumeMute,
    VolumeLow,
    VolumeMedium,
    VolumeHigh,
  },
};
</script>
<style scoped>
.soundAndQueue {
  background: #706e6b;
  width: 17%;
  height: 2em;
  position: fixed;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border-left: 0.125em solid black;
}
.sliderContainer {
  width: 40%;
  display: inline-block;
  margin-left: 2em;
  position: absolute;
  top: 0.45em;
}
span {
  display: inline-block;
  position: absolute;
  top: 0.13em;
}

select {
  position: absolute;
  margin-left: 8.75em;
  top: 0.5em;
  width: 4.5em;
  background-color: rgb(111, 110, 107);
  /* A reset of styles, including removing the default dropdown arrow */
  appearance: none;
  /* Additional resets for further consistency */
  border: none;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  text-align: center;
}

select::-ms-expand {
  display: none;
}

/* Little deep on the css tree but seemingly necessary to overwrite imported css within script tag */
/* Change the height of the volume bar */
div.my-vue-slider.vue-slider.vue-slider-ltr {
  height: 2px !important;
}
/* Change color of 'unused' volume bar */
div.my-vue-slider.vue-slider.vue-slider-ltr > :nth-child(1) {
  background-color: darkgrey !important;
}
/* Change color of the progressed slider (how high the volume is) */
div.my-vue-slider.vue-slider.vue-slider-ltr > :nth-child(1) > :nth-child(1) {
  background-color: #d6cd81 !important;
}
/* Remove the display of the handler */
div.my-vue-slider.vue-slider.vue-slider-ltr
  > :nth-child(1)
  > :nth-child(2)
  > :nth-child(1) {
  display: none !important;
}
div.my-vue-slider.vue-slider.vue-slider-ltr:hover
  > :nth-child(1)
  > :nth-child(2)
  > :nth-child(1) {
  display: block !important;
  background-color: #d6cd81;
}

/* Remove the border of the handler which is done by pseudo element after */
div.my-vue-slider.vue-slider.vue-slider-ltr
  > :nth-child(1)
  > :nth-child(2)
  > :nth-child(1):after {
  display: none !important;
}
/* Change the background of the popup tooltip when adjusting volume */
div.my-vue-slider.vue-slider.vue-slider-ltr
  > :nth-child(1)
  > :nth-child(2)
  > :nth-child(2)
  > :nth-child(1) {
  background-color: rgb(111, 110, 107) !important;
}
</style>
