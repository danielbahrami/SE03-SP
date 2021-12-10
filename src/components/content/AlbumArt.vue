<template>
  <div class="parent-album">
    <div class="div2-album">
      <h2><strong> Now Playing </strong></h2>
    </div>
    <!-- Now Playing -->
    <div class="div3-album">
      <img alt="" src="../../assets/album-arts/AC-DC.png" />
    </div>
    <!-- Album Art -->
    <div class="div4-album"><p>Choff and Dust</p></div>
    <!-- Song Name -->
    <div class="div5-album"><small> HYONNA </small></div>
    <!-- Artist -->
  </div>
</template>

<script>
export default {
  name: "AlbumArt",
};
</script>

<style scoped>
.parent-album {
  /* GENERAL STYLING */
  width: 18%;
  height: 15em;
  background: rgb(30, 30, 30);
  position: fixed;
  bottom: 0;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  /* PULL INFRONT */
  z-index: 10;
  border-top: 0.1em solid #323232;

  /* Parent create grid */
  display: grid;
  /* Repeat 1fr space for 3 columns */
  grid-template-columns: repeat(3, 1fr);
  /* Make 4 rows with 1fr space */
  grid-template-rows: repeat(4, 1fr);
  /* No gaps between columns or rows */
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
/* Belonging to parent display:grid. grid-area means Row start, column start, row end, column end */
.div2-album {
  grid-area: 1 / 1 / 2 / 4;
}
.div3-album {
  grid-area: 2 / 1 / 3 / 4;
}
.div4-album {
  align-self: flex-end;
  grid-area: 3 / 1 / 4 / 4;
}
.div5-album {
  align-self: baseline;
  grid-area: 4 / 1 / 5 / 4;
}

/* TYPOGRAPHY */
small {
  align-content: space-around;
  color: grey;
  font-size: 0.4em;
}
p {
  font-size: 0.5em;
}
h2 {
  font-size: 0.75em;
}
/* IMAGE */
img {
  max-width: 40%;
  max-height: 40%;
}
</style>
