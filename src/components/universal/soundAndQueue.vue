<template>
    <div class="soundAndQueue">
        <SoundIcon/>
    </div>
    
</template>
<script>
import SoundIcon from "vue-material-design-icons/VolumeLow.vue"
export default {
    name: 'soundAndQueue',
    components: {
        SoundIcon
    }

}
</script>
<style scoped>
    .soundAndQueue{
        background: darkslategrey;
        width: 12%;
        height: 2em;
        position: fixed;
        bottom: 0;
        right: 0;
        justify-content: center;
        align-items: center;
    }

</style>