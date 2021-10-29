<template>
  <img class="image" :src=logo v-on:click="closeWindow" >
</template>

<script>

export default {
  data: () => ({
    logo: require('@/assets/closeButton.png')
  }),
  methods: {
    closeWindow(){
      this.$router.push("/app");
    }
  }
}
</script>

<style scoped>

.image {
  height: 35px;
  width: 35px;
}

</style>