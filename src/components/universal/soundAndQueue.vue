<template>
    <div class="soundAndQueue">
        <span v-if="value === 0"><VolumeMute/></span>
        <span v-else-if="value > 0  && value < 20"><VolumeLow/></span>
        <span v-else-if="value > 20 && value < 70"><VolumeMedium/></span>
        <span v-else-if="value > 70 && value < 101"><VolumeHigh/></span>
        <div class="sliderContainer">
            <vue-slider v-model="value" class="my-vue-slider"></vue-slider>
        </div>
        <!-- TODO: IMPLEMENT SPEED CHOOSER -->
    </div>
</template>
<script>
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/material.css'

import VolumeMute from 'vue-material-design-icons/VolumeMute.vue'
import VolumeLow from 'vue-material-design-icons/VolumeLow.vue'
import VolumeMedium from 'vue-material-design-icons/VolumeMedium.vue'
import VolumeHigh from 'vue-material-design-icons/VolumeHigh.vue'

export default {
    data() {
        return {
            value: 0,
        }
    },
    components: {
        VueSlider,
        VolumeMute,
        VolumeLow,
        VolumeMedium,
        VolumeHigh
    },
}
</script>
<style scoped>
    .soundAndQueue{
        background: rgb(111, 110, 107);
        width: 17%;
        height: 2em;
        position: fixed;
        bottom: 0;
        right: 0;
        justify-content: center;
        align-items: center;
        z-index: 999;
        border-left: 0.125em solid black;
    }
    .sliderContainer{
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

    /* Little deep on the css tree but seemingly necessary to overwrite imported css in script */
    /* Change the height of the volume bar */
    div.my-vue-slider.vue-slider.vue-slider-ltr[data-v-7fe1e2f6] {
        height: 2px !important;
    } 
    /* Change color of 'unused' volume bar */
    div.my-vue-slider.vue-slider.vue-slider-ltr[data-v-7fe1e2f6] > :nth-child(1) {
        background-color: darkgrey !important;
    }
    /* Change color of the progressed slider (how high the volume is) */
    div.my-vue-slider.vue-slider.vue-slider-ltr[data-v-7fe1e2f6] > :nth-child(1) > :nth-child(1){
        background-color: #D6CD81 !important;
    }
    /* Remove the display of the handler */
    div.my-vue-slider.vue-slider.vue-slider-ltr[data-v-7fe1e2f6] > :nth-child(1) > :nth-child(2) > :nth-child(1){
        display: none !important;
    }
    /* Remove the border of the handler which is done by pseudo element after */
    div.my-vue-slider.vue-slider.vue-slider-ltr[data-v-7fe1e2f6] > :nth-child(1) > :nth-child(2) > :nth-child(1):after{
        display: none !important;
    }
    /* Change the background of the popup tooltip when adjusting volume */
    div.my-vue-slider.vue-slider.vue-slider-ltr[data-v-7fe1e2f6] > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1){
        background-color: rgb(111, 110, 107) !important;
    }

</style>