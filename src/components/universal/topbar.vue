<template>
  <div class="parent">
    <div class="div1 logo">
      <img alt="Logo" height="50px" src="../../assets/logo.png">
    </div>
    <div class="div2">
      <span>Alrakis</span>
    </div>
    <div class="div3">
      <div class="search">
        <input aria-label="search" class="search__input" placeholder="enter your search" type="text">
        <button aria-label="submit search" class="search__submit">
          <SearchIcon/>
        </button>
      </div>
    </div>
    <div class="div4 buttons">
      <!-- Login button and that other weird button -->
      <button aria-label="User" class="user__actions">
        <PersonIcon/>
      </button>
      <button aria-label="har ingen ide hvad denne knap er til for" class="VIP__STAR">
        <img height="24px" src="../../assets/free-rating-star-icon-2793-thumb.png"/>
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
<style scoped>
@import url(http://fonts.cdnfonts.com/css/ponnala);
    *,::after,::before{box-sizing:border-box}
    .parent{
        position:fixed;
        background:#3f3f3f;
        height:3.8em;
        width: 100%;
        display:grid;
        font-family:Ponnala,sans-serif;
        line-height:1.6;
        color:#333;
        margin:0;
        justify-content:center;
        align-items:center;
        font-size:1.125em;

        z-index: 999;
        
        grid-template-columns:.4fr repeat(5,1fr); /*Set first column to .4fr; repeat 1fr space for the next 5*/
        grid-template-rows:1fr; /*space for the rows*/
        grid-column-gap:30px; /*gap between the columns*/
        grid-row-gap:0;
        padding:5px
    }
        .div1{grid-area:1/1/2/2} /* Row start, column start, row end, column end*/
        .div2{grid-area:1/2/2/3}
        .div3{
            background: #3f3f3f;
            padding:5px;
            width:50vw ; 
            grid-area:1/3/2/6}
        .div4{
            grid-area:1/6/2/7;
            display:flex;
            justify-self:end;
            align-content:flex-end}

    @media only screen and (max-width:900px){ /*Use to animate the search bar on small screens so it doesnt fill everything - Inspiration from Kevin Powell YT */
        .search{
            --size:20px; /*Making a variable to reuse, later used for calculations*/
            border:2px solid #333;
            display:flex;
            border-radius:100vh;
            overflow:hidden;
            font-size:1.25em;
            position:relative;
            width:var(--size);
            height:var(--size);
            transition:width 450ms cubic-bezier(.18,.89,.32,1.28); /*https://cubic-bezier.com/#.18,.89,.32,1.28*/
            padding:3px
        }
        .search__input{
            border:0;
            padding:.25em 1em;
            flex-grow:1;
            outline:0;
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            background:0 0
        }
        .search__submit{
            font-size:.5rem;
            margin-left:auto;
            border:0;
            cursor:pointer;
            border-radius:100vh;
            transition:background .2s ease-out;
                -webkit-transition:background .2s ease-out;
                -moz-transition:background .2s ease-out;
                -o-transition:background .2s ease-out;
            width:calc(var(--size) - 10px);
            height:calc(var(--size) - 10px);
            background:#fff;
            color:grey;
            box-shadow:0 0 10px rgba(0,0,0,.15)
        }
        .search:focus-within{width:100%}
        .search__input{
            opacity:1;
            z-index:initial;
            cursor:initial;
            width:calc(80% - var(--size))
        }
        .search__submit:focus,
        .search__submit:hover{
            outline:0;
            box-shadow:0 0 10px rgba(0,0,0,.65)
        }
    }
    .search{
        --size:40px;
        border:2px solid #333;
        display:flex;
        border-radius:100vh;
        height:var(--size);
        padding:2px;
        font-size:1.25em;
        background: #FFF;
    }
    .search__input{
        flex-grow:1;
        padding:.25em 1em;
        border:0;
        background:0 0
    }
    .search__input:focus{outline:0}
    .search__submit{
        cursor:pointer;
        border:0;
        border-radius:100vh;
        width:calc(var(--size) - 10px);
        height:calc(var(--size) - 10px);
        margin-top:1px;
        background:#fff;
        color:grey;
        box-shadow:0 0 10px rgba(0,0,0,.15)
    }
    .div2,.logo{height:100%}
    .search:focus-within{width:100%}
    .search__input{
        opacity:1;
        z-index:initial;
        cursor:initial;
        width:calc(100% - var(--size))
    }
    .search__submit:focus,
    .search__submit:hover{
        outline:0;
        box-shadow:0 0 10px rgba(0,0,0,.65)
    }
    .magnify-icon{margin-left:-2px}
    .VIP__STAR,.user__actions{
        cursor:pointer;
        border:0;
        background:0 0;
        border-radius:100vh
    }
    @media only screen and (min-width:0px) and (max-width:650px){
        .div2 span{
            display:none;
            color:transparent
        }
    }
    .logo{
        position:absolute;
        left:10px;
        top:0
    }
    .div2{
        display:flex;
        position:relative
    }
    .div2 span{
        position:absolute;
        top:5px;
        font-size:40px;
        color:#fff
    }
</style>