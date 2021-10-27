<template>
    <div class="parent">
        <div class="div1 logo">
            <div class="imageholder">
                <img src="../assets/logo.png" alt="her ikke det rigtige logo" height="50px">
                <p>Alrakis</p>
            </div>
        </div>
        <div class="div 2 content">
            <div class="search">
                <input type="text" class="search__input" aria-label="search" placeholder="enter your search">
                <button class="search__submit" aria-label="submit search">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
        <div class="div3 buttons">
            <!-- Login button and that other weird button -->
            <button class="user__actions" aria-label="User">
                <i class="fas fa-user fa-2x"></i>
            </button>
            <button class="VIP__STAR" aria-label="har ingen ide hvad denne knap er til for">
                <i class="fas fa-star fa-2x"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Top'
    }
</script>
<style scoped src="../assets/css/Top.css">
/* @import '../assets/css/Top.css'; */
</style>