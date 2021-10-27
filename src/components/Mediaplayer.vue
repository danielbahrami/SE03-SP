<template>
    <div class="parent-media">
        <div class="div1-media">
            <button class="music__back" aria-label="Song back">
                <i class="fas fa-step-backward fa-2x"></i>
            </button>
        </div>
        <div class="div2-media">
            <button v-if="isHidden" v-on:click="isHidden = !isHidden" class="music__play" aria-label="Song Play">
                <i class="fas fa-play fa-2x"></i>
            </button>
            <clip-loader v-if="!isHidden" :loading="loading" :color="color1" :size="size"></clip-loader>
        </div>
        <div class="div3-media">
            <button class="music__forward" aria-label="Song forward">
                <i class="fas fa-step-forward fa-2x"></i>
            </button>
        </div>
        <div class="div4-media">
            <hr>
        </div>
        <!-- TODO: change to actual repeat button -->
        <div class="div5-media">
            <button class="music__repeat" aria-label="Song repeat">
                <i class="fas fa-redo fa-2x"></i>
            </button>
        </div>
        <div class="div6-media">
            <button class="music__random" aria-label="Song shuffle">
                <i class="fas fa-random fa-2x"></i>
            </button>
        </div>
        <div class="div7-media">
            <button class="music__plus" aria-label="Add Song?">
                <i class="fas fa-plus fa-2x"></i>
            </button>
        </div>
        <div class="div8-media">
            <button class="music__favorite" aria-label="Mark as favorite">
                <i class="fas fa-star fa-2x"></i>
            </button>
        </div>
    </div>
</template>
<script>
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
    export default {
        name: 'Mediaplayer',
        data () {
            return {
                color: '#cc181e',
                color1: '#5bc0de',
                size: '20px',
                margin: '2px',
                radius: '2px',
                isHidden: true,
            }
        },
        components: {
            ClipLoader,
        }
    }
</script>

<style scoped src="../assets/css/Mediaplayer.css">
/* @import '../assets/css/Mediaplayer.css'; */
</style>