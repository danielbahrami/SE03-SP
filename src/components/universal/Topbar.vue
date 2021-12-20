<template>
  <div class="parent">
    <div class="div1 logo">
      <router-link to="/home">
        <img alt="Logo" height="50px" src="../../assets/logo.png" />
      </router-link>
    </div>
    <div class="div2">
      <span>Alrakis</span>
    </div>
    <div class="div3">
      <div class="search">
        <input aria-label="search" class="search__input" type="text" />
        <button aria-label="submit search" class="search__submit">
          <SearchIcon />
        </button>
      </div>
    </div>
    <div class="div4 buttons">
      <p>Username</p>
      <button
        aria-label="User"
        class="user__actions"
        @click="$vm2.open('login')"
      >
        <PersonIcon />
      </button>
      <router-link to="/favorites">
        <button aria-label="favorites" class="favorites">
          <img
            height="24px"
            src="../../assets/free-rating-star-icon-2793-thumb.png"
          />
        </button>
      </router-link>
    </div>
    <Login />
    <Register />
    <forgot-password />
  </div>
</template>

<script>
import PersonIcon from "vue-material-design-icons/Account.vue";
import SearchIcon from "vue-material-design-icons/Magnify.vue";
import Login from "../login/Login.vue";
import Register from "../login/SignUp.vue";
import forgotPassword from "../login/ForgotPassword";

export default {
  name: "Top",
  components: {
    PersonIcon,
    SearchIcon,
    Login,
    Register,
    forgotPassword,
  },
  methods: {
    close() {
      this.$vm2.close("login");
    },
  },
};
</script>
<style scoped>
/* Tells the browser it should calculate the påadding and margin into the size of a box */
*,
::after,
::before {
  box-sizing: border-box;
}

/* **************** Outer component setup; Use grid; **************** */
.parent {
  position: fixed;
  background: #3f3f3f;
  height: 3.8em;
  width: 100%;
  top: 0;
  display: grid;
  font-family: Ponnala, sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  justify-content: center;
  align-items: center;
  font-size: 1.125em;

  /* Pull this component above other components */
  z-index: 999;

  grid-template-columns: 0.4fr repeat(5, 1fr); /*Set first column to .4fr; repeat 1fr space for the next 5*/
  grid-template-rows: 1fr; /*space for the rows*/
  grid-column-gap: 1em; /*gap between the columns ~20px*/
  grid-row-gap: 0;
}
.div1 {
  grid-area: 1/1/2/2;
} /* Row start, column start, row end, column end*/
.div2 {
  grid-area: 1/2/2/3;
}
.div3 {
  background: #3f3f3f;
  padding: 5px;
  width: 50vw;
  grid-area: 1/3/2/6;
}
.div4 {
  grid-area: 1/6/2/7;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}

/*Use to animate the search bar on small screens so it doesnt fill everything - Inspiration from Kevin Powell YT */
@media only screen and (max-width: 900px) {
  .search {
    /*Making a variable to reuse, later used for calculations*/
    --size: 20px;
    border: 2px solid #333;
    display: flex;
    border-radius: 2vh;
    overflow: hidden;
    font-size: 1.25em;
    position: relative;
    width: var(--size);
    height: var(--size);
    /* animation: https://cubic-bezier.com/#.18,.89,.32,1.28*/
    transition: width 450ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
    padding: 3px;
  }
  .search__input {
    border: 0;
    padding: 0.25em 1em;
    flex-grow: 1;
    outline: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: 0 0;
  }
  .search__submit {
    font-size: 0.5rem;
    margin-left: auto;
    border: 0;
    cursor: pointer;
    border-radius: 100vh;
    /* Animation support in different browsers */
    transition: background 0.2s ease-out;
    -webkit-transition: background 0.2s ease-out;
    -moz-transition: background 0.2s ease-out;
    -o-transition: background 0.2s ease-out;
    width: calc(var(--size) - 10px);
    height: calc(var(--size) - 10px);
    background: #fff;
    color: grey;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }

  .search:focus-within {
    width: 100%;
  }

  .search__input {
    opacity: 1;
    z-index: initial;
    cursor: initial;
    width: calc(80% - var(--size));
  }

  .search__submit:focus,
  .search__submit:hover {
    outline: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
  }
} /* END OF MEDIA QUERY FOR COLLAPSING SEARCH */

.search {
  --size: 40px;
  border: 2px solid #333;
  display: flex;
  border-radius: 2vh;
  height: var(--size);
  padding: 2px;
  font-size: 1.25em;
  background: #fff;
}

.search__input {
  flex-grow: 1;
  padding: 0.25em 1em;
  border: 0;
  background: 0 0;
}

.search__input:focus {
  outline: 0;
}

.search__submit {
  cursor: pointer;
  border: 0;
  border-radius: 100vh;
  width: calc(var(--size) - 10px);
  height: calc(var(--size) - 10px);
  margin-top: 1px;
  background: #fff;
  color: grey;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.div2,
.logo {
  height: 100%;
}

.search:focus-within {
  width: 100%;
}

.search__input {
  opacity: 1;
  z-index: initial;
  cursor: initial;
  width: calc(100% - var(--size));
}

.search__submit:focus,
.search__submit:hover {
  outline: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
}
/* Center search icon in center of its box */
.magnify-icon {
  margin-left: -2px;
}

.favorites,
.user__actions {
  cursor: pointer;
  border: 0;
  background: 0 0;
  border-radius: 100vh;
}
/* If screen is small enough, hide "Alrakis" make room for search bar */
@media only screen and (min-width: 0px) and (max-width: 650px) {
  .div2 span {
    display: none;
    color: transparent;
  }
}

.logo {
  display: flex;
  align-items: center;
  position: absolute;
  left: 10px;
  top: 0;
}

.div2 {
  display: flex;
  align-items: center;
  position: relative;
}

.div2 span {
  font-family: "robotoregular" !important;
  position: absolute;
  font-size: 2em;
  color: #fff;
}

.div4 p {
  color: #cbcbcb;
  margin: unset;
}
</style>
