<template>
  <div class="parent-album">
    <div class="div2-album"><h2><strong> Now Playing </strong></h2></div> <!-- Now Playing -->
    <div class="div3-album">
      <img alt="" src="../../assets/logo.png">
    </div> <!-- Album Art -->
    <div class="div4-album"><p>Choff and Dust</p></div> <!-- Song Name -->
    <div class="div5-album"><small> HYONNA </small></div> <!-- Artist -->
  </div>
</template>
<script>
export default {
  name: 'AlbumArt'
}
</script>
<style scoped>
  .parent-album {
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

    z-index: 999;
    border-top: 0.01em solid grey;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
    .div2-album { grid-area: 1 / 1 / 2 / 4; }
    .div3-album { grid-area: 2 / 1 / 3 / 4; }
    .div4-album { 
        align-self: flex-end;
        grid-area: 3 / 1 / 4 / 4; }
    .div5-album { 
        align-self: baseline;
        grid-area: 4 / 1 / 5 / 4; }

  small{
      align-content: space-around;
      color: grey;
      font-size: .4em;
  }
  p{
      font-size: .5em;
  }
  h2{
      font-size: .75em;
  }
  img{
      max-width: 60%;
      max-height: 60%;
  }
</style>
