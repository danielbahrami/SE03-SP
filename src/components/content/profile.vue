<template>
<div class="profile">
  <div>
    <h1 class="headerProfile">Profile</h1>
    <h3 class="headerUsername">Username:</h3>
    <h3 class="headerEmail">Email:</h3>
    <h3 class="headerPassword">Password:</h3>
    <router-link active-class="active" class="editButton" to="/profileedit"><button class="buttonEditProfile">Edit Profile</button></router-link>
    <button class="buttonLogOut">Log out</button>

    <h1 class="headerSettings">Settings</h1>
    <router-link active-class="active" class="linkSubscription" to="/viewSubscription"><button class="viewSubscription">View subscriptions</button></router-link>
    <!-- <a class="linkSubscription" href="">View subscription</a> -->
    <a class="linkPrivacySafety" href="#">Privacy and safety</a>
    <a class="linkDisplayLanguage" href="#">Display and language</a>
    <a class="linkHelpCenter" href="#">Help center</a>
    <a class="linkDeleteAccount" href="#">Delete Account</a>

    <img alt="" class="profileImage"
         height="207" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="212"/>
    <p class="profileName">Image Profile</p>
    <button class="buttonUploadImage">Upload Image</button>

  </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.profile{
  overflow: hidden;
  font-size: 15px;
  text-align: center;
  color: white;

}
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
  box-sizing: border-box;

  margin-left: 80px;
  width: fit-content;
  display: flex;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #FFFFFF;
}

.linkPrivacySafety {
  box-sizing: border-box;

  margin-left: 80px;
  width: fit-content;
  margin-top: 20px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #FFFFFF;
}

.linkDisplayLanguage {
  box-sizing: border-box;

  margin-left: 80px;
  width: fit-content;
  margin-top: 20px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #FFFFFF;
}

.linkHelpCenter {
  box-sizing: border-box;

  margin-left: 80px;
  width: fit-content;
  margin-top: 20px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #FFFFFF;
}

.linkDeleteAccount {
  box-sizing: border-box;

  margin-left: 80px;
  width: fit-content;
  margin-top: 20px;
  margin-bottom: 70px;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #FFFFFF;
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

.viewSubscription{
  background: none;
  color: white;
  text-decoration: underline;
  border: none;
  padding: unset;
}


</style>