<template>
  <div class="profileEdit">
    <div>
      <h1 class="headerProfile">Profile</h1>

      <div>
        <form action="#">
          <label class="headerUsername" for="headerUsername">Username:</label>
          <input
            id="headerUsername"
            class="inputUsername"
            name="inputUsername"
            type="text"
          /><br /><br />

          <label class="headerEmail" for="headerEmail">Email:</label>
          <input
            id="headerEmail"
            class="inputEmail"
            name="inputEmail"
            type="text"
          /><br /><br />

          <label class="headerOldPassword" for="headerOldPassword"
            >Password:</label
          >
          <input
            id="headerOldPassword"
            class="inputOldPassword"
            name="inputOldPassword"
            type="password"
          /><br /><br />

          <h2 class="headerPassword">New Password</h2>

          <label class="headerNewPassword" for="headerNewPassword"
            >Password:</label
          >
          <input
            id="headerNewPassword"
            class="inputNewPassword"
            name="inputNewPassword"
            type="password"
          /><br /><br />

          <label class="headerConfirmPassword" for="headerConfirmPassword"
            >Confirm Password:</label
          >
          <input
            id="headerConfirmPassword"
            class="inputConfirmPassword"
            name="inputConfirmPassword"
            type="password"
          /><br /><br />

          <router-link to="/profile">
            <button class="buttonSave">Save</button>
          </router-link>
        </form>
      </div>

      <div>
        <img
          alt=""
          class="profileImage"
          height="207"
          src="../../assets/alrakisImage.png"
        />
        <p class="profileName">Image Profile</p>
        <button class="buttonUploadImage">Upload Image</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profileEdit {
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

.headerPassword {
  width: fit-content;
  height: fit-content;
  margin-top: 2em;
  margin-left: 1.5em;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5em;
  letter-spacing: -0.02em;
  color: #ffffff;
  box-sizing: border-box;
}

.headerUsername {
  position: sticky;
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
  margin-top: 0.5em;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.headerOldPassword {
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

.headerNewPassword {
  position: sticky;
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
.headerConfirmPassword {
  position: sticky;
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

.inputUsername {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 0.1em;
  margin-left: 3em;
  color: white;
  width: 25em;
  height: 2em;
  background: transparent;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}

.inputEmail {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  margin-top: 0.1em;
  margin-left: 3em;
  color: white;
  width: 25em;
  height: 2em;
  background: transparent;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}

.inputOldPassword {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  margin-top: 0.1em;
  margin-left: 3em;
  color: white;
  width: 25em;
  height: 2em;
  background: transparent;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}
.inputNewPassword {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  margin-top: 0.1em;
  margin-left: 3em;
  color: white;
  width: 25em;
  height: 2em;
  background: transparent;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}

.inputConfirmPassword {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 0.1em;
  margin-left: 3em;
  color: white;
  width: 25em;
  height: 2em;
  background: transparent;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}

.buttonSave {
  position: static;
  background: transparent;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  color: white;
  display: flex;
  margin-left: 3em;
  margin-top: 1em;
  margin-bottom: 7em;
  width: fit-content;
  padding: 0.4em;
  height: fit-content;
  border-radius: 0.25em;
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
  border-radius: 4px;
  cursor: pointer;
}
</style>
