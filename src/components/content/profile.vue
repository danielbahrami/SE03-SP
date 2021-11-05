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
    <a class="linkSubscription" href="#">View subscription</a>
    <a class="linkPrivacySafety" href="#">Privacy and safety</a>
    <a class="linkDisplayLanguage" href="#">Display and language</a>
    <a class="linkHelpCenter" href="#">Help center</a>
    <a class="linkDeleteAccount" href="#">Delete Account</a>

    <img alt="" class="profileImage"
         height="207" src="../../assets/alrakisImage.png"/>
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
  position: relative;
  top: 4.25em;
  right: 0;
  left: 18%;
  bottom: 2em;
  width: 82%; /* 100% - sidebar@width */

  overflow: hidden;

  font-size: 1em;
  text-align: center;
  color: white;

}
.headerProfile {
  width: fit-content;
  height: fit-content;
  margin-left: 2em;
  margin-top: 1em;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  line-height: 2em;
  /* or 88% */
  letter-spacing: -0.02em;
  
  color: #D6CD81;
}

.headerUsername {
  
  width: fit-content;
  height: fit-content;
  margin-left: 5em;
  margin-top: 1em;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 1em;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}

.headerEmail {

  width: fit-content;
  height: fit-content;
  margin-left: 5em;
  margin-top: 3em;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 1em;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}

.headerPassword {
  
  width: fit-content;
  height: fit-content;
  margin-left: 5em;
  margin-top: 3em;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 1em;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}

.buttonEditProfile {
  cursor: pointer;
  color: white;
  background: transparent;
  width: fit-content;
  padding: 0.5em;
  height: fit-content;
  margin-left: 6em;
  display: flex;
  margin-top: 4em;
  border: 0.1em solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 0.2em;
}

.buttonLogOut {
  cursor: pointer;
  color: white;
  background: transparent;
  width: fit-content;
  padding: 0.5em;
  height: fit-content;
  margin-left: 6em;
  margin-top: 2em;
  display: flex;
  border: 0.1em solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 0.2em;
}


.headerSettings {
  width: fit-content;
  height: fit-content;
  margin-left: 2em;
  margin-top: 1em;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  line-height: 2em;
  letter-spacing: -0.02em;
  color: #D6CD81;
}

.linkSubscription {
  margin-top: 1em;
  box-sizing: border-box;
  margin-left: 5.5em;
  width: fit-content;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9em;
  line-height: 1em;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #FFFFFF;
}

.linkPrivacySafety {
  box-sizing: border-box;
  margin-left: 5.5em;
  margin-top: 1.5em;
  width: fit-content;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9em;
  line-height: 1em;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #FFFFFF;
}

.linkDisplayLanguage {
  box-sizing: border-box;
  margin-left: 5.5em;
  margin-top: 1.5em;
  width: fit-content;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9em;
  line-height: 1em;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #FFFFFF;
}

.linkHelpCenter {
  box-sizing: border-box;
  margin-left: 5.5em;
  margin-top: 1.5em;
  width: fit-content;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9em;
  line-height: 1em;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #FFFFFF;
}

.linkDeleteAccount {
  box-sizing: border-box;
  margin-left: 5.5em;
  margin-top: 2em;
  width: fit-content;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9em;
  line-height: 1em;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #FFFFFF;
}

.profileName {
  position: absolute;
  width: fit-content;
  right: 3em;
  top: 9.1em;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5em;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}

.profileImage {
  box-sizing: border-box;
  position: absolute;
  top: 2.5em;
  right: 3em;
  width: 12em;
  height: 12em;
  border-radius: 10em;

}

.buttonUploadImage {
  color: white;
  background: transparent;
  width: fit-content;
  padding: 0.4em;
  height: fit-content;
  position: absolute;
  top: 21em;
  right: 6.5em;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
}


</style>