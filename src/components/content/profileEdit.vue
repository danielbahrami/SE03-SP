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

          <button class="buttonSave">Save</button>
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
  position: sticky;
  width: fit-content;
  height: fit-content;
  margin-left: 0.7em;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  letter-spacing: -0.02em;
  color: #d6cd81;
}

.headerPassword {
  position: sticky;
  height: fit-content;
  margin-top: 2em;
  margin-left: 0.7em;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5em;
  letter-spacing: -0.02em;
  color: #ffffff;
  box-sizing: border-box;
  width: fit-content;
}

.headerUsername {
  position: sticky;
  width: fit-content;
  height: fit-content;
  margin-left: 1.3em;
  margin-top: 2em;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.headerEmail {
  position: sticky;
  width: fit-content;
  height: fit-content;
  margin-left: 1.3em;
  margin-top: 1em;
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.headerOldPassword {
  position: sticky;
  width: fit-content;
  height: fit-content;
  margin-left: 1.3em;
  margin-top: 1em;
  display: flex;
  font-family: Work Sans;
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
  margin-left: 1.3em;
  margin-top: 1em;
  display: flex;
  font-family: Work Sans;
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
  margin-left: 1.3em;
  margin-top: 1em;
  display: flex;
  font-family: Work Sans;
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
  margin-left: 1.9em;
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
  margin-left: 1.9em;
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
  margin-left: 1.9em;
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
  margin-left: 1.9em;
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
  margin-left: 1.9em;
  color: white;
  width: 25em;
  height: 2em;
  background: transparent;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}

.buttonSave {
  position: sticky;
  background: transparent;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 2em;
  margin-top: 1em;
  border-radius: 0.2em;
  padding: 0.4em;
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
  color: #ffffff;
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
  top: 20em;
  right: 6.5em;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
}
</style>
