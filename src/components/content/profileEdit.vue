<template>

  <div class="profileEdit">
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
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.profileEdit{
  position: relative;
  top: 4.25em;
  right: 0;
  left: 18%;
  bottom: 2em;
  width: 82%; /* 100% - sidebar@width */

  overflow: hidden;

  font-size: 15px;
  text-align: center;
  color: white;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, auto);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.headerProfile {
  width: 4em;
  height: 1em;
  padding-left: 0.7em;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  line-height: 1em;
  letter-spacing: -0.02em;
  color: #D6CD81;
  
}

.headerPassword {
  position: absolute;
  height: 1em;
  margin-left: 0.7em;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  line-height: 1em;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  border: 2px solid red;
  box-sizing: border-box;
  width:fit-content;
}

.username {
  width: 9em;
  height: 1em;
  padding-left: 0.5em;
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
  top: 159px;
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

  position: absolute;
  top: 110px;
  margin-left: 50px;
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
  position: absolute;
  top: 212px;
  margin-left: 50px;
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
  position: absolute;
  top: 305px;
  margin-left: 50px;
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
  position: absolute;
  top: 460px;
  margin-left: 50px;
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
  top: 680px;
  margin-left: 50px;
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
  width: fit-content;
  right: 109px;
  top: 220px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}

.profileImage {
  box-sizing: border-box;
  position: absolute;
  top: 30px;
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
  top: 280px;
  right: 125px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
}


</style>