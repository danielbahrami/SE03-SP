<template>

  <div>
    <h1 class="headerProfile">Profile</h1>
    <h2 class="headerPassword">New Password</h2>
    <div>
      <form action="#">
        <label class="username" for="username">Username:</label>
        <input class="usernameinput" type="text" id="username" name="username"><br><br>

        <label class="email" for="email">Email:</label>
        <input class="emailinput" type="text" id="email" name="email"><br><br>

      </form>
    </div>

    <div>
    <form action="#">
      <label class="newpassword" for="newpassword">Password:</label>
      <input class="newpasswordinput" type="text" id="newpassword" name="newpassword"><br><br>

      <label class="replacepassword" for="replacepassword">Password</label>
      <input class="replacepasswordinput" type="text" id="replacepassword" name="replacepassword"><br><br>

      <label class="confirm" for="confirmpassword">Confirm Password</label>
      <input class="confirminput" type="text" id="confirmpassword" name="confirmpassword"><br><br>

      <input class="saveinput" type="submit" value="Save">
    </form>
    </div>

    <div>
      <img class="profileImage" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="212" height="207" alt="" />
      <p class="profileName">Image Profile</p>
      <button class="buttonUploadImage">Upload Image</button>
    </div>

    </div>

</template>

<script>
export default {

}
</script>

<style scoped>

.headerProfile{
  width: 150px;
  height: 38px;
  padding-left: 22px;
  top: 114px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 30px;
  /* or 88% */
  letter-spacing: -0.02em;

  color: #D6CD81;
}
.headerPassword{position: absolute;
  width: 186px;
  height: 40px;
  left: 343px;
  top: 440px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;

  /* or 125% */
  letter-spacing: -0.02em;

  color: #FFFFFF;}

.username{
  width: 150px;
  height: 68px;
  padding-left: 80px;
  top: 169px;
  display:flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #FFFFFF;}
.email{width: 150px;
  height: 59px;
  padding-left: 80px;
  top: 241px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #FFFFFF;}
.newpassword {
  width: 150px;
  height: 53px;
  padding-left: 80px;
  top: 308px;
  display:flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #FFFFFF;}
.confirm{
  width: 150px;
  height: 59px;
  padding-left: 75px;
  top: 241px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #FFFFFF;}

.replacepassword{
  width: 150px;
  height: 50px;
  padding-leftt: 30px;
  top: 469px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #FFFFFF;}

.usernameinput{
  color: white;
  width: 200px;
  height: 25px;
  top: 180px;
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
}
.emailinput{
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  color: white;
}
.newpasswordinput{
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  color: white;
}
.confirminput{
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  color: white;
}
.replacepasswordinput{
  color: white;
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
}

.saveinput{
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  color: white;
}

.profileName{position: absolute;
  width: 135px;
  height: 53px;
  right: 109px;
  top: 353px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;

  color: #FFFFFF;}
.profileImage{
  position:absolute;
  top:133px;
  right: 79px;
  width: 212px;
  height: 207px;
}
.buttonUploadImage{
  color: white;
  background: transparent;
  width: 100px;
  padding: 5px;
  height: 26px;
  position:absolute;
  top:420px;
  right: 125px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;}




</style>