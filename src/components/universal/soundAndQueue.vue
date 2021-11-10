<template>
    <div class="soundAndQueue">
        <span v-if="value === 0"><VolumeMute/></span>
        <span v-else-if="value > 0  && value < 20"><VolumeLow/></span>
        <span v-else-if="value > 20 && value < 70"><VolumeMedium/></span>
        <span v-else-if="value > 70 && value < 101"><VolumeHigh/></span>
        <div class="sliderContainer">
            <vue-slider v-model="value"></vue-slider>
        </div>
        <!-- TODO: IMPLEMENT SPEED CHOOSER -->
    </div>
</template>
<script>
import VueSlider from 'vue-slider-component'
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
        background: darkslategrey;
        width: 17%;
        height: 2em;
        position: fixed;
        bottom: 0;
        right: 0;
        justify-content: center;
        align-items: center;
        z-index: 999;
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

</style>