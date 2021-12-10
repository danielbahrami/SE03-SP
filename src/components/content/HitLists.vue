<template>
  <div class="hitlists">
    <div class="div-1">
      <h1 class="great">The greatest hits right now</h1>
    </div>
    <div class="div-2">
      <img class="prev" src="../../assets/arrow_prev.png" />
    </div>
    <div class="div-3">
      <ul class="container">
        <li>
          <img
            height="180"
            src="../../assets/album-arts/Bruno.png"
            width="175"
          />
          <p class="greatText">Bruno Mars</p>
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/starboy.png"
            width="175"
          />
          <p class="greatText">The Weeknd</p>
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/suit&tie.png"
            width="175"
          />
          <p class="greatText">Justin Timberlake</p>
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/katy_perry.png"
            width="175"
          />
          <p class="greatText">Katy Perry</p>
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/Ariana.png"
            width="175"
          />
          <p class="greatText">Ariana Grande</p>
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/Justin.png"
            width="175"
          />
          <p class="greatText">Justin Bieber</p>
        </li>
      </ul>
    </div>
    <div class="div-4">
      <img class="next" src="../../assets/arrow_next.png" />
    </div>

    <div class="div-5">
      <h1 class="new">New Music</h1>
    </div>
    <div class="div-6">
      <img class="prev" src="../../assets/arrow_prev.png" />
    </div>
    <div class="div-7">
      <ul class="container">
        <li></li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/Selena.png"
            width="175"
          />
          <p class="newText"></p>
          Selena Gomez
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/kygo.png"
            width="175"
          />
          <p class="newText"></p>
          Kygo
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/weeknd.png"
            width="175"
          />
          <p class="newText"></p>
          The Weeknd
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/DNCE.png"
            width="175"
          />
          <p class="newText"></p>
          DNCE
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/Justin.png"
            width="175"
          />
          <p class="newText"></p>
          Justing Bieber
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/David.png"
            width="175"
          />
          <p class="newText"></p>
          David Guetta
        </li>
      </ul>
    </div>
    <div class="div-8">
      <img class="next" src="../../assets/arrow_next.png" />
    </div>
    <div class="div-9">
      <h1 class="Old">Old but Gold</h1>
    </div>
    <div class="div-10">
      <img class="prev" src="../../assets/arrow_prev.png" />
    </div>
    <div class="div-11">
      <ul class="container">
        <li>
          <img
            height="180"
            src="../../assets/album-arts/Ricky.png"
            width="175"
          />
          <p class="oldText">Ricky Martin</p>
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/Michael.png"
            width="175"
          />
          <p class="oldText">Michael Jackson</p>
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/icecube.png"
            width="175"
          />
          <p class="oldText">IceCube</p>
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/Phil.png"
            width="175"
          />
          <p class="oldText">Phil Collins</p>
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/Genesis.png"
            width="175"
          />
          <p class="oldText">Genesis</p>
        </li>
        <li>
          <img
            height="180"
            src="../../assets/album-arts/AC-DC.png"
            width="175"
          />
          <p class="oldText">AC/DC</p>
        </li>
      </ul>
    </div>
    <div class="div-12">
      <img class="next" src="../../assets/arrow_next.png" />
    </div>
  </div>
</template>
<script>
export default {
  // TODO: Make the buttons clickable so that it scrolls instead of having a scroll bar
};
</script>
<style scoped>
.hitlists {
  overflow: hidden;
  font-size: 15px;
  text-align: center;
  color: white;

  /* Parent create grid */
  display: grid;
  /* Repeat 1fr space for 3 columns */
  grid-template-columns: repeat(3, 1fr);
  /* Make 6 rows with auto calculation of space */
  grid-template-rows: repeat(6, auto);
  /* No gaps between columns or rows */
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
/* Belonging to parent display:grid. grid-area means Row start, column start, row end, column end */
.div-1 {
  grid-area: 1 / 2 / 2 / 4;
}
.div-2 {
  grid-area: 2 / 1 / 3 / 2;
}
.div-3 {
  grid-area: 2 / 2 / 3 / 3;
}
.div-4 {
  grid-area: 2 / 3 / 3 / 4;
}
.div-5 {
  grid-area: 3 / 2 / 4 / 4;
}
.div-6 {
  grid-area: 4 / 1 / 5 / 2;
}
.div-7 {
  grid-area: 4 / 2 / 5 / 3;
}
.div-8 {
  grid-area: 4 / 3 / 5 / 4;
}
.div-9 {
  grid-area: 5 / 2 / 6 / 4;
}
.div-10 {
  grid-area: 6 / 1 / 7 / 2;
}
.div-11 {
  grid-area: 6 / 2 / 7 / 3;
}
.div-12 {
  grid-area: 6 / 3 / 7 / 4;
}

/* ********** TYPOGRAPHY ********** */
.great,
.new,
.Old {
  text-align: left;
  color: #d6cd81;
}
/* SET A CONTAINER WIDTH, MAKE SCROLL IF CONTENT IS WIDER THAN WIDTH */
.container {
  padding: unset;
  width: 55em;
  overflow-x: scroll;
  white-space: nowrap;
}

.container li {
  display: inline-block;
  font-size: medium;
  font-weight: bolder;
  margin: 0.5em;
  box-sizing: content-box;
}
/* ********** GENERAL POSITION ********** */
.prev,
.next {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
