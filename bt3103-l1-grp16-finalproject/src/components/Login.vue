<template>
  <div style="text-align:center;">
      <h1 id="mainHead">EDIT TEXT</h1>
      <div id="firebaseui-auth-container">
          <div id="pagecontent">
              EDIT THIS TEXT. <br>
              EDIT THIS TOO.
          </div>
          <h5>copyright@BT3103-L1-GRP16-FoodieConnect</h5>
      </div>
  </div>
</template>
<script>
import firebase from '@/firebase.js';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged

export default {
  name: "Login",
  mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
          if (user) {
              this.useremail = user.email; // Access email property from user object
              this.user = user;
              console.log('Logged in');
              this.$router.push('/home');
          } else {
              console.log('Not logged in');
          }
      });

      // Calling the ui instance
      var ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) {
          ui = new firebaseui.auth.AuthUI(firebase.auth());
      }

      var uiConfig = {
          signInSuccessUrl: '/home',
          signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.EmailAuthProvider.PROVIDER_ID,
          ]
      };

      ui.start("#firebaseui-auth-container", uiConfig);
  }

}
</script>

<style scoped>
#firebaseui-auth-container {
  margin-top: 50px;
  margin-bottom: 50px;
}

#pagecontent {
  height: 100px;
  font-size: larger;
  font-weight: bolder;
  text-align: center;
}

#mainHead {
  text-align: center;
  /* font-size: 50px; */
  /* height: 100px; */
  text-shadow: 2px 2px grey;
}

#bg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}

h5 {
  text-align: center;
  background-color: rgb(194, 202, 188);
}
</style>
