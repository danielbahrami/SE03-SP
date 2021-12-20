<template>
  <div class="profile">
    <div>
      <h1 class="headerProfile">Profile</h1>
      <h3 class="headerUsername">Username:</h3>
      <h3 class="headerEmail">Email:</h3>
      <h3 class="headerPassword">Password:</h3>
      <router-link active-class="active" class="editButton" to="/profile/edit"
        ><button class="buttonEditProfile">Edit Profile</button></router-link
      >
      <router-link to="/home">
        <button class="buttonLogOut">Log out</button>
      </router-link>

      <h1 class="headerSettings">Settings</h1>
      <router-link
        active-class="active"
        class="linkSubscription"
        to="/profile/subscription"
        ><button class="viewSubscription">
          View subscriptions
        </button></router-link
      >
      <!-- <a class="linkSubscription" href="">View subscription</a> -->
      <a class="linkPrivacySafety" href="#">Privacy and safety</a>
      <a class="linkDisplayLanguage" href="#">Display and language</a>
      <a class="linkHelpCenter" href="#">Help center</a>
      <a class="linkDeleteAccount" href="#">Delete Account</a>

      <img
        alt=""
        class="profileImage"
        height="207"
        src="../../assets/alrakisImage.png"
      />
      <p class="profileName">Profile Picture</p>
      <button class="buttonUploadImage">Upload Image</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile {
  overflow: hidden;
  font-size: 1em;
  text-align: center;
  color: white;
}
.headerProfile {
  width: fit-content;
  height: fit-content;
  margin-left: 1.1em;
  margin-top: 0.1em;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  line-height: 2em;
  /* or 88% */
  letter-spacing: -0.02em;

  color: #d6cd81;
}

.headerUsername {
  width: fit-content;
  height: fit-content;
  margin-left: 2.5em;
  margin-top: 0.5em;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.headerEmail {
  width: fit-content;
  height: fit-content;
  margin-left: 2.5em;
  margin-top: 3.9em;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.headerPassword {
  width: fit-content;
  height: fit-content;
  margin-left: 2.5em;
  margin-top: 3.9em;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.buttonEditProfile {
  cursor: pointer;
  color: white;
  background: transparent;
  width: fit-content;
  padding: 0.5em;
  height: fit-content;
  margin-left: 3em;
  display: flex;
  margin-top: 4em;
  border: 0.1em solid #ffffff;
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
  margin-left: 3em;
  margin-top: 2em;
  display: flex;
  border: 0.1em solid #ffffff;
  box-sizing: border-box;
  border-radius: 0.2em;
}

.headerSettings {
  width: fit-content;
  height: fit-content;
  margin-left: 1.1em;
  margin-top: 2.1em;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  line-height: 2em;
  letter-spacing: -0.02em;
  color: #d6cd81;
}

.linkSubscription {
  margin-top: 1em;
  box-sizing: border-box;
  margin-left: 2.5em;
  width: fit-content;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9em;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #ffffff;
}

.linkPrivacySafety {
  box-sizing: border-box;
  margin-left: 2.5em;
  margin-top: 1.5em;
  width: fit-content;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9em;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #ffffff;
}

.linkDisplayLanguage {
  box-sizing: border-box;
  margin-left: 2.5em;
  margin-top: 1.5em;
  width: fit-content;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9em;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #ffffff;
}

.linkHelpCenter {
  box-sizing: border-box;
  margin-left: 2.5em;
  margin-top: 1.5em;
  width: fit-content;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9em;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #ffffff;
}

.linkDeleteAccount {
  box-sizing: border-box;
  margin-left: 2.5em;
  margin-top: 1.5em;
  width: fit-content;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9em;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #ffffff;
  margin-bottom: 7em;
}

.viewSubscription {
  background: none;
  color: white;
  text-decoration: underline;
  border: none;
  padding: unset;
  cursor: pointer;
}

.profileName {
  position: absolute;
  width: fit-content;
  right: 3.1em;
  top: 8.5em;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5em;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.profileImage {
  box-sizing: border-box;
  position: absolute;
  top: 2.5em;
  right: 3.5em;
  width: 11em;
  height: 11em;
  border-radius: 10em;
}

.buttonUploadImage {
  color: white;
  background: transparent;
  width: fit-content;
  padding: 0.4em;
  height: fit-content;
  position: absolute;
  top: 20em;
  right: 6.8em;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 0.25em;
  cursor: pointer;
}
</style>
