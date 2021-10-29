<template>

  <div>
    <h1 class="headerProfile">Profile</h1>
    <h3 class="headerUsername">Username:</h3>
    <h3 class="headerEmail">Email:</h3>
    <h3 class="headerPassword">Password:</h3>
    <button class="buttonEditProfile">Edit Profile</button>
    <button class="buttonLogOut">Log out</button>

    <h1 class="headerSettings">Settings</h1>
    <a class="linkSubscription" href="#">View subscription</a>
    <a class="linkPrivacySafety" href="#">Privacy and safety</a>
    <a class="linkDisplayLanguage" href="#">Display and language</a>
    <a class="linkHelpCenter" href="#">Help center</a>
    <a class="linkDeleteAccount" href="#">Delete Account</a>

    <img alt="" class="profileImage"
         height="207" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="212"/>
    <p class="profileName">Image Profile</p>
    <button class="buttonUploadImage">Upload Image</button>

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

.headerUsername {
  width: 150px;
  height: 68px;
  padding-left: 80px;
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

.headerEmail {
  width: 150px;
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

  color: #FFFFFF;
}

.headerPassword {

  width: 150px;
  height: 53px;
  padding-left: 80px;
  top: 308px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}

.buttonEditProfile {
  color: white;
  background: transparent;
  width: 80px;
  padding: 5px;
  height: 26px;
  margin-left: 80px;
  display: flex;
  top: 375px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
}

.buttonLogOut {
  color: white;
  background: transparent;
  width: 80px;
  padding: 5px;
  height: 26px;
  margin-left: 80px;
  margin-top: 19px;
  display: flex;
  top: 420px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
}


.headerSettings {
  width: 150px;
  height: 40px;
  padding-left: 22px;
  padding-top: 20px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 30px;
  letter-spacing: -0.02em;

  color: #D6CD81;
}

.linkSubscription {
  width: 150px;
  height: 68px;
  padding-left: 80px;
  top: 169px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;

  color: #FFFFFF;
}

.linkPrivacySafety {
  width: 150px;
  height: 68px;
  padding-left: 80px;
  top: 169px;
  display: flex;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;

  color: #FFFFFF;
}

.linkDisplayLanguage {
  width: 150px;
  height: 68px;
  padding-left: 80px;
  margin-top: 1px;
  padding-bottom: 5px;
  display: flex;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;

  color: #FFFFFF;
}

.linkHelpCenter {

  width: 150px;
  height: 68px;
  padding-left: 80px;
  padding-top: 1px;
  padding-bottom: 5px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;

  color: #FFFFFF;
}

.linkDeleteAccount {

  width: 150px;
  height: 20px;
  padding-left: 80px;
  padding-top: 1px;
  padding-bottom: 5px;
  display: flex;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;

  color: #FFFFFF;
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