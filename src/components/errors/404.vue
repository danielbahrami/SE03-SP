<template>
  <div class="NotFound">
    <h1 class="h1">We could not find the page that you are looking for</h1>
    <h2 class="h2">The error could be caused by:</h2>
    <p class="p">- We have deleted or moved the page</p>
    <p class="p">- There is a mistake in the link you have clicked on</p>
    <p class="p">- You have typed incorrectly in the address bar</p>
    <div class="goHome">
      <Button class="btn" @click="goHome()">
        <slot>Go home</slot>
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.h1,
.h2,
.p {
  color: white;
  text-align: center;
}

.h2 {
  margin-top: 2em;
}

.goHome {
  text-align: center;
  margin-top: 4em;
}

.btn {
  border: none;
  color: black;
  padding: 15px 32px;
  font-size: 16px;
  background-color: rgb(212, 205, 138);
  border-radius: 12px;
}
</style>
