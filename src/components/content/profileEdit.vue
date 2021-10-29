<template>

  <div>
    <h1 class="headerProfile">Profile</h1>
    <h2 class="headerPassword">New Password</h2>
    <div>
      <form action="#">
        <label class="username" for="username">Username:</label>
        <input id="username" class="usernameinput" name="username" type="text"><br><br>

        <label class="email" for="email">Email:</label>
        <input id="email" class="emailinput" name="email" type="text"><br><br>

        <label class="newpassword" for="newpassword">Password:</label>
        <input id="newpassword" class="newpasswordinput" name="newpassword" type="password"><br><br>

        <label class="replacepassword" for="replacepassword">Password:</label>
        <input id="replacepassword" class="replacepasswordinput" name="replacepassword" type="password"><br><br>

        <label class="confirm" for="confirmpassword">Confirm Password:</label>
        <input id="confirmpassword" class="confirminput" name="confirmpassword" type="password"><br><br>

        <input class="saveinput" type="submit" value="Save">
      </form>
    </div>

    <div>
      <img alt=""
           class="profileImage" height="207"
           src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="212"/>
      <p class="profileName">Image Profile</p>
      <button class="buttonUploadImage">Upload Image</button>
    </div>

  </div>

</template>

<script>
export default {}
</script>

<style scoped>

.headerProfile {
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

.headerPassword {
  position: absolute;
  width: 186px;
  height: 40px;
  padding-left: 25px;
  top: 480px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}

.username {
  width: 150px;
  height: 68px;
  padding-left: 50px;
  top: 169px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}

.email {
  width: 150px;
  height: 59px;
  padding-left: 50px;
  top: 241px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}

.newpassword {
  width: 150px;
  height: 53px;
  padding-left: 50px;
  top: 50px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}

.confirm {
  width: 150px;
  height: 59px;
  padding-left: 50px;
  top: 241px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}

.replacepassword {
  width: 150px;
  height: 53px;
  padding-left: 50px;
  margin-top: 70px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}

.usernameinput {

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  right: 615px;
  position: absolute;
  top: 200px;
  color: white;
  width: 328px;
  height: 25px;
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
}

.emailinput {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  right: 615px;
  position: absolute;
  top: 312px;
  color: white;
  width: 328px;
  height: 25px;
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
}

.newpasswordinput {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  right: 615px;
  position: absolute;
  top: 417px;
  color: white;
  width: 328px;
  height: 25px;
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
}
.replacepasswordinput {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  right: 615px;
  position: absolute;
  top: 585px;
  color: white;
  width: 328px;
  height: 25px;
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
}

.confirminput {

  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  right: 615px;
  top: 680px;
  color: white;
  width: 328px;
  height: 25px;
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
}



.saveinput {
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  color: white;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  left: 250px;
  top: 750px;
}

.profileName {
  position: absolute;
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

  color: #FFFFFF;
}

.profileImage {
  position: absolute;
  top: 133px;
  right: 79px;
  width: 212px;
  height: 207px;
}

.buttonUploadImage {
  color: white;
  background: transparent;
  width: 100px;
  padding: 5px;
  height: 26px;
  position: absolute;
  top: 420px;
  right: 125px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
}


</style>