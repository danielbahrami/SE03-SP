<template>
    <div class="parent">
        <div class="div1 logo">
            <img src="../assets/logo.png" alt="Logo" height="50px">
        </div>
        <div class="div2"> 
            <span>Alrakis</span>
        </div>
        <div class="div3 content">
            <div class="search">
                <input type="text" class="search__input" aria-label="search" placeholder="enter your search">
                <button class="search__submit" aria-label="submit search">
                    <SearchIcon />
                </button>
            </div>
        </div>
        <div class="div4 buttons">
            <!-- Login button and that other weird button -->
            <button class="user__actions" aria-label="User">
                <PersonIcon />
            </button>
            <button class="VIP__STAR" aria-label="har ingen ide hvad denne knap er til for">
                <img src="../assets/free-rating-star-icon-2793-thumb.png" height="24px" />
            </button>
        </div>
    </div>
</template>

<script>
    import PersonIcon from 'vue-material-design-icons/Account.vue'
    import SearchIcon from 'vue-material-design-icons/Magnify.vue' 
    export default {
        name: 'Top',
        components: {
            PersonIcon,
            SearchIcon
        }
    }
</script>
<style scoped src="../assets/css/Top.css">
/* @import '../assets/css/Top.css'; */
</style>