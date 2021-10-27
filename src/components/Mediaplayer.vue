<template>
    <div class="parent-media">
        <div class="div1-media">
            <button class="music__back" aria-label="Song back">
                <BackwardIcon />
            </button>
        </div>
        <div class="div2-media">
            <button v-if="isHidden" v-on:click="isHidden = !isHidden" class="music__play" aria-label="Song Play">
                <PlayIcon />
            </button>
            <clip-loader v-if="!isHidden" :loading="loading" :color="color1" :size="size"></clip-loader>
        </div>
        <div class="div3-media">
            <button class="music__forward" aria-label="Song forward">
                <ForwardIcon />
            </button>
        </div>
        <div class="div4-media">
            <hr>
        </div>
        <!-- TODO: change to actual repeat button -->
        <div class="div5-media">
            <button class="music__repeat" aria-label="Song repeat">
                <RepeatIcon />
            </button>
        </div>
        <div class="div6-media">
            <button class="music__random" aria-label="Song shuffle">
                <ShuffleIcon />
            </button>
        </div>
        <div class="div7-media">
            <button class="music__plus" aria-label="Add Song?">
                <AddIcon />
            </button>
        </div>
        <div class="div8-media">
            <button class="music__favorite" aria-label="Mark as favorite">
                <StarIcon />
            </button>
        </div>
    </div>
</template>
<script>
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
    import RepeatIcon from 'vue-material-design-icons/Repeat.vue' 
    import BackwardIcon from 'vue-material-design-icons/SkipBackward.vue'
    import PlayIcon from 'vue-material-design-icons/Play.vue'
    import ForwardIcon from 'vue-material-design-icons/SkipForward.vue'
    import ShuffleIcon from 'vue-material-design-icons/Shuffle.vue'  
    import AddIcon from 'vue-material-design-icons/Plus.vue'
    import StarIcon from 'vue-material-design-icons/Star.vue'
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
            RepeatIcon,
            BackwardIcon,
            PlayIcon,
            ForwardIcon,
            ShuffleIcon,
            AddIcon,
            StarIcon
        }
    }
</script>

<style scoped src="../assets/css/Mediaplayer.css">
/* @import '../assets/css/Mediaplayer.css'; */
</style>